import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Progress } from './ui/progress';
import { Badge } from './ui/badge';
import { 
  ResponsiveContainer, 
  RadarChart, 
  PolarGrid, 
  PolarAngleAxis, 
  PolarRadiusAxis, 
  Radar
} from 'recharts';
import { 
  Palette, 
  Code, 
  Figma, 
  Smartphone, 
  Monitor,
  Users,
  Zap,
  Star,
  Layers,
  Eye,
  Lightbulb
} from 'lucide-react';

const skillCategories = [
  {
    title: 'Design',
    icon: Palette,
    color: 'from-pink-500 to-purple-600',
    skills: [
      { name: 'UI/UX Design', level: 95, icon: Eye },
      { name: 'Visual Design', level: 90, icon: Palette },
      { name: 'Prototyping', level: 88, icon: Layers },
      { name: 'User Research', level: 85, icon: Users },
    ]
  },
  {
    title: 'Development',
    icon: Code,
    color: 'from-blue-500 to-cyan-600',
    skills: [
      { name: 'React/TypeScript', level: 92, icon: Code },
      { name: 'CSS/Tailwind', level: 95, icon: Monitor },
      { name: 'Responsive Design', level: 90, icon: Smartphone },
      { name: 'Performance', level: 82, icon: Zap },
    ]
  },
  {
    title: 'Tools & Creative',
    icon: Figma,
    color: 'from-green-500 to-teal-600',
    skills: [
      { name: 'Figma', level: 98, icon: Figma },
      { name: 'Design Systems', level: 90, icon: Layers },
      { name: 'Creative Direction', level: 85, icon: Lightbulb },
      { name: 'Collaboration', level: 92, icon: Users },
    ]
  }
];

const radarData = [
  { subject: 'UI Design', A: 95, fullMark: 100 },
  { subject: 'UX Research', A: 85, fullMark: 100 },
  { subject: 'Frontend Dev', A: 92, fullMark: 100 },
  { subject: 'Design Systems', A: 90, fullMark: 100 },
  { subject: 'Prototyping', A: 88, fullMark: 100 },
  { subject: 'Visual Design', A: 90, fullMark: 100 },
];

const techStack = [
  { category: 'Design', tools: ['Figma', 'Adobe XD', 'Sketch', 'Photoshop', 'Illustrator', 'InVision'] },
  { category: 'Development', tools: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'SASS', 'Framer Motion'] },
  { category: 'Prototyping', tools: ['Figma', 'Principle', 'ProtoPie', 'After Effects', 'Lottie', 'Rive'] },
  { category: 'Workflow', tools: ['Git', 'Linear', 'Notion', 'Slack', 'Zoom', 'Miro'] }
];

const achievements = [
  { metric: '50+', label: 'Projects Completed', icon: Star },
  { metric: '98%', label: 'Client Satisfaction', icon: Users },
  { metric: '3+', label: 'Years Experience', icon: Zap },
  { metric: '15+', label: 'Happy Clients', icon: Lightbulb },
];

export function SkillsVisualization() {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-6 text-gradient">Skills & Expertise</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A blend of creative design thinking and technical expertise, 
            focused on creating exceptional user experiences.
          </p>
        </motion.div>

        {/* Achievement metrics */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
            >
              <Card className="text-center p-6 border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-0 space-y-3">
                  <div className="w-12 h-12 gradient-primary rounded-2xl flex items-center justify-center mx-auto">
                    <achievement.icon className="size-6 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gradient">{achievement.metric}</div>
                  <div className="text-sm text-muted-foreground">{achievement.label}</div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Skill Categories */}
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1, duration: 0.6 }}
            >
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className={`p-3 bg-gradient-to-r ${category.color} rounded-2xl shadow-lg`}>
                      <category.icon className="size-6 text-white" />
                    </div>
                    <span className="text-xl">{category.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + skillIndex * 0.1, duration: 0.4 }}
                      className="space-y-3"
                    >
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <skill.icon className="size-4 text-primary" />
                          <span className="font-medium">{skill.name}</span>
                        </div>
                        <span className="text-sm text-muted-foreground font-medium">{skill.level}%</span>
                      </div>
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: '100%' }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + skillIndex * 0.1, duration: 0.8 }}
                      >
                        <Progress value={skill.level} className="h-3" />
                      </motion.div>
                    </motion.div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Skills Radar Chart */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl">Skills Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <RadarChart data={radarData}>
                      <PolarGrid className="stroke-border" />
                      <PolarAngleAxis dataKey="subject" className="text-sm fill-foreground" />
                      <PolarRadiusAxis 
                        domain={[0, 100]} 
                        tick={false} 
                        axisLine={false}
                      />
                      <Radar
                        name="Skills"
                        dataKey="A"
                        stroke="hsl(var(--primary))"
                        fill="hsl(var(--primary))"
                        fillOpacity={0.2}
                        strokeWidth={2}
                      />
                    </RadarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="border-0 shadow-lg h-full">
              <CardHeader>
                <CardTitle className="text-xl">Tech Stack & Tools</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {techStack.map((stack, stackIndex) => (
                  <motion.div
                    key={stack.category}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: stackIndex * 0.1, duration: 0.4 }}
                    className="space-y-3"
                  >
                    <h4 className="font-medium text-primary">{stack.category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {stack.tools.map((tool, toolIndex) => (
                        <motion.div
                          key={tool}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.2 + toolIndex * 0.05, duration: 0.3 }}
                        >
                          <Badge 
                            variant="secondary" 
                            className="rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
                          >
                            {tool}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Call to action */}
        <motion.div
          className="text-center p-8 bg-gradient-to-r from-primary/5 to-accent/5 rounded-3xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold mb-4">Let's create something amazing together</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            I'm always excited to work on new projects and collaborate with talented teams. 
            Let's discuss how we can bring your vision to life.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <button 
              className="gradient-primary text-white px-8 py-4 rounded-2xl font-medium shadow-xl border-0 hover:shadow-2xl transition-shadow"
              onClick={() => {
                const contactSection = document.querySelector('#contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Start a Project
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}