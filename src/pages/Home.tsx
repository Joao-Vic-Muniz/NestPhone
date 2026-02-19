import Background from '../assets/Bg_Home.png';
import Navbar from '../components/Navbar';

function Home() {
  return (
    <div 
      className="w-full min-h-screen flex flex-col bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: `url(${Background})` }}
    >
      <div className="absolute inset-0 bg-black/60 z-0"></div>

      <div className="relative z-10">
        <Navbar/> 
      </div>

      <div className="relative flex-1 flex items-center justify-center p-6">
        <div className='bg-emerald-950/40 backdrop-blur-md border border-emerald-500/20 w-full max-w-4xl rounded-3xl p-10 shadow-2xl flex flex-col items-center'>
            
            <h1 className="font-title text-emerald-400 text-4xl md:text-6xl text-center pb-4 drop-shadow-[0_2px_10px_rgba(52,211,153,0.3)]">
                Conheça a história dos Smartphones
            </h1>
            
            <div className="w-20 h-1 bg-emerald-500 mb-8 rounded-full"></div> 

            <h3 className="text-emerald-50 font-text text-lg md:text-2xl max-w-[90%] text-center leading-relaxed">
                O NestPhone é uma jornada imersiva pela história da mobilidade humana. 
                De 1973 aos dias atuais, exploramos como o celular deixou de ser um luxo 
                pesado para se tornar uma extensão da nossa inteligência. 
                Navegue por décadas de inovação, descubra os designs que definiram eras 
                e entenda a tecnologia que moldou o futuro.
            </h3>
            
            <button className="mt-10 px-10 py-3 bg-emerald-500 text-emerald-950 font-bold rounded-full hover:bg-emerald-400 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(16,185,129,0.2)]  transition-all shadow-lg duration-300">
                Começar Jornada
            </button>
        </div>
      </div>
    </div>
  )
}

export default Home;