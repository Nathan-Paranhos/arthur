import React, { useRef } from 'react';
import { useInView } from '../hooks/useInView';
import { GraduationCap } from 'lucide-react';

const Education: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });

  return (
    <section 
      id="education" 
      ref={sectionRef}
      className="py-20 bg-[#232323] relative"
    >
      <div className="container mx-auto px-4">
        <h2 className={`text-3xl font-bold mb-12 text-white text-center transition-all duration-500 ${
          isInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <span className="text-[#007BFF]">Minha</span> Educação
        </h2>
        
        <div className="max-w-3xl mx-auto">
          <div className={`bg-[#1A1A1A] p-8 rounded-lg shadow-lg transition-all duration-700 transform ${
            isInView ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}>
            <div className="flex items-start gap-6">
              <div className="hidden sm:block">
                <div className="w-12 h-12 bg-[#007BFF]/10 rounded-full flex items-center justify-center border-2 border-[#007BFF]">
                  <GraduationCap size={20} className="text-[#007BFF]" />
                </div>
              </div>
              
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-white mb-2">
                  Escolas Padre Anchieta
                </h3>
                
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-[#007BFF] font-medium">Superior de Tecnologia - Análise e Desenvolvimento de Sistemas</h4>
                    <span className="text-gray-400">2023 - atualmente</span>
                  </div>
                  <p className="text-gray-300">
                    Cursando graduação com foco em desenvolvimento de software, banco de dados, 
                    análise de sistemas e metodologias ágeis.
                  </p>
                </div>
                
                <div className="mb-0">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-[#007BFF] font-medium">Ensino Médio Técnico em Informática</h4>
                    <span className="text-gray-400">2019 - 2022</span>
                  </div>
                  <p className="text-gray-300">
                    Formação técnica com ênfase em fundamentos de programação, 
                    hardware, redes e sistemas operacionais.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;