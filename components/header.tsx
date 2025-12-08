"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60 border-b border-border">
            <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
                <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition">
                    <div className="relative  w-10 h-10">
                        <Image
                            src="/android-chrome-192x192.png"
                            alt="Logo"
                            width={64}
                            height={64}
                            className="object-contain rounded-full"
                        />
                    </div>
                    <div className="text-xl font-bold text-foreground">Lucas Albieri - Nishinoya</div>
                </Link>

                <div className="hidden md:flex gap-8">
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

                <button
                    className="md:hidden"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
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
