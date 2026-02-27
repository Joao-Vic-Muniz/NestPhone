import Carousel from "../components/Carrousel"

export default function History() {
    return (
        <section
            id="history"
            className="w-full min-h-screen flex flex-col relative overflow-hidden bg-[var(--color-bg-main)]"
        >
            <div 
                className="absolute inset-0 opacity-50"
                style={{
                    backgroundImage: `
                        radial-gradient(at 0% 0%, var(--color-primary-dark) 0px, transparent 50%),
                        radial-gradient(at 100% 0%, var(--color-primary) 0px, transparent 50%),
                        radial-gradient(at 100% 100%, var(--color-bg-card) 0px, transparent 50%),
                        radial-gradient(at 0% 100%, var(--color-primary-light) 0px, transparent 50%)
                    `
                }}
            />

            <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-bg-main)]/20 via-transparent to-[var(--color-bg-main)]/20" />

            <div className="relative z-10 w-full flex-grow flex items-center justify-center">
                <Carousel />
            </div>
        </section>
    )
}