import Carousel from "../components/Carrousel"

export default function History() {
    return (
        <section
            id="history"
            className="w-full min-h-screen flex flex-col relative overflow-hidden bg-emerald-950"
        >
            <div 
                className="absolute inset-0 opacity-50"
                style={{
                    backgroundImage: `
                        radial-gradient(at 0% 0%, hsla(161, 94%, 13%, 1) 0px, transparent 50%),
                        radial-gradient(at 100% 0%, hsla(163, 80%, 20%, 1) 0px, transparent 50%),
                        radial-gradient(at 100% 100%, hsla(158, 60%, 10%, 1) 0px, transparent 50%),
                        radial-gradient(at 0% 100%, hsla(165, 92%, 15%, 1) 0px, transparent 50%)
                    `
                }}
            />

            <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/20 via-transparent to-emerald-950/20" />

            <div className="relative z-10 w-full flex-grow flex items-center justify-center">
                <Carousel />
            </div>
        </section>
    )
}