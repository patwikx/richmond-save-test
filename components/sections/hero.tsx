"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { Badge } from "../ui/badge";

export function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

    return (
        <section ref={containerRef} className="relative h-[120vh] w-full overflow-hidden bg-black" id="home">
            <motion.div style={{ y, scale }} className="absolute inset-0 z-0">
                <Image
                    src="/AR-1.jpg"
                    alt="RD City Aerial View"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black" />
            </motion.div>

            <div className="relative z-10 h-full w-full px-6 md:px-12">
                {/* Top Left: Title Anchor */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.5, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    style={{ opacity }}
                    className="absolute top-40 left-6 md:left-12 flex items-start gap-4 md:gap-6"
                >
                    <div className="relative w-70 h-70 md:w-70 md:h-70 mt-[-40px]">
                        <Image
                            src="/RDCITY-LOGO.png"
                            alt="RD City Logo"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>
                    <div>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl uppercase tracking-tighter font-display leading-tight">
                            RD CITY
                        </h1>
                        <Badge className="rounded-none uppercase text-xs md:text-[15px] block mt-[-15px] md:mb-6">

                            PEZA Registered under Board Resolution No.16-590

                        </Badge>
                    </div>
                </motion.div>

                {/* Bottom Right: Monumental Description */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5, delay: 1, ease: [0.16, 1, 0.3, 1] }}
                    style={{ opacity }}
                    className="absolute bottom-32 right-6 md:right-12 flex flex-col items-end text-right max-w-4xl"
                >
                    <h2 className="uppercase text-3xl md:text-5xl lg:text-6xl xl:text-7xl leading-[1] font-display">
                        A <span className="italic">PEZA-Registered</span> Mindanao Economic Development Zone.
                    </h2>

                    <div className="mt-8 flex justify-end">
                        <Badge className="rounded-none px-4 py-1.5 text-[10px] md:text-xs">
                            Richmond Land Innovations, Inc.
                        </Badge>
                    </div>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5, delay: 2 }}
                    style={{ opacity }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
                >
                    <span className="text-[10px] font-bold tracking-[0.3em] text-white/20 uppercase">
                        Explore
                    </span>
                    <div className="h-8 w-[1px] bg-gradient-to-b from-white/20 to-transparent" />
                </motion.div>
            </div>
        </section>
    );
}
