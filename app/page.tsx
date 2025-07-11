import {
  Code,
  ExternalLink,
  Github,
  Mail,
  Palette,
  Smartphone,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const skills = [
    "React.js",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Git",
    "Figma",
    "Responsive Design",
    "UI/UX",
  ];

  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution built with Next.js and TypeScript, featuring user authentication, payment integration, and admin dashboard.",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe"],
      image: "/placeholder.svg?height=200&width=300",
      github: "#",
      live: "#",
    },
    {
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      tech: ["React", "TypeScript", "Firebase", "Material-UI"],
      image: "/placeholder.svg?height=200&width=300",
      github: "#",
      live: "#",
    },
    {
      title: "Weather Dashboard",
      description:
        "A responsive weather application with location-based forecasts, interactive charts, and beautiful UI animations.",
      tech: ["React", "JavaScript", "Chart.js", "OpenWeather API"],
      image: "/placeholder.svg?height=200&width=300",
      github: "#",
      live: "#",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-cream/90 backdrop-blur-sm border-b border-dark-gray/10 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="hidden md:flex space-x-8">
              <Link
                href="#about"
                className="hover:text-main-blue transition-colors"
              >
                About
              </Link>
              <Link
                href="#skills"
                className="hover:text-main-blue transition-colors"
              >
                Skills
              </Link>
              <Link
                href="#projects"
                className="hover:text-main-blue transition-colors"
              >
                Projects
              </Link>
              <Link
                href="#contact"
                className="hover:text-main-blue transition-colors"
              >
                Contact
              </Link>
            </div>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Language" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">日本語</SelectItem>
                <SelectItem value="dark">English</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </nav>
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-main-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <div className="w-32 h-32 bg-gradient-to-br from-main-blue to-accent-pink rounded-full mx-auto mb-8 flex items-center justify-center">
              <span className="text-4xl font-bold text-white">M</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Hi, I’m <span className="text-main-blue">Minami</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-dark-gray/80">
              Frontend Developer passionate about creating beautiful, functional
              web experiences
            </p>
            <div className="flex justify-center space-x-4">
              <Button className="bg-main-blue hover:bg-main-blue/90 text-white">
                <Mail className="w-4 h-4 mr-2" />
                Get In Touch
              </Button>
              <Button
                variant="outline"
                className="border-main-blue text-main-blue hover:bg-main-blue hover:text-white bg-transparent"
              >
                <Github className="w-4 h-4 mr-2" />
                View GitHub
              </Button>
            </div>
          </div>
        </div>
      </section>
      {/* About Section */}
      <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg mb-6 leading-relaxed">
                I’m a passionate frontend developer with a keen eye for design
                and a love for creating seamless user experiences. With
                expertise in modern web technologies, I transform ideas into
                interactive, responsive, and accessible web applications.
              </p>
              <p className="text-lg mb-6 leading-relaxed">
                When I’m not coding, you can find me exploring new design
                trends, contributing to open-source projects, or learning about
                the latest developments in web technology.
              </p>
              <div className="flex space-x-4">
                <div className="flex items-center space-x-2">
                  <Code className="w-5 h-5 text-main-blue" />
                  <span>Clean Code</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Palette className="w-5 h-5 text-main-pink" />
                  <span>UI/UX Design</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Smartphone className="w-5 h-5 text-main-blue" />
                  <span>Responsive</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-80 bg-gradient-to-br from-main-blue/20 to-accent-pink/20 rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="py-16 px-4 sm:px-6 lg:px-8  bg-main-white"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Skills & Technologies
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="px-4 py-2 text-sm bg-sky-100 text-main-blue hover:bg-main-blue hover:text-white transition-colors"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-shadow duration-300 border-0 bg-white"
              >
                <div className="relative overflow-hidden rounded-t-lg">
                  <Image
                    width={200}
                    height={200}
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription className="text-dark-gray/70">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="outline"
                        className="text-xs border-main-blue/30 text-main-blue"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex space-x-2">
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 border-main-blue text-main-blue hover:bg-main-blue hover:text-white bg-transparent"
                    >
                      <Github className="w-4 h-4 mr-1" />
                      Code
                    </Button>
                    <Button
                      size="sm"
                      className="flex-1 bg-main-pink hover:bg-pink-100 text-white"
                    >
                      <ExternalLink className="w-4 h-4 mr-1" />
                      Live
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-16 px-4 sm:px-6 lg:px-8  bg-main-white"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Let’s Work Together
          </h2>
          <p className="text-lg mb-8 text-dark-gray/80">
            I’m always interested in new opportunities and exciting projects.
            Let’s connect and create something amazing together!
          </p>
          <div className="flex justify-center space-x-6">
            <Button className="bg-main-blue hover:bg-sky-100 text-white">
              <Mail className="w-5 h-5 mr-2" />
              Email Me
            </Button>

            <Button
              variant="outline"
              className="border-main-pink text-main-pink hover:bg-main-pink hover:text-white bg-transparent"
            >
              <Github className="w-5 h-5 mr-2" />
              GitHub
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-dark-gray/10 bg-main-white">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-dark-gray/60">
            © 2024 Minami. Built with Next.js and TypeScript.
          </p>
        </div>
      </footer>
    </div>
  );
}
