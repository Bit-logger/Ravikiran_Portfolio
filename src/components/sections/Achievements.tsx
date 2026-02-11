"use client";

import { motion } from "framer-motion";
import { content } from "@/data/content";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

export function Achievements() {
    if (!content.achievements || content.achievements.length === 0) return null;

    return (
        <section id="achievements" className="py-20 bg-muted/30 border-t-2 border-border">
            <div className="container mx-auto px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="max-w-4xl mx-auto space-y-12"
                >
                    <div className="text-center space-y-4">
                        <h2 className="text-3xl font-bold">Achievements</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Key milestones and contributions.
                        </p>
                    </div>

                    <div className="space-y-6">
                        {content.achievements.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <Card className="hover:border-primary/50 transition-colors">
                                    <CardHeader>
                                        <CardTitle className="text-xl">{item.title}</CardTitle>
                                        {item.organization && (
                                            <CardDescription className="text-lg font-medium text-primary">
                                                {item.organization}
                                            </CardDescription>
                                        )}
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-muted-foreground">
                                            {item.description}
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
