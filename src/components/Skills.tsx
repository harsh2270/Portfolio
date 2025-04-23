
import { Card, CardContent } from "@/components/ui/card";
import { Database, FileBarChart, ChartBar } from "lucide-react";

const skills = [
  {
    category: "Data Analytics & Visualization",
    items: ["Tableau", "Power BI", "Excel", "R"],
    icon: ChartBar,
  },
  {
    category: "Programming & Development",
    items: ["R Programming", "Java", "HTML/CSS", "Power Automate"],
    icon: Database,
  },
  {
    category: "AI & Analytics",
    items: ["Predictive Modeling", "ChatGPT & Prompt Engineering", "Data Analysis", "Statistical Analysis"],
    icon: FileBarChart,
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Skills & Expertise
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skills.map((skill) => (
            <Card key={skill.category} className="relative overflow-hidden group hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="mb-4">
                  <skill.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">{skill.category}</h3>
                <ul className="space-y-2">
                  {skill.items.map((item) => (
                    <li key={item} className="text-gray-600 flex items-center">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
