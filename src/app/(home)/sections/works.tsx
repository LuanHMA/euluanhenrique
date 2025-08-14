"use client"

import { projects } from "@/constants/work-list"
import { ArrowRightIcon, StarFourIcon } from "@phosphor-icons/react/dist/ssr"
import { motion } from "framer-motion"
import Image from "next/image"
import { useState } from "react"

export function MyWorksSection() {
  const [activeProject, setActiveProject] = useState(0)

  return (
    <section className="min-h-screen relative text-neutral-50 bg-neutral-950 max-w-6xl mx-auto px-5 grid place-items-center py-10 sm:px-6 lg:px-8 lg:pb-20">
      <div className="w-full max-w-6xl grid gap-20 relative z-20">
        <div className="flex items-start flex-col gap-1 sm:items-center">
          <h1 className="text-3xl text-neutral-50 text-left sm:text-4xl sm:text-center">Meus Trabalhos</h1>
          <p className="text-neutral-400 text-base text-left sm:text-center">
            Conheça alguns projetos que já desenvolvi ou participei do desenvolvimento!
          </p>
        </div>

        <div className="flex w-full items-start gap-10">
          <div className="w-full grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-1 space-y-8 lg:w-[60%] lg:space-y-0 ">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="flex flex-wrap items-start gap-10 w-full lg:flex-row lg:flex-nowrap"
                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                onViewportEnter={() => {
                  if (window.innerWidth >= 1024) {
                    setActiveProject(index)
                  }
                }}
              >
                <div className="rounded-xl h-72 lg:h-[450px] w-full group overflow-hidden gap-3 relative border-2 border-neutral-800 p-2 bg-neutral-900 lg:my-4">
                  <div
                    className={`flex flex-col items-center justify-center bg-gradient-to-b overflow-hidden relative rounded-xl ${project.style.gradient} w-full h-full`}
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={500}
                      height={500}
                      className="rounded-md absolute -bottom-4 group-hover:rotate-3 group-hover:scale-105 transition-all shadow-lg shadow-blue-400 w-11/12 h-full"
                    />
                  </div>
                </div>

                <div className="flex flex-col w-full items-start gap-2 lg:hidden">
                  <div className="flex items-center gap-3">
                    <div className={`w-6 h-1 ${project.style.bg} rounded-lg`} />
                    <h1 className="text-neutral-50 text-2xl font-semibold">{project.title}</h1>
                  </div>

                  <div className="sm:ml-8 space-y-4">
                    <p className="text-neutral-400">{project.description}</p>

                    <div className="flex items-center flex-wrap gap-3">
                      {project.tecnologias.map((tech, techIndex) => (
                        <div
                          key={techIndex}
                          className="flex items-center gap-2 text-white bg-neutral-900 px-3 py-1 rounded-full backdrop-blur-sm border border-white/10"
                        >
                          <img src={tech.icon} alt={tech.nome} width={20} height={20} />
                          <p className="text-sm">{tech.nome}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div
            className="gap-2 sticky top-80 mt-6 hidden lg:flex lg:flex-col lg:items-start lg:w-[40%]"
          >
            <div className="flex items-center gap-3">
              <div className={`w-6 h-1 ${projects[activeProject].style.bg} rounded-lg`} />
              <h1 className="text-neutral-50 text-2xl font-semibold">{projects[activeProject].title}</h1>
            </div>

            <div className="sm:ml-8 space-y-4">
              <p className="text-neutral-400">{projects[activeProject].description}</p>

              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm">
                  <StarFourIcon weight="fill" size={14} className={`${projects[activeProject].style.text}`} />
                  Layout 100% responsivo com foco em conversão.
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <StarFourIcon weight="fill" size={14} className={`${projects[activeProject].style.text}`} />
                  Integração com ferramentas de marketing (landing pages, captura de leads, extensões).
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <StarFourIcon weight="fill" size={14} className={`${projects[activeProject].style.text}`} />
                  Estrutura otimizada para SEO e carregamento rápido.
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <StarFourIcon weight="fill" size={14} className={`${projects[activeProject].style.text}`} />
                  Estilo visual moderno e alinhado com o público do marketing digital.
                </li>
              </ul>

              <div

                className="flex items-center flex-wrap gap-3"
              >
                {projects[activeProject].tecnologias.map((tech, techIndex) => (
                  <motion.div
                    key={techIndex}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex items-center gap-2 text-white bg-neutral-900 px-3 py-1 rounded-full backdrop-blur-sm border border-white/10"
                  >
                    <img src={tech.icon} alt={tech.nome} width={20} height={20} />
                    <p className="text-sm">{tech.nome}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="relative overflow-hidden group flex items-center cursor-pointer gap-2 text-white bg-white/10 px-6 py-3 rounded-full backdrop-blur-sm border w-52 mx-auto border-white/10 hover:border-neutral-500 transition-all duration-300 ease-in-out"
        >
          <span
            className="absolute top-0 rotate-45 left-[-100%] w-full h-full bg-white/20 bg-radial blur from-bg-white/20 to-transparent group-hover:left-full transition-all duration-1200 ease-in-out "
            aria-hidden="true"
          />
          <span className="relative z-10 flex items-center">
            Ver mais projetos
            <ArrowRightIcon size={20} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
          </span>
        </motion.button>
      </div>
    </section>
  )
}
