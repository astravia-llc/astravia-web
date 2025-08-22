"use client";

import { useEffect } from "react";
import { Navigation, ProductsSection, Footer } from "./components";
import HeroHeader from "./components/hero-header";
import StatsSection from "./components/stats-section";
import CTASection from "./components/cta-section";
import OurServices from "./components/our-services";

export function LandingFeaturePage() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          (entry.target as HTMLElement).style.opacity = "1";
          (entry.target as HTMLElement).style.transform = "translateY(0)";
        }
      });
    }, observerOptions);

    document.querySelectorAll('[style*="opacity: 0"]').forEach((el) => {
      if (typeof window !== "undefined" && window.innerWidth < 1024) {
        (el as HTMLElement).style.transition =
          "opacity 0.8s ease-out, transform 0.8s ease-out";
        observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Spline 3D Background */}
      <div className="fixed w-full h-screen">
        <iframe
          src="https://my.spline.design/hellodistortingintro-KK1UjacLdIpYX67NFsvuRTYC/"
          frameBorder="0"
          width="100%"
          height="100%"
        />
      </div>

      <Navigation />
      <HeroHeader />
      <StatsSection />
      <ProductsSection />
      <CTASection />
      <OurServices />
      <Footer />
    </>
  );
}

export default LandingFeaturePage;
