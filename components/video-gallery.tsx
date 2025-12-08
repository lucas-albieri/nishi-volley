"use client"

import { Video } from "@/types/video"
import { Play } from "lucide-react"
import { useState } from "react"
import CloudinaryPlayer from "./cloudinary-player"


type Props = {
    videos: Video[]
}

export default function VideoGallery({ videos }: Props) {
    const [selectedVideo, setSelectedVideo] = useState<string | null>(null)

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
                            key={video.asset_id}
                            className="group relative overflow-hidden rounded-2xl border border-border hover:border-primary transition cursor-pointer"
                            onClick={() => setSelectedVideo(video.secure_url)}
                        >
                            <div className="relative overflow-hidden h-64 bg-muted flex items-center justify-center">
                                <video
                                    src={video.secure_url}
                                    className="w-full h-full object-cover"
                                    preload="metadata"
                                />
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition flex items-center justify-center">
                                    <Play size={48} className="text-white opacity-80 group-hover:opacity-100 group-hover:scale-110 transition" fill="white" />
                                </div>
                            </div>

                            <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/80 to-transparent p-6">
                                <h3 className="text-white font-bold text-lg">{video.display_name}</h3>
                                <p className="text-white/70 text-sm">{video.format.toUpperCase()} • {Math.round(video.bytes / 1024 / 1024)}MB</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Video Modal */}
            {selectedVideo && (
                <div
                    className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
                    onClick={() => setSelectedVideo(null)}
                >
                    <div
                        className="relative w-full max-w-5xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <CloudinaryPlayer videoUrl={selectedVideo} className="rounded-2xl" />
                        <button
                            onClick={() => setSelectedVideo(null)}
                            className="absolute -top-12 right-0 bg-white/10 hover:bg-white/20 text-white rounded-full w-10 h-10 flex items-center justify-center transition"
                            aria-label="Fechar vídeo"
                        >
                            ✕
                        </button>
                    </div>
                </div>
            )}
        </section>
    )
}
