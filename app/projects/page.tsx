import Link from "next/link"

export default function Projects() {
  const projects = [
    {
      title: "Enterprise ERP System",
      description:
        "A comprehensive ERP solution for manufacturing companies with inventory management, production planning, and financial reporting.",
      technologies: ["React", "Node.js", "PostgreSQL", "AWS"],
      status: "Completed",
      year: "2024",
    },
    {
      title: "SaaS Analytics Platform",
      description:
        "Real-time analytics dashboard for e-commerce businesses with advanced reporting and data visualization.",
      technologies: ["Vue.js", "Python", "MongoDB", "Docker"],
      status: "Completed",
      year: "2023",
    },
    {
      title: "Healthcare Management System",
      description: "Patient management system with appointment scheduling, medical records, and billing integration.",
      technologies: ["Next.js", "Express.js", "MySQL", "Azure"],
      status: "Completed",
      year: "2023",
    },
    {
      title: "E-commerce Marketplace",
      description: "Multi-vendor marketplace with payment integration, order management, and vendor analytics.",
      technologies: ["React", "Laravel", "Redis", "Stripe API"],
      status: "Completed",
      year: "2022",
    },
    {
      title: "IoT Monitoring Dashboard",
      description: "Real-time monitoring system for industrial IoT devices with alerts and predictive analytics.",
      technologies: ["Angular", "Node.js", "InfluxDB", "MQTT"],
      status: "In Progress",
      year: "2024",
    },
    {
      title: "Financial Trading Platform",
      description: "Secure trading platform with real-time market data, portfolio management, and risk assessment.",
      technologies: ["React", "Django", "PostgreSQL", "WebSocket"],
      status: "Completed",
      year: "2022",
    },
  ]

  return (
    <div className="min-h-screen bg-[#f5f1eb] px-6 py-12 md:px-12 lg:px-24">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-12">
          <Link href="/" className="text-gray-600 hover:text-gray-800 transition-colors mb-4 inline-block">
            ← Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-serif italic text-gray-800 leading-tight">Projects</h1>
          <p className="text-gray-600 mt-4 text-lg">
            A showcase of some of the projects I've worked on, ranging from enterprise solutions to innovative SaaS
            platforms.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white/50 backdrop-blur-sm rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-serif text-xl text-gray-800">{project.title}</h3>
                <span
                  className={`text-xs px-2 py-1 rounded-full ${
                    project.status === "Completed" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
                  }`}
                >
                  {project.status}
                </span>
              </div>

              <p className="text-gray-600 text-sm mb-4 leading-relaxed">{project.description}</p>

              <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="text-xs text-gray-500">{project.year}</div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-white/50 backdrop-blur-sm rounded-xl p-8 border border-gray-200">
            <h2 className="font-serif text-2xl text-gray-800 mb-4">Interested in Working Together?</h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              I'm always open to discussing new projects and opportunities. Whether you have a specific idea in mind or
              need consultation on your existing systems, let's explore how we can bring your vision to life.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors"
            >
              Start a Conversation
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
