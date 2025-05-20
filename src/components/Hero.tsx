
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const words = [
    "Full-Stack Web Developer",
    "Software Engineer",
    "Frontend Specialist",
    "React Developer",
    "UI/UX Enthusiast"
  ];
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100); // milliseconds per character

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const currentWord = words[wordIndex];
    
    // Typing effect logic
    if (!isDeleting && displayText === currentWord) {
      // Pause at the end of the word
      timer = setTimeout(() => {
        setIsDeleting(true);
        setTypingSpeed(50); // Delete faster than typing
      }, 2000); // Wait 2 seconds before starting to delete
    } 
    else if (isDeleting && displayText === '') {
      // Move to the next word
      setIsDeleting(false);
      setTypingSpeed(100);
      setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }
    else {
      // Handle typing or deleting
      timer = setTimeout(() => {
        setDisplayText(prevText => {
          if (isDeleting) {
            // Remove one character
            return prevText.substring(0, prevText.length - 1);
          } else {
            // Add one character
            return currentWord.substring(0, prevText.length + 1);
          }
        });
      }, typingSpeed);
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, wordIndex, words, typingSpeed]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-32 md:pt-40 section-padding relative overflow-hidden">
      {/* Modern background elements with new colors */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-primary-orange/20 blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-primary-teal/20 blur-3xl"></div>
        <div className="absolute top-1/3 left-2/3 w-60 h-60 rounded-full bg-primary-blue/20 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-40 h-40 rounded-full bg-primary-pink/20 blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-56 h-56 rounded-full bg-primary-indigo/15 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-primary-teal/30 to-primary-blue/30 backdrop-blur-md border border-white/10 dark:border-white/5 text-foreground mb-6">
              <p className="text-lg font-medium">Hello, I'm</p>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary-teal to-primary-blue animate-fade-in opacity-0" style={{animationDelay: '0.4s'}}>Usama Rehman</h1>
            <div className="h-12 mb-6 animate-fade-in opacity-0" style={{animationDelay: '0.6s'}}>
              <h2 className="text-2xl md:text-3xl font-semibold">
                <span>{displayText}</span>
                <span className="ml-1 inline-block h-6 w-0.5 bg-foreground animate-[blink_1s_step-end_infinite]"></span>
              </h2>
            </div>
            <p className="text-muted-foreground text-lg mb-8 max-w-lg animate-fade-in opacity-0" style={{animationDelay: '0.8s'}}>
              I thrive on turning complex ideas into user-friendly and impactful experiences. My journey in technology is fueled by a desire to continuously learn, solve challenging problems, and contribute meaningfully to the ever-evolving landscape of the web.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in opacity-0" style={{animationDelay: '1s'}}>
              <Button size="lg" className="bg-gradient-to-r from-primary-teal to-primary-blue hover:opacity-90 shadow-lg shadow-primary-teal/20" asChild>
                <a href="#contact">
                  Contact Me <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" size="lg" className="backdrop-blur-sm border-primary-teal/20 hover:border-primary-blue/40 transition-all duration-300" asChild>
                <a href="#projects">View My Work</a>
              </Button>
            </div>
          </div>
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative animate-float">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white/10 dark:border-white/5 animate-fade-in opacity-0 backdrop-blur-sm bg-gradient-to-br from-primary-teal/10 to-primary-blue/10" style={{animationDelay: '0.6s'}}>
                <img 
                  src="https://i.postimg.cc/8cFRXw2z/Untitled-design-1.png"
                  alt="Usama Rehman" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-gradient-to-r from-primary-teal to-primary-blue p-1 animate-fade-in opacity-0 shadow-lg" style={{animationDelay: '1s'}}>
                <div className="w-full h-full rounded-full bg-background flex items-center justify-center backdrop-blur-md">
                  <span className="font-bold text-lg bg-clip-text text-transparent bg-gradient-to-r from-primary-teal to-primary-blue">Web Dev</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
