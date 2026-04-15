export const TropicalPlantsPage = () => (
    <div className="container pt-8 mx-auto max-w-8xl text-left text-foreground overflow-x-hidden">

        {/* Header Image */}
        <img src="src/assets/projects/tropical_plants/card_img_plant_tool.png" className="w-full lg:max-h-80 rounded-lg mb-8 object-cover" />

        <span className="text-xs font-light tracking-widest uppercase text-primary/70">Procedural</span>
        <h1 className="text-foreground text-6xl font-bold mt-2 mb-5">Tropical Plants</h1>
        <p className="text-foreground/40 text-sm mb-8">Tools:
            <span className="text-foreground/70 border border-primary/30 rounded-md px-2 py-1 ml-2">Houdini</span>
        </p>

        {/* Intro */}
        <div className="py-4 pb-8 text-foreground/70 text-sm leading-relaxed max-w-2xl">

            <p> I wanted to make something that felt like it belonged in a Kingdom Hearts world that’s stylized, readable from a distance, but still grounded enough to feel like a real plant. 
                This project explores building artist-friendly procedural vegetation tools in Houdini, inspired by the stylized environments of Kingdom Hearts. 
                The goal was to create assets where an artist could generate a wide range of tropical plant variants quickly through parameters alone.
            </p>
        </div>

        {/* ── CONCEPT & REFERENCES ── */}
        <section className="mb-12">
            <h2 className="text-3xl font-bold mt-2 mb-5">Concept & References</h2>
            <div className="text-foreground/70 text-sm leading-relaxed max-w-2xl mb-6 space-y-4">
                <p>The plants in Kingdom Hearts had simple silhouettes and saturated colors found in Disney’s 2D animations. 
                    I loved how the environments and nature felt like it was painted in watercolor.
                </p>
                <p>I pulled references from a few scenes in the game, specifically from the opening world Destiny Islands, to get an idea of the art direction. 
                    I also used real world tropical plants like palms and banana leaves to keep the anatomy accurate such as leaf shape, frond bends, and bark rings.
                </p>
            </div>
            <img src="src/assets/projects/tropical_plants/references.png" className="w-2xl rounded-md border border-foreground/5" alt="References" />
        </section>

        <hr className="border-foreground/5 mb-12" />

        {/* ── THE TWO TOOLS ── */}
        <section className="mb-12">
            <span className="text-xs font-light tracking-widest uppercase text-primary/70">Overview</span>
            <h2 className="text-3xl font-bold mt-2 mb-5">The Two Tools</h2>
            <div className="text-foreground/70 text-sm leading-relaxed max-w-2xl mb-6 space-y-4">
                <p>This project is split into two procedural tools. The <strong className="text-foreground/90 font-medium">palm tree tool</strong> focuses on trunk shape, leaf distribution, bend and branch scatter placement, while the <strong className="text-foreground/90 font-medium">layered plant tool</strong> is designed for building flowers and more complex multi-layered plants.</p>
                <p>Both tools are built to be flexible, so a wide range of variations can be generated just by adjusting parameters. This makes it easier to explore and tweak different designs without rebuilding assets from scratch.</p>
            </div>
        </section>

        <hr className="border-foreground/5 mb-12" />

        {/* ── PALM TREE PROCEDURAL ── */}
        <section className="mb-12">
            <span className="text-xs font-light tracking-widest uppercase text-primary/70">01</span>
            <h2 className="text-3xl font-bold mt-2 mb-5">Palm Tree Procedural</h2>
            <div className="text-foreground/70 text-sm leading-relaxed max-w-2xl mb-8 space-y-3">
                <p>I broke the tool into three sections: <strong className="text-foreground/90 font-medium">trunk, leaves, and branches</strong>. Each one is its own sub-network and they all merge at the end.</p>
                <p>Keeping everything separated made it easier to iterate on individual parts without affecting the rest, and made both tools more manageable to control through parameters.</p>
            </div>

            <div className="w-full aspect-video mb-5">
                <iframe
                    src="https://www.youtube.com/embed/bwpmfcf_J-U?rel=0&modestbranding=1&controls=1"
                    title="Palm Tree Tool Demo"
                    allow="autoplay; encrypted-media; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full rounded-md border border-foreground/5"
                />
            </div>

            {/* Example Designs */}
            <span className="text-xs font-light tracking-widest uppercase text-foreground/40">Example Designs</span>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-3 mb-2">
                <img src="src/assets/projects/tropical_plants/palm_section/palm_ex1.png" className="w-full rounded-md object-cover aspect-4/3 border border-foreground/5" alt="Palm variation 1" />
                <img src="src/assets/projects/tropical_plants/palm_section/palm_ex2.png" className="w-full rounded-md object-cover aspect-4/3 border border-foreground/5" alt="Palm variation 2" />
                <img src="src/assets/projects/tropical_plants/palm_section/palm_ex3.png" className="w-full rounded-md object-cover aspect-4/3 border border-foreground/5" alt="Palm variation 3" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-2">
                <img src="src/assets/projects/tropical_plants/palm_section/palm_ex4.png" className="w-full rounded-md object-cover aspect-4/3 border border-foreground/5" alt="Palm variation 4" />
                <img src="src/assets/projects/tropical_plants/palm_section/palm_ex5.png" className="w-full rounded-md object-cover aspect-4/3 border border-foreground/5" alt="Palm variation 5" />
            </div>
            <p className="text-xs font-light text-foreground/40 italic mb-8">Variations of palms generated with different scatter seed, leaf count, bend angle, and branch thickness.</p>

            {/* SOP Network */}
            <span className="text-xs font-light tracking-widest uppercase text-foreground/40">SOP Network</span>
            <img src="src/assets/projects/tropical_plants/palm_section/palm_sop.png" className="w-xl rounded-md border border-foreground/5 mt-3 mb-2" alt="Palm SOP network" />
            <p className="text-xs font-light text-foreground/40 italic mb-10">Full Network. Green = leaf shape, tan = stem, dark yellow = palm trunk. Everything merges at the bottom before output.</p>

            {/* Trunk */}
            <h3 className="text-lg font-semibold mb-3">Trunk</h3>
            <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 items-start mb-10">
                <div>
                    <div className="text-foreground/70 text-sm leading-relaxed mb-4 space-y-2">
                        <p>The trunk starts as a curve that defines the overall shape, which is then swept into a tube.</p>
                        <p>I flatten the UVs before subdivision so the bark texture doesn't stretch when the curve is deformed. After that, I use noise to break up the surface and add some variation.</p>
                    </div>
                    <div className="border border-foreground/5 rounded-md overflow-hidden bg-card">
                        <div className="flex items-baseline gap-4 px-4 py-3 hover:bg-primary/5 transition-colors">
                            <span className="font-mono text-xs text-primary/90 shrink-0 w-36">thickness</span>
                            <span className="text-foreground/70 text-xs">controls the overall width of the trunk</span>
                        </div>
                    </div>
                </div>
                <img src="src/assets/projects/tropical_plants/palm_section/trunk_sop.png" className="rounded-md border border-foreground/5 w-36 shrink-0" alt="Trunk preview" />
            </div>

            {/* Leaves */}
            <h3 className="text-lg font-semibold mb-3">Leaves</h3>
            <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 items-start mb-10">
                <div>
                    <div className="text-foreground/70 text-sm leading-relaxed mb-4 space-y-2">
                        <p>The leaf and stem are built separately, then merged together.</p>
                        <p>I use two bend nodes to control the main droop and the side-to-side curl independently. A match size node keeps the proportions consistent, so changing the branch length doesn't throw off the overall look.</p>
                    </div>
                    <div className="border border-foreground/5 rounded-md overflow-hidden bg-card">
                        {[
                            ["leaves count",  "how many leaves are generated"],
                            ["bend angle",    "controls how upright or droopy the leaves are"],
                            ["width",         "individual leaf width"],
                            ["length",        "individual leaf length"],
                            ["scatter seed",  "randomizes placement"],
                        ].map(([name, desc]) => (
                            <div key={name} className="flex items-baseline gap-4 px-4 py-3 border-b border-foreground/5 last:border-0 hover:bg-primary/5 transition-colors">
                                <span className="font-mono text-xs text-primary/90 shrink-0 w-36">{name}</span>
                                <span className="text-foreground/70 text-xs">{desc}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <img src="src/assets/projects/tropical_plants/palm_section/leaves_sop.png" className="rounded-md border border-foreground/5 w-36 shrink-0" alt="Leaves preview" />
            </div>

            {/* Branches */}
            <h3 className="text-lg font-semibold mb-3">Branches</h3>
            <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 items-start mb-10">
                <div>
                    <p className="text-foreground/70 text-sm leading-relaxed mb-4">The branches are generated in the stem network using a sweep, then combined with the leaves.</p>
                    <div className="border border-foreground/5 rounded-md overflow-hidden bg-card">
                        {[
                            ["branch thickness", "thickness of each stem"],
                            ["branch length",    "how far the stems extend from the trunk"],
                            ["branch angle",     "how the stems fan out from the trunk"],
                        ].map(([name, desc]) => (
                            <div key={name} className="flex items-baseline gap-4 px-4 py-3 border-b border-foreground/5 last:border-0 hover:bg-primary/5 transition-colors">
                                <span className="font-mono text-xs text-primary/90 shrink-0 w-36">{name}</span>
                                <span className="text-foreground/70 text-xs">{desc}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <img src="src/assets/projects/tropical_plants/palm_section/branch_sop.png" className="rounded-md border border-foreground/5 w-36 shrink-0" alt="Branches preview" />
            </div>
        </section>

        <hr className="border-foreground/5 mb-12" />

        {/* ── LAYERED PLANT PROCEDURAL ── */}
        <section className="mb-12">
            <span className="text-xs font-light tracking-widest uppercase text-primary/70">02</span>
            <h2 className="text-3xl font-bold mt-2 mb-5">Layered Plant Procedural</h2>
            <div className="text-foreground/70 text-sm leading-relaxed max-w-2xl mb-8 space-y-3">
                <p>The layered plant tool is meant for building flowers and more complex plant forms. It's structured around multiple leaf layers and a stem, all of which can be controlled or toggled independently.</p>
                <p>The main idea was giving as much control over each layer (shape, curvature, color, and rotation) so a wide range of plant types could come from the same setup.</p>
            </div>

            <div className="w-full aspect-video mb-5">
                <iframe
                    src="https://www.youtube.com/embed/sLKzQJxow_0?rel=0&modestbranding=1&controls=1"
                    title="Palm Tree Tool Demo"
                    allow="autoplay; encrypted-media; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full rounded-md border border-foreground/5"
                />
            </div>
            
            {/* Example Designs */}
            <span className="text-xs font-light tracking-widest uppercase text-foreground/40">Example Designs</span>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-3 mb-2">
                <img src="src/assets/projects/tropical_plants/layered_plant_section/lp_ex1.png" className="w-full rounded-md object-cover aspect-4/3 border border-foreground/5" alt="Flower variation 1" />
                <img src="src/assets/projects/tropical_plants/layered_plant_section/lp_ex2.png" className="w-full rounded-md object-cover aspect-4/3 border border-foreground/5" alt="Flower variation 2" />
                <img src="src/assets/projects/tropical_plants/layered_plant_section/lp_ex3.png" className="w-full rounded-md object-cover aspect-4/3 border border-foreground/5" alt="Flower variation 3" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-2">
                <img src="src/assets/projects/tropical_plants/layered_plant_section/lp_ex4.png" className="w-full rounded-md object-cover aspect-4/3 border border-foreground/5" alt="Flower variation 4" />
                <img src="src/assets/projects/tropical_plants/layered_plant_section/lp_ex5.png" className="w-full rounded-md object-cover aspect-4/3 border border-foreground/5" alt="Flower variation 5" />
            </div>
            <p className="text-xs font-light text-foreground/40 italic mb-8">Variations of flowers generated with different leaf count, color ramp, bend, and layer configuration</p>

            {/* SOP Network */}
            <span className="text-xs font-light tracking-widest uppercase text-foreground/40">SOP Network</span>
            <img src="src/assets/projects/tropical_plants/layered_plant_section/lp_sop.png" className="w-full rounded-md border border-foreground/5 mt-3 mb-2" alt="Layered plant SOP network" />
            <p className="text-xs font-light text-foreground/40 italic mb-10">Full Network. Top leaves layer (left), bottom leaves layer (center), stem (right)</p>

            {/* Leaf Layers */}
            <h3 className="text-lg font-semibold mb-3">Leaf Layers (top and bottom)</h3>

            {/* Description — full width, outside the grid */}
            <div className="space-y-2 text-sm text-foreground/70 leading-relaxed max-w-2xl mb-6">
            <p>Both the top and bottom leaf layers share the same structure. I use two bend nodes to control curvature in different directions to help shape leaves and petals more naturally.</p>
            <p>I also limit the noise to the center of each petal, since applying it everywhere caused the edges to deform too much. Color is handled per layer, and the top layer can be turned off entirely if needed.</p>
            </div>

            {/* Two-column: params left, image right */}
            <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 items-start mb-10">
            <div className="space-y-6">
                {[
                {
                    label: "Bend",
                    params: [
                    ["leaves bend (x direction)", "curvature along the x axis"],
                    ["leaves bend (y direction)", "curvature along the y axis"],
                    ],
                },
                {
                    label: "Scaling",
                    params: [
                    ["leaf count",      "how many petals in the layer"],
                    ["leaf width",      "width of each petal"],
                    ["plant scale",     "uniform scale of the full layer"],
                    ["leaf angle",      "how open or closed the flower looks"],
                    ["plant rotation",  "rotates the layer — offset top and bottom so petals don't stack directly on each other"],
                    ],
                },
                {
                    label: "Coloring",
                    params: [
                    ["hue shift",          "shifts the layer hue"],
                    ["brightness",         "overall brightness"],
                    ["saturation",         "color saturation"],
                    ["leaves texture",     "blends in the texture map"],
                    ["color pattern type", "radial or other modes — drives center-to-edge gradient on petals"],
                    ["color ramp",         "fully editable ramp with B-spline interpolation"],
                    ],
                },
                ].map(({ label, params }) => (
                <div key={label}>
                    <h4 className="text-sm font-semibold text-foreground mb-2">{label}</h4>
                    <div className="border border-foreground/5 rounded-md overflow-hidden bg-card">
                    {params.map(([name, desc]) => (
                        <div
                        key={name}
                        className="flex items-baseline gap-4 px-4 py-3 border-b border-foreground/5 last:border-0 hover:bg-primary/5 transition-colors"
                        >
                        <span className="font-mono text-xs text-primary/90 shrink-0 w-44">{name}</span>
                        <span className="text-foreground/70 text-xs">{desc}</span>
                        </div>
                    ))}
                    </div>
                </div>
                ))}
            </div>

            <img
                src="src/assets/projects/tropical_plants/layered_plant_section/lp_leaves.png"
                className="w-xl rounded-md border border-foreground/5"
                alt="Leaf layer network"
            />
            </div>

            {/* Stem */}
            <h3 className="text-lg font-semibold mb-3">Stem</h3>

            <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 items-start mb-10">
                <div>
                    <div className="text-foreground/70 text-sm leading-relaxed max-w-2xl mb-4 space-y-2">
                        <p>The stem is built in its own sub-network and can be toggled on or off.</p>
                        <p>A sort node finds the top point of the plant, and a blast node isolates it so the stem always connects at the correct position, regardless of how the plant is transformed.</p>
                        <p>Noise is added at the end to give the surface a bit more variation.</p>
                    </div>
                    <div className="border border-foreground/5 rounded-md overflow-hidden bg-card">
                        {[
                            ["stem length", "length of the stem"],
                            ["stem thickness", "thickness of swept tube"],
                            ["branch angle",     "how much the stem curves"],
                        ].map(([name, desc]) => (
                            <div key={name} className="flex items-baseline gap-4 px-4 py-3 border-b border-foreground/5 last:border-0 hover:bg-primary/5 transition-colors">
                                <span className="font-mono text-xs text-primary/90 shrink-0 w-36">{name}</span>
                                <span className="text-foreground/70 text-xs">{desc}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <img src="src/assets/projects/tropical_plants/layered_plant_section/lp_stem.png" className="w-xl rounded-md border border-foreground/5 mb-3" alt="Stem network" />
            </div>
            
        </section>

        <hr className="border-foreground/5 mb-12" />

        {/* ── COPS MATERIAL ── */}
        <section className="mb-12">
            <span className="text-xs font-light tracking-widest uppercase text-primary/70">03</span>
            <h2 className="text-3xl font-bold mt-2 mb-5">COPs Material</h2>
            <div className="text-foreground/70 text-sm leading-relaxed max-w-2xl mb-8 space-y-3">
                <p>All PBR maps were built procedurally inside Houdini COPs.</p>
                <p>One of the main advantages of this approach is that the textures stay fully tied to the geometry. If the model changes, re-cooking the network updates the textures automatically.</p>
                <p>I used this as an opportunity to build a full PBR workflow from scratch and better understand how each map contributes to the final look.</p>
            </div>

            {/* Leaves Material */}
            <h3 className="text-lg font-semibold mb-4">Leaves Material</h3>

            <span className="text-xs font-light tracking-widest uppercase text-foreground/40">Base Color — 2 variants</span>
            <img src="src/assets/projects/tropical_plants/cops_section/cops_leaves_base.png" className="w-full rounded-md border border-foreground/5 mt-3 mb-6" alt="Leaves base color" />

            <span className="text-xs font-light tracking-widest uppercase text-foreground/40">Roughness · Normal · Opacity</span>
            <img src="src/assets/projects/tropical_plants/cops_section/cops_leaves_rno.png" className="w-full rounded-md border border-foreground/5 mt-3 mb-10" alt="Leaves roughness normal opacity" />

            {/* Trunk Material */}
            <h3 className="text-lg font-semibold mb-4">Trunk Material</h3>

            <span className="text-xs font-light tracking-widest uppercase text-foreground/40">Base Color</span>
            <img src="src/assets/projects/tropical_plants/cops_section/cops_trunk_base.png" className="w-full rounded-md border border-foreground/5 mt-3 mb-6" alt="Trunk base color" />

            <span className="text-xs font-light tracking-widest uppercase text-foreground/40">Roughness</span>
            <img src="src/assets/projects/tropical_plants/cops_section/cops_trunk_rough.png" className="w-full rounded-md border border-foreground/5 mt-3 mb-6" alt="Trunk roughness" />

            <span className="text-xs font-light tracking-widest uppercase text-foreground/40">Normal</span>
            <img src="src/assets/projects/tropical_plants/cops_section/cops_trunk_normal.png" className="w-xl rounded-md border border-foreground/5 mt-3 mb-8" alt="Trunk normal" />
        </section>

    </div>
);