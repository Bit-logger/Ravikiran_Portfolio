"use client";

import { motion } from "framer-motion";
import { content } from "@/data/content";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function Certifications() {
    if (!content.certifications || content.certifications.length === 0) return null;

    return (
        <section id="certifications" className="py-20 bg-background border-t-2 border-border">
            <div className="container mx-auto px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="space-y-12"
                >
                    <div className="text-center space-y-4">
                        <h2 className="text-3xl font-bold">Certifications</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Credentials and recognitions I've earned.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {content.certifications.map((cert, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <Card className="h-full hover:shadow-lg transition-all duration-300">
                                    <CardHeader>
                                        <CardTitle className="text-lg">{cert.title}</CardTitle>
                                        <CardDescription className="font-medium text-primary mt-1">
                                            {cert.issuer}
                                        </CardDescription>
                                        {cert.date && (
                                            <div className="mt-2">
                                                <Badge variant="outline">{cert.date}</Badge>
                                            </div>
                                        )}
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
