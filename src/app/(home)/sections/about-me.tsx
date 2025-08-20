"use client"

import ProfileCard from "@/components/ui/profile-card"
import { motion } from "motion/react"
import Eu from "@/assets/eu.jpg"


export function AboutMeSection() {
    return (
        <section className="relative text-neutral-50 bg-neutral-950  mx-auto px-5 grid place-items-center py-14 sm:px-6 lg:px-8 sm:py-24">
            <div className="w-full max-w-6xl grid sm:grid-cols-2 place-items-center gap-14 relative z-20">
                <div className="flex items-start flex-col gap-4">
                    <h2 className="text-neutral-400 text-base text-left ">SOBRE MIM</h2>
                    <h1 className="text-3xl text-neutral-50 text-left font-semibold sm:text-4xl">Desenvolvedor e amante de tecnologia</h1>
                    <p className="text-neutral-200 text-base leading-relaxed md:text-lg">Sou Luan, desenvolvedor web com mais de 5 anos de experiência em plataformas SaaS e landing pages de alta performance. Uso React, Next.js, Node.js e TypeScript como stack principal, além de ferramentas como TailwindCSS, Firebase, Prisma, MySQL e PostgreSQL. Valorizo código limpo, arquitetura sólida e boas práticas em todo o processo de desenvolvimento.</p>
                </div>

                <ProfileCard
                    name="Luan Henrique"
                    role="Desenvolvedor Front-end"
                    image={Eu}
                    socialLinks={{
                        github: "https://github.com/LuanHMA",
                        linkedin: "https://www.linkedin.com/in/luanhma/",
                    }}
                />

                {/* ADICIONAR INFORMAÇÕES DE CARREIRA */}
            </div>
        </section >
    )
}
