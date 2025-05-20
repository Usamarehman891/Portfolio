
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Weather App",
      description: "A simple yet powerful weather application that shows real-time weather data using third-party APIs. Features location-based forecasting and intuitive UI.",
      image: "/weather.png",
      technologies: ["React", "JavaScript", "Weather API", "Tailwind CSS"],
      liveUrl: "#",
      githubUrl: "https://github.com/Usamarehman891",
      color: "primary-purple"
    },
    {
      title: "Portfolio Website",
      description: "A single-page application portfolio with smooth transitions, responsive design, and modern UI elements. Features dark/light mode and interactive components.",
      image: "/portfolio.png",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
      liveUrl: "#",
      githubUrl: "https://github.com/Usamarehman891",
      color: "primary-blue"
    },
    {
      title: "Crypto Tracker",
      description: "A cryptocurrency tracking application with real-time price updates, portfolio management interface, and customizable watchlists for users.",
      image: "/crypto.png",
      technologies: ["React", "Node.js", "MongoDB", "Crypto API"],
      liveUrl: "#",
      githubUrl: "https://github.com/Usamarehman891",
      color: "primary-teal"
    }
  ];

  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-0 w-80 h-80 bg-primary-blue/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-0 w-80 h-80 bg-primary-purple/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="bg-gradient-primary text-primary-foreground px-4 py-1 rounded-full text-2xl font-medium">My Portfolio</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-8 mb-6 gradient-text">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8 rounded-full"></div>
          <p className="text-muted-foreground text-lg">
            Here are some of my recent projects that showcase my skills and expertise in web development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="glass border border-primary/10 overflow-hidden card-hover shadow-lg shadow-primary/5">
              <div className="h-56 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-primary opacity-30 mix-blend-overlay"></div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                />
              </div>
              <CardHeader>
                <CardTitle className="gradient-text">{project.title}</CardTitle>
                <CardDescription className="text-muted-foreground">{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm" className="gradient-border" asChild>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" /> Code
                  </a>
                </Button>
                <Button size="sm" className="bg-gradient-primary hover:opacity-90" asChild>
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    Live Demo <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <Button variant="outline" size="lg" className="gradient-border" asChild>
            <a href="https://github.com/Usamarehman891" target="_blank" rel="noopener noreferrer">
              View More Projects <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
