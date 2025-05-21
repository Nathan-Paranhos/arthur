import React, { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const textRef = useRef<HTMLHeadingElement>(null);
  const hasTyped = useRef(false);

  useEffect(() => {
    if (hasTyped.current) return;
    hasTyped.current = true;

    const textElement = textRef.current;
    if (!textElement) return;

    const text = "Tecnologia da Informação";
    let index = 0;
    textElement.textContent = "";

    const timers: number[] = [];

    const typeWriter = () => {
      if (index < text.length) {
        textElement.textContent += text.charAt(index);
        index++;
        const t = window.setTimeout(typeWriter, 100);
        timers.push(t);
      }
    };

    timers.push(window.setTimeout(typeWriter, 500));

    return () => {
      timers.forEach(clearTimeout);
    };
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-[#1A1A1A] overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-[#007BFF] opacity-10 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute top-1/2 -right-32 w-96 h-96 bg-[#007BFF] opacity-5 rounded-full blur-3xl animate-float-medium" />
        <div className="absolute bottom-20 left-1/4 w-72 h-72 bg-[#007BFF] opacity-5 rounded-full blur-3xl animate-float-fast" />
      </div>
      <div className="container mx-auto px-4 z-10">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
            <span className="block mb-2">ARTHUR TERRANOVA</span>
            <span ref={textRef} className="text-[#007BFF] text-2xl md:text-4xl" />
          </h1>
          <p className="text-gray-300 text-xl md:text-2xl max-w-3xl mx-auto mt-6 opacity-0 animate-fade-in">
            Transformando ideias em soluções digitais
          </p>
          <div className="mt-10 opacity-0 animate-fade-in-delayed">
            <a
              href="#about"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#007BFF] hover:bg-[#0069d9] transition-all duration-300 shadow-lg"
            >
              Conheça meu trabalho
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-white hover:text-[#007BFF] transition-colors duration-300">
          <ChevronDown size={32} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
