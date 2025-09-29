import React from "react";
import { Download, FileText, Database, BookOpen } from "lucide-react";

export default function AssetsPage() {
  const assetCategories = [
    {
      title: "Prompt Packs",
      icon: FileText,
      count: 150,
      description: "Ready-to-use AI prompts for every business need"
    },
    {
      title: "Datasets",
      icon: Database,
      count: 85,
      description: "Clean, structured data for training and analysis"
    },
    {
      title: "Playbooks",
      icon: BookOpen,
      count: 120,
      description: "Step-by-step guides and standard operating procedures"
    },
    {
      title: "Creative Bundles",
      icon: Download,
      count: 200,
      description: "Templates, designs, and creative assets"
    }
  ];

  return (
    <div className="pt-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Digital Assets</h1>
          <p className="text-xl text-mist max-w-3xl mx-auto">
            Accelerate your growth with our curated collection of digital assets. 
            Download and go live in minutes.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-16">
          {assetCategories.map((category, i) => {
            const Icon = category.icon;
            return (
              <div key={i} className="bg-slate/80 rounded-xl2 p-6 border border-white/5 text-center hover:shadow-glow transition-shadow">
                <div className="w-16 h-16 bg-gradient-to-r from-indigo to-violet rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Icon className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
                <p className="text-mist mb-4">{category.description}</p>
                <div className="text-2xl font-bold text-emerald mb-2">{category.count}+</div>
                <button className="bg-gradient-to-r from-indigo to-violet px-4 py-2 rounded-lg font-semibold text-sm">
                  Browse
                </button>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-r from-indigo to-violet rounded-xl2 p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Start Building Your Library</h2>
          <p className="text-lg mb-6">Access premium assets and accelerate your projects</p>
          <button className="bg-ink px-8 py-3 rounded-xl font-semibold hover:bg-slate transition-colors">
            Browse All Assets
          </button>
        </div>
      </div>
    </div>
  );
}