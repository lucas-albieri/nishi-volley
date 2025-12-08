"use client"

import Link from "next/link"
import { Mail, Instagram, Linkedin, Youtube, Github } from "lucide-react"

export default function Footer() {
    return (
        <footer id="contact" className="bg-foreground text-background py-16 px-4">
            <div className="max-w-6xl mx-auto">
                <div className="grid md:grid-cols-3 gap-12 mb-12">
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold">Lucas</h3>
                        <p className="text-background/70">
                            Jogador versátil em constante aprendizado, com defesas criativas e paixão pelo desenvolvimento completo no vôlei.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h4 className="text-lg font-bold">Links Rápidos</h4>
                        <div className="space-y-2">
                            <Link href="#videos" className="block text-background/70 hover:text-background transition">
                                Vídeos
                            </Link>
                            <Link href="#stats" className="block text-background/70 hover:text-background transition">
                                Estatísticas
                            </Link>
                            <Link href="#contact" className="block text-background/70 hover:text-background transition">
                                Contato
                            </Link>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h4 className="text-lg font-bold">Conecte-se</h4>
                        <div className="flex gap-4">
                            <Link
                                href="https://github.com/lucas-albieri"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub"
                                className="bg-background/10 hover:bg-background/20 p-3 rounded-full transition"
                            >
                                <Github size={20} />
                            </Link>
                            <Link
                                href="https://www.linkedin.com/in/lucas-albieri/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                                className="bg-background/10 hover:bg-background/20 p-3 rounded-full transition"
                            >
                                <Linkedin size={20} />
                            </Link>
                            <Link
                                href="mailto:lucas.albisantos55@gmail.com"
                                aria-label="Email"
                                className="bg-background/10 hover:bg-background/20 p-3 rounded-full transition"
                            >
                                <Mail size={20} />
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="border-t border-background/20 pt-8 text-center text-background/70">
                    <p>&copy; 2025 Lucas Albieri - Jogador Versátil. Inspirado em Nishinoya.</p>
                </div>
            </div>
        </footer>
    )
}
