"use client"

import dynamic from "next/dynamic"
import { useState, useEffect } from "react"

const ReactPlayer = dynamic(() => import("react-player"), {
    ssr: false,
    loading: () => (
        <div className="w-full h-full flex items-center justify-center bg-muted">
            <p className="text-muted-foreground">Carregando player...</p>
        </div>
    ),
})

type Props = {
    videoUrl: string
    className?: string
}

export default function CloudinaryPlayer({ videoUrl, className = "" }: Props) {
    const [isReady, setIsReady] = useState(false)

    useEffect(() => {
        console.log("Video URL:", videoUrl)
    }, [videoUrl])

    return (
        <div className={className}>
            <ReactPlayer
                src={videoUrl}
                controls
                width="100%"
                height="100%"
                playing={isReady}
                onReady={() => {
                    console.log("Player ready!")
                    setIsReady(true)
                }}
                onError={(error) => console.error("Player error:", error)}
                muted
                volume={0}
            />
        </div>
    )
}