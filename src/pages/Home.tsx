import { motion } from 'framer-motion';
import Background from '../assets/Bg_Home.png';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <section
      id='home'
      className="w-full min-h-screen flex flex-col bg-cover bg-center bg-no-repeat relative overflow-hidden"
      style={{ backgroundImage: `url(${Background})` }}
    >
      <div className="absolute inset-0 bg-black/70 z-0"></div>

      <div className="relative">
        <Navbar/> 
      </div>

      <div className="relative flex-1 flex items-center justify-center mt-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className='bg-bg-card backdrop-blur-md border border-[var(--color-primary)]/20 w-full max-w-4xl rounded-3xl p-10 shadow-2xl flex flex-col items-center mx-6 mb-6'
        >
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="font-title text-[var(--color-primary-light)] text-4xl md:text-6xl text-center pb-4 drop-shadow-[0_2px_10px_rgba(37,99,235,0.3)]"
            >
                Conheça a história dos Smartphones
            </motion.h1>
            
            <motion.div 
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="w-20 h-1 bg-[var(--color-primary)] mb-8 rounded-full"
            ></motion.div> 

            <motion.h3 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="text-[var(--color-text-main)] font-text text-lg md:text-2xl max-w-[90%] text-center leading-relaxed"
            >
                O NestPhone é uma jornada imersiva pela história da mobilidade humana. 
                De 1973 aos dias atuais, exploramos como o celular deixou de ser um luxo 
                pesado para se tornar uma extensão da nossa inteligência. 
                Navegue por décadas de inovação, descubra os designs que definiram eras 
                e entenda a tecnologia que moldou o futuro.
            </motion.h3>
            
            <motion.a 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              href='#history'
              className="mt-10 px-10 py-3 bg-[var(--color-primary)] text-[var(--color-bg-main)] font-bold rounded-full hover:bg-[var(--color-primary-light)] transition-all shadow-lg duration-300 active:scale-95"
            >
                Começar Jornada
            </motion.a>
        </motion.div>
      </div>
    </section>
  )
}