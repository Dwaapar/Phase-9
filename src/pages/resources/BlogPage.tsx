import React from "react";
import { Calendar, Clock, ArrowUpRight } from "lucide-react";

const blogPosts = [
  {
    title: "The Future of Business Automation in 2025",
    excerpt: "Explore the latest trends and technologies shaping the automation landscape.",
    category: "Automation",
    date: "Dec 15, 2024",
    readTime: "5 min read",
    author: "Sarah Chen",
    image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
  },
  {
    title: "How AI Agents Are Transforming Customer Support",
    excerpt: "Real-world case studies of AI agents improving customer satisfaction and reducing costs.",
    category: "AI Agents",
    date: "Dec 12, 2024",
    readTime: "7 min read",
    author: "Marcus Rodriguez",
    image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
  },
  {
    title: "Building Scalable Workflows: Best Practices",
    excerpt: "Learn how to design workflows that grow with your business and maintain performance.",
    category: "Workflows",
    date: "Dec 10, 2024",
    readTime: "6 min read",
    author: "Emily Watson",
    image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
  },
  {
    title: "ROI of Automation: Measuring Success",
    excerpt: "Key metrics and methodologies for calculating the return on automation investments.",
    category: "Business",
    date: "Dec 8, 2024",
    readTime: "8 min read",
    author: "David Kim",
    image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
  },
  {
    title: "Security in Automated Workflows",
    excerpt: "Best practices for maintaining security and compliance in automated processes.",
    category: "Security",
    date: "Dec 5, 2024",
    readTime: "6 min read",
    author: "Lisa Thompson",
    image: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
  },
  {
    title: "Getting Started with Decision Automation",
    excerpt: "A beginner's guide to implementing decision trees and automated decision-making.",
    category: "Decision Platform",
    date: "Dec 3, 2024",
    readTime: "5 min read",
    author: "Alex Johnson",
    image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
  }
];

const categories = ["All", "Automation", "AI Agents", "Workflows", "Business", "Security", "Decision Platform"];

export default function BlogPage() {
  return (
    <div className="pt-20 min-h-screen">
      {/* Hero */}
      <section className="py-24 bg-monks-black text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="text-hero font-bold">Blog</h1>
            <p className="text-xl text-white/80">
              Insights, tutorials, and thought leadership on automation, AI, and business transformation.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 bg-white border-b border-monks-gray/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category, i) => (
              <button
                key={i}
                className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                  i === 0
                    ? "bg-monks-black text-white"
                    : "bg-monks-light-gray text-monks-gray hover:bg-monks-gray hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post, i) => (
              <article key={i} className="group cursor-pointer">
                <div className="space-y-4">
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-4 text-sm text-monks-gray">
                      <span className="px-3 py-1 bg-monks-accent/10 text-monks-accent rounded-full">
                        {post.category}
                      </span>
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        {post.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock size={14} />
                        {post.readTime}
                      </div>
                    </div>
                    
                    <h2 className="text-xl font-bold text-monks-black group-hover:text-monks-accent transition-colors duration-300">
                      {post.title}
                    </h2>
                    
                    <p className="text-monks-gray leading-relaxed">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between pt-2">
                      <span className="text-sm text-monks-gray">By {post.author}</span>
                      <div className="flex items-center gap-2 text-monks-accent group-hover:text-monks-black transition-colors duration-300 font-medium">
                        Read More
                        <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 bg-monks-light-gray">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-monks-black mb-6">
            Stay Updated
          </h2>
          <p className="text-xl text-monks-gray mb-8">
            Get the latest insights on automation and AI delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-full bg-white border-0 text-monks-black focus:ring-2 focus:ring-monks-accent"
            />
            <button className="bg-monks-black text-white px-6 py-3 rounded-full font-medium hover:bg-monks-accent transition-all duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}