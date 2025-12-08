import VideoGallery from "@/components/video-gallery"
import Footer from "@/components/footer"
import Header from "@/components/header"
import Hero from "@/components/hero"
import Stats from "@/components/stats"
import { getVideos } from "@/lib/videos"

export default async function Home() {

  const videos = await getVideos();

  console.log(videos[0]);

  return (
    <main className="min-h-screen">
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
