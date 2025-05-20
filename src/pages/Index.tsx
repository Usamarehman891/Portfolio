
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import { useEffect } from "react";

const Index = () => {
  // Apply a full page scroll reveal effect
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          // Fix TypeScript errors by checking if element is HTMLElement before setting style
          if (entry.target instanceof HTMLElement) {
            entry.target.style.opacity = '1';
          }
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Target all section elements
    const sections = document.querySelectorAll('section > div');
    sections.forEach(section => {
      if (!section.classList.contains('animate-fade-in')) {
        // Fix TypeScript errors by checking if element is HTMLElement before setting style
        if (section instanceof HTMLElement) {
          section.style.opacity = '0';
        }
        observer.observe(section);
      }
    });

    return () => {
      sections.forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default Index;
