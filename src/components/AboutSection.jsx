import { FaDiscord, FaFileAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export const AboutSection = () => {
    return (
    <section id="about" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-8xl">
            <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">
                About Me
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-12 items-start">

                <div className="flex justify-center">
                    <img src="assets/Profile.jpg" alt="Alana's Profile" className="rounded-lg shadow-lg w-64 xl:w-72 h-auto object-cover object-[center_30%]" />
                </div>

                <div className="space-y-6 lg:pl-14 md:pl-8"> 
                    <h3 className="text-3xl font-medium text-left">Hello, I'm Alana! 🌺</h3>

                    <p className="text-muted-foreground text-lg text-left">I'm a Computer Science student with an insatiable curiosity and 
                        a passion for blending the technical with artistic. 
                    </p>

                    <p className="text-muted-foreground text-lg text-left">Growing up in the beautiful landscapes of Hawai'i, 
                        I developed a deep love for nature's beauty and a drive to create environments.
                    </p>

                    <p className="text-muted-foreground text-lg text-left">Whether I'm immersed in coding or exploring the depths of video games and movies, 
                        I'm always seeking new ways to bridge the gap between art and technology.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-8 pt-4">
                        <a href="#contact" className="text-foreground/60 hover:text-primary transition-colors duration-300 flex items-center gap-1 font-semibold">
                            <MdEmail size={18} />
                            Contact Me
                        </a>

                        <a href="/resume.pdf" target="_blank" className="text-foreground/60 hover:text-primary transition-colors duration-300 flex items-center gap-1 font-semibold">
                            <FaFileAlt size={16} />
                            View Resume
                        </a>
                    </div>
                </div>

            </div>
        </div>

    </section>
    )
}