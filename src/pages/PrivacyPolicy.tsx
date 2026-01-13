import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import MainHeader from "@/components/layout/MainHeader";
import Footer from "@/components/layout/Footer";

const PrivacyPolicy = () => {
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
            🔐 Privacy Policy
          </h1>
          
          <p className="text-xl text-primary font-medium mb-8">Your privacy matters to us</p>

          <div className="space-y-8 text-muted-foreground">
            <section>
              <h2 className="font-display text-xl font-bold text-foreground mb-3">1. Information We Collect</h2>
              <ul className="space-y-1">
                <li>• Name</li>
                <li>• Mobile number</li>
                <li>• Email address</li>
                <li>• Delivery address</li>
                <li>• Order and communication details</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-foreground mb-3">2. How We Use Your Information</h2>
              <ul className="space-y-1">
                <li>• Process and deliver orders</li>
                <li>• Communicate order updates</li>
                <li>• Provide customer support</li>
                <li>• Improve our services</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-foreground mb-3">3. Data Protection</h2>
              <p>We take appropriate security measures to protect your personal data against unauthorized access, misuse, or disclosure.</p>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-foreground mb-3">4. Sharing of Information</h2>
              <p>We do not sell or rent your personal information. Data may be shared only with trusted service providers (such as delivery partners) strictly for order fulfillment.</p>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-foreground mb-3">5. Your Rights</h2>
              <p>You have the right to access, update, or request deletion of your personal information by contacting us.</p>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-foreground mb-3">6. Updates to This Policy</h2>
              <p>This Privacy Policy may be updated periodically. Any changes will be posted on this page.</p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
