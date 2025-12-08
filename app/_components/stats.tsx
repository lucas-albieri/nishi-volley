export default function Stats() {
    const stats = [
        {
            number: "50+",
            label: "Vídeos de Jogadas",
            icon: "🎬",
        },
        {
            number: "100%",
            label: "Versatilidade",
            icon: "🏐",
        },
        {
            number: "98%",
            label: "Taxa de Defesa",
            icon: "🎯",
        },
        {
            number: "0",
            label: "Campeonatos (ainda)",
            icon: "🏆",
        },
    ]

    return (
        <section id="stats" className="py-20 px-4 bg-muted/30">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-center mb-16">Estatísticas</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {stats.map((stat) => (
                        <div
                            key={stat.label}
                            className="bg-card border border-border rounded-2xl p-8 text-center hover:border-primary transition group"
                        >
                            <div className="text-5xl mb-4 group-hover:scale-110 transition" aria-hidden="true">
                                {stat.icon}
                            </div>
                            <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                            <p className="text-muted-foreground">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
