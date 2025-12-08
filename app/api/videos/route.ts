import { NextResponse } from "next/server"
import cloudinary from "@/lib/cloudinary"

export async function GET() {
    try {
        // Valida se as variáveis de ambiente estão configuradas
        if (!process.env.CLOUDINARY_CLOUD_NAME || !process.env.CLOUDINARY_API_KEY || !process.env.CLOUDINARY_API_SECRET) {
            console.error("Variáveis de ambiente Cloudinary não configuradas")
            return NextResponse.json(
                { error: "Configuração do Cloudinary incompleta" },
                { status: 500 }
            )
        }

        const response = await cloudinary.api.resources({
            resource_type: "video",
            type: "upload",
            max_results: 100,
            direction: -1, // -1 para mais recentes primeiro (desc), 1 para mais antigos (asc)
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
