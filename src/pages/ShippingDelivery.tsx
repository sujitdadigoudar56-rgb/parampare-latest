import { Link } from "react-router-dom";
import { ArrowLeft, Package, Truck, Clock, MapPin, Mail, Phone } from "lucide-react";
import MainHeader from "@/components/layout/MainHeader";
import Footer from "@/components/layout/Footer";

const ShippingDelivery = () => {
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
            Shipping & Delivery Policy
          </h1>
          
          <p className="text-lg text-muted-foreground mb-8">
            Welcome to Parampare! We take great pride in bringing you authentic Ilkal sarees with care and dedication. We use India Post's delivery service to ensure your products reach you safely and reliably.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { icon: Clock, title: "Processing Time", desc: "1–2 business days" },
              { icon: Truck, title: "Delivery Time", desc: "7–8 business days" },
              { icon: MapPin, title: "Coverage", desc: "All India via India Post" }
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-card p-6 rounded-lg border border-border text-center">
                <Icon className="mx-auto text-primary mb-3" size={32} />
                <h3 className="font-semibold text-foreground mb-1">{title}</h3>
                <p className="text-muted-foreground text-sm">{desc}</p>
              </div>
            ))}
          </div>

          <section className="mb-8">
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">Order Processing</h2>
            <ul className="text-muted-foreground space-y-2">
              <li>• Quality check of product</li>
              <li>• Packing and documentation</li>
              <li>• Handover to India Post for delivery</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">Delivery Locations</h2>
            <p className="text-muted-foreground mb-3">We deliver across India to:</p>
            <ul className="text-muted-foreground space-y-1">
              <li>• Residential addresses</li>
              <li>• Workplaces</li>
              <li>• Rural postal delivery zones</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">Shipment Tracking</h2>
            <p className="text-muted-foreground">
              Once dispatched, you'll receive an email with a tracking number. Track your order on the official India Post portal.
            </p>
          </section>

          <section className="bg-primary/5 p-8 rounded-xl">
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">Customer Support</h2>
            <div className="flex flex-col gap-3">
              <a href="mailto:support@parampare.com" className="flex items-center gap-2 text-primary hover:underline">
                <Mail size={18} /> support@parampare.com
              </a>
              <p className="text-muted-foreground text-sm">Business Hours: Mon–Sat, 10 AM – 6 PM</p>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ShippingDelivery;
