import cloudinary from "@/lib/cloudinary"
import type { Video } from "@/types/video"

export async function getVideos(): Promise<Video[]> {
    try {
        const response = await cloudinary.api.resources({
            resource_type: "video",
            type: "upload",
            max_results: 100,
            direction: -1,
        })

        return response.resources
    } catch (error) {
        console.error("Erro ao buscar vídeos:", error)
        return []
    }
}

