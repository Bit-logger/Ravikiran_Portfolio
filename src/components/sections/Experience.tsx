"use client";

import { motion } from "framer-motion";
import { content } from "@/data/content";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function Experience() {
    if (!content.experience || content.experience.length === 0) return null;

    return (
        <section id="experience" className="py-20">
            <div className="container mx-auto px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="max-w-4xl mx-auto space-y-12"
                >
                    <div className="text-center space-y-4">
                        <h2 className="text-3xl font-bold">Experience</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            My professional journey and key roles.
                        </p>
                    </div>

                    <div className="space-y-6">
                        {content.experience.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <Card>
                                    <CardHeader>
                                        <div className="flex justify-between items-start flex-col md:flex-row gap-2">
                                            <div>
                                                <CardTitle className="text-xl">{exp.role}</CardTitle>
                                                <CardDescription className="text-lg font-medium text-primary mt-1">{exp.company}</CardDescription>
                                            </div>
                                            <Badge variant="secondary">{exp.dates}</Badge>
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-muted-foreground">
                                            {exp.description}
                                        </p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
