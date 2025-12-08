"use client"

import dynamic from "next/dynamic"
import { useState } from "react"

const ReactPlayer = dynamic(() => import("react-player"), {
    ssr: false,
})

type Props = {
    videoUrl: string
    className?: string
}

export default function CloudinaryPlayer({ videoUrl, className = "" }: Props) {
    const [isReady, setIsReady] = useState(false)

    return (
        <div className={className}>
            <ReactPlayer
                src={videoUrl}
                controls
                width="100%"
                height="100%"
                playing={isReady}
                onReady={() => setIsReady(true)}
            />
        </div>
    )
}