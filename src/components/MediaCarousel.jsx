import { useState } from "react";

export default function MediaCarousel({ items }) {
  const [index, setIndex] = useState(0);

  const prev = () =>
    setIndex((i) => (i === 0 ? items.length - 1 : i - 1));

  const next = () =>
    setIndex((i) => (i === items.length - 1 ? 0 : i + 1));

  return (
    <div className="w-full mb-12 flex justify-center">

      {/* ───── THEATRE BACKDROP ───── */}
      <div className="w-full bg-linear-to-b from-black via-zinc-950 to-black px-6">

        {/* ───── MAIN CAROUSEL ROW ───── */}
        <div className="flex items-center justify-center gap-10">

          {/* LEFT ARROW */}
          <button
            onClick={prev}
            className="text-zinc-400 hover:text-zinc-100 text-6xl px-6 transition select-none"
          >
            ‹
          </button>

          {/* ───── MEDIA VIEWPORT ───── */}
          <div className="relative h-full max-w-5xl aspect-video overflow-hidden rounded-sm shadow-lg shadow-black/50">

            {/* SLIDER */}
            <div
              className="flex h-full transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${index * 100}%)`,
              }}
            >
              {items.map((item, i) => (
                <div key={i} className="min-w-full h-full shrink-0">

                  {item.type === "image" ? (
                    <img
                      src={item.src}
                      className="w-full h-full object-contain"
                      alt=""
                    />
                  ) : (
                    <iframe
                      src={item.src}
                      className="w-full h-full"
                      frameBorder="0"
                      allow="autoplay; encrypted-media; picture-in-picture"
                      allowFullScreen
                      title="video"
                    />
                  )}

                </div>
              ))}
            </div>
          </div>

          {/* RIGHT ARROW */}
          <button
            onClick={next}
            className="text-zinc-400 hover:text-zinc-100 text-6xl px-6 transition select-none"
          >
            ›
          </button>

        </div>

        {/* ───── THUMBNAILS (FIXED) ───── */}
        <div className="flex gap-3 overflow-x-auto justify-center py-4 mb-4">

          {items.map((item, i) => {
            const active = i === index;

            return (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`relative shrink-0 transition duration-300 ${
                  active ? "z-10" : ""
                }`}
              >

                {/* OUTER FRAME */}
                <div
                  className={`h-16 w-28 rounded-md transition duration-300
                    ${active
                      ? "scale-105 ring-2 ring-zinc-200 shadow-lg shadow-black/40"
                      : "scale-100 ring-1 ring-zinc-700/40 opacity-60 hover:opacity-100"
                    }
                  `}
                >

                  {/* INNER IMAGE (prevents clipping) */}
                  <div className="w-full h-full rounded-md overflow-hidden">
                    <img
                      src={
                        item.type === "image"
                          ? item.src
                          : getYTThumb(item.src)
                      }
                      className="w-full h-full object-cover"
                      alt=""
                    />
                  </div>

                </div>
              </button>
            );
          })}

        </div>
      </div>
    </div>
  );
}

/* ───── YOUTUBE THUMB HELPER ───── */
function getYTThumb(src) {
  const id = src.split("/embed/")[1]?.split("?")[0];
  return `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
}