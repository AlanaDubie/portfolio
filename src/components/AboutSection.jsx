export const AboutSection = () => {
    return (
    <section id="about" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-8xl">
            <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">
                About Me
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-6"> 
                    <h3 className="text-3xl font-semibold items-center">Hello, I'm Alana! 🌺</h3>

                    <p className="text-muted-foreground text-lg text-left">A Computer Science student with an insatiable curiosity and 
                        a passion for blending the technical with artistic. 
                    </p>

                    <p className="text-muted-foreground text-lg text-left">Growing up in the beautiful landscapes of Hawai'i, 
                        I developed a deep love for nature's beauty and a drive to create environments.
                    </p>

                    <p className="text-muted-foreground text-lg text-left">Whether I'm immersed in coding or exploring the depths of video games and movies, 
                        I'm always seeking new ways to bridge the gap between art and technology.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                        <a href="#contact" className="button">Contact Me</a>

                        <a href="/resume.pdf" target="_blank" className="button px-6 py-2 border border-primary rounded-full text-primary hover:bg-primary/10 transition-colors duration-300">View Resume</a>
                    </div>
                </div>

                <div className="flex justify-center">
                    <img src="/profile.jpg" alt="Alana's Profile" className="rounded-lg shadow-lg w-64 h-64 object-cover" />
                </div>
            </div>
        </div>

    </section>
    )
}