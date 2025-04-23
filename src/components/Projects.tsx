
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link, Image } from "lucide-react";

const projects = [
  {
    title: "AI-based Insurance Fraud Detection System",
    description: "Developed a smart fraud detection system using predictive analytics in R to identify suspicious insurance claims. The model evaluates patterns in customer data to flag potential frauds. Features Negotiator AI for optimal premium suggestions.",
    tech: ["R", "Predictive Analytics", "API Integration"],
    link: "#",
    image: "photo-1526374965328-7f61d4dc18c5"
  },
  {
    title: "Mood Predictor App",
    description: "A lightweight mood prediction application that uses simple user inputs to predict mood. Features real-time interactivity and data-driven insights.",
    tech: ["R", "Shiny", "Machine Learning"],
    link: "https://goyal-harsh2270.shinyapps.io/predictive_analysis/",
    image: "photo-1581091226825-a6a2a5aee158"
  },
  {
    title: "Dynamic Inventory Optimization System (DIOS)",
    description: "Real-time stock level management and demand forecasting tool. Identifies optimum inventory quantities based on sales trends.",
    tech: ["R", "Predictive Analytics", "Shiny"],
    link: "#",
    image: "photo-1461749280684-dccba630e2f6"
  },
  {
    title: "Pizza Sales Dashboard",
    description: "Dynamic dashboard analyzing pizza sales across categories, time periods, and customer segments with live filtering capabilities.",
    tech: ["Tableau Desktop"],
    link: "#",
    image: "photo-1498050108023-c5249f4df085"
  },
  {
    title: "Mental Health Guide App",
    description: "Resourceful app centralizing information about panic attacks and anxiety, featuring coping strategies and guidance.",
    tech: ["R", "Shiny", "Healthcare"],
    link: "https://goyal-harsh2270.shinyapps.io/panic_attack/",
    image: "photo-1500673922987-e212871fec22"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project) => (
            <Card key={project.title} className="group hover:shadow-lg transition-shadow">
              <div className="relative h-48 overflow-hidden rounded-t-lg">
                <img
                  src={`https://images.unsplash.com/${project.image}`}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-gray-800">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span key={tech} className="text-sm px-3 py-1 bg-blue-100 text-blue-600 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                {project.link !== "#" && (
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={() => window.open(project.link, '_blank')}
                  >
                    <Link className="w-4 h-4 mr-2" />
                    View Project
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
