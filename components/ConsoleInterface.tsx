"use client";
import React, { useState, useRef, useEffect } from 'react';
import Slider from "react-slick";
interface ConsoleOption {
  label: string;
  command: string;
  content: React.ReactNode;
}

const ConsoleInterface: React.FC = () => {
  const [typedCommand, setTypedCommand] = useState('');
  const [currentContent, setCurrentContent] = useState<React.ReactNode | null>(null);
  const [isTyping, setIsTyping] = useState(false); // Nuevo estado para controlar si se está escribiendo

  const consoleOptions: ConsoleOption[] = [
    {
    label: 'About Me',
    command: 'show-aboutme',
    content: <div className="space-y-6 text-center bg-black p-6 rounded-lg max-w-4xl mx-auto">
    <div className="space-y-4">
      <div>
        <h3 className="text-green-400 font-bold text-lg">About Me</h3>
        <p className="text-gray-400 pt-4 text-sm leading-relaxed">
          Passionate about cybersecurity, especially in digital investigation using OSINT and Red Teaming. 
          I’m an active learner on TryHackMe, completing courses related to these topics. Previously, I was deeply interested in Artificial Intelligence, 
          which led me to pursue a Higher National Diploma (HND) in AI. Starting next academic year, I’ll complete a degree in Data Engineering and Hacking. 
          Additionally, I’m currently studying for a C1-level English certification.
        </p>
      </div>
    
              {/* Carrusel con React Slick */}
              <div>
                <h3 className="text-green-400  py-4 font-bold">Skills & Tools</h3>
                <Slider
                  infinite={true}
                  speed={500}
                  fade={true}
                  autoplay={true}
                  autoplaySpeed={1000}  // 2 segundos entre desplazamientos
                  arrows={false}  // Eliminar las flechas
                >
                  <div className="text-gray-400 py-2 px-4 rounded-lg text-sm min-w-[120px]">
                    OSINT
                  </div>
                  <div className="text-gray-400 py-2 px-4 rounded-lg text-sm min-w-[120px]">
                    Red Teaming
                  </div>
                  <div className="text-gray-400 py-2 px-4 rounded-lg text-sm min-w-[120px]">
                    Linux
                  </div>
                  <div className="text-gray-400 py-2 px-4 rounded-lg text-sm min-w-[120px]">
                    Cybersecurity
                  </div>
                  <div className="text-gray-400 py-2 px-4 rounded-lg text-sm min-w-[120px]">
                    Burp Suite
                  </div>
                  <div className="text-gray-400 py-2 px-4 rounded-lg text-sm min-w-[120px]">
                    Metasploit
                  </div>
                  <div className="text-gray-400 py-2 px-4 rounded-lg text-sm min-w-[120px]">
                    Maltego
                  </div>
                  <div className="text-gray-400 py-2 px-4 rounded-lg text-sm min-w-[120px]">
                    Python
                  </div>
                  <div className="text-gray-400 py-2 px-4 rounded-lg text-sm min-w-[120px]">
                    Wireshark
                  </div>
                  <div className="text-gray-400 py-2 px-4 rounded-lg text-sm min-w-[120px]">
                    Penetration Testing
                  </div>
                </Slider>
              </div>
            </div>
          </div>
  },
    {
      label: 'Work experience',
      command: 'show-experience',
      content: (
        <div className="space-y-6 bg-black p-6 rounded-lg overflow-hidden max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-4 rounded-lg hover:bg-gray-900 relative">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-green-800 rounded-lg"></div>
            <div className="w-full">
              <h3 className="text-green-100 font-bold text-lg mb-2">Full Stack Developer Intern</h3>
              <p className="text-green-400 text-sm mb-1">Indra · Full-time</p>
              <p className="text-gray-500 text-xs">Mar 2023 - Jun 2023 · 4 months</p>
              <p className="text-gray-400">Alcobendas, Madrid · Remote</p>
              <ul className="list-disc pl-5 mt-2 text-gray-400 text-xs">
                <li>Developed web applications using Liferay.</li>
                <li>Worked with MariaDB for database management.</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-4 p-2 rounded-lg hover:bg-gray-900 relative">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-green-800 rounded-lg"></div>
            <div className="w-full">
              <h3 className="text-green-100 font-bold text-lg mb-2">IT Technician Intern</h3>
              <p className="text-green-400 text-sm mb-1">Hospital Universitario Rey Juan Carlos</p>
              <p className="text-gray-500 text-xs">Apr 2021 - Jun 2021 · 3 months</p>
              <p className="text-gray-400">Móstoles, Madrid</p>
            </div>
          </div>
        </div>

      ),
    },
    {
      label: 'Education',
      command: 'show-education',
      content: (
        <div className="space-y-6 bg-black p-6 rounded-lg overflow-hidden max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-4 p-2 rounded-lg hover:bg-gray-900 relative">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-green-800 rounded-lg"></div>
            <div className="w-full">
              <h3 className="text-green-100 font-bold text-lg mb-2">
                Higher National Diploma in Computing & AI
              </h3>
              <p className="text-green-400 text-sm mb-1">MSMK</p>
              <p className="text-gray-500 text-xs">Oct 2023 - Jun 2025</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-4 p-2 rounded-lg hover:bg-gray-900 relative">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-green-800 rounded-lg"></div>
            <div className="w-full">
              <h3 className="text-green-100 font-bold text-lg mb-2">
                CFGS Advanced Vocational Degree in Application Development
              </h3>
              <p className="text-green-400 text-sm mb-1">CES Juan Pablo II</p>
              <p className="text-gray-500 text-xs">Sep 2021 - Jun 2023</p>
              <p className="text-green-400 text-xs bg-green-900/30 px-2 py-1 my-2 rounded-full inline-block">
                Grade: 8.14/10
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      label: 'Certifications',
      command: 'show-certifications',
      content: (
        <div className="space-y-6 bg-black p-6 rounded-lg overflow-hidden max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-4 p-2 rounded-lg hover:bg-gray-900 relative">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-green-800 rounded-lg"></div>
            <div className="w-full">
              <h3 className="text-green-100 font-bold text-lg mb-2">
                Jr Penetration Tester Certificate
              </h3>
              <p className="text-green-400 text-sm mb-1">TryHackMe</p>
              <p className="text-gray-500 text-xs">Issued: Jan 2025</p>
              <p className="text-gray-400">
                Credential:{" "}
                <a
                  href="https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-MRGLEKCGAL.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-gray-300 hover:text-green-300"
                >
                  <b>
                    <i>Link</i>
                  </b>
                </a>
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-4 p-2 rounded-lg hover:bg-gray-900 relative">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-green-800 rounded-lg"></div>
            <div className="w-full">
              <h3 className="text-green-100 font-bold text-lg mb-2">
                Deep Learning: Advanced NLP and RNNs
              </h3>
              <p className="text-green-400 text-sm mb-1">Udemy</p>
              <p className="text-gray-500 text-xs">Issued: Feb 2024</p>
              <p className="text-gray-400">
                Credential:{" "}
                <a
                  href="https://www.udemy.com/certificate/UC-40c1bdd8-c3a6-4ca3-8081-746ef914c7b5/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-gray-300 hover:text-green-300"
                >
                  <b>
                    <i>Link</i>
                  </b>
                </a>
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      label: 'Contact',
      command: 'show-contact',
      content: (
        <div className="space-y-6 bg-black p-6 rounded-lg overflow-hidden max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-4 p-2 rounded-lg hover:bg-gray-900 relative">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-green-800 rounded-lg"></div>
            <div className="w-full">
              <h3 className="text-green-100 font-bold text-lg mb-2">Contact Information</h3>
              <p className="text-green-400">
                Email:{" "}
                <a href="mailto:imartin.desarrollo@gmail.com" className="text-gray-400">
                  <i>imartin.desarrollo@gmail.com</i>
                </a>
              </p>
              <p className="text-green-400">
                Phone: <i className="text-gray-400">+34 659 86 56 17</i>
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-4 p-2 rounded-lg hover:bg-gray-900 relative">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-green-800 rounded-lg"></div>
            <div className="w-full">
              <h3 className="text-green-100 font-bold text-lg mb-2">Social Media</h3>
              <p className="text-green-400">
                LinkedIn:{" "}
                <a
                  href="www.linkedin.com/in/ivan-lumbreras-martin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400"
                >
                  <i>www.linkedin.com/in/ivan-lumbreras-martin</i>
                </a>
              </p>
              <p className="text-green-400">
                GitHub:{" "}
                <a
                  href="https://github.com/IvanDev-ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400"
                >
                  <i>https://github.com/IvanDev-ai</i>
                </a>
              </p>
            </div>
          </div>
        </div>
      ),
    },
  ];

  const handleOptionSelect = (option: ConsoleOption) => {
    if (isTyping) return; // No permite seleccionar otro botón mientras se escribe
    setIsTyping(true);

    let currentText = '';
    const commandText = `> ${option.command}`;

    const typeCommand = () => {
      if (currentText.length < commandText.length) {
        currentText = commandText.slice(0, currentText.length + 1);
        setTypedCommand(currentText);

        setTimeout(typeCommand, 50);
      } else {
        setCurrentContent(option.content);
        setIsTyping(false); // Desbloquea los botones
      }
    };

    typeCommand();
  };

  return (
    <div className="bg-black/90 text-green-500 font-mono p-6 rounded-xl shadow-2xl w-full max-w-[1400px] h-[700px] border border-green-800 relative">
  
  {/* Cabecera de la consola */}
  <div className="console-header flex justify-between mb-4 flex-wrap">
    <span className="text-sm flex items-center space-x-2">
      <span className="text-xl">🖥️</span>
      <span>Digital Investigator Console</span>
    </span>
    <div className="flex space-x-2">
      <span className="w-3 h-3 bg-red-500 rounded-full"></span>
      <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
      <span className="w-3 h-3 bg-green-500 rounded-full"></span>
    </div>
  </div>

  {/* Opciones */}
  <div className="console-options grid sm:grid-cols-1 md:grid-cols-2 gap-4 mb-4">
    {consoleOptions.map((option) => (
      <button
        key={option.command}
        onClick={() => handleOptionSelect(option)}
        disabled={isTyping}
        className={`${
          isTyping
            ? 'bg-green-900/50 cursor-not-allowed'
            : 'bg-green-900/30 hover:bg-green-800/50'
        } text-green-300 py-2 px-3 rounded transition-all flex items-center space-x-2 ${
          option.command === 'show-aboutme' ? 'col-span-2 justify-center text-center' : ''
        }`}
      >
        <span>⚡</span>
        <span>{option.label}</span>
      </button>
    ))}
  </div>

  {/* Consola de salida */}
  <div className="console-output mt-4 bg-black/50 p-4 rounded h-[60%] overflow-y-auto md:overflow-hidden">
    <div className="typed-command text-lg">
      {typedCommand}
      <span className="animate-pulse">|</span>
    </div>

    {currentContent && (
      <div className="content mt-4">{currentContent}</div>
    )}
  </div>

  {/* Pie de página de la consola */}
  <div className="absolute bottom-2 right-4 text-sm text-green-600 italic">
    Hunting vulnerabilities, securing networks 🕵️‍♂️
  </div>
</div>

  );
};

export default ConsoleInterface;
