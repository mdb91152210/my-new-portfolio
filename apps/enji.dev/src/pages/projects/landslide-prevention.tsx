import Image from 'next/image';
import Link from 'next/link';

export default function LandslidePreventionProject() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-pink-800 p-8 text-white">
      <Link href="/projects" className="text-blue-300 hover:underline">
        &larr; Back to Projects
      </Link>

      <div className="mx-auto mt-8 max-w-4xl text-center">
        <h1 className="mb-4 text-4xl font-bold">
          Landslide Prevention Project
        </h1>
        <p className="mb-6 text-lg">
          Developed for the <strong>Smart India Hackathon</strong>, this project
          uses
          <strong> machine learning and IoT</strong> to predict potential
          landslides and alert authorities in real time.
        </p>

        <div className="relative mx-auto mb-8 w-full max-w-3xl">
          <Image
            src="/projects/landslide-prevention.jpg"
            alt="Landslide Prevention Project"
            width={1200}
            height={700}
            className="rounded-2xl border border-white/20 shadow-lg"
          />
        </div>

        <h2 className="mb-2 mt-6 text-2xl font-semibold">Features</h2>
        <ul className="mx-auto max-w-lg list-inside list-disc text-left">
          <li>Real-time environmental data analysis</li>
          <li>Early warning alert system</li>
          <li>Interactive and user-friendly dashboard</li>
        </ul>

        <h2 className="mb-2 mt-6 text-2xl font-semibold">Tech Stack</h2>
        <div className="flex flex-wrap justify-center gap-4">
          <span className="rounded-lg bg-white/10 px-4 py-2">React</span>
          <span className="rounded-lg bg-white/10 px-4 py-2">Node.js</span>
          <span className="rounded-lg bg-white/10 px-4 py-2">MongoDB</span>
          <span className="rounded-lg bg-white/10 px-4 py-2">Tailwind CSS</span>
          <span className="rounded-lg bg-white/10 px-4 py-2">C++</span>
        </div>
      </div>
    </div>
  );
}
