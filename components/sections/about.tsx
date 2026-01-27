"use client";

import { motion } from "framer-motion";

export function Overview() {
    const stats = [
        { label: "Leasable Area", value: "65.6", unit: "Hectares" },
        { label: "PEZA Area", value: "59.99", unit: "Hectares" },
        { label: "Climate", value: "Typhoon Free Zone" },
        { label: "Strategic Lots", value: "228", unit: "Available" },
    ];

    return (
        <section className="relative bg-black py-32 px-6 md:py-48 md:px-12" id="overview">
            <div className="mx-auto max-w-7xl">
                <div className="grid grid-cols-1 gap-20 lg:grid-cols-2">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <span className="eyebrow text-white block mb-6">
                            The Vision
                        </span>
                        <h2>
                            Strategic Growth in the <span className="opacity-40 italic">Heart of Mindanao</span>
                        </h2>
                        <div className="space-y-6 mt-10">
                            <p className="text-zinc-400 text-lg leading-relaxed">
                                RD City, located in Polomolok, South Cotabato—the wealthiest municipality in Mindanao (2nd nationwide)—is a premier Mindanao Economic Development Zone.
                            </p>
                            <p className="text-zinc-500 text-lg leading-relaxed border-l border-white pl-6">
                                Strategically positioned along the Maharlika Highway, it serves as the <span className="text-white">ASEAN Gateway</span> to BIMPEAGA&apos;s 2025 vision. Located within proximity to Tampakan, home to Southeast Asia&apos;s largest undeveloped copper-gold minerals.
                            </p>
                            <p className="text-zinc-500 text-lg leading-relaxed">
                                RD City
                                integrates industrial efficiency with sustainable master planning at an elevation of 145 to 163 meters above sea level.
                            </p>
                            <p className="text-zinc-500 text-lg leading-relaxed border-l border-white pl-6">
                                Designed by the world-renowned <span className="text-white">Palafox Associates.</span>
                            </p>

                        </div>
                    </motion.div>

                    <div className="flex flex-col border-t border-white/10">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                                className="group relative flex flex-col md:flex-row md:items-center justify-between py-8 border-b border-white/10 transition-colors hover:bg-white/[0.02]"
                            >
                                <div className="flex items-start gap-8 md:items-center">
                                    <span className="text-[10px] font-bold tracking-widest text-zinc-600 mt-2 md:mt-0">
                                        0{index + 1}
                                    </span>
                                    <div>
                                        <div className="text-[10px] font-bold tracking-[0.3em] text-zinc-500 uppercase mb-2">
                                            {stat.label}
                                        </div>
                                        <h3 className="text-4xl md:text-6xl lg:text-5xl font-display text-white text-nowrap transition-transform duration-500 group-hover:translate-x-2">
                                            {stat.value}
                                        </h3>
                                    </div>
                                </div>
                                <div className="mt-6 md:mt-0 flex items-center gap-4">
                                    <div className="h-[1px] w-12 bg-white/20 group-hover:w-20 transition-all duration-700" />
                                    <span className="text-xs text-zinc-500 uppercase tracking-[0.2em]">
                                        {stat.unit}
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
