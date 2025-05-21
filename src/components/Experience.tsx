import React, { useRef } from 'react';
import { useInView } from '../hooks/useInView';
import { Briefcase } from 'lucide-react';

interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  description: string[];
}

const experiences: ExperienceItem[] = [
  {
    company: "Fagron Tech",
    role: "Estagiário",
    period: "2024 - Atual",
    description: [
      "Líder de projeto de implantações de sistemas ERP para farmácias de manipulação.",
      "Responsável pela gestão do projeto quanto a definição do cronograma, Key Users, configuração de ambientes, treinamentos, homologação e operação assistida.",
      "Participação em mapeamento e padronização de processos e documentações.",
      "Elaboração e realização de treinamentos dos sistemas ERP.",
      "Configuração/homologação de equipamentos."
    ]
  },
  {
    company: "Exército Brasileiro",
    role: "Serviço Militar",
    period: "2023 - 2024",
    description: [
      "Servindo no Exército aprendi muito sobre responsabilidade, organização e disciplina."
    ]
  }
];

const ExperienceCard: React.FC<{ experience: ExperienceItem; isInView: boolean; index: number }> = ({ 
  experience, 
  isInView,
  index
}) => {
  return (
    <div 
      className={`flex gap-4 transition-all duration-700 transform ${
        isInView 
          ? 'translate-x-0 opacity-100' 
          : index % 2 === 0 ? '-translate-x-20 opacity-0' : 'translate-x-20 opacity-0'
      }`}
      style={{ transitionDelay: `${index * 200}ms` }}
    >
      <div className="flex flex-col items-center">
        <div className="w-12 h-12 bg-[#007BFF]/10 rounded-full flex items-center justify-center border-2 border-[#007BFF]">
          <Briefcase size={20} className="text-[#007BFF]" />
        </div>
        {index < experiences.length - 1 && <div className="w-0.5 h-full bg-gradient-to-b from-[#007BFF] to-[#007BFF]/10 mt-4"></div>}
      </div>
      
      <div className="bg-[#222222] p-6 rounded-lg mb-8 flex-1 shadow-lg hover:shadow-[#007BFF]/10 hover:-translate-y-1 transition-all duration-300">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
          <h3 className="text-xl font-semibold text-white">{experience.company}</h3>
          <span className="text-[#007BFF] font-medium">{experience.period}</span>
        </div>
        <h4 className="text-lg font-medium text-gray-300 mb-4">{experience.role}</h4>
        <ul className="text-gray-400 space-y-2">
          {experience.description.map((item, index) => (
            <li key={index} className="flex items-start">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#007BFF] mt-2 mr-2"></span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Experience: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });

  return (
    <section 
      id="experience" 
      ref={sectionRef}
      className="py-20 bg-[#1A1A1A] relative"
    >
      <div className="container mx-auto px-4">
        <h2 className={`text-3xl font-bold mb-12 text-white text-center transition-all duration-500 ${
          isInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <span className="text-[#007BFF]">Experiência</span> Profissional
        </h2>
        
        <div className="max-w-3xl mx-auto">
          {experiences.map((experience, index) => (
            <ExperienceCard 
              key={index} 
              experience={experience} 
              isInView={isInView} 
              index={index} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;