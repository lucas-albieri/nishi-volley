"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import ThemeToggle from "./theme-toggle"

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60 border-b border-border">
            <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
                <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition">
                    <div className="relative  w-16 h-16 md:w-10 md:h-10">
                        <Image
                            src="/android-chrome-192x192.png"
                            alt="Logo"
                            width={64}
                            height={64}
                            className="object-contain rounded-full"
                        />
                    </div>
                    <div className="text-lg md:text-xl font-bold text-foreground">
                        Lucas Albieri - <span className="text-primary">Nishinoya</span>
                    </div>
                </Link>

                <div className="hidden md:flex gap-8 items-center">
                    <Link href="#videos" className="text-foreground hover:text-primary transition">
                        Vídeos
                    </Link>
                    <Link href="#stats" className="text-foreground hover:text-primary transition">
                        Estatísticas
                    </Link>
                    <Link href="#contact" className="text-foreground hover:text-primary transition">
                        Contato
                    </Link>
                    <ThemeToggle />
                </div>

                <div className="md:hidden flex items-center gap-2">
                    <ThemeToggle />
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </nav>

            {isMenuOpen && (
                <div className="md:hidden bg-background border-t border-border p-4 flex flex-col gap-4">
                    <Link href="#videos" className="text-foreground hover:text-primary transition">
                        Vídeos
                    </Link>
                    <Link href="#stats" className="text-foreground hover:text-primary transition">
                        Estatísticas
                    </Link>
                    <Link href="#contact" className="text-foreground hover:text-primary transition">
                        Contato
                    </Link>
                </div>
            )}
        </header>
    )
}
