import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import MainHeader from "@/components/layout/MainHeader";
import Footer from "@/components/layout/Footer";

const TermsOfUse = () => {
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
            📜 Terms of Use
          </h1>

          <div className="space-y-8 text-muted-foreground">
            <section>
              <h2 className="font-display text-xl font-bold text-foreground mb-3">1. Use of Website</h2>
              <p>You agree to use this website only for lawful purposes and in a manner that does not violate any applicable laws or regulations.</p>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-foreground mb-3">2. Product Information</h2>
              <p>We make every effort to display accurate product details, images, and prices. As our sarees are handwoven, slight variations in color, texture, or weave are natural and are not considered defects.</p>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-foreground mb-3">3. Orders & Acceptance</h2>
              <p>Placing an order on Parampare constitutes a request to purchase. We reserve the right to accept or reject any order at our discretion. An order is confirmed only after you receive an order confirmation message.</p>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-foreground mb-3">4. Pricing</h2>
              <p>All prices are listed in Indian Rupees (₹). Prices may change without prior notice.</p>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-foreground mb-3">5. Intellectual Property</h2>
              <p>All content on this website, including text, images, logos, and designs, is the property of Parampare and may not be copied, reproduced, or used without written permission.</p>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-foreground mb-3">6. Limitation of Liability</h2>
              <p>Parampare shall not be liable for any indirect, incidental, or consequential damages arising from the use of this website or products purchased through it.</p>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-foreground mb-3">7. Changes to Terms</h2>
              <p>We may update these Terms of Use from time to time. Continued use of the website signifies acceptance of the updated terms.</p>
            </section>

            <section className="bg-primary/5 p-6 rounded-xl">
              <h2 className="font-display text-xl font-bold text-foreground mb-3">8. Contact Us</h2>
              <p>For any questions regarding these terms, please contact us at:</p>
              <a href="mailto:support@parampare.in" className="text-primary hover:underline">📧 support@parampare.in</a>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfUse;
