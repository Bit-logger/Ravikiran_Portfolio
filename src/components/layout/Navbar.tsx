"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Github, Linkedin, Twitter, Instagram, Sparkles } from "lucide-react";
import { content } from "@/data/content";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useTheme } from "@/components/providers/ThemeProvider";

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const { isVibrant, toggleVibrant } = useTheme();

    const navLinks = [
        { name: "About", href: "#about" },
        { name: "Skills", href: "#skills" },
        { name: "Projects", href: "#projects" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b-2 border-transparent transition-colors duration-300">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link href="/" className="text-xl font-bold tracking-tight">
                        {content.personal.name}
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-6">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-sm font-medium hover:text-primary transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <div className="flex items-center gap-2 ml-4">
                            <Button size="icon" variant="ghost" asChild>
                                <Link href={content.socials.github} target="_blank">
                                    <Github className="h-5 w-5" />
                                </Link>
                            </Button>
                            <Button size="icon" variant="ghost" asChild>
                                <Link href={content.socials.linkedin} target="_blank">
                                    <Linkedin className="h-5 w-5" />
                                </Link>
                            </Button>

                            <div className="w-px h-6 bg-border mx-2"></div>

                            <Button
                                variant={isVibrant ? "default" : "outline"}
                                size="sm"
                                onClick={toggleVibrant}
                                className={cn(
                                    "gap-2 transition-all",
                                    isVibrant ? "bg-purple-600 hover:bg-purple-700 text-white border-black" : "border-2 border-black"
                                )}
                            >
                                <Sparkles className="h-4 w-4" />
                                <span className="font-bold hidden lg:inline">VIBRANT</span>
                            </Button>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="flex items-center gap-4 md:hidden">
                        <Button
                            variant={isVibrant ? "default" : "outline"}
                            size="icon"
                            onClick={toggleVibrant}
                            className={cn(
                                "transition-all ml-auto",
                                isVibrant ? "bg-purple-600 hover:bg-purple-700 text-white border-black" : "border-2 border-black"
                            )}
                        >
                            <Sparkles className="h-4 w-4" />
                        </Button>

                        <button
                            className="p-2 text-foreground"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            {isOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Nav */}
            <div
                className={cn(
                    "md:hidden absolute top-16 left-0 right-0 bg-background border-b transition-all duration-300 ease-in-out",
                    isOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
                )}
            >
                <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-lg font-medium hover:text-primary"
                            onClick={() => setIsOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <div className="flex items-center gap-4 mt-2">
                        <Link href={content.socials.github} target="_blank" className="p-2">
                            <Github className="h-5 w-5" />
                        </Link>
                        <Link href={content.socials.linkedin} target="_blank" className="p-2">
                            <Linkedin className="h-5 w-5" />
                        </Link>
                        <Link href={content.socials.twitter} target="_blank" className="p-2">
                            <Twitter className="h-5 w-5" />
                        </Link>
                        <Link href={content.socials.instagram} target="_blank" className="p-2">
                            <Instagram className="h-5 w-5" />
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
