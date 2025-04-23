
import { Card, CardContent } from "@/components/ui/card";

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Professional Experience
        </h2>
        <Card className="max-w-4xl mx-auto">
          <CardContent className="p-6 md:p-8">
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Data Automation Intern
              </h3>
              <p className="text-blue-600 mb-2">Springer Nature</p>
              <p className="text-gray-600 mb-4">
                Focused on automating manual workflows using Power BI and Power Automate, significantly improving operational efficiency.
              </p>
              <div className="space-y-2 text-gray-600">
                <p>Key Achievements:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Automated data processing workflows, reducing manual effort by 60%</li>
                  <li>Developed Power BI dashboards for real-time performance monitoring</li>
                  <li>Implemented Power Automate solutions for streamlined data handling</li>
                  <li>Collaborated with cross-functional teams to optimize processes</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Experience;
