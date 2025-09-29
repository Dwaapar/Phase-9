import React from "react";
import { ArrowUpRight, TrendingUp, Users, Clock } from "lucide-react";

const caseStudies = [
  {
    title: "SaaS Company Achieves 23% MQL Uplift in 72 Hours",
    company: "TechFlow",
    industry: "B2B SaaS",
    challenge: "Manual lead routing causing delays and missed opportunities",
    solution: "Automated lead scoring and intelligent routing system",
    results: [
      { metric: "MQL Conversion", value: "+23%", icon: TrendingUp },
      { metric: "Response Time", value: "-67%", icon: Clock },
      { metric: "Sales Team Efficiency", value: "+40%", icon: Users }
    ],
    image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
  },
  {
    title: "E-commerce Store Reduces Support Tickets by 60%",
    company: "ShopSmart",
    industry: "E-commerce",
    challenge: "Overwhelming customer support volume during peak seasons",
    solution: "AI-powered support agent with automated ticket triage",
    results: [
      { metric: "Support Tickets", value: "-60%", icon: TrendingUp },
      { metric: "Resolution Time", value: "-45%", icon: Clock },
      { metric: "Customer Satisfaction", value: "+35%", icon: Users }
    ],
    image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
  },
  {
    title: "Fintech Startup Automates Compliance Reporting",
    company: "PayForward",
    industry: "Fintech",
    challenge: "Manual compliance reporting taking 40+ hours per month",
    solution: "Automated KYC/AML workflows with real-time monitoring",
    results: [
      { metric: "Compliance Time", value: "-85%", icon: Clock },
      { metric: "Accuracy", value: "+99%", icon: TrendingUp },
      { metric: "Cost Savings", value: "$50k/year", icon: Users }
    ],
    image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
  }
];

export default function CaseStudiesPage() {
  return (
    <div className="pt-20 min-h-screen">
      {/* Hero */}
      <section className="py-24 bg-monks-black text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="text-hero font-bold">Case Studies</h1>
            <p className="text-xl text-white/80">
              Real results from real companies. See how businesses like yours are transforming with Findawise.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="space-y-16">
            {caseStudies.map((study, i) => (
              <div key={i} className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={`space-y-6 ${i % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="space-y-2">
                    <span className="px-3 py-1 bg-monks-accent/10 text-monks-accent rounded-full text-sm font-medium">
                      {study.industry}
                    </span>
                    <h2 className="text-3xl font-bold text-monks-black">{study.title}</h2>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-monks-black mb-2">Challenge</h3>
                      <p className="text-monks-gray">{study.challenge}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-monks-black mb-2">Solution</h3>
                      <p className="text-monks-gray">{study.solution}</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4">
                    {study.results.map((result, j) => {
                      const Icon = result.icon;
                      return (
                        <div key={j} className="text-center p-4 bg-monks-light-gray rounded-2xl">
                          <Icon size={20} className="text-monks-accent mx-auto mb-2" />
                          <div className="text-2xl font-bold text-monks-black">{result.value}</div>
                          <div className="text-sm text-monks-gray">{result.metric}</div>
                        </div>
                      );
                    })}
                  </div>
                  
                  <button className="flex items-center gap-2 text-monks-accent hover:text-monks-black transition-colors duration-300 font-medium">
                    Read Full Case Study
                    <ArrowUpRight size={16} />
                  </button>
                </div>
                
                <div className={`${i % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div className="aspect-[4/3] rounded-3xl overflow-hidden">
                    <img
                      src={study.image}
                      alt={study.company}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 bg-monks-light-gray">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-monks-black mb-6">
              Results Across Industries
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-monks-accent mb-2">1,000+</div>
              <div className="text-monks-gray">Companies Served</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-monks-accent mb-2">75%</div>
              <div className="text-monks-gray">Average Efficiency Gain</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-monks-accent mb-2">$10M+</div>
              <div className="text-monks-gray">Cost Savings Generated</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-monks-accent mb-2">99.9%</div>
              <div className="text-monks-gray">Customer Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-monks-black text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Write Your Success Story?</h2>
          <p className="text-xl text-white/80 mb-8">
            Join the companies already transforming their operations with Findawise
          </p>
          <button className="inline-flex items-center gap-2 bg-white text-monks-black px-8 py-4 rounded-full font-medium hover:bg-monks-accent hover:text-white transition-all duration-300 group">
            Start Your Transformation
            <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
          </button>
        </div>
      </section>
    </div>
  );
}