"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone, ArrowUpRight } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-black pt-32 pb-12 px-6 md:px-12 border-t border-white/5" id="contact">
            <div className="mx-auto max-w-7xl">
                <div className="grid grid-cols-1 gap-20 lg:grid-cols-2">
                    <div>
                        <h2 className="mb-8">
                            Partner with <span className="opacity-40 italic">Excellence</span>
                        </h2>
                        <p className="max-w-md">
                            Unlock the potential of Mindanao with a strategic location designed for global impact.
                        </p>

                        <div className="mt-12 space-y-6">
                            <div className="flex items-center gap-4 text-zinc-400">
                                <MapPin className="h-5 w-5 text-white/20" />
                                <span>RD City 1 Silway 7, Polomolok, South Cotabato</span>
                            </div>
                            <div className="flex items-center gap-4 text-zinc-400">
                                <Phone className="h-5 w-5 text-white/20" />
                                <span>(083) 552-4435</span>
                            </div>
                            <div className="flex items-center gap-4 text-zinc-400">
                                <Mail className="h-5 w-5 text-white/20" />
                                <span>info@richmondland.com.ph</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col justify-end lg:items-end">
                        <div className="grid grid-cols-2 gap-16 md:gap-32">
                            <div className="space-y-4">
                                <h4 className="text-[10px] font-bold tracking-[0.4em] text-white/20 uppercase">Links</h4>
                                <ul className="space-y-3">
                                    {["Home", "Overview", "Masterplan", "Incentives"].map((link) => (
                                        <li key={link}>
                                            <a href={`#${link.toLowerCase()}`} className="text-sm text-zinc-500 hover:text-white transition-colors flex items-center gap-2 group">
                                                {link}
                                                <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="space-y-4">
                                <h4 className="text-[10px] font-bold tracking-[0.4em] text-white/20 uppercase">Legal</h4>
                                <ul className="space-y-3">
                                    {["Privacy Policy", "Terms of Use", "PEZA Registry"].map((link) => (
                                        <li key={link}>
                                            <a href="#" className="text-sm text-zinc-500 hover:text-white transition-colors">
                                                {link}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-32 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="font-mono text-xs text-white uppercase">
                        © 2026 Richmond Land Innovations, Inc.
                    </div>
                    <div className="font-mono text-xs text-white uppercase">
                        All Rights Reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
}
