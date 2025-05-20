
import { Button } from '@/components/ui/button';
import { FileText } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-primary-blue/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-0 w-72 h-72 bg-primary-orange/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="bg-gradient-primary text-primary-foreground px-4 py-1 rounded-full text-2xl font-large">About Me</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-8  mb- gradient-text">Who Am I?</h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="space-y-4">
              <div className="p-6 glass rounded-2xl card-hover border border-primary/10">
                <h3 className="text-2xl font-semibold mb-4 gradient-text">My Journey</h3>
                <p className="text-muted-foreground">
                  A software engineer with a passion for crafting elegant and efficient web solutions. 
                  My expertise spans both frontend and backend development, allowing me to build complete, end-to-end web applications.
                </p>
              </div>
              
              <div className="p-6 glass rounded-2xl card-hover border border-primary/10">
                <h3 className="text-2xl font-semibold mb-4 gradient-text">Education</h3>
                <p className="text-muted-foreground mb-4">
                  B.S. in Software Engineering<br />
                  University of Karachi (2021–2024)
                </p>
              </div>

              <div className="p-6 glass rounded-2xl card-hover border border-primary/10">
                <h3 className="text-2xl font-semibold mb-4 gradient-text">Beyond Coding</h3>
                <p className="text-muted-foreground mb-6">
                  When I'm not coding, I enjoy exploring new technologies, contributing to open-source projects,
                  and sharing my knowledge with the developer community.
                </p>
                <Button className="bg-gradient-primary hover:opacity-90" asChild>
                  <a href="/cv.pdf" download>
                    <FileText className="mr-2 h-4 w-4" /> Download Resume
                  </a>
                </Button>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="grid grid-cols-2 gap-6">
              <div className="glass rounded-2xl p-8 shadow-lg shadow-primary/5 card-hover border border-primary/10">
                <h4 className="font-bold text-4xl gradient-text mb-2">3+</h4>
                <p className="text-lg text-muted-foreground">Years of Experience</p>
              </div>
              <div className="glass rounded-2xl p-8 shadow-lg shadow-primary/5 card-hover border border-primary/10">
                <h4 className="font-bold text-4xl gradient-text mb-2">30+</h4>
                <p className="text-lg text-muted-foreground">Projects Completed</p>
              </div>
              <div className="glass rounded-2xl p-8 shadow-lg shadow-primary/5 card-hover border border-primary/10">
                <h4 className="font-bold text-4xl gradient-text mb-2">20+</h4>
                <p className="text-lg text-muted-foreground">Happy Clients</p>
              </div>
              <div className="glass rounded-2xl p-8 shadow-lg shadow-primary/5 card-hover border border-primary/10">
                <h4 className="font-bold text-4xl gradient-text mb-2">15+</h4>
                <p className="text-lg text-muted-foreground">Technologies</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
