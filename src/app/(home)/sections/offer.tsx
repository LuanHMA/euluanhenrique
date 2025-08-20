import SpotlightCard from "@/components/ui/spotlight-card"

import {
  ChartBarIcon,
  DevicesIcon,
  BracketsAngleIcon,
  BuildingsIcon,
  RocketLaunchIcon,
  CloudCheckIcon
} from "@phosphor-icons/react/dist/ssr";

const offers = [
  {
    title: "Dashboards Interativos",
    description:
      "Interfaces ricas com gráficos, filtros e navegação fluida — ideais para análise e visualização de dados em tempo real.",
    Icon: ChartBarIcon
  },
  {
    title: "Desenvolvimento de Interface",
    description:
      "Criação de interfaces responsivas, acessíveis e modernas, com adaptação total entre mobile e desktop.",
    Icon: DevicesIcon
  },
  {
    title: "Design to Code",
    description:
      "Conversão fiel de designs em código funcional — pixel perfect, com atenção aos detalhes e à performance.",
    Icon: BracketsAngleIcon
  },
  {
    title: "Sites Institucionais",
    description:
      "Desenvolvimento com foco em SEO, acessibilidade, performance e presença digital sólida para sua marca.",
    Icon: BuildingsIcon
  },
  {
    title: "Landing Pages",
    description:
      "Criação de páginas de alta conversão, com carregamento rápido, estrutura escalável e SEO técnico eficiente.",
    Icon: RocketLaunchIcon
  },
  {
    title: "SaaS e MicroSaaS",
    description:
      "Desenvolvimento de aplicações escaláveis com arquitetura moderna, deploy automatizado e código sustentável.",
    Icon: CloudCheckIcon
  }
];


export function OfferSection() {
    return (
        <section className="min-h-screen relative bg-neutral-950 max-w-7xl mx-auto px-5 grid place-items-center py-10 sm:px-6 lg:px-8">
            <div className="w-full max-w-7xl grid gap-20 relative z-20">
                <div className="flex items-start flex-col gap-1">
                    <h1 className="text-3xl text-neutral-50 sm:text-4xl">O que podemos criar juntos</h1>
                    <p className="text-neutral-400 text-base">Algumas soluções que eu ofereço para o seu projeto!</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {offers.map(({ Icon, description, title }, index) => (
                        <SpotlightCard className="rounded-xl flex flex-col gap-3 bg-neutral-900" key={index}>
                            <div className="flex items-center gap-2">
                                <Icon size={40} className="text-white"/>
                                <div className="w-full h-px bg-gradient-to-r from-neutral-700 to-neutral-900"/>
                            </div>
                            <h1 className="text-neutral-50 text-xl font-semibold">{title}</h1>
                            <h2 className="text-neutral-400">{description}</h2>
                        </SpotlightCard>
                    ))}
                </div>
            </div>
        </section>
    )
}