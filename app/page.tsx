"use client";
import { motion } from 'framer-motion';
import { BrainCircuit, Database, Zap, Mail, Linkedin, ChevronDown } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white font-sans selection:bg-blue-500">
      {/* HERO SECTION */}
      <section className="h-screen flex flex-col justify-center items-center px-6 relative">
        <div className="absolute top-1/4 w-72 h-72 bg-blue-600/20 rounded-full blur-[100px] -z-10" />
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <span className="px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-medium mb-8 inline-block">
            AI/ML Engineer | 5 Years Experience
          </span>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            Lakshmi Lahari Satti
          </h1>
          <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Specializing in RAG pipelines, LLM-based systems, and production MLOps workflows. 
            Master’s in Information Science from the University of Arizona.
          </p>
          
          <div className="flex gap-4 justify-center mt-12">
            <a href="mailto:sattilakshmilahari@gmail.com" className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 px-6 py-3 rounded-lg font-semibold transition-all">
              <Mail size={18} /> Contact Me
            </a>
            <a href="#" className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 px-6 py-3 rounded-lg font-semibold transition-all">
              <Linkedin size={18} /> LinkedIn
            </a>
          </div>
        </motion.div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10"
        >
          <ChevronDown className="text-slate-500" />
        </motion.div>
      </section>

      {/* SKILLS SECTION */}
      <section className="py-24 bg-slate-900/30">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-sm font-bold text-blue-500 uppercase tracking-[0.2em] mb-12 text-center">Technical Mastery</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { cat: "Generative AI", items: ["RAG", "LangChain", "Vector Search", "LORA"] },
              { cat: "Deep Learning", items: ["PyTorch", "TensorFlow", "Hugging Face", "Transformers"] },
              { cat: "MLOps", items: ["Docker", "Kubernetes", "MLflow", "CI/CD"] },
              { cat: "Languages", items: ["Python", "SQL", "R", "PostgreSQL"] }
            ].map((skill, i) => (
              <div key={i} className="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-blue-500/50 transition-colors">
                <h3 className="text-white font-bold mb-4">{skill.cat}</h3>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item, j) => (
                    <span key={j} className="px-2 py-1 bg-slate-800 rounded text-xs text-slate-400">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE SECTION */}
      <section className="py-24 max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-16">Professional Experience</h2>
        <div className="space-y-16">
          <div className="relative pl-8 border-l border-blue-500/50">
            <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[8.5px] top-1.5 shadow-[0_0_15px_rgba(59,130,246,0.5)]" />
            <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
              <h3 className="text-2xl font-bold text-white">Scale AI | AI/ML Engineer</h3>
              <span className="text-slate-500 text-sm font-mono mt-1 md:mt-0">July 2025 - Present</span>
            </div>
            <ul className="space-y-3 text-slate-400">
              <li className="flex gap-2">
                <span className="text-blue-500">▹</span> Expanded dataset preparation throughput by 32% across model cycles.
              </li>
              <li className="flex gap-2">
                <span className="text-blue-500">▹</span> Lifted classification performance by 25% through iterative testing.
              </li>
              <li className="flex gap-2">
                <span className="text-blue-500">▹</span> Lowered average inference latency by 37% during benchmarks.
              </li>
            </ul>
          </div>

          <div className="relative pl-8 border-l border-slate-800">
            <div className="absolute w-4 h-4 bg-slate-800 rounded-full -left-[8.5px] top-1.5" />
            <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
              <h3 className="text-2xl font-bold text-white">Heptic AI | AI/ML Engineer</h3>
              <span className="text-slate-500 text-sm font-mono mt-1 md:mt-0">Jan 2020 - Dec 2023</span>
            </div>
            <ul className="space-y-3 text-slate-400">
              <li className="flex gap-2">
                <span className="text-slate-600">▹</span> Raised prediction accuracy by 30% using supervised learning prepared datasets.
              </li>
              <li className="flex gap-2">
                <span className="text-slate-600">▹</span> Streamlined dataset preparation efficiency by 27% across research projects.
              </li>
              <li className="flex gap-2">
                <span className="text-slate-600">▹</span> Maintained experiment tracking to strengthen traceability by 22%.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-20 text-center border-t border-slate-900 bg-slate-950">
        <p className="text-slate-500 text-sm mb-2">Education</p>
        <h3 className="text-xl font-bold text-slate-200">University of Arizona — Tucson, AZ</h3>
        <p className="text-slate-500 italic mt-1">Master's in Information Science (Machine Learning)</p>
      </footer>
    </main>
  );
}
