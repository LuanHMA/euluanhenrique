"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "motion/react"

const menuLinks = [
    { label: "Início", href: "hero" },
    { label: "Sobre mim", href: "skills" },
    { label: "Projetos", href: "projects" },
]

export function Menu() {
    const path = usePathname()

    const toScroll = (id: string) => {
        const element = document.getElementById(id)
        if (element) {
            element.scrollIntoView({ behavior: "smooth" })
        }
    }

    return (
        <motion.nav
            initial={{ opacity: 0, y: -100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .5, delay: 1.5 }}
            aria-label="Main"
            className="rounded-full backdrop-blur-md md:flex items-center justify-center"
        >
            <ul className="hidden sm:flex list-none items-center justify-center gap-1 rounded-full border px-2 py-1 border-white/10 bg-white/10">
                {menuLinks.map(({ label, href }, i) => (
                    <li key={i} className="relative cursor-pointer" onClick={() => toScroll(href)}>
                        <span
                            className="inline-block px-4 py-1.5 text-sm font-light text-white transition duration-300  rounded-full hover:bg-white hover:text-neutral-900 hover:font-medium hover:scale-105"
                        >
                            {label}
                        </span>
                    </li>
                ))}
            </ul>
        </motion.nav>

    )
}