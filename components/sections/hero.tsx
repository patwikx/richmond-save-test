"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const backgroundImages = [
        "/1.jpg",
        "/2.jpg",
        "/3.jpg",
        "/AR-1.jpg",
        "/AR-2.jpg",
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % backgroundImages.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);
    const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <section
            ref={containerRef}
            className="relative h-screen w-full overflow-hidden bg-black"
            id="home"
        >
            {/* Background Image Carousel */}
            <motion.div
                style={{ scale: imageScale }}
                className="absolute inset-0 z-0"
            >
                {backgroundImages.map((src, index) => (
                    <motion.div
                        key={src}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: index === currentIndex ? 1 : 0 }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                        className="absolute inset-0"
                    >
                        <Image
                            src={src}
                            alt={`RD City Slide ${index + 1}`}
                            fill
                            className="object-cover"
                            priority={index === 0}
                        />
                    </motion.div>
                ))}
                {/* Gradient for text readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-10" />
                <motion.div
                    style={{ opacity: useTransform(scrollYProgress, [0, 1], [0.3, 0.5]) }}
                    className="absolute inset-0 bg-black z-10"
                />
            </motion.div>

            {/* Content */}
            <motion.div
                style={{ opacity: contentOpacity }}
                className="relative z-10 h-full w-full flex flex-col justify-center px-6 md:px-16 lg:px-24"
            >
                {/* Main Content */}
                <div className="max-w-5xl pt-24">
                    {/* Subtitle */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="mb-8 inline-flex"
                    >
                        <div className="flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-black/20 backdrop-blur-md">
                            <div className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                            <span className="text-white/90 text-[10px] md:text-xs font-sans tracking-[0.2em] uppercase font-semibold">
                                PEZA Registered under Board Resolution No. 16-590
                            </span>
                        </div>
                    </motion.div>

                    {/* Main Title */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="text-white text-6xl md:text-8xl font-sans font-bold leading-[1.1] mb-8 tracking-tight"
                    >
                        RD CITY
                    </motion.h1>

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="text-zinc-200 text-lg md:text-xl font-sans leading-relaxed max-w-xl mb-12 font-light"
                    >
                        Engineered for global commerce. A PEZA-registered enclave providing world-class infrastructure and operational efficiency in the heart of General Santos.
                    </motion.p>

                    {/* CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="flex flex-col md:flex-row items-start md:items-center gap-6"
                    >
                        <button className="group relative px-8 py-4 bg-white text-zinc-900 font-sans font-bold text-sm tracking-widest uppercase overflow-hidden transition-all hover:pr-12">
                            <span className="relative z-10">Explore Masterplan</span>
                            <span className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                                →
                            </span>
                        </button>
                        <button className="px-8 py-4 border border-white/30 text-white hover:bg-white hover:text-zinc-900 font-sans font-bold text-sm tracking-widest uppercase transition-all duration-300">
                            Partnership Guide
                        </button>
                    </motion.div>
                </div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.2 }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
            >
                <div className="flex flex-col items-center gap-2">
                    <p className="text-white/50 text-xs font-sans tracking-widest uppercase">Scroll</p>
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-0.5 h-8 bg-white/30"
                    />
                </div>
            </motion.div>
        </section >
    );
}
