import React, { useState, useRef } from 'react';
import { useInView } from '../hooks/useInView';
import { Phone, Mail, MapPin, Send, Linkedin } from 'lucide-react';

const WHATSAPP_NUMBER = '5511980117801';

const Contact: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [sending, setSending] = useState(false);
  const [messageSent, setMessageSent] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);

    const texto = `
Nome: ${formData.name}
Email: ${formData.email}
Assunto: ${formData.subject}
Mensagem: ${formData.message}
    `.trim();

    const whatsappUrl = `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(
      texto
    )}`;

    window.open(whatsappUrl, '_blank');

    setTimeout(() => {
      setSending(false);
      setMessageSent(true);
      setFormData({ name: '', email: '', subject: '', message: '' });

      setTimeout(() => {
        setMessageSent(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-20 bg-[#1A1A1A] relative"
    >
      <div className="container mx-auto px-4">
        <h2
          className={`text-3xl font-bold mb-12 text-white text-center transition-all duration-500 ${
            isInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <span className="text-[#007BFF]">Entre em</span> Contato
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div
            className={`transition-all duration-700 transform ${
              isInView
                ? 'translate-x-0 opacity-100'
                : '-translate-x-20 opacity-0'
            }`}
          >
            <h3 className="text-xl font-semibold mb-6 text-white">
              Informações de Contato
            </h3>

            <div className="space-y-6">
              <ContatoInfo
                icon={<Phone size={18} />}
                title="Telefone"
                content="+55 11 98011-7801"
              />
              <ContatoInfo
                icon={<Mail size={18} />}
                title="Email"
                content="arthur.terranova@gmail.com"
              />
              <ContatoInfo
                icon={<MapPin size={18} />}
                title="Localização"
                content="Jundiaí, SP 13209-690"
              />
            </div>

            <div className="mt-10">
              <h3 className="text-xl font-semibold mb-4 text-white">
                Minhas Redes Sociais
              </h3>
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/in/arthur-terranova-865790246/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[#007BFF]/10 hover:bg-[#007BFF] rounded-full flex items-center justify-center transition-all duration-300"
                >
                  <Linkedin size={18} className="text-[#007BFF] hover:text-white" />
                </a>
              </div>
            </div>
          </div>

          <div
            className={`transition-all duration-700 transform ${
              isInView
                ? 'translate-x-0 opacity-100'
                : 'translate-x-20 opacity-0'
            }`}
          >
            <h3 className="text-xl font-semibold mb-6 text-white">
              Envie uma Mensagem
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <InputField
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Seu nome"
              />
              <InputField
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Seu email"
              />
              <InputField
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Assunto"
              />
              <TextareaField
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Sua mensagem"
                rows={4}
              />

              <button
                type="submit"
                disabled={sending || messageSent}
                className={`px-6 py-3 rounded-lg text-white font-medium flex items-center justify-center gap-2 transition-all duration-300 ${
                  sending
                    ? 'bg-[#007BFF]/70 cursor-wait'
                    : messageSent
                    ? 'bg-green-600'
                    : 'bg-[#007BFF] hover:bg-[#0069d9]'
                }`}
              >
                {sending ? (
                  <>
                    <span className="animate-spin inline-block w-5 h-5 border-2 border-t-transparent rounded-full" />
                    <span>Enviando...</span>
                  </>
                ) : messageSent ? (
                  <>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8 ... "
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Mensagem Enviada!</span>
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    <span>Enviar Mensagem</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

interface InputFieldProps {
  name: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  placeholder: string;
  type?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  name,
  value,
  onChange,
  placeholder,
  type = 'text'
}) => (
  <input
    type={type}
    name={name}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    required
    className="w-full px-4 py-3 bg-[#222222] border border-[#333333] rounded-lg focus:outline-none focus:border-[#007BFF] text-gray-300"
  />
);

interface TextareaFieldProps {
  name: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLTextAreaElement>;
  placeholder: string;
  rows: number;
}

const TextareaField: React.FC<TextareaFieldProps> = ({
  name,
  value,
  onChange,
  placeholder,
  rows
}) => (
  <textarea
    name={name}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    required
    rows={rows}
    className="w-full px-4 py-3 bg-[#222222] border border-[#333333] rounded-lg focus:outline-none focus:border-[#007BFF] text-gray-300 resize-none"
  />
);

interface ContatoInfoProps {
  icon: React.ReactNode;
  title: string;
  content: string;
}

const ContatoInfo: React.FC<ContatoInfoProps> = ({
  icon,
  title,
  content
}) => (
  <div className="flex items-start gap-4">
    <div className="w-10 h-10 bg-[#007BFF]/10 rounded-full flex items-center justify-center">
      {React.cloneElement(icon as React.ReactElement, {
        className: 'text-[#007BFF]'
      })}
    </div>
    <div>
      <h4 className="text-gray-300 font-medium mb-1">{title}</h4>
      <p className="text-gray-400">{content}</p>
    </div>
  </div>
);
