import { ChevronDown } from "lucide-react"

export const HeroSection = () => {
    return (
    <section id="hero" 
        className="relative w-full overflow-hidden"
    >
        <video autoPlay muted loop playsInline 
            className="w-full xl:h-screen object-cover">
            <source src="assets/HeroVideo.mp4" type="video/mp4" />
        </video>
        <a href="#about" className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 hover:text-white transition-colors">
            <ChevronDown size={36} />
        </a>
    </section>)
}