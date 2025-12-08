"use client"

import { useEffect, useRef, useState } from "react"
import { Volume2, VolumeX } from "lucide-react"

type Props = {
    musicUrl: string
}

export default function BackgroundMusic({ musicUrl }: Props) {
    const audioRef = useRef<HTMLAudioElement>(null)
    const [isMuted, setIsMuted] = useState(false)
    const [isPlaying, setIsPlaying] = useState(false)

    useEffect(() => {
        const audio = audioRef.current
        if (!audio) return

        audio.volume = 0.03
        audio.loop = true

        return () => {
            audio.pause()
        }
    }, [])

    const toggleMute = () => {
        const audio = audioRef.current
        if (!audio) return

        if (!isPlaying) {
            // Primeira vez: inicia a música
            audio.play().then(() => {
                setIsPlaying(true)
                setIsMuted(false)
            }).catch(console.error)
        } else {
            // Já está tocando: muta/desmuta
            audio.muted = !isMuted
            setIsMuted(!isMuted)
        }
    }

    return (
        <>
            <audio ref={audioRef} src={musicUrl} />

            {isPlaying && (
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
