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
              <p className="text-gray-600 mt-4">Full-Stack Developer</p>
            </div>
            <Link href={"/resume.pdf"}>
              <button className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors">
                Download PDF
              </button>
            </Link>
          </div>
        </div>

        {/* Contact Info */}
        <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6 border border-gray-200 mb-8">
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
          <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6 border border-gray-200">
            <p className="text-gray-700 leading-relaxed">
              Experienced Full-Stack Developer with 5+ years of expertise in
              designing and implementing scalable web solutions. Proven track
              record in building SaaS platforms, enterprise systems, and
              cloud-based applications. Passionate about clean code, user
              experience, and delivering high-performance solutions that drive
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
            <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6 border border-gray-200">
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
                  • Working on scalable backend systems using NestJS, GraphQL,
                  and AWS Lambda
                </li>
                <li>
                  • Architecting microservices infrastructure to optimize
                  performance and cost
                </li>
                <li>
                  • Enhancing application security and scalability using
                  event-driven patterns
                </li>
                <li>
                  • Collaborating with cross-functional teams to deliver
                  business-focused features
                </li>
              </ul>
            </div>

            {/* Nexteons LLP */}
            <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6 border border-gray-200">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="font-semibold text-gray-800">
                    Backend Engineer
                  </h3>
                  <p className="text-gray-600">Nexteons LLP, India</p>
                </div>
                <span className="text-sm text-gray-500">
                  Oct 2023 – Feb 2025
                </span>
              </div>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>
                  • Designed multi-tenancy architecture reducing infra cost by
                  30%
                </li>
                <li>
                  • Deployed serverless ERP systems using AWS Lambda and S3
                </li>
                <li>
                  • Improved system performance by 35% with event-driven
                  microservices
                </li>
                <li>
                  • Built scalable SaaS-level applications with NestJS and
                  MongoDB
                </li>
              </ul>
            </div>

            {/* Credot LLP */}
            <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6 border border-gray-200">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="font-semibold text-gray-800">
                    Full Stack Developer
                  </h3>
                  <p className="text-gray-600">Credot LLP, India</p>
                </div>
                <span className="text-sm text-gray-500">
                  Jun 2022 – Oct 2023
                </span>
              </div>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>
                  • Led a team of 4 devs and 1 designer to build full-stack apps
                </li>
                <li>
                  • Reduced API latency by 45% using optimized GraphQL queries
                </li>
                <li>• Built real-time features with WebSockets and Firebase</li>
                <li>• Improved code quality and mentored junior developers</li>
              </ul>
            </div>

            {/* Freelance */}
            <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6 border border-gray-200">
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
                  • Delivered 10+ websites using HTML, CSS, JS, and JS
                  frameworks
                </li>
                <li>
                  • Deployed projects with responsive UI and custom features
                </li>
                <li>• Handled client requirements, hosting, and maintenance</li>
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
            <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6 border border-gray-200">
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

            <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6 border border-gray-200">
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

            <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6 border border-gray-200">
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

            <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6 border border-gray-200">
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

        {/* Education */}
        <section className="mb-12">
          <h2 className="text-2xl font-serif italic text-gray-800 mb-6">
            Education
          </h2>
          <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6 border border-gray-200">
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
        {/* <section>
          <h2 className="text-2xl font-serif italic text-gray-800 mb-6">
            Certifications
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white/50 backdrop-blur-sm rounded-xl p-4 border border-gray-200">
              <h3 className="font-semibold text-gray-800 text-sm">
                AWS Certified Solutions Architect
              </h3>
              <p className="text-gray-500 text-xs">
                Amazon Web Services • 2023
              </p>
            </div>
            <div className="bg-white/50 backdrop-blur-sm rounded-xl p-4 border border-gray-200">
              <h3 className="font-semibold text-gray-800 text-sm">
                Google Cloud Professional Developer
              </h3>
              <p className="text-gray-500 text-xs">Google Cloud • 2022</p>
            </div>
            <div className="bg-white/50 backdrop-blur-sm rounded-xl p-4 border border-gray-200">
              <h3 className="font-semibold text-gray-800 text-sm">
                MongoDB Certified Developer
              </h3>
              <p className="text-gray-500 text-xs">MongoDB Inc. • 2021</p>
            </div>
            <div className="bg-white/50 backdrop-blur-sm rounded-xl p-4 border border-gray-200">
              <h3 className="font-semibold text-gray-800 text-sm">
                React Developer Certification
              </h3>
              <p className="text-gray-500 text-xs">Meta • 2021</p>
            </div>
          </div>
        </section> */}
      </div>
    </div>
  );
}
