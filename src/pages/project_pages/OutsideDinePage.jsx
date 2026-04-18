export const OutsideDinePage = () => (
    <div className="container pt-8 mx-auto max-w-8xl text-left text-foreground overflow-x-hidden">

        <img src="assets/projects/outside_dining/card_img_outside_dining.jpg" className="w-full lg:max-h-80 rounded-lg mb-8 object-cover" />

        <span className="text-xs font-light tracking-widest uppercase text-primary/70">3D</span>
        <h1 className="text-foreground text-6xl font-bold mt-2 mb-5">Outside Dining</h1>
        <p className="text-foreground/40 text-sm mb-8">Tools:
            <span className="text-foreground/70 border border-primary/30 rounded-md px-2 py-1 ml-2">Maya</span>
            <span className="text-foreground/70 border border-primary/30 rounded-md px-2 py-1 ml-2">Arnold</span>
        </p>

        <div className="py-4 pb-8 text-foreground/70 text-sm leading-relaxed max-w-2xl">
            <p className="mt-4">An outdoor 3D environment study rendered in Maya using Arnold, exploring natural lighting conditions and physically-based texturing through Maya's shading network</p>
        </div>
    </div>
);
    