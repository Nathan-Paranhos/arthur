import React from 'react';
import { ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1A1A1A] border-t border-[#333333] py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0">
            <h2 className="text-xl font-bold text-white">
              <span className="text-[#007BFF]">Arthur</span> Terranova
            </h2>
            <p className="text-gray-400 mt-2">Profissional de Tecnologia da Informação</p>
          </div>
   
          <div>
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="w-10 h-10 bg-[#222222] hover:bg-[#007BFF] rounded-full flex items-center justify-center transition-all duration-300"
            >
              <ArrowUp size={20} className="text-white" />
            </button>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-[#333333] text-center">
          <p className="text-gray-400">
            &copy; 
            {new Date().getFullYear()} Arthur Terranova. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 