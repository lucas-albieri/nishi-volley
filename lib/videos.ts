import ky from "ky"
import type { Video } from "@/types/video"

export async function getVideos() {
    try {
        const baseUrl = typeof window !== "undefined" ? window.location.origin : "http://localhost:3000"
        const data = await ky.get(`${baseUrl}/api/videos`).json<Video[]>()
        return data
    } catch (error) {
        console.error("Erro ao buscar vídeos:", error)
        return []
    }
}   