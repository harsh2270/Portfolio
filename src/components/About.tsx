
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          About Me
        </h2>
        <Card className="max-w-4xl mx-auto">
          <CardContent className="p-6 md:p-8">
            <p className="text-gray-600 leading-relaxed mb-6">
              I'm a B.Tech CSE student specializing in Data Science at Lovely Professional University (LPU). My passion lies in leveraging AI and data analytics to create innovative solutions that make a real difference.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              With a strong foundation in R, Tableau, and Power BI, I focus on transforming complex data into actionable insights. My academic journey has equipped me with both theoretical knowledge and practical experience in data science and machine learning.
            </p>
            <p className="text-gray-600 leading-relaxed">
              I'm particularly interested in automation and AI applications, constantly exploring new ways to optimize processes and create more efficient solutions. Through my projects and internship experience, I've developed a keen understanding of how data science can be applied to solve real-world problems.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default About;
