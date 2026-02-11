"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Twitter, Instagram } from "lucide-react";
import { content } from "@/data/content";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Contact() {
    return (
        <section id="contact" className="py-20">
            <div className="container mx-auto px-4 md:px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="max-w-2xl mx-auto space-y-6"
                >
                    <h2 className="text-3xl font-bold">Get In Touch</h2>
                    <p className="text-muted-foreground">
                        I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>

                    <div className="flex justify-center gap-4 pt-4">
                        <Button size="lg" asChild>
                            <Link href={`mailto:${content.socials.email}`}>
                                <Mail className="mr-2 h-4 w-4" />
                                Say Hello
                            </Link>
                        </Button>
                    </div>

                    <div className="flex justify-center gap-6 mt-8">
                        <Link href={content.socials.github} target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                            <Github className="h-6 w-6" />
                        </Link>
                        <Link href={content.socials.linkedin} target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                            <Linkedin className="h-6 w-6" />
                        </Link>
                        <Link href={content.socials.twitter} target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                            <Twitter className="h-6 w-6" />
                        </Link>
                        <Link href={content.socials.instagram} target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                            <Instagram className="h-6 w-6" />
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
