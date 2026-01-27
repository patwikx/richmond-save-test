"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";
import { ZoomIn, ZoomOut, Maximize2 } from "lucide-react";

export function Masterplan() {
    const [zoomScale, setZoomScale] = useState(1);
    const [panPosition, setPanPosition] = useState({ x: 0, y: 0 });
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const scrollOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

    return (
        <section className="relative w-full bg-black py-20" id="masterplan" ref={containerRef}>
            <div className="px-6 md:px-12 mb-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                >
                    <span className="eyebrow text-white block mb-6">
                        Master Plan
                    </span>
                    <h2>
                        Designed for <span className="opacity-40 italic">Scale</span>
                    </h2>
                </motion.div>
            </div>

            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 lg:items-center px-6 md:px-12">
                {/* Side Legend */}
                <div className="lg:w-64 flex-shrink-0 order-2 lg:order-1">
                    <div className="space-y-6">
                        {[
                            { color: "bg-[#e41e26]", label: "Commercial" },
                            { color: "bg-[#00a1e4]", label: "Institutional" },
                            { color: "bg-[#8c4ba0]", label: "Light Industrial" },
                            { color: "bg-[#f58220]", label: "MIXED USED" },
                            { color: "bg-[#00a651]", label: "PARKS & Open Space" },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: i * 0.1 }}
                                className="flex items-center gap-4 group"
                            >
                                <div className={`h-3 w-3 rounded-full ${item.color} shadow-[0_0_10px_rgba(255,255,255,0.1)] transition-transform group-hover:scale-125`} />
                                <span className="text-xs font-bold tracking-[0.2em] text-zinc-400 uppercase transition-colors group-hover:text-white">
                                    {item.label}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                    <div className="mt-12 pt-8 border-t border-white/5">
                        <p className="text-[10px] leading-relaxed text-white uppercase tracking-widest">
                            Zoning distribution for <br />
                            PEZA registered development.
                        </p>
                    </div>
                </div>

                {/* Main Image Container */}
                <div className="relative flex-grow h-[50vh] lg:h-[80vh] w-full overflow-hidden order-1 lg:order-2 rounded-sm border border-white/5 bg-zinc-950 cursor-grab active:cursor-grabbing">
                    {/* Zoom Controls */}
                    <div className="absolute right-6 top-6 z-20 flex flex-col gap-2">
                        <button
                            onClick={() => setZoomScale(prev => Math.min(prev + 0.5, 4))}
                            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/50 backdrop-blur-md text-white transition-colors hover:bg-white hover:text-black"
                            title="Zoom In"
                        >
                            <ZoomIn className="h-5 w-5" />
                        </button>
                        <button
                            onClick={() => setZoomScale(prev => Math.max(prev - 0.5, 1))}
                            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/50 backdrop-blur-md text-white transition-colors hover:bg-white hover:text-black"
                            title="Zoom Out"
                        >
                            <ZoomOut className="h-5 w-5" />
                        </button>
                        <button
                            onClick={() => { setZoomScale(1); setPanPosition({ x: 0, y: 0 }); }}
                            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/50 backdrop-blur-md text-white transition-colors hover:bg-white hover:text-black"
                            title="Reset View"
                        >
                            <Maximize2 className="h-5 w-5" />
                        </button>
                    </div>

                    {/* Hint */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: zoomScale > 1 ? 0 : 1 }}
                        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 pointer-events-none"
                    >
                        <span className="text-[10px] font-bold tracking-[0.3em] text-white/40 uppercase bg-black/40 px-4 py-2 rounded-full backdrop-blur-sm">
                            Click controls to zoom • Drag to pan
                        </span>
                    </motion.div>

                    <motion.div
                        style={{ opacity: scrollOpacity }}
                        animate={{ scale: zoomScale, x: panPosition.x, y: panPosition.y }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        drag={zoomScale > 1}
                        dragConstraints={{
                            left: -500 * (zoomScale - 1),
                            right: 500 * (zoomScale - 1),
                            top: -300 * (zoomScale - 1),
                            bottom: 300 * (zoomScale - 1)
                        }}
                        onDragEnd={(_, info) => setPanPosition({ x: panPosition.x + info.offset.x, y: panPosition.y + info.offset.y })}
                        className="relative h-full w-full"
                    >
                        <Image
                            src="/RD-CITY-MASTERPLAN.jpg"
                            alt="RD City Master Plan"
                            fill
                            className="object-contain pointer-events-none"
                            priority
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
