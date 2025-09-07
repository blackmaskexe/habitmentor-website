import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Graduate Student",
    content: "HabitMentor AI completely changed how I approach habits. The AI actually learns my patterns and gives advice that feels personal, not generic. I've maintained my morning routine for 3 months straight!",
    rating: 5,
    avatar: "👩‍🎓"
  },
  {
    name: "Marcus Rodriguez",
    role: "Software Developer",
    content: "Finally, a habit app that doesn't feel like work. The social features keep me motivated, and the AI chat is like having a personal coach. Plus it's completely free!",
    rating: 5,
    avatar: "👨‍💻"
  },
  {
    name: "Emma Thompson",
    role: "Fitness Enthusiast",
    content: "The emotion-aware suggestions are game-changing. When I'm stressed, it suggests different habits than when I'm energetic. It's like the app actually understands me.",
    rating: 5,
    avatar: "🏃‍♀️"
  },
  {
    name: "David Kim",
    role: "Creative Professional",
    content: "I love how the AI adapts to my creativity cycles. It suggests different approaches when I'm in a creative flow vs when I need structure. Revolutionary!",
    rating: 5,
    avatar: "🎨"
  },
  {
    name: "Lisa Park",
    role: "Business Owner",
    content: "The leaderboard feature with my team has been incredible for building company culture. We're all more consistent with our habits and it's brought us together.",
    rating: 5,
    avatar: "👩‍💼"
  },
  {
    name: "Alex Johnson",
    role: "Student",
    content: "I've tried every habit app out there. This is the first one that actually helped me stick to my study routine. The AI recommendations are spot-on.",
    rating: 5,
    avatar: "📚"
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
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
};

export const Testimonials = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-secondary/20 to-background">
      <div className="container max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Badge className="mb-4 px-4 py-2 text-sm font-medium bg-primary/10 text-primary">
            What Users Say
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Join thousands who've transformed their
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"> habits</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real stories from real people who've built lasting habits with HabitMentor AI.
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                <CardContent className="p-8">
                  <Quote className="w-8 h-8 text-primary mb-4 opacity-50" />
                  
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    "{testimonial.content}"
                  </p>

                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-2xl">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none" />
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div 
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-16 pt-16 border-t"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {[
            { number: "50K+", label: "Active Users" },
            { number: "1M+", label: "Habits Completed" },
            { number: "4.9★", label: "App Store Rating" },
            { number: "95%", label: "Success Rate" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ scale: 0.5, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-muted-foreground font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};