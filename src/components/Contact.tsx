import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, Github, Linkedin } from "lucide-react";
import emailjs from '@emailjs/browser'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Prepare template parameters
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message
      };

      // Send email using EmailJS
      await emailjs.send(
        'service_17bj3ln',      // Your service ID
        'template_fj7z89e',     // Your template ID
        templateParams,
        'ZiEYzwb4mTz1gUg7h'     // Your public key
      );

      // Show success message
      toast({
        title: "Message sent!",
        description: "Thank you for contacting me. I'll respond as soon as possible.",
      });

      // Reset form
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Error sending email:", error);
      toast({
        title: "Message failed to send",
        description: "There was an error sending your message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-primary-pink/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary-blue/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="bg-gradient-primary text-primary-foreground px-4 py-1 rounded-full text-2xl font-medium">Contact Me</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-8 mb-6 gradient-text">Get In Touch</h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8 rounded-full"></div>
          <p className="text-muted-foreground text-lg">
            Have a question or want to work together? Feel free to reach out.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="glass p-8 rounded-2xl border border-primary/10 card-hover shadow-lg shadow-primary/5 mb-8">
              <h3 className="text-2xl font-semibold mb-6 gradient-text">Let's Connect</h3>
              <p className="text-muted-foreground mb-8">
                I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center ">
                  <div className="w-12 h-12 flex-shrink-0 rounded-full bg-gradient-primary flex items-center justify-center mr-4">
                    <Mail className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <p className="text-sm text-muted-foreground">Mail me at</p>
                    <a href="mailto:Usamarehmanarain891@gmail.com" className="font-medium hover:text-primary transition-colors break-words">Usamarehmanarain891@gmail.com</a>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center mr-4">
                    <Phone className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Call me at</p>
                    <a href="tel:+923070128898" className="font-medium hover:text-primary transition-colors">+92 307 0128898</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass p-8 rounded-2xl border border-primary/10 card-hover shadow-lg shadow-primary/5">
              <h3 className="text-2xl font-semibold mb-6 gradient-text">Follow Me</h3>
              <div className="flex space-x-4">
                <a href="https://github.com/Usamarehman891" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center hover:opacity-90 transition-opacity">
                  <Github className="h-5 w-5 text-primary-foreground" />
                </a>
                <a href="https://www.linkedin.com/in/usama-rehman-481134139/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center hover:opacity-90 transition-opacity">
                  <Linkedin className="h-5 w-5 text-primary-foreground" />
                </a>
              </div>
            </div>
          </div>

          <div>
            <div className="glass p-8 rounded-2xl border border-primary/10 card-hover shadow-lg shadow-primary/5">
              <h3 className="text-2xl font-semibold mb-6 gradient-text">Send Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name" 
                    required 
                    className="glass border-primary/20 focus:border-primary"
                  />
                </div>
                <div>
                  <Input 
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email" 
                    required 
                    className="glass border-primary/20 focus:border-primary"
                  />
                </div>
                <div>
                  <Input 
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject" 
                    required 
                    className="glass border-primary/20 focus:border-primary"
                  />
                </div>
                <div>
                  <Textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message" 
                    rows={5} 
                    required 
                    className="glass border-primary/20 focus:border-primary"
                  />
                </div>
                <Button type="submit" className="w-full bg-gradient-primary hover:opacity-90" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <footer className="mt-24 border-t border-primary/10 py-8">
        <div className="container mx-auto px-4">
          <p className="text-center text-muted-foreground">
            © {new Date().getFullYear()} Usama Rehman. All rights reserved.
          </p>
        </div>
      </footer>
    </section>
  );
};

export default Contact;