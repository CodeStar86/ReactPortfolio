import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { WorkShowcase } from './components/WorkShowcase';
import { SkillsVisualization } from './components/SkillsVisualization';
import { AboutMe } from './components/AboutMe';
import { ResumeTimeline } from './components/ResumeTimeline';
import { TestimonialSlider } from './components/TestimonialSlider';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';
import { Toaster } from './components/ui/sonner';

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <WorkShowcase />
        <SkillsVisualization />
        <AboutMe />
        <ResumeTimeline />
        <TestimonialSlider />
        <ContactForm />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}