"use client"

import { Play } from "lucide-react"
import { useState } from "react"

export default function VideoGallery() {
    const [selectedVideo, setSelectedVideo] = useState<string | null>(null)

    const videos = [
        {
            id: 1,
            title: "Defesa Espetacular",
            category: "Defesa",
            thumbnail: "/volleyball-defense-action.jpg",
            videoUrl: "https://seu-host.com/videos/defesa-1.mp4",
        },
        {
            id: 2,
            title: "Manchete Ninja",
            category: "Técnica",
            thumbnail: "/volleyball-libero-technique.jpg",
            videoUrl: "https://seu-host.com/videos/manchete-1.mp4",
        },
        {
            id: 3,
            title: "Mergulho Impossível",
            category: "Acrobacia",
            thumbnail: "/volleyball-diving-save.jpg",
            videoUrl: "https://seu-host.com/videos/mergulho-1.mp4",
        },
        {
            id: 4,
            title: "Contra-ataque Rápido",
            category: "Jogada",
            thumbnail: "/volleyball-fast-counter.jpg",
            videoUrl: "https://seu-host.com/videos/contra-ataque-1.mp4",
        },
        {
            id: 5,
            title: "Leitura de Jogo",
            category: "Estratégia",
            thumbnail: "/volleyball-game-reading.jpg",
            videoUrl: "https://seu-host.com/videos/leitura-1.mp4",
        },
        {
            id: 6,
            title: "Rally Emocionante",
            category: "Compilação",
            thumbnail: "/volleyball-exciting-rally.jpg",
            videoUrl: "https://seu-host.com/videos/rally-1.mp4",
        },
    ]

    return (
        <section id="videos" className="py-20 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="mb-16">
                    <h2 className="text-4xl font-bold mb-4">Minhas Melhores Jogadas</h2>
                    <p className="text-muted-foreground text-lg max-w-2xl">
                        Confira uma seleção das melhores defesas, técnicas e jogadas que definem meu estilo de jogo inspirado em
                        Nishinoya.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {videos.map((video) => (
                        <div
                            key={video.id}
                            className="group relative overflow-hidden rounded-2xl border border-border hover:border-primary transition cursor-pointer"
                            onClick={() => setSelectedVideo(video.videoUrl)}
                        >
                            <div className="relative overflow-hidden h-64">
                                <img
                                    src={video.thumbnail || "/placeholder.svg"}
                                    alt={video.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                                />
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition flex items-center justify-center">
                                    <Play size={48} className="text-white opacity-0 group-hover:opacity-100 transition" fill="white" />
                                </div>
                            </div>

                            <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/80 to-transparent p-6 translate-y-8 group-hover:translate-y-0 transition">
                                <p className="text-sm text-accent font-semibold mb-2">{video.category}</p>
                                <h3 className="text-white font-bold text-lg">{video.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Video Modal */}
            {selectedVideo && (
                <div
                    className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
                    onClick={() => setSelectedVideo(null)}
                >
                    <div
                        className="relative w-full max-w-4xl aspect-video rounded-2xl overflow-hidden"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <iframe
                            width="100%"
                            height="100%"
                            src={selectedVideo.replace("https://seu-host.com/videos/", "")}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                        <button
                            onClick={() => setSelectedVideo(null)}
                            className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition"
                        >
                            ✕
                        </button>
                    </div>
                </div>
            )}
        </section>
    )
}
