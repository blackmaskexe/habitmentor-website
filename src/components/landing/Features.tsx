import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Brain, 
  Users, 
  Bell, 
  MessageCircle, 
  TrendingUp, 
  Zap,
  Target,
  Heart
} from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Smart AI Learning",
    description: "Our AI learns your habit patterns and provides personalized recommendations that adapt to your lifestyle.",
    badge: "AI-Powered",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    icon: TrendingUp,
    title: "Intuitive Interface",
    description: "From basic tracking to advanced analytics, our interface scales with your needs and experience level.",
    badge: "Adaptive",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    icon: Bell,
    title: "Smart Notifications",
    description: "Customizable reminders for each habit at different times, helping you stay consistent without being overwhelming.",
    badge: "Personalized",
    gradient: "from-green-500 to-emerald-500"
  },
  {
    icon: MessageCircle,
    title: "24/7 AI Chat",
    description: "Chat with your HabitMentor anytime. Get advice, tips, and motivation whenever you need it most.",
    badge: "Always Available",
    gradient: "from-orange-500 to-red-500"
  },
  {
    icon: Users,
    title: "Social & Gamification",
    description: "Connect with friends, climb leaderboards, and stay motivated through healthy competition.",
    badge: "Community",
    gradient: "from-indigo-500 to-purple-500"
  },
  {
    icon: Heart,
    title: "Emotion-Aware",
    description: "Rate your mood and get suggestions tailored to how you're feeling. Building habits that fit your emotional state.",
    badge: "Empathetic",
    gradient: "from-pink-500 to-rose-500"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
};

export const Features = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-secondary/20">
      <div className="container max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Badge className="mb-4 px-4 py-2 text-sm font-medium bg-primary/10 text-primary">
            Why Choose HabitMentor AI?
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Features that actually
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"> work</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Unlike boring habit trackers, HabitMentor AI feels like having a personal coach who understands you.
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
            >
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 group hover:scale-105">
                <CardContent className="p-8">
                  <div className="mb-6 relative">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.gradient} p-4 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <feature.icon className="w-full h-full text-white" />
                    </div>
                    <Badge className="absolute -top-2 -right-2 text-xs px-2 py-1 bg-secondary">
                      {feature.badge}
                    </Badge>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 rounded-full text-primary font-medium">
            <Zap className="w-4 h-4" />
            100% Free. No Hidden Costs. No Subscriptions.
          </div>
        </motion.div>
      </div>
    </section>
  );
};