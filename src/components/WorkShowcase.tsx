import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, X, ArrowRight, Figma, Code, Smartphone, Monitor } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';

import { ImageWithFallback } from './figma/ImageWithFallback';
import { DownloadButton } from './ui/download-button';

interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  figmaUrl?: string;
  featured?: boolean;
  caseStudy: {
    problem: string;
    solution: string;
    outcome: string;
    process: string[];
    images: string[];
  };
}

const projects: Project[] = [
  {
    id: 1,
    title: 'E-Commerce Platform Redesign',
    description: 'Complete UI/UX overhaul of a major e-commerce platform, focusing on conversion optimization and user experience.',
    category: 'UI/UX Design',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800',
    tags: ['Figma', 'User Research', 'Prototyping', 'A/B Testing'],
    liveUrl: '#',
    figmaUrl: '#',
    featured: true,
    caseStudy: {
      problem: 'The existing e-commerce platform had a 68% cart abandonment rate and poor mobile experience.',
      solution: 'Redesigned the entire user journey with focus on mobile-first approach, streamlined checkout, and improved product discovery.',
      outcome: '45% increase in conversion rate, 60% reduction in cart abandonment, 89% improvement in mobile user satisfaction.',
      process: ['User Research', 'Competitive Analysis', 'Wireframing', 'Prototyping', 'User Testing', 'Implementation'],
      images: [
        'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800',
        'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800',
        'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800',
      ]
    }
  },
  {
    id: 2,
    title: 'Banking Mobile App',
    description: 'Modern mobile banking app with focus on security, accessibility, and seamless user experience.',
    category: 'Mobile Design',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800',
    tags: ['Mobile UI', 'React Native', 'Security', 'Accessibility'],
    liveUrl: '#',
    githubUrl: '#',
    caseStudy: {
      problem: 'Traditional banking app with poor usability and security concerns from users.',
      solution: 'Designed a modern, secure, and intuitive mobile banking experience with biometric authentication and personalized dashboard.',
      outcome: '92% user satisfaction score, 50% increase in mobile transactions, 40% reduction in support tickets.',
      process: ['Security Assessment', 'User Journey Mapping', 'UI Design', 'Prototype Testing', 'Development Handoff'],
      images: [
        'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800',
        'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800',
      ]
    }
  },
  {
    id: 3,
    title: 'SaaS Dashboard Interface',
    description: 'Data-rich dashboard for B2B SaaS platform with complex workflows and real-time analytics.',
    category: 'Dashboard Design',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800',
    tags: ['Dashboard', 'Data Visualization', 'React', 'TypeScript'],
    liveUrl: '#',
    githubUrl: '#',
    caseStudy: {
      problem: 'Complex B2B SaaS platform needed a unified dashboard to reduce user cognitive load.',
      solution: 'Created a modular dashboard system with customizable widgets and intelligent data prioritization.',
      outcome: '65% reduction in time-to-insight, 80% increase in daily active users, 95% feature adoption rate.',
      process: ['Data Analysis', 'Information Architecture', 'Component Design', 'Dashboard Prototyping', 'User Testing'],
      images: [
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800',
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
      ]
    }
  },
  {
    id: 4,
    title: 'Design System Library',
    description: 'Comprehensive design system with component library, design tokens, and documentation.',
    category: 'Design System',
    image: 'https://images.unsplash.com/photo-1545235617-9465d2a55698?w=800',
    tags: ['Design System', 'Storybook', 'Tokens', 'Documentation'],
    liveUrl: '#',
    githubUrl: '#',
    caseStudy: {
      problem: 'Multiple teams creating inconsistent UI components, slowing down development and creating poor UX.',
      solution: 'Built a comprehensive design system with reusable components, design tokens, and detailed documentation.',
      outcome: '70% faster development cycles, 90% consistency across products, 100% team adoption within 6 months.',
      process: ['Audit Existing Components', 'Define Design Tokens', 'Create Component Library', 'Documentation', 'Team Training'],
      images: [
        'https://images.unsplash.com/photo-1545235617-9465d2a55698?w=800',
        'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800',
      ]
    }
  },
  {
    id: 5,
    title: 'Healthcare Web Platform',
    description: 'Patient management system with focus on accessibility, privacy, and user-friendly interface.',
    category: 'Web Application',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800',
    tags: ['Healthcare', 'Accessibility', 'HIPAA', 'Vue.js'],
    liveUrl: '#',
    caseStudy: {
      problem: 'Healthcare providers needed a HIPAA-compliant platform that was both secure and user-friendly.',
      solution: 'Designed an accessible, secure platform with clear information hierarchy and intuitive workflows.',
      outcome: '98% accessibility compliance, 85% user satisfaction, 40% reduction in patient onboarding time.',
      process: ['Compliance Review', 'User Research', 'Accessibility Design', 'Security Testing', 'Implementation'],
      images: [
        'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800',
        'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800',
      ]
    }
  },
  {
    id: 6,
    title: 'Creative Portfolio Website',
    description: 'Interactive portfolio website for digital artist with immersive galleries and smooth animations.',
    category: 'Portfolio Design',
    image: 'https://images.unsplash.com/photo-1586717799252-bd134ad00e26?w=800',
    tags: ['Portfolio', 'Animation', 'Three.js', 'Creative'],
    liveUrl: '#',
    githubUrl: '#',
    caseStudy: {
      problem: 'Digital artist needed a unique online presence to showcase work and attract high-value clients.',
      solution: 'Created an immersive, interactive portfolio with 3D elements and smooth micro-interactions.',
      outcome: '300% increase in client inquiries, featured in design showcases, 95% positive client feedback.',
      process: ['Creative Direction', 'Interactive Prototyping', '3D Integration', 'Performance Optimization', 'Launch Strategy'],
      images: [
        'https://images.unsplash.com/photo-1586717799252-bd134ad00e26?w=800',
        'https://images.unsplash.com/photo-1558655146-d09347e92766?w=800',
      ]
    }
  }
];


export function WorkShowcase() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="work" className="py-20">
      <div className="container mx-auto px-4">
        {selectedProject ? (
          <CaseStudyPage 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        ) : (
          <>
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="mb-6 text-gradient">Featured Work</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                A showcase of recent projects spanning UI/UX design, frontend development, 
                and design systems. Each project tells a story of problem-solving and user-centered design.
              </p>
            </motion.div>

            <motion.div
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {projects.map((project) => (
                <ProjectCard 
                  key={project.id} 
                  project={project} 
                  onClick={() => setSelectedProject(project)} 
                />
              ))}
            </motion.div>

          </>
        )}

      </div>
    </section>
  );
}
function ProjectCard({ project, onClick }: { project: Project; onClick: () => void }) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      className="cursor-pointer"
      onClick={onClick}
    >
      <Card className="overflow-hidden group border-0 shadow-lg hover:shadow-2xl transition-all duration-300">
        {/* Project image */}
        <div className="relative overflow-hidden">
          <ImageWithFallback
            src={project.image}
            alt={project.title}
            className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
          />
          {project.featured && (
            <Badge className="absolute top-4 left-4 gradient-accent border-0 text-white">
              Featured
            </Badge>
          )}
          
          {/* Overlay with icons */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute bottom-4 left-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {project.liveUrl && (
              <Button size="sm" className="rounded-full bg-white/20 backdrop-blur-sm border-0 text-white hover:bg-white/30">
                <ExternalLink className="size-4" />
              </Button>
            )}
            {project.githubUrl && (
              <Button size="sm" className="rounded-full bg-white/20 backdrop-blur-sm border-0 text-white hover:bg-white/30">
                <Github className="size-4" />
              </Button>
            )}
            {project.figmaUrl && (
              <Button size="sm" className="rounded-full bg-white/20 backdrop-blur-sm border-0 text-white hover:bg-white/30">
                <Figma className="size-4" />
              </Button>
            )}
          </div>
        </div>

        {/* Project content */}
        <CardContent className="p-6">
          <div className="space-y-4">
            <div>
              <Badge variant="secondary" className="mb-3 rounded-full">
                {project.category}
              </Badge>
              <h3 className="font-bold mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {project.tags.slice(0, 3).map((tag) => (
                <Badge key={tag} variant="outline" className="rounded-full text-xs">
                  {tag}
                </Badge>
              ))}
              {project.tags.length > 3 && (
                <Badge variant="outline" className="rounded-full text-xs">
                  +{project.tags.length - 3} more
                </Badge>
              )}
            </div>

            {/* View case study link */}
            <div className="flex items-center text-primary group-hover:text-primary/80 transition-colors">
              <span className="text-sm font-medium">View Case Study</span>
              <ArrowRight className="size-4 ml-1 transition-transform group-hover:translate-x-1" />
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}


function CaseStudyPage({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <div className="w-full min-h-screen bg-background flex flex-col">
      <div className="flex justify-between items-center p-4 border-b">
        <h2 className="text-2xl font-bold">{project.title}</h2>
        <button onClick={onClose} className="text-gray-500 hover:text-black text-xl">✕</button>
      </div>
      <div className="grid md:grid-cols-2 flex-1 overflow-auto">
        <div className="h-64 md:h-auto">
          <ImageWithFallback src={project.image} alt={project.title} className="w-full h-full object-cover" />
        </div>
        <div className="p-6 md:p-10 space-y-6 overflow-y-auto">
          <p className="text-muted-foreground">{project.description}</p>
          <h3 className="font-bold">Problem</h3>
          <p>{project.caseStudy.problem}</p>
          <h3 className="font-bold">Solution</h3>
          <p>{project.caseStudy.solution}</p>
          <h3 className="font-bold">Outcome</h3>
          <p>{project.caseStudy.outcome}</p>
          <div className="flex flex-wrap gap-4 pt-4 border-t">
            {project.liveUrl && (<a href={project.liveUrl} target="_blank" className="btn-primary">View Live</a>)}
            {project.githubUrl && (<a href={project.githubUrl} target="_blank" className="btn-secondary">View Code</a>)}
          </div>
        </div>
      </div>
    </div>
  );
}
