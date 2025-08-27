import { motion } from 'framer-motion';
import { Heart, Coffee, Code, Palette, Users, Lightbulb } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';

const values = [
  {
    icon: Heart,
    title: 'User-Centered',
    description: 'Every design decision starts with understanding user needs and behaviors.'
  },
  {
    icon: Code,
    title: 'Design + Code',
    description: 'Bridging the gap between design and development for better outcomes.'
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'Great products come from diverse perspectives and open communication.'
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'Constantly exploring new tools, techniques, and design paradigms.'
  }
];

const interests = [
  'UI/UX Design', 'Design Systems', 'Frontend Development', 'User Research',
  'Accessibility', 'Motion Design', 'Prototyping', 'Design Thinking',
  'React/TypeScript', 'Figma', 'Photography', 'Coffee ☕'
];

export function AboutMe() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-6 text-gradient">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm a passionate web designer and developer who believes great design 
            is invisible until it makes everything effortless.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left side - Personal story */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="p-8 border-0 shadow-lg">
              <CardContent className="p-0">
                <div className="space-y-6">
                  {/* Profile image placeholder */}
                  <div className="relative">
                    <div className="w-32 h-32 gradient-primary rounded-3xl flex items-center justify-center shadow-xl mx-auto lg:mx-0">
                      <span className="text-4xl font-bold text-white">JS</span>
                    </div>
                    <motion.div
                      className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <Coffee className="size-4 text-white" />
                    </motion.div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold">Hey there! I'm Jordan Smith</h3>
                    
                    <div className="space-y-4 text-muted-foreground leading-relaxed">
                      <p>
                        I'm a web designer and frontend developer based in San Francisco, 
                        with over 3 years of experience creating digital experiences that 
                        people actually want to use.
                      </p>
                      
                      <p>
                        My journey started with a curiosity about how things work and a 
                        love for making them work better. What began as tinkering with 
                        CSS animations has evolved into a career focused on creating 
                        design systems and user interfaces that scale.
                      </p>
                      
                      <p>
                        When I'm not designing or coding, you'll find me exploring new 
                        coffee shops (I'm a bit of a coffee snob ☕), taking photos 
                        around the city, or reading about the latest design trends 
                        and development techniques.
                      </p>
                    </div>

                    <div className="flex items-center gap-2 text-sm">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                      <span className="text-muted-foreground">Currently available for new projects</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* What I Bring section */}
            <Card className="p-8 border-0 shadow-lg">
              <CardContent className="p-0">
                <h3 className="text-xl font-bold mb-6">What I Bring to Your Team</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Palette className="size-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium mb-1">Design Thinking</h4>
                      <p className="text-sm text-muted-foreground">
                        User-centered approach to problem solving, from research to final implementation.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Code className="size-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium mb-1">Technical Skills</h4>
                      <p className="text-sm text-muted-foreground">
                        Frontend development expertise that bridges design and engineering teams.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Users className="size-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium mb-1">Collaboration</h4>
                      <p className="text-sm text-muted-foreground">
                        Experience working with cross-functional teams and stakeholders.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Right side - Values and interests */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Core Values */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">Core Values</h3>
              <div className="grid gap-4">
                {values.map((value, index) => (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="p-6 border-0 shadow-md hover:shadow-lg transition-shadow">
                      <CardContent className="p-0">
                        <div className="flex items-start gap-4">
                          <div className="p-2 bg-primary/10 rounded-xl">
                            <value.icon className="size-5 text-primary" />
                          </div>
                          <div className="space-y-1">
                            <h4 className="font-medium">{value.title}</h4>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                              {value.description}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Interests & Skills */}
            <Card className="p-8 border-0 shadow-lg">
              <CardContent className="p-0 space-y-6">
                <h3 className="text-xl font-bold">Interests & Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {interests.map((interest, index) => (
                    <motion.div
                      key={interest}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Badge 
                        variant="secondary" 
                        className="rounded-full hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                      >
                        {interest}
                      </Badge>
                    </motion.div>
                  ))}
                </div>

                {/* Fun fact */}
                <div className="pt-4 border-t border-border">
                  <p className="text-sm text-muted-foreground italic">
                    💡 Fun fact: I've designed and coded over 50 websites and applications, 
                    consumed approximately 2,000 cups of coffee in the process, and still 
                    get excited about perfectly aligned pixels.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Quick stats */}
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-6 text-center border-0 shadow-md">
                <CardContent className="p-0">
                  <div className="text-3xl font-bold text-gradient mb-2">3+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </CardContent>
              </Card>
              <Card className="p-6 text-center border-0 shadow-md">
                <CardContent className="p-0">
                  <div className="text-3xl font-bold text-gradient mb-2">50+</div>
                  <div className="text-sm text-muted-foreground">Projects Delivered</div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}