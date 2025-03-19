import Hero from "../components/Hero"
import Navbar from "../components/NavBar"
import LimoCarousel from "../components/LimoCarousel"
import ContactSection from "../components/ContactSection"
import { ThemeProvider } from "../components/theme-provider"

export default function Home() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <main className="bg-white dark:bg-gray-900">
        <Navbar />
        <Hero />
        <LimoCarousel />
        <ContactSection />
      </main>
    </ThemeProvider>
  )
}