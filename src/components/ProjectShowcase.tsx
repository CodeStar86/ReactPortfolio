import { motion } from 'framer-motion';
import { ExternalLink, Github, Eye } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Design System Platform',
    description: 'A comprehensive design system documentation platform with live component playground and design token management.',
    image: 'https://images.unsplash.com/photo-1630522790858-50b4ef44944b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXNpZ24lMjBtb2NrdXAlMjBtb2Rlcm58ZW58MXx8fHwxNzU1OTQyMjEwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['React', 'TypeScript', 'Storybook', 'Design Tokens'],
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
  },
  {
    id: 2,
    title: 'Mobile Banking App',
    description: 'Modern banking app interface with focus on accessibility and user experience across all touch points.',
    image: 'https://images.unsplash.com/photo-1618761714954-0b8cd0026356?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2UlMjBkZXNpZ258ZW58MXx8fHwxNzU1ODU5MjYwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['Mobile', 'UI/UX', 'Figma', 'Prototyping'],
    liveUrl: '#',
    featured: true,
  },
  {
    id: 3,
    title: 'Analytics Dashboard',
    description: 'Real-time analytics dashboard with interactive data visualizations and responsive design.',
    image: 'https://images.unsplash.com/photo-1575388902449-6bca946ad549?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXNoYm9hcmQlMjB1aSUyMGRlc2lnbiUyMGludGVyZmFjZXxlbnwxfHx8fDE3NTU5NDIyMTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['Dashboard', 'Data Viz', 'React', 'Charts'],
    liveUrl: '#',
    githubUrl: '#',
  },
];

export function ProjectShowcase() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30,
      },
    },
  };

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-4">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A collection of recent work showcasing design system implementation, 
            user interface design, and frontend development expertise.
          </p>
        </motion.div>

        <motion.div
          className="grid lg:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Featured project - takes full width on larger screens */}
          <motion.div 
            variants={itemVariants}
            className="lg:col-span-2"
          >
            <ProjectCard project={projects[0]} featured />
          </motion.div>

          {/* Other projects */}
          {projects.slice(1).map((project) => (
            <motion.div key={project.id} variants={itemVariants}>
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>

        {/* View all projects button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <Button variant="outline" size="lg" className="rounded-2xl">
            <Eye className="size-5 mr-2" />
            View All Projects
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

function ProjectCard({ project, featured = false }: { project: Project; featured?: boolean }) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
    >
      <Card className={`overflow-hidden rounded-2xl ${featured ? 'lg:flex lg:items-center' : ''} group cursor-pointer`}>
        {/* Project image */}
        <div className={`relative overflow-hidden ${featured ? 'lg:w-1/2' : ''}`}>
          <motion.div
            className="aspect-video relative"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <ImageWithFallback
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* Overlay buttons */}
            <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {project.liveUrl && (
                <Button size="sm" className="rounded-full">
                  <ExternalLink className="size-4" />
                </Button>
              )}
              {project.githubUrl && (
                <Button size="sm" variant="secondary" className="rounded-full">
                  <Github className="size-4" />
                </Button>
              )}
            </div>
          </motion.div>
        </div>

        {/* Project content */}
        <CardContent className={`p-6 ${featured ? 'lg:w-1/2' : ''}`}>
          <div className="space-y-4">
            {featured && (
              <Badge className="rounded-full">Featured Project</Badge>
            )}
            
            <div>
              <h3 className="mb-2">{project.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="rounded-full text-xs">
                  {tag}
                </Badge>
              ))}
            </div>

            {/* Action buttons */}
            <div className="flex gap-3 pt-2">
              {project.liveUrl && (
                <Button variant="outline" size="sm" className="rounded-2xl">
                  <ExternalLink className="size-4 mr-2" />
                  Live Demo
                </Button>
              )}
              {project.githubUrl && (
                <Button variant="outline" size="sm" className="rounded-2xl">
                  <Github className="size-4 mr-2" />
                  Code
                </Button>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}