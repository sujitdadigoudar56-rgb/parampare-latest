import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import MainHeader from "@/components/layout/MainHeader";
import Footer from "@/components/layout/Footer";

const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <MainHeader />
      <main className="container mx-auto px-4 py-12">
        <Link to="/" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-8">
          <ArrowLeft size={20} />
          Back to Home
        </Link>

        <div className="max-w-4xl mx-auto">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            🍪 Cookie Policy
          </h1>
          
          <p className="text-xl text-primary font-medium mb-8">How We Use Cookies</p>

          <div className="space-y-8 text-muted-foreground">
            <section>
              <h2 className="font-display text-xl font-bold text-foreground mb-3">1. What Are Cookies?</h2>
              <p>Cookies are small data files stored on your device that help websites function efficiently.</p>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-foreground mb-3">2. Types of Cookies We Use</h2>
              <div className="space-y-3">
                <div className="bg-card p-4 rounded-lg border border-border">
                  <h3 className="font-semibold text-foreground">Essential Cookies</h3>
                  <p className="text-sm">Required for website functionality</p>
                </div>
                <div className="bg-card p-4 rounded-lg border border-border">
                  <h3 className="font-semibold text-foreground">Performance Cookies</h3>
                  <p className="text-sm">Help us understand user behavior</p>
                </div>
                <div className="bg-card p-4 rounded-lg border border-border">
                  <h3 className="font-semibold text-foreground">Preference Cookies</h3>
                  <p className="text-sm">Remember your settings and preferences</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-foreground mb-3">3. Managing Cookies</h2>
              <p>You can choose to accept or disable cookies through your browser settings. Disabling cookies may affect some website features.</p>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-foreground mb-3">4. Third-Party Cookies</h2>
              <p>Some cookies may be set by third-party services (such as analytics tools) to help us improve our website.</p>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-foreground mb-3">5. Changes to Cookie Policy</h2>
              <p>We may update this policy from time to time. Any changes will be reflected on this page.</p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CookiePolicy;
