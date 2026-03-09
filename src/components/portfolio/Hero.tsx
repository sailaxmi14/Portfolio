import { Mail, Phone, MapPin } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-[80vh] flex items-center justify-center pt-16 bg-background">
      <div className="max-w-3xl mx-auto px-6 text-center animate-fade-in">
        <p className="text-sm font-body font-medium tracking-[0.2em] uppercase text-accent mb-4">
          Portfolio
        </p>
        <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-foreground leading-tight mb-6">
          Venkata Sai Laxmi
          <br />
          <span className="text-muted-foreground font-semibold">Satyavarapu</span>
        </h1>
        <p className="font-body text-base sm:text-lg text-muted-foreground max-w-xl mx-auto mb-8 leading-relaxed">
          Enthusiastic fresher with a strong foundation in cloud technologies, data analytics, and Python.
          Eager to deliver impactful insights and contribute effectively in a professional environment.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-5 text-sm font-body text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <Mail size={15} className="text-accent" /> sailaxmisatyavarapu2006@gmail.com
          </span>
          <span className="flex items-center gap-1.5">
            <Phone size={15} className="text-accent" /> 8143093908
          </span>
          <span className="flex items-center gap-1.5">
            <MapPin size={15} className="text-accent" /> Vizianagaram, India
          </span>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-4 mt-6">
          <a
            href="https://linkedin.com/in/sailaxmi-370218261/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/sailaxmi14"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-2.5 text-sm font-medium text-foreground hover:bg-secondary transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://leetcode.com/u/sailaxmi1402/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-2.5 text-sm font-medium text-foreground hover:bg-secondary transition-colors"
          >
            LeetCode
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
