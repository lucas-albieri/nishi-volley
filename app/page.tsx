import VideoGallery from "@/app/_components/video-gallery"
import Hero from "@/app/_components/hero"
import Stats from "@/app/_components/stats"
import Footer from "@/components/footer"
import Header from "@/components/header"
import BackgroundMusic from "@/components/background-music"
import { getVideos } from "@/lib/videos"

export default async function Home() {

  const videos = await getVideos();

  console.log(videos[0]);

  return (
    <main className="min-h-screen">
      <BackgroundMusic musicUrl="/rio.mp3" />
      <Header />
      <Hero />
      <Stats />
      <VideoGallery
        videos={videos}
      />
      <Footer />
    </main>
  )
}
