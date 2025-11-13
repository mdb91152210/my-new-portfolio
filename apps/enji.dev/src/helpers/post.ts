import dayjs from '@/utils/dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { getBaseUrl, getParams } from '@/helpers/url';

import type { TPostFrontMatter, TPostOgImage } from '@/types';

dayjs.extend(relativeTime);

// ------------------------
// Date formatting
// ------------------------
export const formatDate = (date: string): string => {
  if (dayjs(date).isValid()) {
    return dayjs(date).format('MMMM D, YYYY');
  }
  return date;
};

export const formatDateRelative = (date: string): string => {
  if (dayjs(date).isValid()) {
    const diffDays = dayjs().diff(date, 'days');

    if (diffDays > 6) return formatDate(date);
    if (diffDays > 1) return `${diffDays} days ago`;
    if (diffDays === 1) return 'Yesterday';
    if (diffDays === 0) return 'Today';
  }
  return date;
};

export const formatDateISO = (date: string): string => {
  if (dayjs(date).isValid()) {
    return dayjs(date).toISOString();
  }
  return date;
};

// ------------------------
// Language formatting
// ------------------------
const LANG_MAP: Record<string, string> = {
  id: 'Bahasa Indonesia',
  en: 'English',
};

export const formatLang = (lang: TPostFrontMatter['lang']): string =>
  LANG_MAP[lang] ?? '';

// ------------------------
// Number formatting
// ------------------------
export const formatNumber = (number: number): string => number.toLocaleString();

// ------------------------
// OG Image URLs
// ------------------------
export const getPostOgImageUrl = (data: TPostOgImage) => {
  const aspectRatios = ['16/9', '4/3', '1/1'] as const;

  const getUrl = (aspectRatio?: TPostOgImage['aspectRatio']) => {
    const params = aspectRatio
      ? getParams({ ...data, aspectRatio })
      : getParams(data);
    return encodeURI(`${getBaseUrl()}/api/og-post?${params}`);
  };

  const result: Record<string, string> = { default: getUrl() };
  aspectRatios.forEach((ratio) => (result[ratio] = getUrl(ratio)));

  return result;
};

// ------------------------
// Structured Data for SEO
// ------------------------
export const getPostStructuredData = ({
  title,
  images,
  datePublished,
  dateModified,
}: {
  title: string;
  images: string[];
  datePublished: string;
  dateModified: string;
}): string =>
  JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    image: images,
    datePublished: formatDateISO(datePublished),
    dateModified: formatDateISO(dateModified),
    author: [
      {
        '@type': 'Person',
        name: 'MOHAMED BILAL',
        jobTitle: 'Front-End Developer',
        url: 'https://www.enji.dev/about',
      },
    ],
  });
