"use client"

import { useState, useEffect } from "react"
import dynamic from "next/dynamic"

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false })

export default function IntroVideo() {
    const [showIntro, setShowIntro] = useState(true)
    const [hasWatched, setHasWatched] = useState(false)

    useEffect(() => {
        // Verifica se o usuário já assistiu o vídeo nesta sessão
        const watched = sessionStorage.getItem("intro-watched")
        if (watched === "true") {
            setShowIntro(false)
            setHasWatched(true)
        }
    }, [])

    const handleVideoEnd = () => {
        sessionStorage.setItem("intro-watched", "true")
        setShowIntro(false)
        setHasWatched(true)
    }

    const handleSkip = () => {
        sessionStorage.setItem("intro-watched", "true")
        setShowIntro(false)
        setHasWatched(true)
    }

    if (!showIntro) {
        return null
    }

    return (

        <div className="fixed inset-0 z-9999 bg-black flex flex-col items-center justify-center">
            <div className="w-full h-full">
                <ReactPlayer
                    src="/abertura.mp4"
                    playing
                    muted
                    width="100%"
                    height="100%"
                    onEnded={handleVideoEnd}
                />
            </div>
            <button
                onClick={handleSkip}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 px-8 py-3 text-white rounded-lg transition-all duration-300 border-2 border-white/40 hover:border-white/60 hover:bg-white/10 backdrop-blur-sm cursor-pointer"
            >
                Pular Intro
            </button>
        </div>
    )
}
