import { useState } from 'react';
import ProjectCard from './components/ProjectCard';
import IAAnalyzer from './components/IAAnalyzer';
import Experience from './components/Experience';
import TechStack from './components/TechStack';

function App() {
  const handleDemoClick = () => {
    const element = document.getElementById('demo-ia');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans selection:bg-sky-500/30">
      
      {/* SECCIÓN 1: HERO & TECH STACK */}
      <section className="relative py-24 px-8 bg-gradient-to-b from-slate-800 to-slate-900 border-b border-slate-700/50 overflow-hidden">
        {/* Decoración de fondo (Grid sutil) */}
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-sky-500/10 text-sky-400 text-[10px] font-mono rounded-full border border-sky-500/20 mb-8 tracking-[0.2em] uppercase">
            <span className="w-2 h-2 bg-sky-400 rounded-full animate-pulse"></span>
            System_Status: Production_Ready
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tighter italic">
            M en TA <span className="text-sky-500">Rodrigo Higareda</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed mb-10">
            Cerrando la brecha entre la <span className="text-white font-bold">IA experimental</span> y la <span className="text-white font-bold">infraestructura productiva</span> con Docker y PyTorch.
          </p>
          
          <TechStack />

          <div className="mt-12 flex justify-center gap-6">
             <button 
              onClick={handleDemoClick}
              className="px-8 py-4 bg-sky-600 hover:bg-sky-500 text-white font-bold rounded-xl transition-all shadow-[0_0_20px_rgba(14,165,233,0.3)] hover:scale-105"
             >
               VER DEMO EN VIVO
             </button>
             <button className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold rounded-xl border border-slate-700 transition-all">
               DESCARGAR CV
             </button>
          </div>
        </div>
      </section>

      {/* SECCIÓN 2: FORMACIÓN Y EXPERIENCIA */}
      <section className="py-24 px-8 max-w-5xl mx-auto">
         <Experience />
      </section>

      {/* SECCIÓN 3: PROYECTOS Y DEMO */}
      <main className="py-24 px-8 max-w-6xl mx-auto border-t border-slate-800/50">
        <div className="flex items-center justify-between mb-16">
          <div>
            <h2 className="text-4xl font-black uppercase tracking-tighter italic">Engineered Projects</h2>
            <p className="text-slate-500 mt-2 font-mono text-sm">{">"} Soluciones escalables en entornos aislados</p>
          </div>
          <div className="h-[1px] flex-1 bg-slate-800 ml-12 hidden md:block"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-32">
          <ProjectCard 
            title="Detección de Maíz (AgriTech)"
            description="Motor de inferencia basado en YOLOv8 para la localización de fenotipos. Desplegado en microservicios Docker con aceleración GPU."
            tags={["YOLOv8", "FastAPI", "Docker"]}
            githubLink="#"
            demoLink={handleDemoClick}
            image="https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?q=80&w=800" 
          />

          <ProjectCard 
            title="Optimización de Inferencia"
            description="Pipeline de procesamiento multimodal para reducción de latencia en modelos de Visión Artificial sobre hardware restringido."
            tags={["PyTorch", "OpenCV", "CUDA"]}
            githubLink="#"
            demoLink={() => alert("Documentación en proceso")}
            image="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800"
          />
        </div>

        {/* CONTENEDOR DE LA DEMO (EL LABORATORIO) */}
        <div id="demo-ia" className="scroll-mt-24">
          <div className="bg-slate-800/20 border border-slate-700/50 rounded-[2rem] p-8 md:p-16 backdrop-blur-md relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10">
               <span className="text-8xl font-black italic">LAB</span>
            </div>
            
            <div className="grid lg:grid-cols-5 gap-16 items-center relative z-10">
              <div className="lg:col-span-2">
                <div className="inline-block p-3 bg-sky-500 rounded-2xl mb-6 shadow-[0_0_15px_rgba(14,165,233,0.4)]">
                   <svg className="w-8 h-8 text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                </div>
                <h3 className="text-3xl font-bold mb-6 italic">Inferencia en Tiempo Real</h3>
                <p className="text-slate-400 mb-8 leading-relaxed text-lg">
                  Sube una muestra visual para procesarla en la <span className="text-white">GPU Katana</span>. 
                  Este módulo valida la integración de microservicios y la respuesta de baja latencia del modelo.
                </p>
                
                <div className="space-y-3">
                   {["Inferencia YOLOv8n", "Docker Containerized", "NVIDIA CUDA Support"].map((item) => (
                     <div key={item} className="flex items-center gap-3 text-sm font-mono text-slate-300">
                        <span className="text-sky-500">{'>>}'}</span> {item}
                     </div>
                   ))}
                </div>
              </div>
              
              <div className="lg:col-span-3">
                <IAAnalyzer />
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="py-20 text-center border-t border-slate-800/50">
        <div className="flex justify-center gap-8 mb-6 opacity-50 grayscale hover:grayscale-0 transition-all">
           {/* Aquí irían logos sutiles de GitHub, LinkedIn, etc. */}
        </div>
        <p className="text-slate-600 text-xs font-mono uppercase tracking-[0.3em]">
          © 2026 Rodrigo Oppe // AI Engineering & Deployment
        </p>
      </footer>
    </div>
  );
}

export default App;