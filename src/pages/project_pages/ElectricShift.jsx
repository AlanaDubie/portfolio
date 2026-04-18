export const ElectricShiftPage = () => (
    <div className="container pt-8 mx-auto max-w-8xl text-left text-foreground overflow-x-hidden">

        <img src="assets/projects/electric_shift/card_img_electric_shift.png" className="w-full lg:max-h-80 rounded-lg mb-8 object-cover" />

        <span className="text-xs font-light tracking-widest uppercase text-primary/70">Coding</span>
        <h1 className="text-foreground text-6xl font-bold mt-2 mb-5">Electric Shift</h1>
        <p className="text-foreground/40 text-sm mb-8">Tools:
            <span className="text-foreground/70 border border-primary/30 rounded-md px-2 py-1 ml-2">Unity</span>
            <span className="text-foreground/70 border border-primary/30 rounded-md px-2 py-1 ml-2">C#</span>
        </p>

        <div className="py-4 pb-8 text-foreground/70 text-sm leading-relaxed max-w-2xl">
            <p>A single-player VR escape room built in Unity for Meta
                Quest, developed as part of Dr. Fatemeh Jamshidi's VR
                Lab. The game teaches electrical engineering concepts
                through hands-on puzzles, walking players through
                challenges around conductors and insulators, Ohm's
                Law, and logic gates.</p>

            <p className="mt-4">I designed and built the Ohm's Law Conveyor Room
                level from the ground up. The puzzle has players
                search the environment for resistor rods and slot them
                into a conveyor circuit, using knowledge of voltage,
                current, and resistance to get the belt running at the
                right speed.</p>

            <p className="mt-4">This level includes live resistance feedback on in-game
                screens and fail states for when the belt runs too fast or
                stalls out entirely. The door only unlocks when the
                circuit is balanced just right.</p>
        </div>
    </div>
);
    