import VideoGallery from "@/components/video-gallery"
import Footer from "@/components/footer"
import Header from "@/components/header"
import Hero from "@/components/hero"
import Stats from "@/components/stats"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Stats />
      <VideoGallery />
      <Footer />
    </main>
  )
}
