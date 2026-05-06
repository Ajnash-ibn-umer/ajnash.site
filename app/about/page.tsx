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
            I'm an AI Driven Software Engineer and SaaS Developer with
            over 6 years of programming experience. My journey in
            technology has been driven by a love for creating intelligent, scalable solutions that
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
            Currently, I work as a Senior Software Developer at Softbuilders Software
            Design, where I architect backend systems and microservices using technologies like
            NestJS, Node.js, GraphQL, and AWS. My projects heavily involve
            multi-tenancy architecture, event-driven integrations, and
            performance-oriented solutions that solve real-world business
            challenges while leveraging AI agentic tools.
          </p>

          <h2 className="text-2xl font-serif italic text-gray-800 mt-12 mb-6">
            My Expertise
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-gray-800 mb-3">
                Languages
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>• TypeScript & JavaScript</li>
                <li>• Python</li>
                <li>• Golang</li>
                <li>• GraphQL & SQL</li>
                <li>• HTML & CSS</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-gray-800 mb-3">
                Backend & Cloud
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Node.js, Express.js, Nest.js</li>
                <li>• Python FastAPI & Gin</li>
                <li>• MongoDB, PostgreSQL, Redis</li>
                <li>• AWS (Lambda, EC2, S3)</li>
                <li>• Docker & Kubernetes</li>
                <li>• Microservices & Serverless</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-gray-800 mb-3">
                AI & Web3
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>• AI Agentic Development</li>
                <li>• LLM Integrations</li>
                <li>• Web3.js & Ethers.js</li>
                <li>• Custom AI Tools (Opencode, Claude, Antigravity)</li>
                <li>• Blockchain Basics</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-gray-800 mb-3">
                Architecture & Practices
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Multi-tenancy Architecture</li>
                <li>• Event-driven Systems</li>
                <li>• MVP SaaS Development</li>
                <li>• CI/CD Pipelines</li>
                <li>• Performance Optimization</li>
              </ul>
            </div>
          </div>

          <h2 className="text-2xl font-serif italic text-gray-800 mt-12 mb-6">
            Technical Insights
          </h2>
          
          <div className="space-y-6">
            <div className="bg-white/30 backdrop-blur-md rounded-xl p-6 border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
              <h3 className="font-semibold text-gray-800 mb-2">Why I Use GraphQL Over REST</h3>
              <p className="text-gray-600 mb-3 text-sm">
                While both have their strengths, I prefer GraphQL for reducing data over-fetching, allowing custom frontend queries, and providing strong type definitions. However, it requires careful handling of caching and initial configurations.
              </p>
            </div>
            <div className="bg-white/30 backdrop-blur-md rounded-xl p-6 border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
              <h3 className="font-semibold text-gray-800 mb-2">Breaking Free from Social Media Addiction</h3>
              <p className="text-gray-600 text-sm">
                I strongly believe in protecting focus time. Shared practical tips to boost productivity: turning off non-essential notifications, setting app limits, and creating a distraction-free home screen.
              </p>
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

          <div className="bg-white/30 backdrop-blur-md rounded-xl p-8 border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] mt-12">
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
