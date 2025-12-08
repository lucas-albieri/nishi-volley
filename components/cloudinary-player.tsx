"use client"

type Props = {
    videoUrl: string
    className?: string
}

export default function CloudinaryPlayer({ videoUrl, className = "" }: Props) {
    return (
        <video
            src={videoUrl}
            controls
            className={`w-full h-full ${className}`}
            preload="metadata"
        >
            Seu navegador não suporta o elemento de vídeo.
        </video>
    )
}
