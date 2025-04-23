
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, Linkedin } from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    details: [
      { label: "Call", value: "+91 7986983804" },
      { label: "WhatsApp", value: "+91 6284042315" }
    ]
  },
  {
    icon: Mail,
    title: "Email",
    details: [
      { label: "Primary", value: "harshgoyal2270@gmail.com" },
      { label: "Academic", value: "harshcselpu2022@gmail.com" }
    ]
  },
  {
    icon: Linkedin,
    title: "LinkedIn",
    details: [
      { label: "Profile", value: "linkedin.com/in/harsh-goyal2270", link: "https://linkedin.com/in/harsh-goyal2270" }
    ]
  }
];

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Get in Touch
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {contactInfo.map((item) => (
            <Card key={item.title} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <item.icon className="w-8 h-8 mx-auto mb-4 text-blue-600" />
                <h3 className="text-xl font-semibold mb-4 text-gray-800">{item.title}</h3>
                {item.details.map((detail) => (
                  <div key={detail.label} className="mb-2">
                    <p className="text-sm text-gray-500">{detail.label}</p>
                    {detail.link ? (
                      <a
                        href={detail.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        {detail.value}
                      </a>
                    ) : (
                      <p className="text-gray-800">{detail.value}</p>
                    )}
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
