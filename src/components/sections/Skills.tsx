"use client";

import { motion } from "framer-motion";
import { content } from "@/data/content";
import { Badge } from "@/components/ui/badge";

export function Skills() {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <section id="skills" className="py-20">
            <div className="container mx-auto px-4 md:px-6">
                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    variants={container}
                    className="space-y-12"
                >
                    <div className="text-center space-y-4">
                        <h2 className="text-3xl font-bold">Skills & Technologies</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            A look at the tools and technologies I use to build seamless, intelligent applications.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Languages */}
                        <motion.div variants={item} className="space-y-4">
                            <h3 className="text-xl font-semibold mb-4 text-center md:text-left">Languages</h3>
                            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                                {content.skills.languages.map((skill) => (
                                    <Badge key={skill} variant="secondary" className="px-3 py-1 text-sm">{skill}</Badge>
                                ))}
                            </div>
                        </motion.div>

                        {/* Frameworks */}
                        <motion.div variants={item} className="space-y-4">
                            <h3 className="text-xl font-semibold mb-4 text-center md:text-left">Frameworks</h3>
                            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                                {content.skills.frameworks.map((skill) => (
                                    <Badge key={skill} variant="secondary" className="px-3 py-1 text-sm">{skill}</Badge>
                                ))}
                            </div>
                        </motion.div>

                        {/* Tools */}
                        <motion.div variants={item} className="space-y-4">
                            <h3 className="text-xl font-semibold mb-4 text-center md:text-left">Tools & Platforms</h3>
                            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                                {content.skills.tools.map((skill) => (
                                    <Badge key={skill} variant="secondary" className="px-3 py-1 text-sm">{skill}</Badge>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
