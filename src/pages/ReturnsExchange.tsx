import { Link } from "react-router-dom";
import { ArrowLeft, Check, X, Mail } from "lucide-react";
import MainHeader from "@/components/layout/MainHeader";
import Footer from "@/components/layout/Footer";

const ReturnsExchange = () => {
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
            Return, Exchange & Refund Policy
          </h1>
          
          <p className="text-lg text-muted-foreground mb-8">
            At Parampare, we take immense pride in offering you authentic Ilkal sarees crafted with heritage and artistry. Our goal is to ensure you enjoy a smooth and delightful shopping experience.
          </p>

          <section className="mb-8">
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">Eligibility for Returns</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 dark:bg-green-950/20 p-6 rounded-lg border border-green-200 dark:border-green-800">
                <h3 className="font-semibold text-green-700 dark:text-green-400 mb-3 flex items-center gap-2">
                  <Check size={20} /> Eligible If:
                </h3>
                <ul className="text-muted-foreground space-y-2 text-sm">
                  <li>• Product is unused and unworn</li>
                  <li>• All original tags and packaging intact</li>
                  <li>• Returned within 7 days of delivery</li>
                  <li>• Proof of purchase provided</li>
                </ul>
              </div>
              <div className="bg-red-50 dark:bg-red-950/20 p-6 rounded-lg border border-red-200 dark:border-red-800">
                <h3 className="font-semibold text-red-700 dark:text-red-400 mb-3 flex items-center gap-2">
                  <X size={20} /> Non-Returnable:
                </h3>
                <ul className="text-muted-foreground space-y-2 text-sm">
                  <li>• Customized or tailor-made products</li>
                  <li>• Altered or washed products</li>
                  <li>• Items marked "Final Sale"</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">How to Initiate a Return</h2>
            <ol className="text-muted-foreground space-y-2">
              <li>1. Log in to your Parampare account</li>
              <li>2. Navigate to My Orders</li>
              <li>3. Select the order you want to return/exchange</li>
              <li>4. Choose Return or Exchange</li>
              <li>5. Submit the request</li>
            </ol>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">Refund Policy</h2>
            <p className="text-muted-foreground mb-4">
              Refunds will be processed within 7–10 business days after the returned product passes quality inspection.
            </p>
            <ul className="text-muted-foreground space-y-1">
              <li>• Original payment mode (card/bank/wallet)</li>
              <li>• Or as store credit (if chosen)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">Damaged or Defective Items</h2>
            <p className="text-muted-foreground">
              If your product arrives damaged, defective, or incorrect, please contact us within 48 hours of delivery with photos and your order number.
            </p>
          </section>

          <section className="bg-primary/5 p-8 rounded-xl">
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">Contact Us</h2>
            <a href="mailto:support@parampare.com" className="flex items-center gap-2 text-primary hover:underline">
              <Mail size={18} /> support@parampare.com
            </a>
            <p className="text-muted-foreground text-sm mt-2">Business Hours: Mon–Sat, 10 AM – 6 PM</p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ReturnsExchange;
