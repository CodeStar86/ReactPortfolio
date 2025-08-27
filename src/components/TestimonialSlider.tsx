import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar?: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Chen',
    role: 'Product Manager',
    company: 'TechFlow',
    content: 'Alex delivered an exceptional design system that transformed our product development process. The attention to detail and systematic approach made scaling our UI components seamless.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Marcus Rodriguez',
    role: 'Engineering Lead',
    company: 'InnovateLabs',
    content: 'Working with Alex was a game-changer. The design system documentation and component library they created saved our team countless hours and improved consistency across all our products.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Emily Thompson',
    role: 'Design Director',
    company: 'CreativeStudio',
    content: 'Alex brings a unique combination of design thinking and technical expertise. Their ability to bridge the gap between design and development is truly remarkable.',
    rating: 5,
  },
  {
    id: 4,
    name: 'David Kim',
    role: 'Startup Founder',
    company: 'NextGen Solutions',
    content: 'The mobile app design Alex created exceeded our expectations. User engagement increased by 40% after launch, and the interface received praise from both users and investors.',
    rating: 5,
  }
];

export function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section id="testimonials" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-4">Client Testimonials</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Feedback from clients and collaborators who have experienced 
            the impact of thoughtful design and development.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Main testimonial card */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              >
                <Card className="rounded-2xl p-8 md:p-12 text-center relative overflow-hidden">
                  {/* Background decoration */}
                  <div className="absolute top-0 left-0 w-32 h-32 bg-primary/5 rounded-full -translate-x-16 -translate-y-16" />
                  <div className="absolute bottom-0 right-0 w-24 h-24 bg-accent/10 rounded-full translate-x-12 translate-y-12" />
                  
                  <CardContent className="relative z-10">
                    {/* Quote icon */}
                    <motion.div
                      className="mb-6"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, type: 'spring', stiffness: 500 }}
                    >
                      <Quote className="size-12 text-primary mx-auto" />
                    </motion.div>

                    {/* Rating */}
                    <motion.div
                      className="flex justify-center gap-1 mb-6"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      {[...Array(currentTestimonial.rating)].map((_, i) => (
                        <Star key={i} className="size-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </motion.div>

                    {/* Content */}
                    <motion.p
                      className="text-lg md:text-xl leading-relaxed mb-8 text-muted-foreground"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      "{currentTestimonial.content}"
                    </motion.p>

                    {/* Author */}
                    <motion.div
                      className="flex items-center justify-center gap-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      <Avatar className="w-12 h-12">
                        <AvatarFallback className="bg-primary/10 text-primary">
                          {currentTestimonial.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div className="text-left">
                        <div className="font-medium">{currentTestimonial.name}</div>
                        <div className="text-sm text-muted-foreground">
                          {currentTestimonial.role} at {currentTestimonial.company}
                        </div>
                      </div>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>

            {/* Navigation buttons */}
            <div className="absolute top-1/2 left-4 right-4 flex justify-between items-center -translate-y-1/2 pointer-events-none">
              <Button
                variant="outline"
                size="sm"
                className="rounded-full pointer-events-auto"
                onClick={prevTestimonial}
              >
                <ChevronLeft className="size-4" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="rounded-full pointer-events-auto"
                onClick={nextTestimonial}
              >
                <ChevronRight className="size-4" />
              </Button>
            </div>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-primary' : 'bg-muted'
                }`}
                onClick={() => goToTestimonial(index)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>

          {/* Progress bar */}
          <div className="w-full bg-muted h-1 rounded-full mt-4 overflow-hidden">
            <motion.div
              className="h-full bg-primary"
              initial={{ width: 0 }}
              animate={{ width: isAutoPlaying ? '100%' : '0%' }}
              transition={{ duration: 5, ease: 'linear' }}
              key={currentIndex}
            />
          </div>
        </div>
      </div>
    </section>
  );
}