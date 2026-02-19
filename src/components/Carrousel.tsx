import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const historyData = [
{
    title: "O Início: A Era dos Tijolos (1973 - 1989)",
    text: "O Aparelho: Motorola DynaTAC 8000X. Ele pesava quase 1kg, levava 10 horas para carregar e a bateria durava apenas 20 minutos de conversa. Era puramente um símbolo de status para grandes empresários.",
    image: "../assets/MotorolaDynaTAC.webp",
    color: "from-emerald-900/80"
},
{
    title: "A Era da Popularização (Anos 90)",
    text: "Nokia 3310 (O Indestrutível). Inovações: Surgimento do SMS, toques polifônicos e o lendário Jogo da Cobrinha (Snake). Foi aqui que o celular deixou de ser apenas um telefone e virou um acessório pessoal.",
    image: "/caminho/para/imagem90.png",
    color: "from-emerald-900/80"
},
{
    title: "A Revolução do Design (Anos 2000)",
    text: "A era da estética: surgem os modelos Flip e Slider. O Motorola V3 (RAZR) tornou-se o ícone de luxo da época com seu corpo ultra fino. Foi o início das câmeras digitais integradas e da conectividade Bluetooth, transformando o celular em um item de moda.",
    image: "/caminho/para/imagem00.png",
    color: "from-teal-900/80"
},
{
    title: "A Reinvenção do Smartphone (2007)",
    text: "O divisor de águas: Steve Jobs apresenta o iPhone. O teclado físico morre para dar lugar à tela Multi-touch. O celular vira um computador de bolso com acesso real à internet, mapas e a App Store, definindo o padrão que usamos até hoje.",
    image: "/caminho/para/imagem2007.png",
    color: "from-emerald-800/80"
},
{
    title: "A Era da Inteligência e Conexão (Hoje)",
    text: "Telas infinitas, fotografia profissional e conexão 5G. A tecnologia atual foca em Inteligência Artificial e o retorno inovador das telas dobráveis. O smartphone agora é o centro do nosso ecossistema: banco, saúde, trabalho e lazer em um único lugar.",
    image: "/caminho/para/imagemAtual.png",
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
    <div className="relative w-full max-w-6xl mx-auto px-4 py-20 flex items-center justify-center">

      {/* Seta Esquerda */}
<button 
        onClick={prevStep}
        className="absolute left-0 z-30 p-2 text-emerald-400 hover:scale-125 transition-transform max-md:bg-emerald-950/80 rounded-full"
>
        <ChevronLeft size={48} />
</button>

      {/* Card Principal */}
<div className="w-full min-h-[500px] overflow-hidden relative">
        <AnimatePresence mode="wait">
<motion.div
            key={index}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className={`flex flex-col md:flex-row items-center bg-gradient-to-br ${historyData[index].color} to-emerald-950/40 backdrop-blur-xl border border-emerald-500/20 rounded-[3rem] p-8 md:p-12 gap-10 shadow-2xl`}
          >
            
            {/* Esquerda: Imagem Grande */}
            <div className="w-full md:w-1/2 flex justify-center">
              <img 
                src={historyData[index].image} 
                alt={historyData[index].title}
                className="w-full max-w-[350px] h-auto drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] object-contain"
              />
            </div>

            {/* Direita: Texto */}
            <div className="w-full md:w-1/2 text-left space-y-6">
              <motion.h2 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="font-title text-4xl md:text-5xl text-emerald-400"
              >
                {historyData[index].title}
              </motion.h2>
              
              <motion.p 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-emerald-50 font-text text-lg md:text-xl leading-relaxed"
              >
                {historyData[index].text}
              </motion.p>

              <div className="flex gap-2">
                 {historyData.map((_, i) => (
                   <div key={i} className={`h-1 w-8 rounded-full transition-all ${i === index ? 'bg-emerald-400' : 'bg-emerald-900'}`} />
                 ))}
              </div>
            </div>

          </motion.div>
        </AnimatePresence>
      </div>

      {/* Seta Direita */}
      <button 
        onClick={nextStep}
        className="absolute right-0 z-30 p-2 text-emerald-400 hover:scale-125 transition-transform max-md:bg-emerald-950/80 rounded-full"
      >
        <ChevronRight size={48} />
      </button>

    </div>
  );
}