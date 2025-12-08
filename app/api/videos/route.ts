import { NextResponse } from "next/server"
import cloudinary from "@/lib/cloudinary"

export async function GET() {
    try {
        const response = await cloudinary.api.resources({
            resource_type: "video",
            type: "upload",
            max_results: 100,
        })

        return NextResponse.json(response.resources)
    } catch (error) {
        console.error("Erro na API de vídeos:", error)
        return NextResponse.json(
            { error: "Erro ao buscar vídeos" },
            { status: 500 }
        )
    }
}
