export const AutoMaterialPage = () => (
    <div className="container pt-8 mx-auto max-w-8xl text-left text-foreground overflow-x-hidden">

        <img src="/assets/projects/auto_material_tool/card_img_mat_tool.png" className="w-full lg:max-h-80 rounded-lg mb-8 object-cover" />

        <span className="text-xs font-light tracking-widest uppercase text-primary/70">Coding</span>
        <h1 className="text-foreground text-6xl font-bold mt-2 mb-5">Auto-Material Tool</h1>
        <p className="text-foreground/40 text-sm mb-8">Tools:
            <span className="text-foreground/70 border border-primary/30 rounded-md px-2 py-1 ml-2">Maya</span>
            <span className="text-foreground/70 border border-primary/30 rounded-md px-2 py-1 ml-2">Python</span>

        </p>

        <div className="py-4 pb-8 text-foreground/70 text-sm leading-relaxed max-w-2xl">
            <p>A Maya tool build with Python that automates texture
                assignment for imported 3D assets. The user selects a
                texture directory and the tool automatically identifies
                each PBR map type (basecolor, normal, roughness),
                then wires them into a Standard Surface shader with
                the correct color space settings applied per map.</p>

            <p className="mt-4">A keyword-based heuristic matches textures to meshes
                by comparing shared name keywords, reducing
                incorrect assignments across assets with inconsistent
                naming. The Qt interface displays resolved texture
                details per mesh and supports re-assignment and
                batch processing.</p>

            <p className="mt-4">Developed during ASWF Summer Learning Program
                after completing Dhruv Govil's Python for Maya: Artist
                Friendly Programming course</p>
        </div>
    </div>
);
    