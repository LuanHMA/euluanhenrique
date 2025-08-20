"use client"

import { projects } from "@/constants/work-list"
import { ArrowRightIcon } from "@phosphor-icons/react/dist/ssr"
import { motion } from "framer-motion"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"

export function MyWorksSection() {
  const [activeProject, setActiveProject] = useState(0)
  const worksImage = useRef<(HTMLDivElement | null)[]>([])//Armazena o index de todas as imagens

  useEffect(() => {
    if (window.innerWidth < 1024) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {// O entry agora é a imagem a ser observada, quando o threshold é atingido, irá executar a logica abaixo.
          const index = Number(entry.target.getAttribute("data-index"))// Armazena o index da imagem, adicionado via "key" no map dos projetos
          if (entry.isIntersecting) {// Se a imagem estiver visível, atualiza o conteudo ativo.
            setActiveProject(index)
          }
        })
      },
      {
        root: null,//Objeto a ser observado (se for "null", considera o viewport da tela)
        threshold: 0.9,//Quanto do elemento precisa estar visível para disparar o callback (0 até 1)
        rootMargin: "-100px 0px -100px 0px", // ajusta a area do elemento
      }
    )

    worksImage.current.forEach((ref) => {// Observa todas as imagens, uma de cada vez
      if (ref) observer.observe(ref)
    })

    return () => {
      worksImage.current.forEach((ref) => {
        if (ref) observer.unobserve(ref)
      })
    }
  }, [])

  return (
    <section className="min-h-screen relative text-neutral-50 bg-neutral-950 max-w-6xl mx-auto px-5 grid place-items-center py-10 sm:px-6 lg:px-8 lg:pb-44">
      <div className="w-full max-w-6xl grid gap-20 relative z-20">
        {/* Título */}
        <div className="flex items-start flex-col gap-1 sm:items-center">
          <h1 className="text-3xl text-neutral-50 text-left sm:text-4xl sm:text-center">Meus Trabalhos</h1>
          <p className="text-neutral-400 text-base text-left sm:text-center">
            Conheça alguns projetos que já desenvolvi ou participei do desenvolvimento!
          </p>
        </div>

        <div className="flex w-full items-start gap-10">
          {/* Lista de projetos */}
          <div className="w-full grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-1 space-y-8 lg:w-[60%] lg:space-y-0">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                ref={(el) => { worksImage.current[index] = el; }}
                data-index={index}
                className="flex flex-wrap items-start gap-10 w-full lg:flex-row lg:flex-nowrap"
                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                {/* Imagem */}
                <div className="rounded-xl h-72 lg:h-[400px] w-full group overflow-hidden gap-3 relative border-2 border-neutral-800 p-2 bg-neutral-900 lg:my-4">
                  <div
                    className={`flex flex-col items-center justify-center bg-gradient-to-b overflow-hidden relative rounded-xl ${project.style.gradient} w-full h-full`}
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={500}
                      height={500}
                      className="rounded-md absolute -bottom-4 group-hover:rotate-3 group-hover:scale-105 transition-all shadow-lg shadow-blue-400 w-full max-w-[85%] h-auto object-cover"
                    />
                  </div>
                </div>

                {/* Conteúdo mobile */}
                <div className="flex flex-col w-full items-start gap-2 lg:hidden">
                  <div className="flex items-center gap-3">
                    <div className={`w-6 h-1 ${project.style.bg} rounded-lg`} />
                    <h1 className="text-neutral-50 text-2xl font-semibold">{project.title}</h1>
                  </div>
                  <div className="sm:ml-8 space-y-4">
                    <p className="text-neutral-400">{project.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Conteúdo fixo à direita */}
          <div className="gap-2 sticky top-72 mt-6 hidden lg:flex lg:flex-col lg:items-start lg:w-[40%]">
            <div className="flex items-center gap-3">
              <div className={`w-6 h-1 ${projects[activeProject].style.bg} rounded-lg`} />
              <h1 className="text-neutral-50 text-2xl font-semibold">{projects[activeProject].title}</h1>
            </div>
            <div className="sm:ml-8 space-y-4">
              <p className="text-neutral-400">{projects[activeProject].description}</p>
              <div className="flex items-center flex-wrap gap-3">
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
      </div>
    </section>
  )
}
