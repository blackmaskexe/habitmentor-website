import { Navigation } from "@/components/landing/Navigation";
import { Hero } from "@/components/landing/Hero";
import { AppShowcase } from "@/components/landing/AppShowcase";
import { CTA } from "@/components/landing/CTA";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main>
        <Hero />
        <section id="showcase">
          <AppShowcase />
        </section>
        {/* <section id="features">
          <Features />
        </section> */}
        {/* <section id="testimonials">
          <Testimonials />
        </section> */}
        <CTA />
      </main>

      <footer className="bg-secondary/20 py-8 px-4">
        <div className="container max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-6 h-6 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xs">H</span>
            </div>
            <span className="text-lg font-semibold">HabitMentor AI</span>
          </div>
          <p className="text-muted-foreground text-sm">
            Built with ❤️ for habit builders worldwide.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
