"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { content } from "@/data/content";
import { HeroScene } from "./HeroScene";

export function Hero() {
    return (
        <section id="hero" className="min-h-[90vh] flex flex-col justify-center items-start pt-20 relative overflow-hidden bg-background">
            <HeroScene />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="max-w-5xl space-y-8"
                >
                    <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                        {content.personal.avatar && (
                            <div className="relative w-56 h-56 md:w-64 md:h-64 shrink-0 border-4 border-black dark:border-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)]">
                                <img
                                    src={content.personal.avatar}
                                    alt={content.personal.name}
                                    className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-300"
                                />
                            </div>
                        )}
                        <div className="space-y-4">
                            <h2 className="text-xl md:text-2xl font-bold tracking-widest uppercase border-b-4 border-primary inline-block pb-1">
                                {content.personal.name}
                            </h2>
                            <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-[0.9]">
                                {content.personal.tagline}
                            </h1>
                        </div>
                    </div>

                    <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed font-medium border-l-4 border-primary pl-4">
                        {content.personal.bio}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <Button size="lg" asChild className="group text-lg">
                            <Link href="#projects">
                                VIEW WORK
                                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                            </Link>
                        </Button>
                        <Button size="lg" variant="outline" asChild className="text-lg">
                            <a href="/Ravikiran_Portfolio/resume.pdf" download="Ravikiran_Resume.pdf">
                                DOWNLOAD RESUME
                                <Download className="ml-2 h-5 w-5" />
                            </a>
                        </Button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
