import Carousel from "../components/Carrousel"
import Background from '../assets/Bg_History.png'

export default function History() {
    return (
        <section
            id="history"
            className="w-full min-h-screen flex flex-col relative overflow-hidden bg-primary-dark"
        >
            {/* Definição da Animação via CSS puro dentro do JSX */}
            <style>
                {`
                @keyframes slowPan {
                    0% { transform: scale(1); background-position: center; }
                    50% { transform: scale(1.1); background-position: left bottom; }
                    100% { transform: scale(1); background-position: center; }
                }
                .bg-animate-infinite {
                    animation: slowPan 20s ease-in-out infinite;
                }
                `}
            </style>

            {/* Div do Fundo Animado */}
            <div 
                className="absolute inset-0 w-full h-full bg-cover bg-no-repeat bg-animate-infinite"
                style={{ 
                    backgroundImage: `url(${Background})`,
                    filter: 'brightness(0.6)' // Ajusta o brilho para destacar o carrossel
                }}
            />

            {/* Conteúdo (Carrossel) */}
            <div className="relative z-10 w-full flex-grow flex items-center justify-center">
                <Carousel />
            </div>
        </section>
    )
}