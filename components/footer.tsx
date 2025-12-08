"use client"

import { Mail, Instagram, Linkedin, Youtube } from "lucide-react"

export default function Footer() {
    return (
        <footer id="contact" className="bg-foreground text-background py-16 px-4">
            <div className="max-w-6xl mx-auto">
                <div className="grid md:grid-cols-3 gap-12 mb-12">
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold">Lucas</h3>
                        <p className="text-background/70">
                            Libero profissional dedicado à excelência nas defesas e ao desenvolvimento contínuo.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h4 className="text-lg font-bold">Links Rápidos</h4>
                        <div className="space-y-2">
                            <a href="#videos" className="block text-background/70 hover:text-background transition">
                                Vídeos
                            </a>
                            <a href="#stats" className="block text-background/70 hover:text-background transition">
                                Estatísticas
                            </a>
                            <a href="#contact" className="block text-background/70 hover:text-background transition">
                                Contato
                            </a>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h4 className="text-lg font-bold">Conecte-se</h4>
                        <div className="flex gap-4">
                            <a
                                href="https://instagram.com"
                                className="bg-background/10 hover:bg-background/20 p-3 rounded-full transition"
                            >
                                <Instagram size={20} />
                            </a>
                            <a
                                href="https://youtube.com"
                                className="bg-background/10 hover:bg-background/20 p-3 rounded-full transition"
                            >
                                <Youtube size={20} />
                            </a>
                            <a
                                href="https://linkedin.com"
                                className="bg-background/10 hover:bg-background/20 p-3 rounded-full transition"
                            >
                                <Linkedin size={20} />
                            </a>
                            <a
                                href="mailto:lucas@email.com"
                                className="bg-background/10 hover:bg-background/20 p-3 rounded-full transition"
                            >
                                <Mail size={20} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-background/20 pt-8 text-center text-background/70">
                    <p>&copy; 2025 Lucas - Libero Profissional. Inspirado em Nishinoya.</p>
                </div>
            </div>
        </footer>
    )
}
