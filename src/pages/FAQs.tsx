import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import MainHeader from "@/components/layout/MainHeader";
import Footer from "@/components/layout/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    category: "About Parampare & Products",
    questions: [
      { q: "What is Parampare known for?", a: "Parampare is a heritage-focused brand dedicated to authentic Ilkal sarees, celebrating traditional craftsmanship, handloom weaving, and timeless designs rooted in Indian culture." },
      { q: "Are Parampare sarees handwoven?", a: "Yes. Our Ilkal sarees are handwoven by skilled artisans using traditional techniques. Minor variations in weave and color are natural and reflect the authenticity of handloom products." },
      { q: "How can I identify an authentic Ilkal saree?", a: "Authentic Ilkal sarees are known for their distinctive borders, pallu style, and weaving technique. Each Parampare saree is carefully sourced and quality-checked for authenticity." },
      { q: "Do the colors fade after washing?", a: "Slight color variations may occur over time due to natural dyes and handloom weaving. We recommend dry cleaning or gentle hand wash for best longevity." },
    ]
  },
  {
    category: "Orders & Shopping",
    questions: [
      { q: "Do I need to create an account to place an order?", a: "No. You can shop and checkout as a guest. However, creating an account allows you to track orders easily and enjoy faster checkouts in the future." },
      { q: "What are the benefits of creating an account?", a: "By creating an account, you can track your orders, view order history, save delivery addresses, and receive updates on new collections and offers." },
      { q: "Can I modify or cancel my order after placing it?", a: "Orders can be modified or cancelled before dispatch. Once the order is shipped, cancellation is not possible and must be treated as a return request." },
    ]
  },
  {
    category: "Shipping & Delivery",
    questions: [
      { q: "How does Parampare deliver orders?", a: "Parampare uses the India Post delivery system to ship orders across India, ensuring wide and reliable coverage." },
      { q: "How long does delivery take?", a: "Orders are typically delivered within 7–8 business days after dispatch. Delivery timelines may vary based on location and postal network conditions." },
      { q: "Do you ship across India?", a: "Yes, we deliver to most pin codes across India, including rural and remote locations serviced by India Post." },
      { q: "Are shipping charges applicable?", a: "Any applicable shipping charges will be clearly displayed during checkout before you complete your purchase." },
    ]
  },
  {
    category: "Returns, Exchanges & Refunds",
    questions: [
      { q: "What is Parampare's return policy?", a: "Returns and exchanges can be requested within 7 days of delivery, provided the product is unused, unwashed, and returned with original tags and packaging." },
      { q: "Which items are not eligible for return?", a: "Customized or tailor-made products, used or washed items, items marked as 'Final Sale', and gift cards or vouchers are non-returnable." },
      { q: "How long does it take to receive a refund?", a: "Refunds are processed within 7–10 business days after the returned product passes quality inspection." },
      { q: "What if I receive a damaged or incorrect product?", a: "Please contact us within 48 hours of delivery with photos of the issue. After verification, we will arrange a replacement or refund at no additional cost." },
    ]
  }
];

const FAQs = () => {
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
            Frequently Asked Questions
          </h1>
          
          {faqs.map((section, idx) => (
            <section key={idx} className="mb-10">
              <h2 className="font-display text-xl font-bold text-primary mb-4">{section.category}</h2>
              <Accordion type="single" collapsible className="space-y-2">
                {section.questions.map((faq, faqIdx) => (
                  <AccordionItem key={faqIdx} value={`item-${idx}-${faqIdx}`} className="bg-card border border-border rounded-lg px-4">
                    <AccordionTrigger className="text-left font-medium text-foreground hover:no-underline">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </section>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FAQs;
