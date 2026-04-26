"use client";
import { motion } from 'framer-motion';
import { BrainCircuit, Database, Zap, Mail, Linkedin, ChevronDown, Code2, Cpu, Globe } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#030712] text-slate-200 selection:bg-blue-500/30">
      {/* 1. HERO SECTION - HIGH IMPACT */}
      <section className="relative h-screen flex flex-col justify-center items-center px-6 overflow-hidden">
        {/* Animated Background Gradients */}
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-emerald-600/10 rounded-full blur-[120px]" />

        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1 }}
          className="text-center z-10"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/5 text-blue-400 text-xs font-mono mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            AI/ML ENGINEER | 5 YEARS EXP
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-white mb-6">
            Lakshmi Lahari <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Satti</span>
          </h1>
          
          <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
            Architecting RAG pipelines and production-grade MLOps workflows. 
            Transforming raw data into intelligent enterprise systems.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="mailto:sattilakshmilahari@gmail.com" className="group flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full font-bold transition-all hover:scale-105">
              <Mail size={18} /> Let's Talk
            </a>
            <a href="#" className="flex items-center gap-2 border border-slate-700 bg-slate-900/50 backdrop-blur-md px-8 py-4 rounded-full font-bold hover:bg-slate-800 transition-all">
              <Linkedin size={18} /> LinkedIn
            </a>
          </div>
        </motion.div>

        <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 2 }} className="absolute bottom-10 opacity-30">
          <ChevronDown size={32} />
        </motion.div>
      </section>

      {/* 2. TECHNICAL MASTERY - GRID SYSTEM */}
      <section className="py-32 max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center mb-20 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Core Competencies</h2>
          <div className="h-1 w-20 bg-blue-500 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { cat: "Generative AI", items: ["RAG", "LangChain", "Vector Search", "LORA"], icon: <BrainCircuit className="text-blue-400" /> },
            { cat: "Deep Learning", items: ["PyTorch", "TensorFlow", "Hugging Face"], icon: <Cpu className="text-emerald-400" /> },
            { cat: "MLOps", items: ["Docker", "Kubernetes", "MLflow", "CI/CD"], icon: <Globe className="text-amber-400" /> },
            { cat: "Languages", items: ["Python", "SQL", "R", "PostgreSQL"], icon: <Code2 className="text-rose-400" /> }
          ].map((skill, i) => (
            <motion.div 
              whileHover={{ y: -10 }}
              key={i} 
              className="p-8 rounded-3xl bg-slate-900/40 border border-slate-800/50 backdrop-blur-xl hover:border-blue-500/30 transition-all"
            >
              <div className="mb-6">{skill.icon}</div>
              <h3 className="text-white font-bold text-xl mb-4">{skill.cat}</h3>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item, j) => (
                  <span key={j} className="px-3 py-1 bg-slate-800/50 rounded-lg text-xs font-mono text-slate-300">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. PROFESSIONAL JOURNEY - QUANTIFIED RESULTS */}
      <section className="py-32 bg-[#050a18]">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-white mb-16 border-l-4 border-blue-500 pl-6">Professional Experience</h2>
          
          <div className="space-y-24">
            <div className="group relative">
              <div className="flex flex-col md:flex-row md:justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white">Scale AI</h3>
                  <p className="text-blue-400 font-medium">AI/ML Engineer </p>
                </div>
                <span className="text-slate-500 font-mono text-sm mt-2 md:mt-0">July 2025 — Present </span>
              </div>
              <ul className="space-y-4">
                {[
                  "Increased dataset preparation throughput by 32% ",
                  "Boosted classification performance by 25% through iterative testing ",
                  "Reduced inference latency by 37% for production workloads "
                ].map((point, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-400 leading-relaxed">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-500 shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            <div className="group relative">
              <div className="flex flex-col md:flex-row md:justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white">Heptic AI</h3>
                  <p className="text-slate-500 font-medium">AI/ML Engineer </p>
                </div>
                <span className="text-slate-500 font-mono text-sm mt-2 md:mt-0">Jan 2020 — Dec 2023 </span>
              </div>
              <ul className="space-y-4">
                {[
                  "Raised prediction accuracy by 30% using prepared datasets ",
                  "Improved preparation efficiency by 27% ",
                  "Strengthened experiment traceability by 22% via MLflow "
                ].map((point, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-400 leading-relaxed">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-slate-700 shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FOOTER - ACADEMIC FOUNDATION */}
      <footer className="py-32 text-center border-t border-slate-900 px-6">
        <p className="text-slate-500 uppercase tracking-widest text-xs mb-4">Academic Foundation</p>
        <h3 className="text-2xl font-bold text-white mb-2">University of Arizona [cite: 1, 3]</h3>
        <p className="text-slate-400 italic">Master's in Information Science (Machine Learning) </p>
        <p className="text-slate-600 text-sm mt-4 tracking-tighter font-mono italic">Tucson, AZ [cite: 1, 3]</p>
      </footer>
    </main>
  );
}
