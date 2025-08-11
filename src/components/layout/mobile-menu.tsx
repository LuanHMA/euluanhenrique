"use client";

import { ListIcon, XIcon } from "@phosphor-icons/react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Logo from "@/assets/logo.png";
import Link from "next/link";
import { useState, useEffect } from "react";

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);

  // Controla quando renderizar com base em isOpen
  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
    }
  }, [isOpen]);

  // Chama isso ao clicar em "fechar"
  const handleClose = () => {
    setIsOpen(false);

    // Espera a animação dos textos (~600ms) antes de remover o fundo
    setTimeout(() => {
      setShouldRender(false);
    }, 600); // tempo suficiente para os motion.divs do nav saírem
  };

  return (
    <>
      <button
        className="cursor-pointer sm:hidden z-50 relative"
        onClick={() => {
          if (!isOpen) {
            setIsOpen(true);
          } else {
            handleClose();
          }
        }}
      >
        {isOpen ? (
          <XIcon size={24} color="#fff" />
        ) : (
          <ListIcon size={24} color="#fff" />
        )}
      </button>

      <AnimatePresence mode="wait">
        {shouldRender && (
          <>
            {/* Fundo */}
            <motion.div
              key="menu-bg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut", delay: isOpen ? 0 : 0.4 }} // Delay na saída
              className="fixed top-0 left-0 w-full min-h-screen bg-neutral-900 z-30"
            />

            {/* Conteúdo */}
            <motion.div
              key="menu-content"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.3 }}
              className="z-40 flex flex-col w-full px-4 pt-10 items-start fixed top-0 left-0 gap-10"
            >
              <nav className="flex flex-col items-start gap-4">
                <motion.div
                  initial={{ opacity: 0, y: -30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  <Link
                    href={"/"}
                    className="text-white text-5xl font-medium"
                    onClick={handleClose}
                  >
                    Início
                  </Link>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: -40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -40 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                >
                  <Link
                    href={"/"}
                    className="text-white text-5xl font-medium"
                    onClick={handleClose}
                  >
                    Projetos
                  </Link>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: -50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -50 }}
                  transition={{ duration: 0.3, delay: 0.3 }}
                >
                  <Link
                    href={"/"}
                    className="text-white text-5xl font-medium"
                    onClick={handleClose}
                  >
                    Sobre mim
                  </Link>
                </motion.div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
