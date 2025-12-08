"use client"

import Image from "next/image"

export default function Hero() {
    return (
        <section className="relative overflow-hidden pt-20 pb-32 md:pt-32 md:pb-48 px-4">
            {/* Background decoration */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-6xl mx-auto">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <h1 className="text-6xl md:text-7xl font-bold text-balance leading-tight">
                                <span className="text-foreground">Defensive</span>
                                <br />
                                <span className="bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
                                    Excellence
                                </span>
                            </h1>
                        </div>

                        <p className="text-xl text-muted-foreground max-w-md leading-relaxed">
                            Libero profissional inspirado em Nishinoya. Confira minhas melhores jogadas de defesa e agilidade na
                            quadra.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition">
                                Ver Vídeos
                            </button>
                            <button className="px-8 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition">
                                Contato
                            </button>
                        </div>
                    </div>

                    <div className="relative h-96 md:h-full flex items-center justify-center">
                        <div className="absolute inset-0 bg-linear-to-br from-primary/20 to-secondary/20 rounded-3xl blur-2xl"></div>
                        <div className="relative z-10 w-full h-full flex flex-col items-center justify-center">
                            <div className="relative w-64 h-64 md:w-80 md:h-80">
                                <Image
                                    src="/nishinoya-hero.jpg"
                                    alt="Nishinoya - Libero Profissional"
                                    fill
                                    className="object-contain drop-shadow-2xl"
                                    priority
                                />
                            </div>
                            <div className="absolute top-4 left-4 text-7xl font-bold text-primary opacity-30">4</div>
                            <div className="absolute bottom-8 right-8 text-4xl">🏐</div>
                            <p className="mt-4 text-primary font-bold text-lg">Líbero</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
