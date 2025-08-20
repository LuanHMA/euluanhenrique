"use client"

import { skills } from "@/constants/skills-list"
import { motion } from "motion/react"

export function MySkillsSection() {
  return (
    <section className="relative text-neutral-50 bg-gradient-to-t from-neutral-900 to-neutral-950 mx-auto px-5 grid place-items-center py-10 sm:px-6 lg:px-8 sm:py-24" id="skills">
      <div className="w-full max-w-6xl grid gap-14 relative z-20">
        <div className="flex items-start flex-col gap-1 sm:items-center">
          <h1 className="text-3xl text-neutral-50 text-left font-semibold  sm:text-4xl sm:text-center lg:text-5xl">Meu kit de sobrevivência</h1>
          <p className="text-neutral-400 text-base">Ferramentas e tecnologias que uso no dia a dia!</p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: .5, delay: index * 0.1, ease: "easeInOut" }}
              viewport={{ once: true }}
              className="cursor-target relative overflow-hidden group flex w-fit items-center  gap-2 text-white bg-white/5 px-4 py-2 rounded-xl backdrop-blur-sm border border-white/10 hover:border-neutral-500 transition-all duration-300 ease-in-out"
            >
              <span
                className="absolute top-0 rotate-45 left-[-100%] w-full h-full bg-white/20 bg-radial blur from-bg-white/20 to-transparent group-hover:left-full transition-all duration-1200 ease-in-out"
                aria-hidden="true"
              />
              <img src={skill.icon} alt={skill.title} className="w-5 h-5" />
              <h2 className="text-xs font-medium sm:text-sm">{skill.title}</h2>
            </motion.div>
          ))}
        </div>
      </div>
    </section >
  )
}
