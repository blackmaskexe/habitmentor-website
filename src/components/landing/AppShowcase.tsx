import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
// Ionicons will be used via <ion-icon> web component
import appChat from "@/assets/mockups/app-chat.png";
import appSocial from "@/assets/mockups/app-social.png";
import appDashboard from "@/assets/mockups/app-dashboard.png";

const showcaseItems = [
  {
    title: "AI-Powered Conversations",
    description:
      "Get personalized advice and motivation from your AI mentor. Ask questions, share struggles, and receive tailored guidance 24/7.",
    image: appChat,
    icon: "chatbubbles",
    features: [
      "Natural conversation flow",
      "Personalized recommendations",
      "Available anytime",
    ],
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    title: "Social Competition",
    description:
      "Connect with friends and compete on global leaderboards. Stay motivated through healthy competition while keeping your habits private.",
    image: appSocial,
    icon: "people",
    features: ["Friend connections", "Global leaderboards", "Privacy-focused"],
    gradient: "from-red-500 to-pink-500",
  },
  {
    title: "Smart Analytics",
    description:
      "Track your progress with intelligent insights. See patterns, streaks, and get emotion-aware suggestions based on your mood.",
    image: appDashboard,
    icon: "stats-chart",
    features: ["Habit streaks", "Mood tracking", "Progress insights"],
    gradient: "from-blue-500 to-cyan-500",
  },
];

export const AppShowcase = () => {
  return (
    <section className="py-20 px-4">
      <div className="container max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Badge className="mb-4 px-4 py-2 text-sm font-medium bg-primary/10 text-primary">
            See It In Action
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Experience the
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {" "}
              difference
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            HabitMentor AI isn't just another habit tracker. It's your personal
            AI coach that understands you.
          </p>
        </motion.div>

        <div className="space-y-24">
          {showcaseItems.map((item, index) => (
            <motion.div
              key={index}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Content */}
              <div
                className={`space-y-6 ${
                  index % 2 === 1 ? "lg:col-start-2" : ""
                }`}
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-r ${item.gradient} p-3`}
                  >
                    <ion-icon
                      name={item.icon}
                      class="w-full h-full text-white"
                      style={{ fontSize: "2rem", verticalAlign: "middle" }}
                    ></ion-icon>
                  </div>
                  <h3 className="text-3xl font-bold">{item.title}</h3>
                </div>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  {item.description}
                </p>

                <div className="space-y-3">
                  {item.features.map((feature, featureIndex) => (
                    <motion.div
                      key={featureIndex}
                      className="flex items-center gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + featureIndex * 0.1 }}
                    >
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      <span className="text-foreground font-medium">
                        {feature}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Image */}
              <motion.div
                className={`relative ${
                  index % 2 === 1 ? "lg:col-start-1" : ""
                }`}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative">
                  {/* Removed colored halo/blurred gradient background */}
                  <img
                    src={item.image}
                    alt={item.title}
                    className="relative z-10 w-full max-w-xs mx-auto rounded-2xl shadow-l"
                  />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
