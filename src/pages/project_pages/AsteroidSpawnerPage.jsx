export const AsteroidSpawnerPage = () => (
    <div className="container pt-8 mx-auto max-w-8xl text-left text-foreground overflow-x-hidden">

        <img src="assets/projects/asteroid/card_img_asteroid_map.jpeg" className="w-full lg:max-h-80 rounded-lg mb-8 object-cover" />

        <span className="text-xs font-light tracking-widest uppercase text-primary/70">Coding</span>
        <h1 className="text-foreground text-6xl font-bold mt-2 mb-5">Space Game – Asteroid Spawner Level</h1>
        <p className="text-foreground/40 text-sm mb-8">Tools:
            <span className="text-foreground/70 border border-primary/30 rounded-md px-2 py-1 ml-2">Unity</span>
            <span className="text-foreground/70 border border-primary/30 rounded-md px-2 py-1 ml-2">C#</span>
        </p>

        <div className="py-4 pb-8 text-foreground/70 text-sm leading-relaxed max-w-2xl">
            <p>A space-themed game developed in Unity as part of a
                group game development club project. I built the
                asteroid spawning system, which populates the scene
                at runtime by placing asteroids at randomized
                positions within a defined sphere volume. Before each
                spawn, the system runs a physics sphere check to
                confirm the space is clear, preventing asteroids from
                overlapping or clipping into each other.</p>

            <p className="mt-4">Each asteroid is instantiated with a random rotation
                and a uniformly randomized scale within a set min and
                max range, keeping the field feeling natural and varied
                without manual placement. The spawn count, asteroid
                radius, and size variation are all exposed as serialized
                fields in the Unity Inspector, making it easy for the
                team to tweak the feel of the field without touching
                the code.</p>
        </div>
    </div>
);
    