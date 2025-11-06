import SectionContent from '@/components/sections/SectionContent';
import SectionTitle from '@/components/sections/SectionTitle';
import Link from 'next/link';

function ProjectsContents() {
  return (
    <>
      <SectionTitle
        title="My Projects"
        caption="Showcase"
        description="Here are some of the projects I have worked on. Click to learn more."
      />

      <SectionContent>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Project 1 Card */}
          <div className="rounded-xl border p-5 transition hover:bg-neutral-100 dark:hover:bg-neutral-800">
            <h3 className="text-xl font-semibold">Online E-Voting System</h3>
            <p className="mt-2 text-sm text-neutral-500">
              A secure system where users can vote online using authentication.
            </p>
            <Link
              href="/projects/online-e-voting"
              className="mt-4 inline-block text-blue-600 hover:underline"
            >
              Learn More →
            </Link>
          </div>

          {/* Add more project cards below the same way */}
        </div>
      </SectionContent>
    </>
  );
}

export default ProjectsContents;
