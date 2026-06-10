"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Maximize2 } from "lucide-react"

type Props = {
    images: string[]
}

export default function FirstChampionship({ images }: Props) {
    const [selectedImage, setSelectedImage] = useState<string | null>(null)
    const [currentIndex, setCurrentIndex] = useState(0)

    const IMAGES_PER_SLIDE = 2
    const totalSlides = Math.ceil(images.length / IMAGES_PER_SLIDE)

    // Auto-play: avança a cada 6 segundos
    useEffect(() => {
        if (images.length === 0) return

        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + IMAGES_PER_SLIDE) % (totalSlides * IMAGES_PER_SLIDE))
        }, 6000)

        return () => clearInterval(interval)
    }, [images.length, totalSlides])

    const goToNext = () => {
        setCurrentIndex((prev) => (prev + IMAGES_PER_SLIDE) % (totalSlides * IMAGES_PER_SLIDE))
    }

    const goToPrev = () => {
        setCurrentIndex((prev) => {
            const newIndex = prev - IMAGES_PER_SLIDE
            return newIndex < 0 ? (totalSlides - 1) * IMAGES_PER_SLIDE : newIndex
        })
    }

    const getCurrentImages = () => {
        return [
            images[currentIndex % images.length],
            images[(currentIndex + 1) % images.length]
        ]
    }

    if (images.length === 0) {
        return null
    }

    const currentImages = getCurrentImages()
    const currentSlide = Math.floor(currentIndex / IMAGES_PER_SLIDE) + 1

    return (
        <section id="championship" className="py-6 px-4 bg-muted/30">
            <div className="max-w-7xl mx-auto">
                <div className="mb-6">
                    <h2 className="text-4xl font-bold mb-4">Meu Primeiro Campeonato</h2>
                    <p className="text-muted-foreground text-lg max-w-2xl">
                        Os momentos que marcaram o início da minha jornada no vôlei. Confira os melhores momentos, troféus e experiências inesquecíveis.
                    </p>
                </div>

                {/* Carrossel */}
                <div className="relative w-full overflow-hidden rounded-2xl border border-border">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-5 bg-muted">
                        {currentImages.map((image, index) => (
                            <div
                                key={`slide-${currentIndex}-${index}`}
                                className="relative overflow-hidden rounded-lg cursor-pointer group h-80 md:h-[35rem]"
                                onClick={() => setSelectedImage(image)}
                            >
                                <img
                                    src={image}
                                    alt={`Foto do campeonato`}
                                    className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                                />
                                {/* Overlay com ícone */}
                                <div
                                    className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition"
                                >
                                    <Maximize2 size={48} className="text-white" />
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Botões de navegação */}
                    <button
                        onClick={goToPrev}
                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition z-10"
                        aria-label="Imagens anteriores"
                    >
                        <ChevronLeft size={24} />
                    </button>

                    <button
                        onClick={goToNext}
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition z-10"
                        aria-label="Próximas imagens"
                    >
                        <ChevronRight size={24} />
                    </button>

                    {/* Indicadores */}
                    <div className="absolute bottom-1 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                        {Array.from({ length: totalSlides }).map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index * IMAGES_PER_SLIDE)}
                                className={`transition-all rounded-full ${index === Math.floor(currentIndex / IMAGES_PER_SLIDE)
                                    ? "bg-primary w-4 h-2"
                                    : "bg-white/50 hover:bg-white/70 w-2 h-2"
                                    }`}
                                aria-label={`Ir para slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>

                {/* Modal de imagem expandida */}
                {selectedImage && (
                    <div
                        className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 cursor-pointer"
                        onClick={() => setSelectedImage(null)}
                    >
                        <div className="relative max-w-4xl w-full max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
                            <img
                                src={selectedImage}
                                alt="Foto do campeonato ampliada"
                                className="w-full h-full object-contain"
                            />
                            <button
                                onClick={() => setSelectedImage(null)}
                                className="absolute top-4 right-4 text-white bg-black/50 hover:bg-black/70 rounded-full p-2 transition"
                                aria-label="Fechar"
                            >
                                ✕
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </section>
    )
}
