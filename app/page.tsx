import VideoGallery from "@/app/_components/video-gallery"
import Hero from "@/app/_components/hero"
import Stats from "@/app/_components/stats"
import IntroVideo from "@/app/_components/intro-video"
import FirstChampionship from "@/app/_components/first-championship"
import Footer from "@/components/footer"
import Header from "@/components/header"
import BackgroundMusic from "@/components/background-music"
import { getVideos } from "@/lib/videos"
import { getChampionshipImages } from "@/lib/images"

export default async function Home() {

  const videos = await getVideos();
  const championshipImages = await getChampionshipImages();


  return (
    <main className="min-h-screen">
      <IntroVideo />
      <BackgroundMusic musicUrl="/rio.mp3" />
      <Header />
      <Hero />
      <Stats />
      {championshipImages.length > 0 && <FirstChampionship images={championshipImages} />}
      <VideoGallery
        videos={videos}
      />
      <Footer />
    </main>
  )
}
