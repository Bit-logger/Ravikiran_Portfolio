"use client";

import { motion } from "framer-motion";
import { content } from "@/data/content";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function Education() {
    if (!content.education || content.education.length === 0) return null;

    return (
        <section id="education" className="py-20 bg-muted/30">
            <div className="container mx-auto px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="max-w-4xl mx-auto space-y-12"
                >
                    <div className="text-center space-y-4">
                        <h2 className="text-3xl font-bold">Education</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            My academic background.
                        </p>
                    </div>

                    <div className="space-y-6">
                        {content.education.map((edu, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <Card>
                                    <CardHeader>
                                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                                            <div>
                                                <CardTitle className="text-xl">{edu.degree}</CardTitle>
                                                <CardDescription className="text-lg font-medium text-primary mt-1">{edu.school}</CardDescription>
                                            </div>
                                            <div className="flex flex-col items-end gap-2">
                                                <Badge variant="secondary">{edu.year}</Badge>
                                                {edu.score && (
                                                    <Badge variant="outline" className="font-bold border-primary">
                                                        {edu.score}
                                                    </Badge>
                                                )}
                                            </div>
                                        </div>
                                    </CardHeader>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
