"use client"

import { useEffect, useRef, useState } from "react"
import { Volume2, VolumeX } from "lucide-react"

type Props = {
    musicUrl: string
}

export default function BackgroundMusic({ musicUrl }: Props) {
    const audioRef = useRef<HTMLAudioElement>(null)
    const [isMuted, setIsMuted] = useState(false)
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        const audio = audioRef.current
        if (!audio) return

        // Configurações para otimização
        audio.volume = 0.3 // Volume baixo para fundo
        audio.loop = true
        audio.preload = "none" // Não carrega até interação do usuário

        // Tenta reproduzir após interação do usuário
        const playAudio = () => {
            audio.play().catch(() => {
                // Ignora erro se autoplay for bloqueado
            })
        }

        // Espera interação do usuário para iniciar
        document.addEventListener("click", playAudio, { once: true })

        return () => {
            document.removeEventListener("click", playAudio)
            audio.pause()
        }
    }, [])

    const toggleMute = () => {
        if (audioRef.current) {
            audioRef.current.muted = !isMuted
            setIsMuted(!isMuted)
        }
    }

    return (
        <>
            <audio
                ref={audioRef}
                src={musicUrl}
                onLoadedData={() => setIsLoaded(true)}
            />

            {isLoaded && (
                <button
                    onClick={toggleMute}
                    className="fixed bottom-6 right-6 z-50 bg-primary/90 hover:bg-primary text-primary-foreground p-3 rounded-full shadow-lg transition"
                    aria-label={isMuted ? "Ativar som" : "Desativar som"}
                >
                    {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
                </button>
            )}
        </>
    )
}
