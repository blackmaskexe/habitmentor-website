import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Smartphone, Download } from "lucide-react";
import appDashboard from "@/assets/app-dashboard.png";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      
      <div className="container max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Content */}
        <motion.div 
          className="text-center lg:text-left space-y-8"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <Badge className="mb-4 px-4 py-2 text-sm font-medium bg-primary/10 text-primary hover:bg-primary/20">
              Free, Forever! 🎉
            </Badge>
          </motion.div>

          <motion.h1 
            className="text-4xl lg:text-6xl font-bold leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              HabitMentor AI
            </span>
            <br />
            Your AI mentor for building habits that last a lifetime.
          </motion.h1>

          <motion.p 
            className="text-xl text-muted-foreground max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Stop struggling with habit consistency. Let our intelligent AI learn your patterns and provide personalized recommendations that actually work.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <Smartphone className="mr-2 h-5 w-5" />
              Download for iOS
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-6 hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105"
            >
              <Download className="mr-2 h-5 w-5" />
              Get on Android
            </Button>
          </motion.div>

          <motion.div 
            className="flex items-center justify-center lg:justify-start gap-8 text-sm text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full" />
              No Subscriptions
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full" />
              AI-Powered
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full" />
              Social Features
            </div>
          </motion.div>
        </motion.div>

        {/* Right Content - App Mockup */}
        <motion.div 
          className="relative flex justify-center lg:justify-end"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative">
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-3xl"
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
            <motion.img
              src={appDashboard}
              alt="HabitMentor AI App Dashboard"
              className="relative z-10 max-w-md w-full rounded-2xl shadow-2xl"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </motion.div>
      </div>

      {/* Floating elements */}
      <motion.div
        className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl"
        animate={{ 
          y: [0, -20, 0],
          x: [0, 10, 0]
        }}
        transition={{ 
          duration: 6,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-32 h-32 bg-accent/10 rounded-full blur-xl"
        animate={{ 
          y: [0, 20, 0],
          x: [0, -15, 0]
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
    </section>
  );
};