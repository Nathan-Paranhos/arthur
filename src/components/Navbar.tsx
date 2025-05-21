import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Sobre', href: '#about' },
    { name: 'Experiência', href: '#experience' },
    { name: 'Habilidades', href: '#skills' },
    { name: 'Educação', href: '#education' },
    { name: 'Contato', href: '#contact' },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#1A1A1A] shadow-lg py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-white font-bold text-xl">
              <span className="text-[#007BFF]">Arthur</span> Terranova
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-[#007BFF] transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-[#007BFF] transition-colors duration-300"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-[#1A1A1A] shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 text-gray-300 hover:text-[#007BFF] transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="flex justify-center space-x-4 py-4 border-t border-gray-700">
            <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[#007BFF]">
              <Linkedin size={20} />
            </a>
            <a href="mailto:arthur.terranova@gmail.com" className="text-gray-300 hover:text-[#007BFF]">
              <Mail size={20} />
            </a>
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[#007BFF]">
              <Github size={20} />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;