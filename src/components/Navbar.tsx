
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <span className="text-lg font-bold text-gray-800">Harsh Goyal</span>
          <div className="hidden md:flex space-x-8">
            {['about', 'skills', 'projects', 'experience', 'contact'].map((item) => (
              <Button
                key={item}
                variant="ghost"
                className="text-gray-600 hover:text-gray-900 shadow-lg capitalize"
                onClick={() => scrollToSection(item)}
              >
                {item}
              </Button>
            ))}
            <Button 
              variant="default"
              className="bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg text-white animate-pulse"
              onClick={() => window.open('/harsh_cv.pdf', '_blank')}
            >
              Resume
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
