"use client"

import Image from "next/image"
import Link from "next/link"

export default function Hero() {
    return (
        <section className="relative overflow-hidden pt-20 pb-32 md:pt-16 md:pb-0 px-4">
            {/* Background decoration */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
            </div>

            <div className="max-w-6xl mx-auto">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8">
                        <h1 className="text-6xl md:text-7xl font-bold text-balance leading-tight">
                            <span className="text-foreground">Defesa X</span>
                            <br />
                            <span className="bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
                                Ataque
                            </span>
                        </h1>

                        <p className="text-xl text-muted-foreground max-w-md leading-relaxed">
                            Inspirado no Nishinoya, exploro todas as posições: defesas com o pé, levantadas precisas e cortadas potentes. Versatilidade em cada jogada.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <Link
                                href="#videos"
                                className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition"
                            >
                                Ver Vídeos
                            </Link>
                            <Link
                                href="#contact"
                                className="px-8 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition"
                            >
                                Contato
                            </Link>
                        </div>
                    </div>

                    <div className="relative h-96 md:h-full flex items-center justify-center">
                        <div className="relative w-64 h-64 md:w-full md:h-140">
                            <Image
                                src="/nishi2.png"
                                alt="Lucas jogando vôlei - inspirado em Nishinoya"
                                fill
                                sizes="(max-width: 768px) 256px, 384px"
                                className="object-contain"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
