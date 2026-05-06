import Link from "next/link";

export default function Resume() {
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
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-4xl md:text-5xl font-serif italic text-gray-800 leading-tight">
                Resume
              </h1>
              <p className="text-gray-600 mt-4">AI Driven Software Engineer & SaaS Developer</p>
            </div>
            <Link href={"/resume.pdf"}>
              <button className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors">
                Download PDF
              </button>
            </Link>
          </div>
        </div>

        {/* Contact Info */}
        <div className="bg-white/30 backdrop-blur-md rounded-xl p-6 border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] mb-8">
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-gray-600">📧 ajnash.k02@gmail.com</p>
              {/* <p className="text-gray-600">📱 +971 567328853</p> */}
            </div>
            <div>
              <p className="text-gray-600">📍 Dubai, UAE</p>
              {/* <p className="text-gray-600">🎂 June 15, 2000</p> */}
            </div>
          </div>
        </div>

        {/* Professional Summary */}
        <section className="mb-12">
          <h2 className="text-2xl font-serif italic text-gray-800 mb-4">
            Professional Summary
          </h2>
          <div className="bg-white/30 backdrop-blur-md rounded-xl p-6 border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <p className="text-gray-700 leading-relaxed">
              AI Driven Software Engineer and SaaS Developer with 6+ years of expertise in
              designing and implementing scalable web solutions. Proven track
              record in building SaaS platforms, microservices architectures, and
              AI-integrated applications. Passionate about clean code, robust backend architectures, and delivering high-performance solutions that drive
              business growth.
            </p>
          </div>
        </section>

        {/* Experience */}
        <section className="mb-12">
          <h2 className="text-2xl font-serif italic text-gray-800 mb-6">
            Experience
          </h2>
          <div className="space-y-6">
            {/* Softbuilders Software Design */}
            <div className="bg-white/30 backdrop-blur-md rounded-xl p-6 border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="font-semibold text-gray-800">
                    Software Developer
                  </h3>
                  <p className="text-gray-600">
                    Softbuilders Software Design, Dubai
                  </p>
                </div>
                <span className="text-sm text-gray-500">
                  Feb 2025 – Present
                </span>
              </div>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>
                  • Optimized data migration performance by implementing parallel execution algorithms, reducing processing time for 1M records by 80%.
                </li>
                <li>
                  • Architected and designed scalable backend infrastructure and microservices for an enterprise-level SaaS platform.
                </li>
                <li>
                  • Developed and deployed a custom RabbitMQ client package for NestJS to enable efficient multi-queue processing and RPC communication.
                </li>
                <li>
                  • Led cross-functional team and successfully delivered 2+ production-ready cryptocurrency and digital wallet applications.
                </li>
              </ul>
            </div>

            {/* Nexteons LLP */}
            <div className="bg-white/30 backdrop-blur-md rounded-xl p-6 border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="font-semibold text-gray-800">
                    Backend Developer (Team Lead)
                  </h3>
                  <p className="text-gray-600">Nexteons LLP, India</p>
                </div>
                <span className="text-sm text-gray-500">
                  Oct 2023 – Feb 2025
                </span>
              </div>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>
                  • Reduced infra costs by 30% through implementing a scalable multi-tenancy architecture.
                </li>
                <li>
                  • Achieved a 50% server cost reduction by deploying serverless architecture with AWS Lambda.
                </li>
                <li>
                  • Improved system performance by 35% with event-driven microservices.
                </li>
                <li>
                  • Achieved a 30% reduction in API latency by implementing batched database operations.
                </li>
              </ul>
            </div>

            {/* Credot LLP */}
            <div className="bg-white/30 backdrop-blur-md rounded-xl p-6 border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="font-semibold text-gray-800">
                    Full Stack Developer (Team Lead)
                  </h3>
                  <p className="text-gray-600">Credot LLP, India</p>
                </div>
                <span className="text-sm text-gray-500">
                  Jun 2022 – Oct 2023
                </span>
              </div>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>
                  • Improved API performance by implementing GraphQL with a recursive function, reducing data retrieval latency by 45%.
                </li>
                <li>
                  • Enabled real-time data transfer using WebSockets and Firebase, reducing synchronization latency by 40% for 10,000+ users.
                </li>
                <li>
                  • Reduced data importing time by 40% by developing a bulk-importing script for MongoDB.
                </li>
                <li>
                  • Led a team of 4 devs and 1 designer; conducted code reviews resulting in a 30% improvement in code quality.
                </li>
              </ul>
            </div>

            {/* Freelance */}
            <div className="bg-white/30 backdrop-blur-md rounded-xl p-6 border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="font-semibold text-gray-800">
                    Freelance Web Developer
                  </h3>
                  <p className="text-gray-600">Self-employed</p>
                </div>
                <span className="text-sm text-gray-500">2020 – 2022</span>
              </div>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>
                  • Developed 10+ websites with HTML, CSS, JavaScript, and JS frameworks.
                </li>
                <li>
                  • Deployed projects with responsive UI and custom features.
                </li>
                <li>
                  • Handled client requirements, hosting, and maintenance.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="mb-12">
          <h2 className="text-2xl font-serif italic text-gray-800 mb-6">
            Technical Skills
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/30 backdrop-blur-md rounded-xl p-6 border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
              <h3 className="font-semibold text-gray-800 mb-4">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "React.js",
                  "HTML",
                  "SCSS",
                  "Bootstrap",
                  "Shadcn UI",
                  "Next.js",
                  "TypeScript",
                  "Tailwind CSS",
                  "JavaScript ES6+",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white/30 backdrop-blur-md rounded-xl p-6 border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
              <h3 className="font-semibold text-gray-800 mb-4">Backend</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Node.js",
                  "Python",
                  "Golang",
                  "NestJS",
                  "GraphQL",
                  "REST API",
                  "Gin",
                  "Express.js",
                  "FastAPI",
                  "AWS Lambda",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white/30 backdrop-blur-md rounded-xl p-6 border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
              <h3 className="font-semibold text-gray-800 mb-4">Database</h3>
              <div className="flex flex-wrap gap-2">
                {["PostgreSQL", "MySQL", "MongoDB", "Redis", "InfluxDB"].map(
                  (skill) => (
                    <span
                      key={skill}
                      className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded"
                    >
                      {skill}
                    </span>
                  )
                )}
              </div>
            </div>

            <div className="bg-white/30 backdrop-blur-md rounded-xl p-6 border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
              <h3 className="font-semibold text-gray-800 mb-4">
                Cloud & DevOps
              </h3>
              <div className="flex flex-wrap gap-2">
                {["AWS", "GCP", "Docker", "Kubernetes", "CI/CD", "Git"].map(
                  (skill) => (
                    <span
                      key={skill}
                      className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded"
                    >
                      {skill}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Projects & Open Source */}
        <section className="mb-12">
          <h2 className="text-2xl font-serif italic text-gray-800 mb-6">
            Projects & Open Source
          </h2>
          <div className="space-y-6">
            <div className="bg-white/30 backdrop-blur-md rounded-xl p-6 border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
              <h3 className="font-semibold text-gray-800">VEGAMJS (Lightweight NodeJS Backend Framework)</h3>
              <p className="text-gray-600 text-sm mt-2 mb-3">
                A lightweight Node.js backend framework developed with TypeScript for scalable web applications. Includes built-in body parser and supports Express-like middleware.
              </p>
              <div className="flex gap-4 text-sm">
                <a href="https://www.npmjs.com/package/vegamis" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">NPM Package</a>
                <a href="https://github.com/Ajnash-ibn-umer/vegamjs#readme" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Source Code</a>
              </div>
            </div>

            <div className="bg-white/30 backdrop-blur-md rounded-xl p-6 border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
              <h3 className="font-semibold text-gray-800">OXTEL.IN (Hostel Booking Service)</h3>
              <p className="text-gray-600 text-sm mt-2">
                Implemented a modern UI leveraging Tailwind CSS and ShadCN components. Used Repository Design Pattern for database-agnostic development.
              </p>
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="mb-12">
          <h2 className="text-2xl font-serif italic text-gray-800 mb-6">
            Education
          </h2>
          <div className="bg-white/30 backdrop-blur-md rounded-xl p-6 border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold text-gray-800">
                  Bachelor of Technology in Chemical Engineering
                </h3>
                <p className="text-gray-600">
                  APJ Abdul kalam Technical University ,India
                </p>
                {/* <p className="text-gray-500 text-sm">
                  Learned Engineering Mathematics and Problem Solving
                </p> */}
              </div>
              <span className="text-sm text-gray-500">2018 - 2022</span>
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section>
          <h2 className="text-2xl font-serif italic text-gray-800 mb-6">
            Certifications
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white/30 backdrop-blur-md rounded-xl p-4 border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
              <h3 className="font-semibold text-gray-800 text-sm">
                Blockchain Basics
              </h3>
              <p className="text-gray-500 text-xs mt-1">
                Cyfrin Updraft • BBCC-RGF0GMB4RDG0
              </p>
            </div>
            <div className="bg-white/30 backdrop-blur-md rounded-xl p-4 border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
              <h3 className="font-semibold text-gray-800 text-sm">
                Fundamentals of MCP
              </h3>
              <p className="text-gray-500 text-xs mt-1">
                Hugging Face
              </p>
            </div>
            <div className="bg-white/30 backdrop-blur-md rounded-xl p-4 border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
              <h3 className="font-semibold text-gray-800 text-sm">
                ICT Accessibility and Standards
              </h3>
              <p className="text-gray-500 text-xs mt-1">
                CDAC/ICTASCB5/000009
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
