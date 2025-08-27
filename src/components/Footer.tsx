import { motion } from 'framer-motion';
import { Heart, Github, Linkedin, Twitter, Mail, ArrowUp } from 'lucide-react';
import { Button } from './ui/button';

const socialLinks = [
  { href: 'https://github.com/jordansmith', icon: Github, label: 'GitHub' },
  { href: 'https://linkedin.com/in/jordansmith', icon: Linkedin, label: 'LinkedIn' },
  { href: 'https://twitter.com/jordansmith', icon: Twitter, label: 'Twitter' },
  { href: 'mailto:jordan@designer.com', icon: Mail, label: 'Email' },
];

const footerLinks = [
  {
    title: 'Work',
    links: [
      { href: '#work', label: 'Portfolio' },
      { href: '#skills', label: 'Skills' },
      { href: '#about', label: 'About' },
      { href: '#resume', label: 'Resume' },
    ]
  },
  {
    title: 'Services',
    links: [
      { href: '#', label: 'UI/UX Design' },
      { href: '#', label: 'Web Development' },
      { href: '#', label: 'Design Systems' },
      { href: '#', label: 'Consultation' },
    ]
  },
  {
    title: 'Connect',
    links: [
      { href: '#contact', label: 'Get In Touch' },
      { href: '#', label: 'LinkedIn' },
      { href: '#', label: 'Dribbble' },
      { href: '#', label: 'GitHub' },
    ]
  }
];

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative overflow-hidden bg-muted/30">
      {/* Background elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-32 h-32 gradient-primary rounded-full opacity-10 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-24 h-24 gradient-secondary rounded-full opacity-15 blur-2xl"
          animate={{
            y: [0, -20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Main footer content */}
        <div className="py-16 border-b border-border/50">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Brand section */}
            <motion.div
              className="lg:col-span-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 gradient-primary rounded-xl flex items-center justify-center">
                    <span className="text-lg font-bold text-white">JS</span>
                  </div>
                  <h3 className="text-xl font-bold">Jordan Smith</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Web designer & developer passionate about creating beautiful, 
                  user-centered digital experiences.
                </p>
                
                {/* Social links */}
                <div className="flex gap-3">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      className="p-3 bg-card hover:bg-primary hover:text-primary-foreground rounded-xl transition-colors shadow-sm"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <social.icon className="size-4" />
                      <span className="sr-only">{social.label}</span>
                    </motion.a>
                  ))}
                </div>
                
                {/* Availability status */}
                <div className="flex items-center gap-2 p-3 bg-green-50 dark:bg-green-900/20 rounded-xl">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-sm text-green-700 dark:text-green-300 font-medium">
                    Available for new projects
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Footer links */}
            {footerLinks.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <h4 className="font-medium mb-4">{section.title}</h4>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <motion.a
                        href={link.href}
                        className="text-muted-foreground hover:text-foreground transition-colors"
                        whileHover={{ x: 4 }}
                        onClick={(e) => {
                          if (link.href.startsWith('#')) {
                            e.preventDefault();
                            const target = document.querySelector(link.href);
                            if (target) {
                              target.scrollIntoView({ behavior: 'smooth' });
                            }
                          }
                        }}
                      >
                        {link.label}
                      </motion.a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom footer */}
        <div className="py-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <motion.p
            className="text-sm text-muted-foreground flex items-center gap-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Made with <Heart className="size-4 text-red-500" /> using React, TypeScript & Tailwind CSS
          </motion.p>
          
          <div className="flex items-center gap-4">
            <motion.p
              className="text-sm text-muted-foreground"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              © 2024 Alex Designer. All rights reserved.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <Button
                variant="outline"
                size="sm"
                onClick={scrollToTop}
                className="rounded-full"
              >
                <ArrowUp className="size-4" />
                <span className="sr-only">Back to top</span>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <motion.div
        className="absolute bottom-0 left-1/4 w-32 h-32 bg-primary/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute top-1/2 right-1/4 w-24 h-24 bg-accent/10 rounded-full blur-2xl"
        animate={{
          y: [0, -20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />
    </footer>
  );
}