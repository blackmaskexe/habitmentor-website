import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";

export const CTA = () => {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-accent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

      {/* Animated background elements */}
      <motion.div
        className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl"
        animate={{
          y: [0, -30, 0],
          x: [0, 20, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-48 h-48 bg-white/5 rounded-full blur-2xl"
        animate={{
          y: [0, 40, 0],
          x: [0, -25, 0],
          scale: [1, 0.8, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      <div className="container max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <motion.div
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 rounded-full text-white font-medium backdrop-blur-sm"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Zap className="w-4 h-4" />
            Ready to Transform Your Habits?
          </motion.div>

          <motion.h2
            className="text-4xl lg:text-6xl font-bold text-white leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Start your journey with
            <br />
            <span className="text-white/90">HabitMentor AI today</span>
          </motion.h2>

          <motion.p
            className="text-xl text-white/80 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Join thousands of users who have successfully built lasting habits
            with their AI mentor. Download now and experience the difference.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-white/90 text-lg px-10 py-6 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105"
            >
              <ion-icon
                name="logo-apple"
                class="mr-3 h-6 w-6"
                style={{ fontSize: "1.5rem", verticalAlign: "middle" }}
              ></ion-icon>
              Download for iOS
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 text-lg px-10 py-6 backdrop-blur-sm hover:scale-105 transition-all duration-300"
            >
              <ion-icon
                name="logo-google-playstore"
                class="mr-3 h-6 w-6"
                style={{ fontSize: "1.5rem", verticalAlign: "middle" }}
              ></ion-icon>
              Get on Android
            </Button>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            {[
              { icon: "🎉", text: "100% Free Forever" },
              { icon: "🤖", text: "AI-Powered Coaching" },
              { icon: "🚀", text: "Instant Setup" },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center gap-2 text-white/90"
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 + index * 0.1 }}
              >
                <span className="text-2xl">{item.icon}</span>
                <span className="text-sm font-medium">{item.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
