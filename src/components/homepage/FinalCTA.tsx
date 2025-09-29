import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="py-24 bg-monks-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-display font-bold text-white mb-6">
            Ready to Transform<br />
            Your Digital Presence?
          </h2>
          <p className="text-xl text-white/80 leading-relaxed max-w-2xl mx-auto">
            Let's create something extraordinary together. Start your digital transformation journey today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link
              to="/contact"
              className="bg-white text-monks-black px-8 py-4 rounded-full font-medium hover:bg-monks-accent hover:text-white transition-all duration-300 inline-flex items-center justify-center gap-2 group"
            >
              Start a Project
              <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
            </Link>
            <Link
              to="/work"
              className="border border-white/30 text-white px-8 py-4 rounded-full font-medium hover:bg-white hover:text-monks-black transition-all duration-300"
            >
              View Our Work
            </Link>
          </div>
          
          <p className="text-white/60 text-sm pt-4">
            Global expertise • Local presence • Proven results
          </p>
        </div>
      </div>
    </section>
  );
}