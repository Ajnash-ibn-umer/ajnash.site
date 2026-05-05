import Link from "next/link";

export default function Projects() {
  return (
    <div className="min-h-screen bg-[#f5f1eb] px-6 py-12 md:px-12 lg:px-24">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-12">
          <Link
            href="/"
            className="text-gray-600 hover:text-gray-800 transition-colors mb-4 inline-block"
          >
            ← Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-serif italic text-gray-800 leading-tight">
            Projects
          </h1>
          <p className="text-gray-600 mt-4 text-lg">
            A selection of my recent open-source work and featured applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Vegam-js */}
          <div className="bg-white/50 backdrop-blur-sm rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-shadow duration-300 flex flex-col">
            <h2 className="font-serif text-2xl text-gray-800 mb-2">Vegam-js</h2>
            <p className="text-sm text-blue-600 mb-4 font-mono">v1.0.13 • Lightweight NodeJS Backend Framework</p>
            <p className="text-gray-700 leading-relaxed mb-6 flex-grow">
              A lightweight Node.js backend framework developed with TypeScript for scalable web applications. 
              Designed to streamline server-side development with built-in body-parser, strong TypeScript support, 
              and efficient routing.
            </p>
            <div className="space-y-4">
              <div className="flex gap-4">
                <a href="https://www.npmjs.com/package/vegamis" target="_blank" rel="noopener noreferrer" className="inline-block bg-gray-800 text-white px-4 py-2 rounded-lg text-sm hover:bg-gray-700 transition-colors">
                  View on NPM
                </a>
                <a href="https://github.com/Ajnash-ibn-umer/vegamjs#readme" target="_blank" rel="noopener noreferrer" className="inline-block border border-gray-300 text-gray-700 px-4 py-2 rounded-lg text-sm hover:bg-gray-100 transition-colors bg-white">
                  Source Code
                </a>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-500 font-mono bg-white px-3 py-2 rounded-md border border-gray-200">
                <code>npm i vegamjs</code>
              </div>
            </div>
          </div>

          {/* OXTEL.IN */}
          <div className="bg-white/50 backdrop-blur-sm rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-shadow duration-300 flex flex-col">
            <h2 className="font-serif text-2xl text-gray-800 mb-2">OXTEL.IN</h2>
            <p className="text-sm text-blue-600 mb-4 font-mono">Hostel Booking Service</p>
            <p className="text-gray-700 leading-relaxed mb-6 flex-grow">
              A full-stack hostel booking platform implementing a modern UI leveraging Tailwind CSS and ShadCN components.
              Built using the Repository Design Pattern for database-agnostic development and maximum scalability.
            </p>
            <div className="flex flex-wrap gap-2 mt-auto">
              <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">Next.js</span>
              <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded">Tailwind CSS</span>
              <span className="text-xs bg-gray-200 text-gray-800 px-2 py-1 rounded">Shadcn UI</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
