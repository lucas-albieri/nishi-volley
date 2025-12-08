"use client"

import { useEffect, useState } from "react"
import { Moon, Sun } from "lucide-react"

export default function ThemeToggle() {
    const [theme, setTheme] = useState<"light" | "dark" | null>(null)
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
        // Verifica tema salvo ou preferência do sistema
        const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null
        const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
        const initialTheme = savedTheme || systemTheme

        setTheme(initialTheme)
        applyTheme(initialTheme)
    }, [])

    const applyTheme = (newTheme: "light" | "dark") => {
        const root = document.documentElement
        root.classList.remove("light", "dark")
        root.classList.add(newTheme)
    }

    const toggleTheme = () => {
        if (!theme) return

        const newTheme = theme === "dark" ? "light" : "dark"
        setTheme(newTheme)
        localStorage.setItem("theme", newTheme)
        applyTheme(newTheme)
    }

    // Evita flash de conteúdo não estilizado
    if (!mounted || !theme) {
        return (
            <div className="p-2 w-9 h-9" aria-hidden="true" />
        )
    }

    return (
        <button
            onClick={toggleTheme}
            className="p-2 rounded-lg hover:bg-muted transition cursor-pointer"
            aria-label={theme === "dark" ? "Ativar tema claro" : "Ativar tema escuro"}
        >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
        </button>
    )
}
