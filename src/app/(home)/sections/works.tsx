"use client"

import { projects } from "@/constants/work-list"
import { ArrowRightIcon, StarFourIcon } from "@phosphor-icons/react/dist/ssr"
import { motion } from "motion/react"
import Image from "next/image"
import { useEffect, useState } from "react"

export function MyWorksSection() {

  return (
    <section className="min-h-screen relative text-neutral-50 bg-neutral-950 max-w-6xl mx-auto px-5 grid place-items-center py-10 sm:px-6 lg:px-8">
      <div className="w-full max-w-6xl grid gap-20 relative z-20">
        <div className="flex items-center flex-col gap-1">
          <h1 className="text-3xl text-neutral-50 sm:text-4xl">Meus Trabalhos</h1>
          <p className="text-neutral-400 text-base">
            Conheça alguns projetos que já desenvolvi ou participei do desenvolvimento!
          </p>
        </div>

        <div className="flex w-full items-start gap-10">
          <div className="w-[60%]">
            {projects.map((project, index) => {
              return (
                <div key={index} className="flex items-start gap-10 w-full">
                  <div className="rounded-xl h-[450px] w-full group  overflow-hidden gap-3 relative border-2 border-neutral-800 p-2 bg-neutral-900 sm:my-4">
                    <div className={`flex flex-col items-center justify-center bg-gradient-to-b overflow-hidden relative rounded-xl ${project.style.gradient} w-full h-full`}>
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={500}
                        height={500}
                        className="rounded-xl absolute -bottom-4 group-hover:rotate-3 group-hover:scale-105 transition-all shadow-lg shadow-blue-400"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col w-[40%] items-start gap-2 sm:hidden">
                    <div className="flex items-center gap-3">
                      <div className={`w-6 h-1 ${project.style.bg} rounded-lg`} />
                      <h1 className="text-neutral-50 text-2xl font-semibold">{project.title}</h1>
                    </div>

                    <div className="sm:ml-8 space-y-4">
                      <p className="text-neutral-400">{project.description}</p>

                      <ul className="space-y-2">
                        <li className="flex items-center gap-2 text-sm">
                          <StarFourIcon weight="fill" className={`${project.style.text}`} />
                          Layout 100% responsivo com foco em conversão.
                        </li>
                        <li className="flex items-center gap-2 text-sm">
                          <StarFourIcon weight="fill" className={`${project.style.text}`} />
                          Integração com ferramentas de marketing (landing pages, captura de leads, extensões).
                        </li>
                        <li className="flex items-center gap-2 text-sm">
                          <StarFourIcon weight="fill" className={`${project.style.text}`} />
                          Estrutura otimizada para SEO e carregamento rápido.
                        </li>
                        <li className="flex items-center gap-2 text-sm">
                          <StarFourIcon weight="fill" className={`${project.style.text}`} />
                          Estilo visual moderno e alinhado com o público do marketing digital.
                        </li>
                      </ul>

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
                </div>
              )
            })}
          </div>8 

          <div className="flex flex-col w-[40%] items-start gap-2 sticky top-20 mt-6">
            <div className="flex items-center gap-3">
              <div className={`w-6 h-1 ${projects[0].style.bg} rounded-lg`} />
              <h1 className="text-neutral-50 text-2xl font-semibold">{projects[0].title}</h1>
            </div>

            <div className="sm:ml-8 space-y-4">
              <p className="text-neutral-400">{projects[0].description}</p>

              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm">
                  <StarFourIcon weight="fill" className={`${projects[0].style.text}`} />
                  Layout 100% responsivo com foco em conversão.
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <StarFourIcon weight="fill" className={`${projects[0].style.text}`} />
                  Integração com ferramentas de marketing (landing pages, captura de leads, extensões).
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <StarFourIcon weight="fill" className={`${projects[0].style.text}`} />
                  Estrutura otimizada para SEO e carregamento rápido.
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <StarFourIcon weight="fill" className={`${projects[0].style.text}`} />
                  Estilo visual moderno e alinhado com o público do marketing digital.
                </li>
              </ul>

              <div className="flex items-center flex-wrap gap-3">
                {projects[0].tecnologias.map((tech, techIndex) => (
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
