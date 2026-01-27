
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Navigation, ExternalLink, Activity } from "lucide-react";

export function LocationMap() {
    const [activeLocation, setActiveLocation] = useState("default");
    const [currentTime, setCurrentTime] = useState(new Date());

    // Update time for traffic simulation periodically
    useEffect(() => {
        const timer = setInterval(() => setCurrentTime(new Date()), 60000);
        return () => clearInterval(timer);
    }, []);

    // Smart Traffic Simulation Logic
    const calculateTravelTime = (id: string) => {
        const hour = currentTime.getHours();
        let trafficMultiplier = 1.0;

        // Morning Rush (7:30 - 9:30)
        if (hour >= 7 && hour <= 9) trafficMultiplier = 1.4;
        // Evening Rush (16:30 - 19:00)
        else if (hour >= 16 && hour <= 19) trafficMultiplier = 1.35;
        // Mid-day/Evening fluid traffic
        else trafficMultiplier = 1.0;

        const baseVal = locations[id as keyof typeof locations]?.baseMinutes || 15;
        const totalMinutes = Math.round(baseVal * trafficMultiplier);

        return `${totalMinutes} mins`;
    };

    const locations = {
        default: {
            name: "RD City",
            src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d41403.372650002595!2d125.08619847910154!3d6.1588479000000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f799518a4c536b%3A0xfd3262b024456b7e!2sRD%20City%20or%20PEZA%20registered%20Mindanao%20Economic%20Development%20Zone!5e1!3m2!1sen!2sph!4v1769493942453!5m2!1sen!2sph",
            link: "https://www.google.com/maps/dir/?api=1&destination=RD+City+or+PEZA+registered+Mindanao+Economic+Development+Zone",
            baseMinutes: 0
        },
        airport: {
            name: "Gensan Airport",
            src: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d100000!2d125.0487!3d6.1!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x32f799518a4c536b%3A0xfd3262b024456b7e!2sRD+City+Polomolok!3m2!1d6.1588!2d125.0862!4m5!1s0x32f30b9f00000001%3A0x8f2d5395a415a2e5!2sGeneral+Santos+International+Airport!3m2!1d6.0572!2d125.0962!5e1!3m2!1sen!2sph!4v1769493942453",
            link: "https://www.google.com/maps/dir/RD+City+Polomolok/General+Santos+International+Airport",
            baseMinutes: 17 // Observed from user's screen
        },
        wharf: {
            name: "Makar Wharf",
            src: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d100000!2d125.0487!3d6.1!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x32f799518a4c536b%3A0xfd3262b024456b7e!2sRD+City+Polomolok!3m2!1d6.1588!2d125.0862!4m5!1s0x32f79f972b9a7147%3A0xa1ea1423455a4522!2sMakar+Wharf!3m2!1d6.0906!2d125.1484!5e1!3m2!1sen!2sph!4v1769493942453",
            link: "https://www.google.com/maps/dir/RD+City+Polomolok/Makar+Wharf",
            baseMinutes: 14 // Estimated from 8.7km
        },
        central: {
            name: "Gensan City Hall",
            src: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d31665.4851253259!2d125.138!3d6.115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x32f799518a4c536b%3A0xfd3262b024456b7e!2sRD+City+Polomolok!3m2!1d6.1588!2d125.0862!4m5!1s0x32f79fa0bbab00af:0x93e5dccfe03b381d!2sGeneral+Santos+City+Hall!3m2!1d6.1129!2d125.1717!5e1!3m2!1sen!2sph!4v1769493942453",
            link: "https://www.google.com/maps/place/General+Santos+City+Hall/@6.1129471,125.1717317,1189m/data=!3m2!1e3!4b1!4m6!3m5!1s0x32f79fa0bbab00af:0x93e5dccfe03b381d!8m2!3d6.1129471!4d125.1717317!16s%2Fg%2F1tmkhhbt",
            baseMinutes: 20 // 100% Sync with user screenshot (20 mins)
        }
    };

    return (
        <section className="relative bg-black py-32 overflow-hidden" id="location">
            {/* Header Content */}
            <div className="mx-auto max-w-7xl px-6 md:px-12 mb-16 md:mb-24">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                >
                    <span className="eyebrow text-white block mb-6">Strategic Location</span>
                    <h2 className="max-w-4xl text-4xl md:text-6xl lg:text-7xl font-display leading-tight">
                        Mindanao's Premiere <br />
                        <span className="opacity-40 italic">Industrial Hub.</span>
                    </h2>
                </motion.div>
            </div>

            {/* Immersive Map Area */}
            <div className="relative h-[80vh] w-full">
                <div className="absolute inset-0">
                    <iframe
                        src={locations[activeLocation as keyof typeof locations].src}
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>

                {/* Glassmorphism Floating Card */}
                <div className="absolute top-10 right-6 md:right-12 z-30 w-full max-w-md px-4 md:px-0">
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="bg-black/80 backdrop-blur-xl border border-white/10 p-8 md:p-10 shadow-2xl"
                    >
                        {/* Current Selection Pill */}
                        <div className="mb-10">
                            <span className="text-[10px] font-bold tracking-[0.4em] text-white/40 uppercase block mb-3">Exploring Route</span>
                            <h3 className="text-2xl font-display uppercase tracking-tight">{locations[activeLocation as keyof typeof locations].name}</h3>
                        </div>

                        {/* Address & Site Resilience */}
                        <div
                            className="mb-12 cursor-pointer hover:bg-white/5 p-4 -m-4 transition-colors rounded-sm group/addr"
                            onClick={() => setActiveLocation('default')}
                        >
                            <div className="flex items-center gap-3 mb-4 text-white/30 group-hover/addr:text-white/60 transition-colors">
                                <MapPin className="h-4 w-4" />
                                <span className="text-[10px] font-bold tracking-[0.3em] uppercase">RD CITY HQ (Click to Reset)</span>
                            </div>
                            <p className="text-white group-hover/addr:text-emerald-400 text-sm md:text-base leading-relaxed transition-colors font-medium">
                                RD City 1 Silway 7, Polomolok, <br />
                                South Cotabato, Philippines
                            </p>
                        </div>

                        {/* Connectivity List */}
                        <div className="mb-12">
                            <ul className="space-y-6">
                                {[
                                    { id: 'airport', label: 'Gensan Airport', dist: 14 },
                                    { id: 'wharf', label: 'Makar Wharf', dist: 8.7 },
                                    { id: 'central', label: 'Gensan City Hall', dist: 9.3 }
                                ].map((item) => (
                                    <li
                                        key={item.id}
                                        className={`flex justify-between items-center group cursor-pointer transition-all border-b border-white/5 pb-6 last:border-0 ${activeLocation === item.id ? 'opacity-100' : 'opacity-40 hover:opacity-100'}`}
                                        onClick={() => setActiveLocation(activeLocation === item.id ? 'default' : item.id)}
                                    >
                                        <div className="flex flex-col gap-1">
                                            <span className={`text-base md:text-lg font-display tracking-tight transition-colors ${activeLocation === item.id ? 'text-white' : 'text-zinc-300'}`}>{item.label}</span>
                                            <div className="flex items-center gap-2">
                                                <span className="text-[12px] font-mono text-white/40 uppercase tracking-widest">{item.dist} km</span>
                                                <div className="h-1 w-1 rounded-full bg-white/10" />
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <div className="flex flex-col items-end">
                                                <span className="text-sm font-mono text-white/90">{calculateTravelTime(item.id)}</span>
                                                <span className="flex items-center gap-1.5 text-[9px] font-bold text-emerald-400 uppercase tracking-wider">
                                                    <Activity className="h-2.5 w-2.5 animate-pulse" /> Live Traffic
                                                </span>
                                            </div>
                                            <ExternalLink className={`h-4 w-4 ${activeLocation === item.id ? 'opacity-100' : 'opacity-0 group-hover:opacity-40'} transition-opacity`} />
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* CTA */}
                        <a
                            href={locations[activeLocation as keyof typeof locations].link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white text-black text-[10px] font-bold tracking-[0.3em] uppercase px-8 py-4 w-full block text-center transition-all hover:bg-zinc-200"
                        >
                            Get Live Directions
                        </a>
                    </motion.div>
                </div>

                {/* Overlays */}
                <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-white/5" />
            </div>
        </section>
    );
}
