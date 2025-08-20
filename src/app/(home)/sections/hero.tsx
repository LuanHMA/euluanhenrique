"use client"

import Beams from "@/components/ui/beams-background";
import { ArrowRightIcon } from "@phosphor-icons/react/dist/ssr";
import { motion } from "motion/react"

export function HeroSection() {
  const heroTitle = "Transforme suas ideias em soluções digitais impactantes e funcionais"
  const titleBreaked = heroTitle.split(" ");

  return (
    <>
      <section className="min-h-screen relative grid place-items-center bg-neutral-950 mx-auto px-4 sm:px-6 lg:px-8" id="hero">
        <div className="absolute h-44 w-full"/>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 0.3 }} transition={{ duration: 2, delay: 1.8 }} className="absolute inset-0 w-full h-full z-20">
          <Beams
            beamWidth={2}
            beamHeight={15}
            beamNumber={12}
            lightColor="#ffff"
            speed={2}
            noiseIntensity={1.75}
            scale={0.2}
            rotation={30}
          />
        </motion.div>
        <div className="w-full max-w-7xl mx-auto relative z-20">
          <div className="relative z-20 space-y-10 flex flex-col items-center justify-center text-center px-4">
            <div className="space-y-4">
              <h1>
                {titleBreaked.map((word, index) => (
                  <motion.span
                    initial={{ filter: "blur(5px)", opacity: 0, y: 4 * index }}
                    animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                    transition={{ duration: .4, delay: 0.1 * index, ease: "easeInOut" }}
                    key={index}
                    className={`mr-2 text-4xl sm:text-5xl lg:text-6xl leading-tight text-white inline-block sm:mr-4 font-medium`}
                  >
                    {word}
                  </motion.span>
                ))}
              </h1>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.5 }}
                className="fonbt-medium text-lg sm:text-xl lg:text-2xl bg-gradient-to-b from-white to-neutral-400 bg-clip-text text-transparent"
              >
                Olá, eu sou Luan Henrique, Front-end Developer
              </motion.h2>
            </div>


            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.5 }}
              className="relative overflow-hidden group flex items-center cursor-pointer gap-2 text-white bg-white/10 px-6 py-3 rounded-full backdrop-blur-sm border border-white/10 hover:border-neutral-500 transition-all duration-300 ease-in-out"
            >
              <span
                className="absolute top-0 rotate-45 left-[-100%] w-full h-full bg-white/20 bg-radial blur from-bg-white/20 to-transparent group-hover:left-full transition-all duration-1200 ease-in-out "
                aria-hidden="true"
              />

              <span className="relative z-10 flex items-center">
                Fale Comigo
                <ArrowRightIcon size={20} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </motion.button>
          </div>
        </div>

        <div className="absolute bg-gradient-to-b from-transparent to-neutral-950 bottom-0 w-full h-20 z-20">

        </div>
      </section>

    </>
  );
}