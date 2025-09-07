import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import appShowcase from "@/assets/mockups/app-showcase.png";

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
            Your AI Mentor to make life-long habits.
          </motion.h1>

          <motion.p
            className="text-xl text-muted-foreground max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Build better habits with personalized AI guidance.
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
              <ion-icon
                name="logo-apple"
                class="mr-3 h-6 w-6"
                style={{ fontSize: "1.5rem", verticalAlign: "middle" }}
              ></ion-icon>
              Download for iOS
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 py-6 hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105"
            >
              <ion-icon
                name="logo-google-playstore"
                class="mr-3 h-6 w-6"
                style={{ fontSize: "1.5rem", verticalAlign: "middle" }}
              ></ion-icon>
              Get on Android
            </Button>
          </motion.div>

          <div className="text-muted-foreground text-base mt-2">
            No subscriptions. Just better habits.
          </div>
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
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
            <motion.img
              src={appShowcase}
              alt="HabitMentor AI App Dashboard"
              className="relative z-10 max-w-sm sm:max-w-md w-full rounded-2xl transition-transform duration-500 lg:scale-150 lg:origin-center lg:hover:scale-[1.6]"
            />
          </div>
        </motion.div>
      </div>

      {/* Floating elements */}
      <motion.div
        className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl"
        animate={{
          y: [0, -20, 0],
          x: [0, 10, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-32 h-32 bg-accent/10 rounded-full blur-xl"
        animate={{
          y: [0, 20, 0],
          x: [0, -15, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
    </section>
  );
};
