import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import MotorolaDynaTAC from '../assets/MotorolaDynaTAC.png'
import Nokia3310 from '../assets/Nokia3310.png'
import MotorolaV3 from '../assets/MotorolaV3.png'
import Iphone from '../assets/Iphone2007.png'
import S25 from '../assets/s25.png'

const historyData = [
  {
    title: "O Início: A Era dos Tijolos (1973 - 1989)",
    text: "Um ícone que redefiniu a comunicação. Com quase 1kg e 20 minutos de autonomia de conversação, o DynaTAC era mais que um telefone: era uma declaração de status. Sua bateria de 10 horas de recarga contrastava com a liberdade de uma conversa móvel, acessível apenas a uma elite. Representava o primeiro passo para a conectividade que hoje consideramos essencial.",
    image: MotorolaDynaTAC,
    color: "from-emerald-900/80"
  },
  {
    title: "A Era da Popularização (Anos 90)",
    text: "Mais do que um fenômeno de vendas, o 3310 consolidou a transição do celular de ferramenta corporativa para acessório indispensável. Introduziu inovações que moldaram a cultura digital, como a popularização do SMS, os toques polifônicos e o icônico jogo Snake. Sua durabilidade lendária e design ergonômico o tornaram o primeiro grande símbolo da conectividade pessoal em massa.",
    image: Nokia3310,
    color: "from-emerald-900/80"
  },
  {
    title: "A Era da Estética e Conectividade (Anos 2000)",
    text: "Este período marcou a ascensão do design como um diferencial crucial. O Motorola V3, com seu corpo ultrafino e acabamento metálico, transcendeu a funcionalidade para se tornar um símbolo de status e moda. Sua popularidade impulsionou a integração de tecnologias como câmeras digitais e conectividade Bluetooth, solidificando o celular como um item de desejo e personalização.",
    image: MotorolaV3,
    color: "from-teal-900/80"
  },
  {
    title: "A Reinvenção do Smartphone (2007)",
    text: "O lançamento do iPhone original redefiniu a computação móvel ao introduzir a interface multi-touch, eliminando a dependência de teclados físicos. Ao integrar hardware de performance com um sistema fluido, o dispositivo consolidou comunicação avançada, entretenimento e navegação web completa num único chassi de alumínio e vidro. Um marco que estabeleceu os padrões globais da indústria.",
    image: Iphone,
    color: "from-emerald-800/80"
  },
  {
    title: "A Era da Inteligência e Conexão (Hoje)",
    text: "A tecnologia contemporânea transcende o hardware, consolidando o smartphone como o núcleo de um ecossistema integrado. Com telas infinitas de altíssima fidelidade, fotografia profissional e 5G, o foco agora desloca-se para a Inteligência Artificial e telas dobráveis. Hoje, o aparelho é uma extensão essencial da vida humana, centralizando finanças, saúde e trabalho em uma interface única.",
    image: S25,
    color: "from-green-900/80"
  }
];

export default function Carousel() {
  const [index, setIndex] = useState(0);

  const nextStep = () => {
    setIndex((prev) => (prev === historyData.length - 1 ? 0 : prev + 1));
  };

  const prevStep = () => {
    setIndex((prev) => (prev === 0 ? historyData.length - 1 : prev - 1));
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-transparent py-6 md:py-10">
      <div className="relative w-full max-w-7xl mx-auto px-4 md:px-24 flex items-center justify-center">
        
        <button 
          onClick={prevStep}
          className="hidden md:block absolute left-2 md:left-4 z-30 p-2 text-emerald-400 hover:scale-110 transition-transform active:scale-90"
        >
          <ChevronLeft size={64} strokeWidth={1} />
        </button>

        <div className="w-full min-h-[650px] md:min-h-[550px] flex items-center overflow-hidden relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className={`flex flex-col md:flex-row items-center w-full bg-gradient-to-br ${historyData[index].color} to-emerald-950/20 backdrop-blur-md border border-white/10 rounded-[2.5rem] md:rounded-[3.5rem] p-8 md:p-16 gap-8 md:gap-12 shadow-2xl`}
            >
              
              <div className="w-full md:w-1/2 flex justify-center items-center">
                <motion.img 
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  key={historyData[index].image}
                  src={historyData[index].image} 
                  alt={historyData[index].title}
                  className="max-h-60 md:max-h-80 w-auto drop-shadow-[0_20px_50px_rgba(0,0,0,0.6)] object-contain rounded-3xl shadow-lg"
                />
              </div>

              <div className="w-full md:w-1/2 text-center md:text-left space-y-4 md:space-y-6">
                <motion.h2 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="font-title text-2xl md:text-5xl text-action leading-tight"
                >
                  {historyData[index].title}
                </motion.h2>
                
                <motion.p 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="text-emerald-50 font-text text-base md:text-xl leading-relaxed"
                >
                  {historyData[index].text}
                </motion.p>

                <div className="flex flex-col md:flex-row items-center justify-between gap-8 pt-4">
                   <div className="flex gap-2">
                      {historyData.map((_, i) => (
                        <button
                          key={i}
                          onClick={() => setIndex(i)}
                          className={`h-2 rounded-full transition-all duration-500 ${i === index ? 'w-10 bg-emerald-400' : 'w-3 bg-emerald-900/50 hover:bg-emerald-700'}`} 
                        />
                      ))}
                   </div>

                   <div className="flex md:hidden gap-10">
                      <button 
                        onClick={prevStep} 
                        className="p-3 text-emerald-400 border border-emerald-400/30 rounded-full active:bg-emerald-400/20"
                      >
                        <ChevronLeft size={28} />
                      </button>
                      <button 
                        onClick={nextStep} 
                        className="p-3 text-emerald-400 border border-emerald-400/30 rounded-full active:bg-emerald-400/20"
                      >
                        <ChevronRight size={28} />
                      </button>
                   </div>
                </div>
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

        <button 
          onClick={nextStep}
          className="hidden md:block absolute right-2 md:right-4 z-30 p-2 text-emerald-400 hover:scale-110 transition-transform active:scale-90"
        >
          <ChevronRight size={64} strokeWidth={1} />
        </button>
      </div>
    </div>
  );
}