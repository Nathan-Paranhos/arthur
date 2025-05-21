import React, { useRef, useEffect, useState } from 'react';
import { useInView } from '../hooks/useInView';

interface Skill {
  name: string;
  level: number;
  color: string;
}

const behavioralSkills: Skill[] = [
  { name: 'Trabalho em equipe', level: 100, color: '#007BFF' },
  { name: 'Prático', level: 100, color: '#0095FF' },
  { name: 'Colaboração', level: 100, color: '#00ACFF' },
  { name: 'Disciplina', level: 100, color: '#00C3FF' },
  { name: 'Planejamento', level: 100, color: '#00DAFF' },
];

interface SkillBarProps {
  skill: Skill;
  isInView: boolean;
  index: number;
}

const SkillBar: React.FC<SkillBarProps> = ({ skill, isInView, index }) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => setWidth(skill.level), index * 100);
      return () => clearTimeout(timer);
    }
  }, [isInView, index, skill.level]);

  return (
    <div className="w-full mb-6">
      <div className="flex justify-between mb-2 text-white">
        <span className="font-medium">{skill.name}</span>
        <span className="text-gray-400">{skill.level}%</span>
      </div>
      <div className="w-full bg-[#2a2a2a] rounded-full h-2.5 overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-1000 ease-out"
          style={{
            width: `${width}%`,
            backgroundColor: skill.color,
            transitionDelay: `${index * 100}ms`,
          }}
        />
      </div>
    </div>
  );
};

const Skills: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-20 bg-[#1A1A1A] relative flex justify-center"
    >
      <div className="absolute inset-0 bg-gradient-to-t from-[#232323] to-transparent" />

      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center">
        <h2
          className={`text-3xl font-bold mb-12 text-white text-center transition-transform duration-500 ${
            isInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <span className="text-[#007BFF]">Minhas</span> Habilidades
        </h2>

        <div className="w-full md:w-1/2">
          <h3 className="text-xl font-semibold mb-6 text-white text-center">
            Habilidades Comportamentais
          </h3>
          {behavioralSkills.map((skill, index) => (
            <SkillBar
              key={skill.name}
              skill={skill}
              isInView={isInView}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
