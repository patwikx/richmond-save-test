"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";

export function NavBar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const { scrollY } = useScroll();

    useEffect(() => {
        const unsub = scrollY.on("change", (latest) => {
            setIsScrolled(latest > 50);
        });
        return () => unsub();
    }, [scrollY]);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className={cn(
                "fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 transition-all duration-500 md:px-12",
                isScrolled ? "bg-black/50 py-4 backdrop-blur-xl border-b border-white/5" : "bg-transparent"
            )}
        >
            <div className="flex items-center gap-4">
                <div className="relative h-10 w-10 flex-shrink-0">
                    <Image
                        src="/rlii.jpg"
                        alt="RD City Logo"
                        fill
                        className="object-contain"
                        priority
                    />
                </div>
                <div className="flex flex-col leading-tight">
                    <span className="text-base font-bold tracking-[0.2em] text-white uppercase md:text-lg">
                        RD City
                    </span>
                    <span className="text-[9px] text-zinc-400 uppercase tracking-[0.1em] md:text-[10px]">
                        Richmond Land Innovations, Inc.
                    </span>
                </div>
            </div>

            <div className="hidden items-center gap-10 md:flex">
                {["Home", "Overview", "Masterplan", "Incentives", "Contact"].map((item) => (
                    <a
                        key={item}
                        href={`#${item.toLowerCase()}`}
                        className="relative text-xs font-bold tracking-widest text-white uppercase transition-colors hover:text-white group"
                    >
                        {item}
                        <span className="absolute -bottom-1 left-0 h-[1px] w-0 bg-white transition-all duration-300 group-hover:w-full" />
                    </a>
                ))}
            </div>

            <button className="rounded-full border border-white/20 bg-white/5 px-6 py-2.5 text-[11px] font-bold tracking-[0.2em] text-white uppercase transition-all hover:bg-white hover:text-black md:px-8">
                Inquire
            </button>
        </motion.nav>
    );
}
