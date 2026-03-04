import ProjectCard from './components/ProjectCard';
import IAAnalyzer from './components/IAAnalyzer';
import Experience from './components/Experience'; // El nuevo componente que crearemos

function App() {
  const handleDemoClick = () => {
    const element = document.getElementById('demo-ia');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans">
      
      {/* SECCIÓN 1: HERO (Tu identidad profesional) */}
      <section className="py-24 px-8 bg-gradient-to-b from-slate-800 to-slate-900 border-b border-slate-700/50">
        <div className="max-w-4xl mx-auto text-center">
          <span className="px-3 py-1 bg-sky-500/10 text-sky-400 text-xs font-mono rounded-full border border-sky-500/20 mb-6 inline-block tracking-tighter">
            SYSTEM_STATUS: READY_FOR_DEPLOYMENT
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-4 tracking-tight">
            Rodrigo <span className="text-sky-500">Oppe</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed italic">
            "Transformando datos multimodales en productos de IA listos para producción."
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            {["FastAPI", "PyTorch", "Docker", "Computer Vision"].map((skill) => (
              <div key={skill} className="flex items-center gap-2 px-4 py-2 bg-slate-800/50 rounded-lg border border-slate-700 hover:border-sky-500/50 transition-colors">
                <span className="w-1.5 h-1.5 bg-sky-500 rounded-full animate-pulse"></span>
                <span className="text-xs font-mono uppercase tracking-widest">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECCIÓN 2: FORMACIÓN TÉCNICA (Lo que acabas de terminar) */}
      <section className="py-20 px-8 max-w-5xl mx-auto">
         <Experience />
      </section>

      {/* SECCIÓN 3: GALERÍA DE PROYECTOS */}
      <main className="py-20 px-8 max-w-6xl mx-auto border-t border-slate-800/50">
        <div className="flex items-center justify-between mb-16">
          <div>
            <h2 className="text-3xl font-bold uppercase tracking-tighter italic">Proyectos Seleccionados</h2>
            <p className="text-slate-500 mt-2 font-mono text-sm">{">"} Despliegues exitosos en entornos aislados</p>
          </div>
          <div className="h-[1px] flex-1 bg-slate-800 ml-8 hidden md:block"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">
          <ProjectCard 
            title="Detección de Plantas de Maíz"
            description="Motor de inferencia basado en YOLOv8 para localización de fenotipos en agricultura de precisión. Implementado bajo arquitectura de microservicios."
            tags={["YOLOv8", "Python", "FastAPI", "Docker"]}
            githubLink="#"
            demoLink={handleDemoClick}
            image="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=600" 
          />

          <ProjectCard 
            title="Infraestructura AI-Ready"
            description="Configuración de entornos productivos con soporte para GPU passthrough en contenedores Docker para escalabilidad de modelos."
            tags={["Docker", "NVIDIA-Docker", "Linux"]}
            githubLink="#"
            demoLink={() => alert("Infraestructura local en Katana")}
            image="https://images.unsplash.com/photo-1558494949-ef010cbdcc48?q=80&w=600"
          />
        </div>

        {/* --- DEMO EN VIVO --- */}
        <div id="demo-ia" className="scroll-mt-20">
          <div className="bg-slate-800/30 border border-slate-700/50 rounded-3xl p-8 md:p-12 backdrop-blur-sm">
            <div className="grid lg:grid-cols-5 gap-12 items-center">
              <div className="lg:col-span-2">
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 bg-sky-500 rounded-lg flex items-center justify-center text-slate-900 text-sm italic font-black">AI</span>
                  Prueba de Inferencia
                </h3>
                <p className="text-slate-400 mb-6 leading-relaxed">
                  Envía una imagen a la **GPU Katana** para procesamiento inmediato. Esta demo integra el stack completo de ingeniería.
                </p>
                <div className="space-y-4 bg-slate-900/50 p-6 rounded-xl border border-slate-700">
                   <div className="flex justify-between text-xs font-mono"><span className="text-slate-500 italic">BACKEND:</span> <span className="text-green-400">FASTAPI_PROD</span></div>
                   <div className="flex justify-between text-xs font-mono"><span className="text-slate-500 italic">RUNTIME:</span> <span className="text-green-400">DOCKER_CONTAINER</span></div>
                   <div className="flex justify-between text-xs font-mono"><span className="text-slate-500 italic">HARDWARE:</span> <span className="text-green-400">NVIDIA_GPU</span></div>
                </div>
              </div>
              
              <div className="lg:col-span-3">
                <IAAnalyzer />
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="py-12 text-center border-t border-slate-800 text-slate-600 text-xs font-mono uppercase tracking-widest">
        <p>© 2026 Rodrigo Oppe // AI Engineering Portfolio</p>
      </footer>
    </div>
  );
}

export default App;