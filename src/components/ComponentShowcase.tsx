import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Badge } from './ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Progress } from './ui/progress';
import { Switch } from './ui/switch';
import { Slider } from './ui/slider';
import { CheckCircle, Star, Heart, Download, Play } from 'lucide-react';
import { motion } from 'framer-motion';

export function ComponentShowcase() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4">Foundation Components</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Core UI components with consistent styling and interactive states.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Buttons */}
          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle>Buttons</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-3">
                <h4>Primary Actions</h4>
                <div className="flex flex-wrap gap-3">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button className="rounded-2xl">
                      <CheckCircle className="size-4 mr-2" />
                      Primary
                    </Button>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button variant="secondary" className="rounded-2xl">
                      <Download className="size-4 mr-2" />
                      Secondary
                    </Button>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button variant="outline" className="rounded-2xl">
                      <Play className="size-4 mr-2" />
                      Outline
                    </Button>
                  </motion.div>
                </div>
              </div>
              
              <div className="space-y-3">
                <h4>States</h4>
                <div className="flex flex-wrap gap-3">
                  <Button size="sm" className="rounded-2xl">Small</Button>
                  <Button className="rounded-2xl">Default</Button>
                  <Button size="lg" className="rounded-2xl">Large</Button>
                  <Button disabled className="rounded-2xl">Disabled</Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Form Inputs */}
          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle>Form Inputs</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-3">
                <h4>Text Inputs</h4>
                <Input placeholder="Standard input" className="rounded-2xl" />
                <Input placeholder="Focused state" className="rounded-2xl ring-2 ring-ring" />
                <Input placeholder="Disabled state" disabled className="rounded-2xl" />
              </div>
              
              <div className="space-y-3">
                <h4>Controls</h4>
                <div className="flex items-center space-x-4">
                  <Switch />
                  <span>Toggle switch</span>
                </div>
                <div className="space-y-2">
                  <span>Progress slider</span>
                  <Slider defaultValue={[60]} max={100} step={1} className="w-full" />
                </div>
                <Progress value={75} className="w-full" />
              </div>
            </CardContent>
          </Card>

          {/* Badges & Avatars */}
          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle>Badges & Avatars</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-3">
                <h4>Badge Variants</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge>Default</Badge>
                  <Badge variant="secondary">Secondary</Badge>
                  <Badge variant="outline">Outline</Badge>
                  <Badge variant="destructive">Destructive</Badge>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge className="rounded-full">
                    <Star className="size-3 mr-1" />
                    Featured
                  </Badge>
                  <Badge variant="secondary" className="rounded-full">
                    <Heart className="size-3 mr-1" />
                    Liked
                  </Badge>
                </div>
              </div>
              
              <div className="space-y-3">
                <h4>Avatar Sizes</h4>
                <div className="flex items-center gap-3">
                  <Avatar className="w-8 h-8">
                    <AvatarFallback>XS</AvatarFallback>
                  </Avatar>
                  <Avatar className="w-10 h-10">
                    <AvatarFallback>SM</AvatarFallback>
                  </Avatar>
                  <Avatar>
                    <AvatarFallback>MD</AvatarFallback>
                  </Avatar>
                  <Avatar className="w-12 h-12">
                    <AvatarFallback>LG</AvatarFallback>
                  </Avatar>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Interactive States */}
          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle>Interactive States</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-3">
                <h4>Hover Effects</h4>
                <motion.div
                  className="p-4 bg-accent rounded-2xl cursor-pointer"
                  whileHover={{ 
                    scale: 1.02,
                    backgroundColor: "var(--primary)",
                    color: "var(--primary-foreground)"
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  Hover to see transition
                </motion.div>
              </div>
              
              <div className="space-y-3">
                <h4>Focus States</h4>
                <div className="grid grid-cols-2 gap-3">
                  <Button variant="outline" className="rounded-2xl focus:ring-2 focus:ring-ring focus:ring-offset-2">
                    Focus me
                  </Button>
                  <Input placeholder="Focus input" className="rounded-2xl" />
                </div>
              </div>
              
              <div className="space-y-3">
                <h4>Active States</h4>
                <motion.div
                  className="p-3 bg-secondary rounded-2xl cursor-pointer select-none"
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 500 }}
                >
                  Click for active state
                </motion.div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}