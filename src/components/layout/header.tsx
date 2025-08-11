"use client"

import Image from "next/image";
import Logo from "@/assets/logo.png"
import Link from "next/link";
import { Menu } from "./menu";
import { GithubLogoIcon, LinkedinLogoIcon } from "@phosphor-icons/react/dist/ssr";
import { motion } from "motion/react"
import { MobileMenu } from "./mobile-menu";
import { useState, useEffect } from "react";

export function Header() {
    const [isScrolling, setIsScrolling] = useState(false)

    useEffect(() => {
        document.addEventListener("scroll", () => {
            if (window.scrollY > 0) {
                setIsScrolling(true)
            } else {
                setIsScrolling(false)
            }
        })
    }, [])
    
    return (
        <header className={`fixed top-0 h-20 grid place-items-center left-1/2 -translate-x-1/2 z-50 w-full transition-all ${isScrolling ? "bg-neutral-900/20 backdrop-blur" : "bg-transparent"}`}>
            <div className="flex items-center justify-between gap-4 w-full px-6 max-w-7xl">
                <motion.div initial={{ opacity: 0, y: -100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .5, delay: 1.5 }}>
                    <h1 className="sr-only">Luan Henrique</h1>
                    <Link href={"/"}>
                        <Image src={Logo} width={40} height={40} alt="Luan Henrique" />
                    </Link>
                </motion.div>
                
                <Menu />

                <motion.div initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .5, delay: 2}} className="items-center gap-2 hidden sm:flex">
                    <Link href={"https://github.com/LuanHMA"} className="p-2 transition-all rounded-full hover:bg-neutral-800">
                        <GithubLogoIcon size={24} className="text-white"/>
                    </Link>

                    <Link href={"https://www.linkedin.com/in/luanhma/"} className="p-2 transition-all rounded-full hover:bg-neutral-800">
                        <LinkedinLogoIcon size={24} className="text-white"/>
                    </Link>
                </motion.div>

                <MobileMenu />
            </div>
        </header>
    )
}