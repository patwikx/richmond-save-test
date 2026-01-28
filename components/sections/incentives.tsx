
"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Zap, Shield, Globe, Box, CreditCard, Clock, FileCheck } from "lucide-react";
import Image from "next/image";

export function Incentives() {
    const fiscalIncentives = [
        {
            title: "Income Tax Holiday",
            val: "4-7 Yrs",
            desc: "Full exemption from corporate income tax for designated period.",
            icon: <Clock className="h-5 w-5 text-emerald-400" />
        },
        {
            title: "Corporate Income Tax",
            val: "5%",
            desc: "Special rate on gross income (SCIT) applicable after ITH period.",
            icon: <CreditCard className="h-5 w-5 text-emerald-400" />
        },
        {
            title: "VAT Zero-Rating",
            val: "0%",
            desc: "VAT-exempt local purchases for all registered export businesses.",
            icon: <Zap className="h-5 w-5 text-emerald-400" />
        },
        {
            title: "Duty-Free Imports",
            val: "FREE",
            desc: "No duties on capital equipment, raw materials, and spare parts.",
            icon: <Box className="h-5 w-5 text-emerald-400" />
        },
    ];

    const ecosystemBenefits = [
        {
            title: "One-Stop Shop",
            desc: "Streamlined 24/7 processing for all permits, licenses, and renewals.",
            icon: <Shield className="h-5 w-5 text-white/40" />
        },
        {
            title: "Visa Assistance",
            desc: "Expedited processing for foreign nationals, executives, and dependents.",
            icon: <Globe className="h-5 w-5 text-white/40" />
        },
        {
            title: "Infrastructure Support",
            desc: "Access to robust power grids, high-speed fiber, and utility management.",
            icon: <Zap className="h-5 w-5 text-white/40" />
        },
        {
            title: "Simplified Customs",
            desc: "On-site customs offices and priority lanes at ports and airports.",
            icon: <FileCheck className="h-5 w-5 text-white/40" />
        },
    ];

    const partners = [
        "DB Schenker",
        "Growsari",
        "Allied Pacific Packaging Solution Corp.",
        "Cocoway Phils., Inc.",
        "Celebes Gas"
    ];

    return (
        <section className="relative bg-black py-32" id="incentives">
            {/* Contextual Header */}
            <div className="mx-auto max-w-7xl px-6 md:px-12 mb-24">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="flex flex-col md:flex-row md:items-end justify-between gap-12"
                >
                    <div className="max-w-3xl">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="relative h-12 w-12 bg-white/5 p-2 rounded-full border border-white/10">
                                <Image
                                    src="/peza-logo.png"
                                    alt="PEZA Logo"
                                    width={48}
                                    height={48}
                                    className="object-contain opacity-80"
                                />
                            </div>
                            <span className="text-[10px] font-bold tracking-[0.4em] text-emerald-400 uppercase">PEZA Registered Expansion</span>
                        </div>
                        <h2 className="text-5xl md:text-7xl font-display leading-[1.1]">
                            The 2025 <br />
                            <span className="opacity-40 italic">Investor Advantage.</span>
                        </h2>
                    </div>
                    <div className="max-w-sm">
                        <p className="text-white text-lg leading-relaxed border-l border-white pl-8">
                            Investing through PEZA at RD City offers a comprehensive ecosystem of fiscal breaks and streamlined procedures designed for global scale.
                        </p>
                    </div>
                </motion.div>
            </div>

            {/* Fiscal Advantages Grid */}
            <div className="mx-auto max-w-7xl px-6 md:px-12 mb-32">
                <div className="mb-12">
                    <span className="text-[10px] font-bold tracking-[0.3em] text-white uppercase block mb-4">I. Fiscal Incentives</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {fiscalIncentives.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: i * 0.1 }}
                            className="group bg-zinc-950/50 backdrop-blur-sm border border-white/5 p-8 hover:bg-zinc-900/50 transition-all"
                        >
                            <div className="mb-8 flex justify-between items-start">
                                {item.icon}
                                <span className="text-3xl font-mono font-bold text-white group-hover:text-emerald-400 transition-colors uppercase">{item.val}</span>
                            </div>
                            <h3 className="text-lg font-display mb-3 text-white/90">{item.title}</h3>
                            <p className="text-sm leading-relaxed text-zinc-400">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Non-Fiscal & Ecosystem Grid */}
            <div className="mx-auto max-w-7xl px-6 md:px-12 mb-48">
                <div className="mb-12">
                    <span className="text-[10px] font-bold tracking-[0.3em] text-white uppercase block mb-4">II. Ecosystem & Support</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {ecosystemBenefits.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: i * 0.1 }}
                            className="bg-zinc-950/30 border border-white/5 p-8"
                        >
                            <div className="mb-8">{item.icon}</div>
                            <h3 className="text-sm font-bold tracking-tight mb-3 text-white uppercase">{item.title}</h3>
                            <p className="text-sm leading-relaxed text-zinc-400">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Partners & Locators Marquee */}
            <div className="mt-48">
                <div className="mx-auto max-w-7xl px-6 md:px-12 mb-20 text-center">
                    <h2 className="text-5xl md:text-7xl font-display leading-[1.1]">
                        <span className="italic text-nowrap"> Our Tenants</span>
                    </h2>
                </div>
                <div className="relative overflow-hidden border-y border-white/5 py-16 bg-zinc-950/20">
                    <motion.div
                        animate={{
                            x: ["-50%", 0],
                        }}
                        transition={{
                            duration: 40,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                        className="flex gap-24 w-max items-center"
                    >
                        {[...partners, ...partners, ...partners].map((partner, i) => (
                            <div
                                key={i}
                                className="text-3xl font-bold uppercase md:text-5xl font-mono text-white flex items-center gap-24"
                            >
                                <span>{partner}</span>
                                <div className="h-1 w-1 rounded-full bg-white/10" />
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
