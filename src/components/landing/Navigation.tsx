import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Download, Menu, Sparkle } from "lucide-react";
import icon from "@/assets/icon.png";
import { useState } from "react";

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            className="flex items-center gap-3"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <img
              src={icon}
              alt="HabitMentor Logo"
              className="w-8 h-8 rounded-lg object-cover shadow"
              style={{
                background:
                  "linear-gradient(to right, var(--tw-gradient-stops))",
              }}
            />
            <span className="text-xl font-bold">HabitMentor AI</span>
            <Badge className="hidden sm:block bg-primary/10 text-primary text-xs px-2 py-1">
              Free Forever
            </Badge>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8"></div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              className="bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => {
                scrollToSection("showcase");
              }}
            >
              <Sparkle className="h-4 w-4" />
              Experience The Difference
            </Button>
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            className="md:hidden border-t bg-background/95 backdrop-blur-sm"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="py-4 space-y-3">
              <div className="px-4 pt-2 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Theme</span>
                  <ThemeToggle />
                </div>
                <Button
                  className="w-full bg-primary hover:bg-primary/90"
                  onClick={() => {
                    const footer = document.querySelector("footer");
                    if (footer) {
                      footer.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  <Download className="mr-2 h-4 w-4" />
                  Experience The Difference
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};
