import Link from 'next/link';
import Image from 'next/image';

export default function RPAEmailAutomationDetails() {
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
          <h1 className="text-4xl font-bold">RPA Email Automation</h1>
          <p className="mt-3 max-w-2xl text-gray-300">
            Automated email monitoring and sending workflows using UiPath,
            scheduled triggers, and Excel-based data processing.
          </p>

          <div className="relative mt-8 h-64 w-full overflow-hidden rounded-xl border border-white/10">
            <Image
              src="/projects/rpa-email-automation/rpa-email-automation.jpg" // we will replace this later
              alt="RPA Email Automation"
              fill
              className="object-cover opacity-80"
            />
          </div>

          <div className="mt-10 space-y-6">
            <h2 className="text-2xl font-semibold">Features</h2>
            <ul className="list-inside list-disc space-y-2 text-gray-300">
              <li>Automatically forwards emails based on keywords</li>
              <li>Sends reminder/event emails on scheduled date/time</li>
              <li>Extracts data from emails and logs into Excel</li>
              <li>Fully automated workflow with UiPath Orchestrator</li>
            </ul>
          </div>

          <div className="mt-10">
            <h2 className="text-2xl font-semibold">Tech Stack</h2>
            <div className="mt-4 flex flex-wrap gap-3">
              {['UiPath', 'Excel', 'Email API', 'Orchestrator'].map((tech) => (
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
