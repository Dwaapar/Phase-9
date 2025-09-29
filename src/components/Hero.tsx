import React from "react";
import { ArrowUpRight, Play } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-monks-black text-white overflow-hidden">
      {/* Background Video Container */}
      <div className="absolute inset-0 z-0">
        {/* Video element - replace src with actual video URL */}
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="/api/placeholder/1920/1080"
        >
          <source src="/videos/hero-background.mp4" type="video/mp4" />
          {/* Fallback for browsers that don't support video */}
          <div className="w-full h-full bg-gradient-to-br from-monks-medium-gray via-monks-dark-gray to-monks-black flex items-center justify-center">
            <div className="text-center text-monks-gray">
              <div className="w-24 h-24 mx-auto mb-6 bg-monks-medium-gray rounded-full flex items-center justify-center">
                <Play size={32} className="text-white ml-1" />
              </div>
              <p className="text-xl mb-4">Background Video</p>
              <div className="text-sm space-y-1 max-w-md">
                <p><strong>VIDEO SPECS:</strong></p>
                <p>• Format: MP4 (H.264)</p>
                <p>• Resolution: 1920x1080 (Full HD)</p>
                <p>• Duration: 10-15 seconds loop</p>
                <p>• Style: Dark abstract/geometric motion</p>
                <p>• File size: &lt;10MB for web optimization</p>
                <p>• Autoplay, muted, seamless loop</p>
              </div>
            </div>
          </div>
        </video>
      </div>
      
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-monks-black/80 via-monks-black/60 to-monks-black/40 z-10"></div>
      
      {/* Content */}
      <div className="relative z-20 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
          <div className="max-w-4xl">
            {/* Main headline */}
            <h1 className="text-hero font-bold mb-8 leading-none animate-fade-in">
              We are<br/>
              <span className="italic font-light">Monks</span>
            </h1>
            
            {/* Subheadline */}
            <p className="text-2xl md:text-3xl text-white/90 mb-12 max-w-3xl leading-relaxed animate-slide-up" style={{ animationDelay: '0.2s' }}>
              A global digital transformation consultancy that connects the dots between 
              <span className="text-white font-medium"> data, content, digital media, and technology.</span>
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-16 animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <button className="group bg-white text-monks-black px-8 py-4 rounded-full font-medium text-lg hover:bg-monks-accent hover:text-white transition-all duration-300 flex items-center justify-center gap-3">
                Explore Our Work
                <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
              </button>
              <button className="group border-2 border-white/30 text-white px-8 py-4 rounded-full font-medium text-lg hover:border-white hover:bg-white hover:text-monks-black transition-all duration-300 flex items-center justify-center gap-3">
                Watch Our Story
                <Play size={20} className="group-hover:scale-110 transition-transform duration-300" />
              </button>
            </div>
            
            {/* Key metrics or highlights */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 animate-slide-up" style={{ animationDelay: '0.6s' }}>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">25+</div>
                <div className="text-white/70 text-sm uppercase tracking-wider">Countries</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">1,500+</div>
                <div className="text-white/70 text-sm uppercase tracking-wider">Experts</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">500+</div>
                <div className="text-white/70 text-sm uppercase tracking-wider">Brands</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">15+</div>
                <div className="text-white/70 text-sm uppercase tracking-wider">Years</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}