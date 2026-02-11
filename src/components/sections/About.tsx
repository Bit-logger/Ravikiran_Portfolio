"use client";

import { motion } from "framer-motion";
import { content } from "@/data/content";

export function About() {
    return (
        <section id="about" className="py-20 bg-background border-t-2 border-border">
            <div className="container mx-auto px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="max-w-6xl mx-auto"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                        {/* Left Column: Stats */}
                        <div className="space-y-8">
                            <div className="space-y-4">
                                <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight">
                                    About Meeee
                                </h2>
                                <div className="w-20 h-2 bg-primary"></div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-8">
                                {content.personal.stats && content.personal.stats.map((stat, index) => (
                                    <div key={index} className="border-2 border-border p-4 hover:bg-primary hover:text-primary-foreground transition-colors group">
                                        <h4 className="text-sm font-bold uppercase tracking-widest mb-1 opacity-70 group-hover:opacity-100">{stat.label}</h4>
                                        <p className="text-xl font-bold uppercase">{stat.value}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right Column: Content */}
                        <div className="space-y-8 relative">
                            <div className="absolute -left-6 top-0 bottom-0 w-1 bg-border hidden md:block"></div>

                            <div className="space-y-6">
                                <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground font-medium">
                                    <p className="whitespace-pre-line leading-relaxed text-lg">
                                        {content.personal.about || content.personal.bio}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
