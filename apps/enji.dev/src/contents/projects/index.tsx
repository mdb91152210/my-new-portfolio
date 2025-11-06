import Image from 'next/image';
import Link from 'next/link';

function ProjectsContents() {
  const projects = [
    {
      title: 'Online E-Voting System',
      description:
        'Students can vote online securely using unique login accounts.',
      image: '/projects/online-e-voting/online-e-voting.jpg',
      link: '/projects/online-e-voting',
    },
  ];

  return (
    <div className="space-y-12 py-10">
      <h1 className="text-center text-3xl font-bold">My Projects</h1>
      <p className="text-center text-gray-400">
        Showcase of the work I have built.
      </p>

      <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
        {projects.map((project) => (
          <div
            key={project.title}
            className="overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-purple-600/20 to-blue-600/20 backdrop-blur transition hover:scale-[1.02]"
          >
            <div className="relative h-52 w-full">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="p-6">
              <h2 className="text-xl font-semibold">{project.title}</h2>
              <p className="mt-2 text-sm text-gray-300">
                {project.description}
              </p>

              <Link
                href={project.link}
                className="mt-4 inline-block rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 px-4 py-2 transition hover:opacity-90"
              >
                Learn More →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectsContents;
