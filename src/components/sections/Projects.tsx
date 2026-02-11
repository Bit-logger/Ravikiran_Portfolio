"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { content } from "@/data/content";
import { Badge } from "@/components/ui/badge";
import {
    Card,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
    CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Projects() {
    return (
        <section id="projects" className="py-20 bg-muted/30">
            <div className="container mx-auto px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="space-y-12"
                >
                    <div className="text-center space-y-4">
                        <h2 className="text-3xl font-bold">Featured Projects</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Here are some of the key projects I've worked on, showcasing my journey in AI and Software Engineering.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {content.projects.map((project, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <Card className="h-full flex flex-col hover:shadow-lg transition-shadow duration-300">
                                    <CardHeader>
                                        <CardTitle>{project.name}</CardTitle>
                                        <div className="flex flex-wrap gap-2 mt-2">
                                            {project.stack.slice(0, 3).map((tech) => (
                                                <Badge key={tech} variant="outline" className="text-xs">
                                                    {tech}
                                                </Badge>
                                            ))}
                                            {project.stack.length > 3 && (
                                                <Badge variant="outline" className="text-xs">+{project.stack.length - 3}</Badge>
                                            )}
                                        </div>
                                    </CardHeader>
                                    <CardContent className="flex-grow">
                                        <CardDescription className="text-base">
                                            {project.description}
                                        </CardDescription>
                                    </CardContent>
                                    <CardFooter className="flex gap-4">
                                        {project.github && (
                                            <Button variant="outline" size="sm" asChild>
                                                <Link href={project.github} target="_blank">
                                                    <Github className="mr-2 h-4 w-4" />
                                                    Code
                                                </Link>
                                            </Button>
                                        )}
                                        {project.link && (
                                            <Button size="sm" asChild>
                                                <Link href={project.link} target="_blank">
                                                    <ExternalLink className="mr-2 h-4 w-4" />
                                                    Demo
                                                </Link>
                                            </Button>
                                        )}
                                    </CardFooter>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
