import Link from "next/link";

export default function About() {
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
            About Me
          </h1>
        </div>

        {/* Content */}
        <div className="space-y-8 text-gray-700 text-lg leading-relaxed">
          <p>
            I'm a passionate Full-Stack Developer and SaaS and MVP Expert with
            over 5 years of experience in software development. My journey in
            technology has been driven by a love for creating solutions that
            make a real difference in people's lives and businesses.
          </p>

          <p>
            Based in Dubai, UAE, I specialize in crafting dynamic software
            solutions that seamlessly blend innovation with functionality. My
            approach to development is rooted in the belief that every line of
            code should serve a purpose – whether it's improving user
            experience, enhancing performance, or solving complex business
            challenges.
          </p>

          <p>
            Currently, I work as a Software Developer at Softbuilders Software
            Design, where I architect backend systems using technologies like
            NestJS, Node.js, GraphQL, and AWS. My projects often involve
            multi-tenancy architecture, event-driven microservices, and
            performance-oriented solutions that solve real-world business
            challenges.
          </p>

          <h2 className="text-2xl font-serif italic text-gray-800 mt-12 mb-6">
            My Expertise
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-gray-800 mb-3">
                Backend Technologies
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Node.js , Express.js and Nest.js</li>
                <li>• Gloang & Gin</li>
                <li>• Python & FastApi</li>
                <li>• MongoDB, PostgreSQL, Redis</li>
                <li>• Database Design & Optimization</li>
                <li>• GraphQL & REST APIs</li>
                <li>• Serverless & Multi-tenancy Systems</li>
                <li>• Micro services & Distributed systems</li>

              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-gray-800 mb-3">
                Frontend Technologies
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>• React.js & Next.js</li>
                <li>• HTML & CSS </li>
                <li>• TypeScript & JavaScript</li>
                <li>• Responsive Design</li>
                <li>• Modern CSS & Tailwind</li>

              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-gray-800 mb-3">
                Cloud & DevOps
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>• AWS & GCP</li>
                <li>• Docker & Kubernetes</li>
                <li>• CI/CD Pipelines</li>
                <li>• Git , Github & Bitbucket</li>
                <li>• Monitoring & Logging</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-gray-800 mb-3">
                SaaS & Business Systems
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Custom ERP Development</li>
                <li>• MVP SaaS Development</li>
                <li>• System Integration</li>
                <li>• AI Agent Integration</li>
                <li>• Performance Optimization</li>
              </ul>
            </div>
          </div>

          <h2 className="text-2xl font-serif italic text-gray-800 mt-12 mb-6">
            My Approach
          </h2>

          <p>
            I believe in building software that not only meets current
            requirements but also scales gracefully with future growth. My
            development philosophy centers around clean, maintainable code,
            user-centric design, and robust architecture that stands the test of
            time.
          </p>

          <p>
            When working with clients, I prioritize clear communication,
            iterative development, and collaborative problem-solving. I've had
            the privilege of working with diverse industries, from startups to
            enterprise clients, each bringing unique challenges that have shaped
            my expertise.
          </p>

          <div className="bg-white/50 backdrop-blur-sm rounded-xl p-8 border border-gray-200 mt-12">
            <h3 className="font-serif text-xl text-gray-800 mb-4">
              Let's Work Together
            </h3>
            <p className="text-gray-600 mb-6">
              I'm always excited to take on new challenges and collaborate on
              innovative projects. Whether you're looking to build a new
              application from scratch, optimize existing systems, or need
              consultation on technical architecture, I'd love to hear from you.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
