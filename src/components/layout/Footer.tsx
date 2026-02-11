import Link from "next/link";
import { content } from "@/data/content";

export function Footer() {
    return (
        <footer className="border-t-2 border-border py-12 mt-20 bg-background">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-2xl font-bold mb-4">{content.personal.name}</h2>
                <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                    {content.personal.tagline}
                </p>
                <div className="flex justify-center gap-6 mb-8">
                    <Link href={content.socials.github} target="_blank" className="hover:text-primary transition-colors">GitHub</Link>
                    <Link href={content.socials.linkedin} target="_blank" className="hover:text-primary transition-colors">LinkedIn</Link>
                    <Link href={content.socials.twitter} target="_blank" className="hover:text-primary transition-colors">Twitter</Link>
                    <Link href={content.socials.instagram} target="_blank" className="hover:text-primary transition-colors">Instagram</Link>
                </div>
                <p className="text-sm text-muted-foreground">
                    &copy; {new Date().getFullYear()} {content.personal.name}. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
