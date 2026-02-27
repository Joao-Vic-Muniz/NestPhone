// pages/Outros.tsx
import StatsCard from "../components/StatsCard"
import { Users, Smartphone, Package, Globe, Cpu, BarChart3 } from "lucide-react"

export default function Outros() {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white" id="other">
      
      <main className="flex-grow px-6 md:px-16 py-16">
        
        <h1 className="text-4xl font-text mb-12 text-center">
          Curiosidades
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 font-text">
          
          <StatsCard
            title="Usuários"
            value={1284}
            icon={<Users size={20} color="blue" />}
            description="Total de usuários cadastrados"
          />

          <StatsCard
            title="Telefones"
            value={342}
            icon={<Smartphone size={20} color="blue" />}
            description="Aparelhos registrados"
          />

          <StatsCard
            title="Modelos"
            value={87}
            icon={<Package size={20} color="blue" />}
            description="Modelos diferentes cadastrados"
          />

          <StatsCard
            title="Países"
            value={24}
            icon={<Globe size={20} color="blue" />}
            description="Mercados atendidos"
          />

          <StatsCard
            title="Processadores"
            value={56}
            icon={<Cpu size={20} color="blue" /> }
            description="Tipos diferentes catalogados"
          />

          <StatsCard
            title="Análises"
            value="1.2K"
            icon={<BarChart3 size={20} color="blue" />}
            description="Relatórios gerados"
          />

        </div>
      </main>

      <footer className="border-t border-zinc-800 py-6 text-center text-zinc-500 text-sm">
        © {new Date().getFullYear()} Evolução dos Celulares. Todos os direitos reservados.
      </footer>

    </div>
  )
}