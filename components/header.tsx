"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60 border-b border-border">
            <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <div className="text-3xl font-bold bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
                        ⚡
                    </div>
                    <div className="text-xl font-bold text-foreground">Lucas Albieri - Nishinoya</div>
                </div>

                <div className="hidden md:flex gap-8">
                    <a href="#videos" className="text-foreground hover:text-primary transition">
                        Vídeos
                    </a>
                    <a href="#stats" className="text-foreground hover:text-primary transition">
                        Estatísticas
                    </a>
                    <a href="#contact" className="text-foreground hover:text-primary transition">
                        Contato
                    </a>
                </div>

                <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </nav>

            {isMenuOpen && (
                <div className="md:hidden bg-background border-t border-border p-4 flex flex-col gap-4">
                    <a href="#videos" className="text-foreground hover:text-primary transition">
                        Vídeos
                    </a>
                    <a href="#stats" className="text-foreground hover:text-primary transition">
                        Estatísticas
                    </a>
                    <a href="#contact" className="text-foreground hover:text-primary transition">
                        Contato
                    </a>
                </div>
            )}
        </header>
    )
}
