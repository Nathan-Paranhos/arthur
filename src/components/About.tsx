import React, { useEffect, useRef } from 'react';
import { useInView } from '../hooks/useInView';

const About: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="py-20 bg-[#1A1A1A] relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#007BFF]/5 to-transparent"></div>
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className={`md:w-1/2 transition-all duration-700 transform ${isInView ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
            <div className="bg-[#222222] p-1 rounded-lg shadow-xl overflow-hidden">
              <div className="aspect-square rounded-lg bg-[#2a2a2a] overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#1A1A1A] to-[#007BFF]/20 flex items-center justify-center">
                  <span className="text-[#007BFF] text-8xl font-bold opacity-30">AT</span>
                </div>
                <div className="absolute top-4 left-4 w-20 h-20 border-l-2 border-t-2 border-[#007BFF]/30"></div>
                <div className="absolute bottom-4 right-4 w-20 h-20 border-r-2 border-b-2 border-[#007BFF]/30"></div>
              </div>
            </div>
          </div>
          
          <div className={`md:w-1/2 transition-all duration-700 delay-300 transform ${isInView ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
            <h2 className="text-3xl font-bold mb-6 text-white">
              <span className="text-[#007BFF]">Sobre</span> Mim
            </h2>
            
            <p className="text-gray-300 mb-6">
              Profissional com formação em Ensino Médio Técnico em Informática e 
              cursando Análise e Desenvolvimento de Sistemas, busco oportunidade 
              na área de TI para aplicar meus conhecimentos e crescer profissionalmente.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="bg-[#222222] p-4 rounded-lg">
                <h3 className="text-[#007BFF] font-medium mb-2">Localização</h3>
                <p className="text-gray-300">Jundiaí, SP 13209-690</p>
              </div>
              
              <div className="bg-[#222222] p-4 rounded-lg">
                <h3 className="text-[#007BFF] font-medium mb-2">Email</h3>
                <p className="text-gray-300">arthur.terranova@gmail.com</p>
              </div>
              
              <div className="bg-[#222222] p-4 rounded-lg">
                <h3 className="text-[#007BFF] font-medium mb-2">Telefone</h3>
                <p className="text-gray-300">+55 11 98011-7801</p>
              </div>
              
              <div className="bg-[#222222] p-4 rounded-lg">
                <h3 className="text-[#007BFF] font-medium mb-2">Idiomas</h3>
                <p className="text-gray-300">Português (Nativo), Inglês (Avançado)</p>
              </div>
            </div>
            
            <a 
              href="#contact" 
              className="inline-flex items-center px-6 py-3 bg-transparent border border-[#007BFF] text-[#007BFF] rounded-md hover:bg-[#007BFF] hover:text-white transition-all duration-300"
            >
              Entre em Contato
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;