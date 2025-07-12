'use client';

import { motion } from "framer-motion";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  useEffect(() => {
    // Animate hero device on scroll
    gsap.to(".hero-device", {
      scrollTrigger: {
        trigger: ".hero",
        start: "top center",
        end: "bottom center",
        scrub: true,
      },
      y: -50,
      scale: 1.03,
      rotation: 0.5,
      ease: "power2.out",
    });

    // Reveal sections as they enter viewport
    document.querySelectorAll(".reveal").forEach((section) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "bottom 60%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    // Pulse animation for emergency icon
    gsap.to(".pulse-icon", {
      scale: 1.1,
      opacity: 0.7,
      repeat: -1,
      yoyo: true,
      duration: 1.2,
      ease: "power1.inOut",
    });

    // Meditation wave animation
    gsap.to(".wave path", {
      attr: { d: "M0,30 Q100,10 200,30 T400,30" },
      repeat: -1,
      yoyo: true,
      duration: 3,
      ease: "sine.inOut",
    });
  }, []);

  return (
    <div className="bg-pearl text-navy font-sans tracking-tight" style={{ backgroundImage: 'url("/images/bg.jpeg")' }}>
      {/* Hero Section */}
      <section className="hero min-h-screen flex items-center justify-center relative overflow-hidden px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-center max-w-4xl mx-auto z-10 relative"
        >
          <h1 className="font-playfair text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 bg-gradient-to-r from-gold via-yellow-600 to-navy bg-clip-text text-transparent">
            Doctorify – Your Intelligent Health Ally
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8">
            Where luxury meets wellness. AI-driven insights. Effortless care. Total control.
          </p>
          <div className="flex justify-center gap-6 mt-8">
            <button className="px-8 py-4 rounded-full bg-gold text-white font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
              Download Now
            </button>
            <button className="px-8 py-4 rounded-full border-2 border-gold text-gold font-semibold hover:bg-gold hover:text-white transition-colors duration-300 backdrop-blur-sm">
              Explore Features
            </button>
          </div>
        </motion.div>

        {/* Device Mockup */}
        <div className="hero-device absolute right-10 bottom-10 w-64 md:w-80 lg:w-96 opacity-90 z-10">
          <svg viewBox="0 0 300 600" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
            <rect x="20" y="20" rx="30" ry="30" width="260" height="560" fill="#fff" stroke="#e0e0e0" strokeWidth="2" />
            <circle cx="150" cy="580" r="10" fill="#f0f0f0" />
            <rect x="130" y="60" width="40" height="4" rx="2" fill="#ccc" />
            <rect x="80" y="90" width="140" height="450" rx="20" fill="#eee" />
          </svg>
        </div>

        {/* Animated Particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-gold rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 5 + 5}s ease-in-out infinite`,
            }}
          />
        ))}
      </section>

      {/* Why Doctorify */}
      <section className="py-24 px-6 reveal">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-playfair text-4xl font-bold mb-6">Why Doctorify?</h2>
            <ul className="space-y-4 text-lg text-gray-700">
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-gold text-white flex items-center justify-center mt-1">✓</span>
                No more fragmented apps – one place for your entire health journey
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-gold text-white flex items-center justify-center mt-1">✓</span>
                AI that guides, not guesses
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-gold text-white flex items-center justify-center mt-1">✓</span>
                Tailored for individuals who demand clarity and control in their wellness
              </li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white p-8 rounded-2xl shadow-lg backdrop-blur-sm"
          >
            <img src="https://picsum.photos/400/300?random=1" alt="Health Journey" className="rounded-xl w-full h-auto object-cover" />
          </motion.div>
        </div>
      </section>

      {/* AI That Thinks Ahead */}
      <section className="py-24 px-6 bg-white reveal">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-playfair text-4xl font-bold text-center mb-12">AI That Thinks Ahead</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Symptom Checker",
                icon: (
                  <svg className="w-10 h-10 text-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                ),
                description: "Triage advice, severity levels",
              },
              {
                title: "Smart Reminders",
                icon: (
                  <svg className="w-10 h-10 text-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 6v6l4 2" />
                  </svg>
                ),
                description: "Timers, prescriptions",
              },
              {
                title: "Emergency Mode",
                icon: (
                  <svg className="w-10 h-10 pulse-icon text-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ),
                description: "Pulse alert, instant help",
              },
            ].map((card, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-pearl p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="mb-4">{card.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                <p className="text-gray-600">{card.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <footer className="py-24 px-6 bg-navy text-white reveal">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-playfair text-4xl font-bold mb-6">Begin your proactive health journey today.</h2>
          <p className="text-xl text-gray-300 mb-8">Download Doctorify for iOS and Android.</p>
          <div className="flex justify-center gap-6 mb-10">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="px-6 py-3 rounded-full bg-white text-navy font-semibold flex items-center gap-2 backdrop-blur-sm hover:bg-opacity-90 transition-all"
            >
              <span>App Store</span>
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 22c-5.522 0-10-4.478-10-10s4.478-10 10-10 10 4.478 10 10-4.478 10-10 10zm-1-5h2v2h-2zm0-10h2v8h-2z" />
              </svg>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="px-6 py-3 rounded-full bg-white text-navy font-semibold flex items-center gap-2 backdrop-blur-sm hover:bg-opacity-90 transition-all"
            >
              <span>Google Play</span>
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 22c-5.522 0-10-4.478-10-10s4.478-10 10-10 10 4.478 10 10-4.478 10-10 10zm-1-5h2v2h-2zm0-10h2v8h-2z" />
              </svg>
            </motion.button>
          </div>
          <p className="text-sm text-gray-400">&copy; 2025 Doctorify. All rights reserved.</p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
          100% {
            transform: translateY(0px);
          }
        }

        .font-playfair {
          font-family: 'Playfair Display', serif;
        }
      `}</style>
    </div>
  );
}