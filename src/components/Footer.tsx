
import { Mail, Phone, LinkedinIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">Contact</h3>
            <div className="space-y-3">
              <a href="tel:+917986983804" className="flex items-center hover:text-white">
                <Phone className="w-4 h-4 mr-2" />
                +91 7986983804
              </a>
              <a href="mailto:harshgoyal2270@gmail.com" className="flex items-center hover:text-white">
                <Mail className="w-4 h-4 mr-2" />
                harshgoyal2270@gmail.com
              </a>
              <a href="https://linkedin.com/in/harsh-goyal2270" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-white">
                <LinkedinIcon className="w-4 h-4 mr-2" />
                harsh-goyal2270
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">Quick Links</h3>
            <div className="space-y-2">
              <a href="#about" className="block hover:text-white">About</a>
              <a href="#skills" className="block hover:text-white">Skills</a>
              <a href="#projects" className="block hover:text-white">Projects</a>
              <a href="#experience" className="block hover:text-white">Experience</a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">Resume</h3>
            <p className="mb-4">Download my latest resume to learn more about my skills and experience.</p>
            <Button variant="outline" className="bg-white hover:bg-gray-100" onClick={() => window.open('/resume.pdf', '_blank')}>
              Download Resume
            </Button>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p>&copy; {new Date().getFullYear()} Harsh Goyal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
