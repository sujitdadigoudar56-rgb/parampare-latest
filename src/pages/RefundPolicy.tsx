import { Link } from "react-router-dom";
import { ArrowLeft, Check, X } from "lucide-react";
import MainHeader from "@/components/layout/MainHeader";
import Footer from "@/components/layout/Footer";

const RefundPolicy = () => {
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
            🔄 Refund Policy
          </h1>
          
          <p className="text-xl text-primary font-medium mb-8">Fair & Transparent Returns</p>

          <div className="space-y-8 text-muted-foreground">
            <section>
              <h2 className="font-display text-xl font-bold text-foreground mb-3">1. Eligibility for Refunds</h2>
              <p className="mb-3">Refunds or returns are accepted only if:</p>
              <ul className="space-y-1">
                <li className="flex items-center gap-2"><Check size={16} className="text-green-600" /> The product received is damaged, defective, or incorrect</li>
                <li className="flex items-center gap-2"><Check size={16} className="text-green-600" /> The issue is reported within 7 days of delivery</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-foreground mb-3">2. Non-Refundable Items</h2>
              <ul className="space-y-1">
                <li className="flex items-center gap-2"><X size={16} className="text-red-600" /> Slight color or design variations (natural to handloom)</li>
                <li className="flex items-center gap-2"><X size={16} className="text-red-600" /> Damage caused after delivery</li>
                <li className="flex items-center gap-2"><X size={16} className="text-red-600" /> Products returned without original packaging</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-foreground mb-3">3. Return Process</h2>
              <ol className="space-y-2">
                <li>1. Contact our support team with your Order ID</li>
                <li>2. Share clear images of the product</li>
                <li>3. Our team will review and guide you further</li>
              </ol>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-foreground mb-3">4. Refund Method</h2>
              <p className="mb-3">Approved refunds will be processed through:</p>
              <ul className="space-y-1">
                <li>• Replacement, or</li>
                <li>• Store credit, or</li>
                <li>• Refund (as applicable)</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-foreground mb-3">5. Shipping Costs</h2>
              <p>Return shipping costs may be borne by the customer unless the issue is due to an error from our side.</p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default RefundPolicy;
