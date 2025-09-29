import React from "react";
import { Search, Filter, Star } from "lucide-react";

export default function WorkflowsPage() {
  const workflows = [
    {
      title: "Lead Qualification Pipeline",
      category: "Sales",
      rating: 5,
      downloads: 1240,
      description: "Automatically qualify and route leads based on custom criteria",
      tags: ["CRM", "Lead Gen", "Automation"]
    },
    {
      title: "Customer Onboarding Flow",
      category: "Customer Success", 
      rating: 5,
      downloads: 890,
      description: "Complete onboarding sequence with emails, tasks, and check-ins",
      tags: ["Onboarding", "Email", "Tasks"]
    },
    {
      title: "Invoice Processing Bot",
      category: "Finance",
      rating: 4,
      downloads: 650,
      description: "Extract, validate, and process invoices automatically",
      tags: ["Finance", "OCR", "Validation"]
    }
  ];

  return (
    <div className="pt-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Workflow Store</h1>
          <p className="text-xl text-mist max-w-3xl mx-auto">
            350+ pre-built workflows ready for one-click deployment. 
            Find, customize, and deploy in minutes.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-3 text-mist" size={20} />
            <input
              type="text"
              placeholder="Search workflows..."
              className="w-full pl-10 pr-4 py-3 rounded-lg bg-slate border border-white/10 text-white"
            />
          </div>
          <button className="flex items-center gap-2 px-6 py-3 bg-slate rounded-lg border border-white/10 hover:bg-white/5 transition-colors">
            <Filter size={20} />
            Filters
          </button>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {workflows.map((workflow, i) => (
            <div key={i} className="bg-slate/80 rounded-xl2 p-6 border border-white/5 hover:shadow-glow transition-shadow">
              <div className="flex justify-between items-start mb-4">
                <span className="px-3 py-1 bg-indigo/20 text-indigo rounded-full text-sm">
                  {workflow.category}
                </span>
                <div className="flex items-center gap-1">
                  <Star className="text-gold fill-gold" size={16} />
                  <span className="text-sm">{workflow.rating}</span>
                </div>
              </div>
              
              <h3 className="text-xl font-semibold mb-2">{workflow.title}</h3>
              <p className="text-mist mb-4">{workflow.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {workflow.tags.map((tag, j) => (
                  <span key={j} className="px-2 py-1 bg-white/5 rounded text-xs text-mist">
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-sm text-mist">{workflow.downloads} downloads</span>
                <button className="bg-gradient-to-r from-indigo to-violet px-4 py-2 rounded-lg font-semibold text-sm">
                  Deploy
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}