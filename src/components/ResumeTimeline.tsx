import { motion } from 'framer-motion';
import { Download, MapPin, Calendar, Award, BookOpen, Briefcase } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

interface TimelineItem {
  id: number;
  type: 'work' | 'education' | 'achievement';
  title: string;
  company?: string;
  school?: string;
  location: string;
  period: string;
  description: string;
  achievements?: string[];
  technologies?: string[];
}

const timelineItems: TimelineItem[] = [
  {
    id: 1,
    type: 'work',
    title: 'Senior UI/UX Designer',
    company: 'TechFlow Solutions',
    location: 'San Francisco, CA',
    period: 'Jan 2023 - Present',
    description: 'Leading design for multiple product teams, creating design systems, and mentoring junior designers.',
    achievements: [
      'Designed and implemented design system used across 5+ products',
      'Improved user onboarding conversion by 45%',
      'Led redesign of core platform resulting in 30% increase in user engagement',
      'Mentored 3 junior designers and established design review processes'
    ],
    technologies: ['Figma', 'React', 'TypeScript', 'Storybook', 'Adobe Creative Suite']
  },
  {
    id: 2,
    type: 'work',
    title: 'UI/UX Designer & Frontend Developer',
    company: 'StartupHub Inc.',
    location: 'San Francisco, CA',
    period: 'Jun 2021 - Dec 2022',
    description: 'Wore multiple hats in a fast-paced startup environment, handling both design and frontend development.',
    achievements: [
      'Designed and built responsive web application from scratch',
      'Created mobile-first design system and component library',
      'Collaborated with product team to define user stories and requirements',
      'Reduced development time by 40% through reusable component architecture'
    ],
    technologies: ['Sketch', 'Figma', 'React', 'Tailwind CSS', 'Next.js', 'Git']
  },
  {
    id: 3,
    type: 'work',
    title: 'Junior Web Designer',
    company: 'Creative Digital Agency',
    location: 'Oakland, CA',
    period: 'Mar 2020 - May 2021',
    description: 'Started my professional journey creating websites and digital campaigns for various clients.',
    achievements: [
      'Designed 20+ websites for clients across different industries',
      'Learned responsive design principles and web accessibility standards',
      'Collaborated with developers to ensure design implementation quality',
      'Received "Rising Star" award for exceptional client feedback'
    ],
    technologies: ['Adobe XD', 'Photoshop', 'Illustrator', 'HTML', 'CSS', 'JavaScript']
  },
  {
    id: 4,
    type: 'education',
    title: 'Bachelor of Fine Arts in Digital Design',
    school: 'California College of the Arts',
    location: 'Oakland, CA',
    period: '2016 - 2020',
    description: 'Comprehensive program covering design theory, digital media, and user experience principles.',
    achievements: [
      'Graduated Magna Cum Laude (GPA: 3.8)',
      'Senior thesis: "Accessibility in Digital Design" - received highest honors',
      'President of Digital Design Student Association',
      'Completed internship at local design studio'
    ]
  },
  {
    id: 5,
    type: 'achievement',
    title: 'Google UX Design Professional Certificate',
    location: 'Online',
    period: '2021',
    description: 'Completed comprehensive UX design program covering user research, prototyping, and testing.',
    achievements: [
      'Completed 6-month intensive program',
      'Created portfolio of 3 end-to-end UX projects',
      'Learned user research and usability testing methodologies'
    ]
  },
  {
    id: 6,
    type: 'achievement',
    title: 'Awwwards Site of the Day',
    location: 'International',
    period: '2022',
    description: 'Personal portfolio website recognized for outstanding design and user experience.',
    achievements: [
      'Featured on Awwwards homepage',
      'Recognized for innovation in web design',
      'Shared across design community platforms'
    ]
  }
];

export function ResumeTimeline() {
  const getIcon = (type: string) => {
    switch (type) {
      case 'work':
        return Briefcase;
      case 'education':
        return BookOpen;
      case 'achievement':
        return Award;
      default:
        return Briefcase;
    }
  };

  const getIconColor = (type: string) => {
    switch (type) {
      case 'work':
        return 'text-blue-500';
      case 'education':
        return 'text-green-500';
      case 'achievement':
        return 'text-yellow-500';
      default:
        return 'text-blue-500';
    }
  };

  return (
    <section id="resume" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-6 text-gradient">Resume</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
            My professional journey from creative student to senior designer, 
            with a focus on continuous learning and growth.
          </p>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              size="lg" 
              className="gradient-primary border-0 shadow-xl"
              onClick={() => {
                const link = document.createElement('a');
                link.href = '/resume.pdf';
                link.download = 'Jordan_Smith_Resume.pdf';
                link.setAttribute('target', '_blank');
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
            >
              <Download className="size-5 mr-2" />
              Download Full Resume
            </Button>
          </motion.div>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 md:left-1/2 md:-ml-0.5 w-0.5 h-full bg-gradient-to-b from-primary via-primary to-transparent" />

            <div className="space-y-12">
              {timelineItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative flex items-start ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline icon */}
                  <div className="absolute left-6 md:left-1/2 md:-ml-6 w-12 h-12 gradient-primary rounded-full flex items-center justify-center shadow-lg z-10">
                    {(() => {
                      const Icon = getIcon(item.type);
                      return <Icon className="size-5 text-white" />;
                    })()}
                  </div>

                  {/* Content card */}
                  <div className={`w-full md:w-5/12 ml-20 md:ml-0 ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                    <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                      <CardContent className="p-8">
                        <div className="space-y-4">
                          {/* Header */}
                          <div className="space-y-2">
                            <Badge 
                              variant="secondary" 
                              className={`rounded-full ${
                                item.type === 'work' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300' :
                                item.type === 'education' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300' :
                                'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300'
                              }`}
                            >
                              {item.type === 'work' ? 'Experience' : 
                               item.type === 'education' ? 'Education' : 'Achievement'}
                            </Badge>
                            
                            <h3 className="text-xl font-bold">{item.title}</h3>
                            
                            {item.company && (
                              <p className="text-lg text-primary font-medium">{item.company}</p>
                            )}
                            
                            {item.school && (
                              <p className="text-lg text-primary font-medium">{item.school}</p>
                            )}
                            
                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                              <div className="flex items-center gap-1">
                                <MapPin className="size-4" />
                                {item.location}
                              </div>
                              <div className="flex items-center gap-1">
                                <Calendar className="size-4" />
                                {item.period}
                              </div>
                            </div>
                          </div>

                          {/* Description */}
                          <p className="text-muted-foreground leading-relaxed">
                            {item.description}
                          </p>

                          {/* Achievements */}
                          {item.achievements && (
                            <div className="space-y-3">
                              <h4 className="font-medium">Key Achievements:</h4>
                              <ul className="space-y-2">
                                {item.achievements.map((achievement, i) => (
                                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                                    {achievement}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {/* Technologies */}
                          {item.technologies && (
                            <div className="space-y-3">
                              <h4 className="font-medium">Technologies:</h4>
                              <div className="flex flex-wrap gap-2">
                                {item.technologies.map((tech) => (
                                  <Badge key={tech} variant="outline" className="rounded-full text-xs">
                                    {tech}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to action */}
        <motion.div
          className="text-center mt-16 p-8 bg-gradient-to-r from-primary/5 to-accent/5 rounded-3xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold mb-4">Interested in working together?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, 
            or just having a chat about design and technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="gradient-primary border-0"
              onClick={() => {
                const contactSection = document.querySelector('#contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Get In Touch
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => {
                const link = document.createElement('a');
                link.href = '/resume.pdf';
                link.download = 'Jordan_Smith_Resume.pdf';
                link.setAttribute('target', '_blank');
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
            >
              <Download className="size-4 mr-2" />
              Download Resume
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}