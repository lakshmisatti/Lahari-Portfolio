"use client";
import { motion } from 'framer-motion';
import { BrainCircuit, Database, Zap, Mail, Linkedin, ChevronDown } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white font-sans">
      {/* HERO SECTION */}
      <section className="h-screen flex flex-col justify-center items-center px-6 relative">
        <div className="absolute top-1/4 w-72 h-72 bg-blue-600/20 rounded-full blur-[100px] -z-10" />
        
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
          <span className="px-4 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm mb-6 inline-block">
            AI/ML Engineer | 5 Years Experience [cite: 1, 2]
          </span>
          <h1 className="text-5xl md:text-7xl font-bold mb-4">Lakshmi Lahari Satti [cite: 1, 2]</h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Specializing in RAG pipelines, LLM-based systems, and production MLOps. [cite: 1]
            Master’s in Information Science from the University of Arizona. [cite: 1, 3]
          </p>
          
          <div className="flex gap-4 justify-center mt-10">
            <a href="mailto:sattilakshmilahari@gmail.com" className="flex items-center gap-2 bg-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-500 transition-all">
              <Mail size={18} /> Contact [cite: 1]
            </a>
            <a href="#" className="flex items-center gap-2 bg-slate-800 px-6 py-3 rounded-lg font-semibold hover:bg-slate-700 transition-all">
              <Linkedin size={18} /> LinkedIn [cite: 1]
            </a>
          </div>
        </motion.div>
        <ChevronDown className="absolute bottom-10 animate-bounce text-slate-500" />
      </section>

      {/* SKILLS */}
      <section className="py-20 max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center text-blue-400 uppercase tracking-widest">Technical Mastery [cite: 1]</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { cat: "Generative AI", items: ["RAG", "LangChain", "Vector Search", "LORA"] },
            { cat: "Deep Learning", items: ["PyTorch", "TensorFlow", "Hugging Face"] },
            { cat: "MLOps", items: ["Docker", "Kubernetes", "MLflow", "CI/CD"] },
            { cat: "Languages", items: ["Python", "SQL", "R", "PostgreSQL"] }
          ].map((skill, i) => (
            <div key={i} className="bg-slate-900/50 p-6 rounded-xl border border-slate-800">
              <h3 className="text-xs font-bold text-slate-500 mb-4">{skill.cat} [cite: 1]</h3>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item, j) => (
                  <span key={j} className="text-sm text-slate-300">{item} [cite: 1]</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="py-20 max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">Professional Experience [cite: 1]</h2>
        <div className="space-y-12">
          <div className="border-l-2 border-blue-500 pl-8 relative">
             <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-2" />
             <h3 className="text-2xl font-bold">Scale AI | AI/ML Engineer [cite: 1]</h3>
             <p className="text-blue-400 text-sm mb-4 italic">July 2025 - Present | USA [cite: 1]</p>
             <ul className="text-slate-400 space-y-2 list-disc ml-4">
               <li>Expanded dataset preparation throughput by 32%. [cite: 1]</li>
               <li>Lifted classification performance by 25%. [cite: 1]</li>
               <li>Lowered average inference latency by 37%. [cite: 1]</li>
             </ul>
          </div>
          <div className="border-l-2 border-slate-800 pl-8 relative">
             <div className="absolute w-4 h-4 bg-slate-800 rounded-full -left-[9px] top-2" />
             <h3 className="text-2xl font-bold">Heptic AI | AI/ML Engineer [cite: 1]</h3>
             <p className="text-slate-500 text-sm mb-4 italic">Jan 2020 - Dec 2023 | India [cite: 1]</p>
             <ul className="text-slate-400 space-y-2 list-disc ml-4">
               <li>Raised prediction accuracy by 30% across experimental iterations. [cite: 1]</li>
               <li>Streamlined dataset preparation efficiency by 27%. [cite: 1]</li>
               <li>Strengthened experiment traceability by 22%. [cite: 1]</li>
             </ul>
          </div>
        </div>
      </section>

      <footer className="py-20 text-center border-t border-slate-900">
        <p className="text-slate-500 text-sm">MS in Information Science (Machine Learning) [cite: 1]</p>
        <p className="text-slate-400">University of Arizona — Tucson, AZ [cite: 3]</p>
      </footer>
    </main>
  );
}
