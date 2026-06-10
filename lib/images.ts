import cloudinary from "./cloudinary"

export async function getChampionshipImages(): Promise<string[]> {
    try {
        // Substitua "championship" pela tag que você usa ou pela condição correta
        const response = await cloudinary.api.resources({
            resource_type: "image",
            type: "upload",
            max_results: 100,
            direction: -1,
            tags: "championship", // Altere conforme necessário
        })

        return response.resources.map((resource: { secure_url: any }) => resource.secure_url)
    } catch (error) {
        console.error("Erro ao buscar imagens do campeonato:", error)
        return []
    }
}