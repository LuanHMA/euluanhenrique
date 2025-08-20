import SpotlightCard from "@/components/ui/spotlight-card"
import { offers } from "@/constants/offers";

export function OfferSection() {
  return (
    <section className="min-h-screen relative bg-neutral-950 max-w-7xl mx-auto px-5 grid place-items-center py-10 sm:px-6 lg:px-8">
      <div className="w-full max-w-7xl grid gap-20 relative z-20">
        <div className="flex items-start flex-col gap-1">
          <h1 className="text-3xl text-neutral-50 text-left font-semibold  sm:text-4xl sm:text-center lg:text-5xl">O que podemos criar juntos</h1>
          <p className="text-neutral-400 text-base">Algumas soluções que eu ofereço para o seu projeto!</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {offers.map(({ Icon, description, title }, index) => (
            <SpotlightCard className="rounded-xl flex flex-col gap-3 bg-neutral-900" key={index}>
              <div className="flex items-center gap-2">
                <Icon size={40} className="text-white" />
                <div className="w-full h-px bg-gradient-to-r from-neutral-700 to-neutral-900" />
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