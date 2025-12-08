import { NextResponse } from "next/server"
import cloudinary from "@/lib/cloudinary"

export async function GET() {
    try {
        console.log("=== CLOUDINARY DEBUG ===")
        console.log("CLOUD_NAME:", process.env.CLOUDINARY_CLOUD_NAME ? "✓ Definido" : "✗ Não definido")
        console.log("API_KEY:", process.env.CLOUDINARY_API_KEY ? "✓ Definido" : "✗ Não definido")
        console.log("API_SECRET:", process.env.CLOUDINARY_API_SECRET ? "✓ Definido" : "✗ Não definido")

        // Valida se as variáveis de ambiente estão configuradas
        if (!process.env.CLOUDINARY_CLOUD_NAME || !process.env.CLOUDINARY_API_KEY || !process.env.CLOUDINARY_API_SECRET) {
            console.error("Variáveis de ambiente Cloudinary não configuradas")
            return NextResponse.json(
                { error: "Configuração do Cloudinary incompleta" },
                { status: 500 }
            )
        }

        console.log("Buscando vídeos do Cloudinary...")
        const response = await cloudinary.api.resources({
            resource_type: "video",
            type: "upload",
            max_results: 100,
            direction: -1,
        })

        console.log(`✓ ${response.resources.length} vídeos encontrados`)
        return NextResponse.json(response.resources)
    } catch (error) {
        console.error("Erro na API de vídeos:", error)
        return NextResponse.json(
            { error: "Erro ao buscar vídeos" },
            { status: 500 }
        )
    }
}
