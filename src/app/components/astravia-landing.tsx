'use client';

import { useEffect } from 'react';

export default function NexusLanding() {
  useEffect(() => {
    // Initialize Lucide icons
    if (typeof window !== 'undefined' && (window as any).lucide) {
      (window as any).lucide.createIcons();
    }

    // Add scroll-triggered animations for mobile responsiveness
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          (entry.target as HTMLElement).style.opacity = '1';
          (entry.target as HTMLElement).style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);

    // Observe elements for mobile scroll animations
    document.querySelectorAll('[style*="opacity: 0"]').forEach(el => {
      if (window.innerWidth < 1024) {
        (el as HTMLElement).style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
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
      
      {/* Navigation */}
      <nav 
        className="fixed top-0 w-full z-50 bg-neutral-950/80 backdrop-blur-xl border-b border-neutral-800/50" 
        style={{ opacity: 0, animation: '0.8s ease-out 0.2s 1 normal forwards running fadeSlideDown', transition: 'outline 0.1s ease-in-out' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br flex items-center justify-center from-indigo-500 to-indigo-600" style={{ transition: 'outline 0.1s ease-in-out' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="cpu" className="lucide lucide-cpu w-4 h-4 text-white stroke-2">
                  <path d="M12 20v2"></path>
                  <path d="M12 2v2"></path>
                  <path d="M17 20v2"></path>
                  <path d="M17 2v2"></path>
                  <path d="M2 12h2"></path>
                  <path d="M2 17h2"></path>
                  <path d="M2 7h2"></path>
                  <path d="M20 12h2"></path>
                  <path d="M20 17h2"></path>
                  <path d="M20 7h2"></path>
                  <path d="M7 20v2"></path>
                  <path d="M7 2v2"></path>
                  <rect x="4" y="4" width="16" height="16" rx="2"></rect>
                  <rect x="8" y="8" width="8" height="8" rx="1"></rect>
                </svg>
              </div>
              <span className="text-lg tracking-tight font-geist font-normal" style={{ transition: 'outline 0.1s ease-in-out' }}>
                Astravia Studio
              </span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#" className="text-sm text-neutral-400 hover:text-neutral-200 transition-colors font-geist font-normal" style={{ transition: 'outline 0.1s ease-in-out' }}>Products</a>
              <a href="#" className="text-sm text-neutral-400 hover:text-neutral-200 transition-colors font-geist font-normal" style={{ transition: 'outline 0.1s ease-in-out' }}>Solutions</a>
              <a href="#" className="text-sm text-neutral-400 hover:text-neutral-200 transition-colors font-geist font-normal" style={{ transition: 'outline 0.1s ease-in-out' }}>Developers</a>
              <a href="#" className="text-sm text-neutral-400 hover:text-neutral-200 transition-colors font-geist font-normal" style={{ transition: 'outline 0.1s ease-in-out' }}>Company</a>
            </div>
            <button className="md:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="menu" className="lucide lucide-menu w-5 h-5">
                <path d="M4 12h16"></path>
                <path d="M4 18h16"></path>
                <path d="M4 6h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </nav>

      <header className="relative overflow-hidden pt-20">
        <div className="max-w-7xl sm:px-6 lg:px-8 md:pt-24 mr-auto ml-auto pt-16 pr-4 pb-8 pl-4">
          <div className="max-w-4xl text-center mr-auto ml-auto">
            <span className="inline-flex items-center gap-2 uppercase tracking-widest text-xs font-medium mb-6" style={{ opacity: 0, animation: 'fadeSlideUp 0.8s ease-out 0.4s forwards' }}>
              <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-indigo-400 to-indigo-500" style={{ transition: 'outline 0.1s ease-in-out' }}></span>
              <span className="text-neutral-400 font-geist font-normal" style={{ transition: 'outline 0.1s ease-in-out' }}>
                Next-Generation AI Architecture
              </span>
            </span>

            <h1 
              className="sm:text-5xl lg:text-7xl xl:text-8xl leading-[0.9] text-4xl font-light text-neutral-100 tracking-tight mb-8 font-playfair" 
              style={{ opacity: 0, animation: '0.8s ease-out 0.6s 1 normal forwards running fadeSlideUp' }}
            >
              Powered by the<br className="hidden sm:block" /> 
              <span className="bg-clip-text font-light text-transparent tracking-tight font-geist bg-gradient-to-tr from-teal-400 to-blue-500">
                Nexus AI Engine™
              </span>
            </h1>

            <p 
              className="text-lg sm:text-xl text-neutral-400 leading-relaxed max-w-2xl mx-auto mb-10 font-geist font-normal" 
              style={{ opacity: 0, animation: '0.8s ease-out 0.8s 1 normal forwards running fadeSlideUp', transition: 'outline 0.1s ease-in-out' }}
            >
              Revolutionary AI architecture designed for enterprise-grade customer intelligence. Built for precision, optimized for scale.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4" style={{ opacity: 0, animation: 'fadeSlideUp 0.8s ease-out 1s forwards' }}>
              <button 
                className="group inline-flex gap-2 transition-all duration-300 transform hover:scale-105 hover:from-indigo-600 hover:to-indigo-700 text-sm font-normal text-white font-geist bg-gradient-to-tr from-teal-400 to-blue-500 rounded-full pt-3 pr-6 pb-3 pl-6 items-center" 
                style={{ transition: 'outline 0.1s ease-in-out' }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="sparkles" className="lucide lucide-sparkles w-4 h-4 stroke-2 group-hover:rotate-12 transition-transform">
                  <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path>
                  <path d="M20 3v4"></path>
                  <path d="M22 5h-4"></path>
                  <path d="M4 17v2"></path>
                  <path d="M5 18H3"></path>
                </svg>
                Experience Nexus AI Demo
              </button>
              <button 
                className="inline-flex items-center gap-2 rounded-full border border-neutral-700 hover:border-neutral-600 hover:bg-neutral-900/50 text-sm px-6 py-3 transition-all duration-300 font-geist font-normal" 
                style={{ transition: 'outline 0.1s ease-in-out' }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="play-circle" className="lucide lucide-play-circle w-4 h-4 stroke-1.5">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polygon points="10 8 16 12 10 16 10 8"></polygon>
                </svg>
                Watch Technical Overview
              </button>
            </div>
          </div>
        </div>

        {/* Animated background */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-40 -right-32 w-96 h-96 rounded-full blur-3xl bg-indigo-500/5" style={{ transition: 'outline 0.1s ease-in-out' }}></div>
          <div className="absolute -bottom-40 -left-32 w-96 h-96 rounded-full blur-3xl bg-indigo-500/5" style={{ transition: 'outline 0.1s ease-in-out' }}></div>
        </div>
      </header>

      {/* Stats Section */}
      <section 
        className="py-16 border-y border-neutral-800/50 backdrop-blur-lg" 
        style={{ opacity: 0, animation: '0.8s ease-out 1.2s 1 normal forwards running fadeSlideUp', transition: 'outline 0.1s ease-in-out' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-2xl md:text-3xl mb-2 font-light tracking-tight font-geist text-cyan-400">99.7%</div>
              <div className="text-sm text-neutral-400 font-geist font-normal" style={{ transition: 'outline 0.1s ease-in-out' }}>Accuracy Rate</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl mb-2 font-light tracking-tight font-geist text-cyan-400">2.3s</div>
              <div className="text-sm text-neutral-400 font-geist font-normal" style={{ transition: 'outline 0.1s ease-in-out' }}>Avg Response Time</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl mb-2 font-light tracking-tight font-geist text-cyan-400">150M+</div>
              <div className="text-sm text-neutral-400 font-geist font-normal" style={{ transition: 'outline 0.1s ease-in-out' }}>Conversations Processed</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl mb-2 font-light tracking-tight font-geist text-cyan-400">24/7</div>
              <div className="text-sm text-neutral-400 font-geist font-normal" style={{ transition: 'outline 0.1s ease-in-out' }}>Uptime Guarantee</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        className="py-20 bg-gradient-to-r from-neutral-900/50 to-neutral-800/30 border-y border-neutral-800/50" 
        style={{ opacity: 0, animation: '0.8s ease-out 0.2s 1 normal forwards running fadeSlideUp', transition: 'outline 0.1s ease-in-out' }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl md:text-4xl text-neutral-100 mb-6 font-light tracking-tight font-geist">
            Ready to experience the future?
          </h3>
          <p 
            className="text-lg text-neutral-400 mb-10 max-w-2xl mx-auto font-geist font-normal" 
            style={{ transition: 'outline 0.1s ease-in-out' }}
          >
            Join thousands of enterprises leveraging Nexus AI Engine for superior customer experiences.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r text-white px-8 py-4 transition-all duration-300 transform hover:scale-105 font-geist font-normal from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700" 
              style={{ transition: 'outline 0.1s ease-in-out' }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="rocket" className="lucide lucide-rocket w-5 h-5 stroke-2 group-hover:translate-x-1 transition-transform">
                <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
                <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
                <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
                <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
              </svg>
              Start Free Trial
            </button>
            <button 
              className="inline-flex items-center gap-2 rounded-full border border-neutral-700 hover:border-neutral-600 hover:bg-neutral-900/50 px-8 py-4 transition-all duration-300 font-geist font-normal" 
              style={{ transition: 'outline 0.1s ease-in-out' }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="calendar" className="lucide lucide-calendar w-5 h-5 stroke-1.5">
                <path d="M8 2v4"></path>
                <path d="M16 2v4"></path>
                <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                <path d="M3 10h18"></path>
              </svg>
              Schedule Demo
            </button>
          </div>
        </div>
      </section>

      {/* Trust & Certifications */}
      <section className="py-20" style={{ opacity: 0, animation: 'fadeSlideUp 0.8s ease-out 0.4s forwards' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 
              className="text-sm text-neutral-400 uppercase tracking-widest mb-2 font-geist font-normal" 
              style={{ transition: 'outline 0.1s ease-in-out' }}
            >
              Enterprise Security & Compliance
            </h3>
            <p className="text-2xl text-neutral-200 font-light tracking-tight font-geist">
              Trusted by Fortune 500 companies worldwide
            </p>
          </div>
          
          <div className="flex gap-8 items-center justify-evenly">
            {[...Array(5)].map((_, i) => (
              <div 
                key={i}
                className="group w-16 h-16 rounded-xl bg-neutral-900/50 border border-neutral-800 hover:border-neutral-700 flex items-center justify-center transition-all duration-300 hover:scale-110" 
                style={{ transition: 'outline 0.1s ease-in-out' }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7 text-neutral-600 group-hover:text-neutral-400 stroke-1.5 transition-colors">
                  <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                  <path d="m9 12 2 2 4-4"></path>
                </svg>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 text-center">
            {[
              { title: "SOC 2 Type II", subtitle: "Security Certified" },
              { title: "GDPR", subtitle: "Privacy Compliant" },
              { title: "ISO 27001", subtitle: "Information Security" },
              { title: "HIPAA", subtitle: "Healthcare Ready" }
            ].map((cert, i) => (
              <div key={i}>
                <div 
                  className="text-xs text-neutral-400 uppercase tracking-wide font-geist font-normal" 
                  style={{ transition: 'outline 0.1s ease-in-out' }}
                >
                  {cert.title}
                </div>
                <div 
                  className="text-sm text-neutral-500 mt-1 font-geist font-normal" 
                  style={{ transition: 'outline 0.1s ease-in-out' }}
                >
                  {cert.subtitle}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
