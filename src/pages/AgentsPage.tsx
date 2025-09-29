import React from "react";
import { Bot, MessageSquare, Settings, Zap } from "lucide-react";

export default function AgentsPage() {
  const agents = [
    {
      title: "SDR Agent",
      description: "Automated sales development and lead qualification",
      icon: Zap,
      features: ["Lead outreach", "Email sequences", "Meeting booking"],
      status: "Popular"
    },
    {
      title: "Support Agent",
      description: "24/7 customer support and ticket resolution",
      icon: MessageSquare,
      features: ["Instant responses", "Ticket routing", "Knowledge base"],
      status: "New"
    },
    {
      title: "Operations Agent",
      description: "Workflow automation and process optimization",
      icon: Settings,
      features: ["Task automation", "Process monitoring", "Alert management"],
      status: "Featured"
    }
  ];

  return (
    <div className="pt-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">AI Agents</h1>
          <p className="text-xl text-mist max-w-3xl mx-auto">
            Deploy autonomous AI agents that think and act for your business. 
            Choose managed hosting or self-host on your infrastructure.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-16">
          {agents.map((agent, i) => {
            const Icon = agent.icon;
            return (
              <div key={i} className="bg-slate/80 rounded-xl2 p-6 border border-white/5 hover:shadow-glow transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo to-violet rounded-lg flex items-center justify-center">
                    <Icon className="text-white" size={24} />
                  </div>
                  <span className="px-3 py-1 bg-emerald/20 text-emerald rounded-full text-sm">
                    {agent.status}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold mb-2">{agent.title}</h3>
                <p className="text-mist mb-4">{agent.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {agent.features.map((feature, j) => (
                    <li key={j} className="text-sm text-mist flex items-center gap-2">
                      <Bot size={14} className="text-indigo" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className="w-full bg-gradient-to-r from-indigo to-violet px-4 py-2 rounded-lg font-semibold">
                  Deploy Agent
                </button>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-r from-indigo to-violet rounded-xl2 p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Deploy Your First Agent?</h2>
          <p className="text-lg mb-6">Start with our most popular SDR agent and see results in 24 hours</p>
          <button className="bg-ink px-8 py-3 rounded-xl font-semibold hover:bg-slate transition-colors">
            Deploy SDR Agent
          </button>
        </div>
      </div>
    </div>
  );
}