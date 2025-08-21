import { Mail } from "lucide-react";
import Button from "../../../../components/ui/button";

export function CTASection() {
  return (
    <section
      className="py-20 bg-gradient-to-r from-neutral-900/50 to-neutral-800/30 border-y border-neutral-800/50 backdrop-grayscale-100"
      style={{
        opacity: 0,
        animation: "0.8s ease-out 0.2s 1 normal forwards running fadeSlideUp",
        transition: "outline 0.1s ease-in-out",
      }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h3 className="text-3xl md:text-4xl text-neutral-100 mb-6 font-light tracking-tight font-geist">
          Ready to experience the future?
        </h3>
        <p className="text-lg text-neutral-400 mb-10 max-w-2xl mx-auto font-geist font-normal">
          Join thousands of enterprises leveraging Astravia AI for superior
          customer experiences.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            variant="gradient"
            size="lg"
            leftIcon={<Mail className="w-5 h-5 stroke-2" />}
          >
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
}

export default CTASection;
