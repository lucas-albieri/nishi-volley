export default function Loading() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-background">
            <div className="text-center space-y-4">
                <div className="relative w-20 h-20 mx-auto">
                    <div className="absolute inset-0 border-4 border-primary/30 rounded-full" />
                    <div className="absolute inset-0 border-4 border-primary border-t-transparent rounded-full animate-spin" />
                </div>
                <div className="space-y-2">
                    <h2 className="text-2xl font-bold text-foreground">Carregando...</h2>
                    <p className="text-muted-foreground">Preparando suas jogadas 🏐</p>
                </div>
            </div>
        </div>
    )
}
