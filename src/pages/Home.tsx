import { motion } from 'framer-motion'; // Importando o motion
import Background from '../assets/Bg_Home.png';
import Navbar from '../components/Navbar';

function Home() {
  return (
    <div 
      className="w-full min-h-screen flex flex-col bg-cover bg-center bg-no-repeat relative overflow-hidden"
      style={{ backgroundImage: `url(${Background})` }}
    >
      <div className="absolute inset-0 bg-black/60 z-0"></div>

      <div className="relative">
        <Navbar/> 
      </div>

      <div className="relative flex-1 flex items-center justify-center p-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className='bg-emerald-950/40 backdrop-blur-md border border-emerald-500/20 w-full max-w-4xl rounded-3xl p-10 shadow-2xl flex flex-col items-center'
        >
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="font-title text-emerald-400 text-4xl md:text-6xl text-center pb-4 drop-shadow-[0_2px_10px_rgba(52,211,153,0.3)]"
            >
                Conheça a história dos Smartphones
            </motion.h1>
            
            <motion.div 
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="w-20 h-1 bg-emerald-500 mb-8 rounded-full"
            ></motion.div> 

            <motion.h3 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="text-emerald-50 font-text text-lg md:text-2xl max-w-[90%] text-center leading-relaxed"
            >
                O NestPhone é uma jornada imersiva pela história da mobilidade humana. 
                De 1973 aos dias atuais, exploramos como o celular deixou de ser um luxo 
                pesado para se tornar uma extensão da nossa inteligência. 
                Navegue por décadas de inovação, descubra os designs que definiram eras 
                e entenda a tecnologia que moldou o futuro.
            </motion.h3>
            
            <motion.button 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="mt-10 px-10 py-3 bg-emerald-500 text-emerald-950 font-bold rounded-full hover:bg-emerald-400 transition-all shadow-lg duration-300 active:scale-95"
            >
                Começar Jornada
            </motion.button>
        </motion.div>
      </div>
    </div>
  )
}

export default Home;