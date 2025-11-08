import Image from 'next/image';
import Link from 'next/link';

export default function PortfolioDesigningDetails() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-black to-blue-900 px-6 py-20 text-white">
      <div className="mx-auto max-w-4xl space-y-10">
        <Link
          href="/projects"
          className="text-sm text-gray-300 transition hover:text-white"
        >
          ← Back to Projects
        </Link>

        <div className="relative rounded-3xl border border-white/10 bg-white/10 p-8 shadow-2xl backdrop-blur-xl">
          <h1 className="text-4xl font-bold">Portfolio Designing Project</h1>
          <p className="mt-3 max-w-2xl text-gray-300">
            This portfolio website was created as part of the SPACE ZEE MERN
            stack training program at MSEC. It was submitted for a competitive
            evaluation and achieved the
            <span className="font-semibold text-purple-300">
              {' '}
              Best Performance Award
            </span>
            along with a cash prize.
          </p>

          {/* Preview Image */}
          <div className="relative mt-8 h-64 w-full overflow-hidden rounded-xl border border-white/10">
            <Image
              src="/projects/portfolio-designing/portfolio-preview.jpg"
              alt="Portfolio Preview"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* 🔥 Award Section (Blue + Purple Glow) */}
          <div className="relative mt-16 py-12">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-600/40 via-purple-600/40 to-blue-600/40 opacity-40 blur-3xl" />

            <div className="relative rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg backdrop-blur-md">
              <h2 className="mb-4 text-center text-3xl font-bold text-white">
                🏆 Achievement
              </h2>

              <p className="mx-auto mb-6 max-w-2xl text-center text-gray-300">
                Awarded as <strong>Top Performer</strong> by{' '}
                <strong>SpaceZee</strong>
                for designing the best portfolio website during the MERN Stack
                Training Program at MSEC. This achievement also included a
                certificate and cash prize.
              </p>

              <div className="flex justify-center">
                <Image
                  src="/awards/spacezee-award.jpg"
                  alt="SpaceZee Award Ceremony"
                  width={900}
                  height={500}
                  className="rounded-xl border border-white/20 object-cover shadow-2xl"
                />
              </div>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="mt-10">
            <h2 className="text-2xl font-semibold">Tech Stack</h2>
            <div className="mt-4 flex flex-wrap gap-3">
              {['React', 'Firebase'].map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-white/20 bg-white/10 px-4 py-1 text-sm backdrop-blur transition hover:bg-white/20"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
