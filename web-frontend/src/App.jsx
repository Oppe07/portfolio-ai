import ProjectCard from './components/ProjectCard';

function App() {
  const handleDemoClick = () => {
    alert("Próximamente: Conexión con contenedor Docker de Navegación de Cultivos");
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100">
      
      {/* SECCIÓN 1: HERO / PRESENTACIÓN */}
      <section className="py-20 px-8 bg-gradient-to-b from-slate-800 to-slate-900 border-b border-slate-700/50">
        <div className="max-w-4xl mx-auto text-center">
          <span className="px-3 py-1 bg-sky-500/10 text-sky-400 text-xs font-mono rounded-full border border-sky-500/20 mb-6 inline-block">
            AVAILABLE_FOR_AI_PROJECTS
          </span>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 tracking-tight">
            Rodrigo <span className="text-sky-500">Oppe</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Ingeniero especializado en <span className="text-white font-semibold">Computer Vision</span> y despliegue de modelos productivos con <span className="text-white font-semibold">Docker</span>.
          </p>
          
          <div className="flex justify-center gap-4 mt-10">
            <div className="flex items-center gap-2 px-4 py-2 bg-slate-800 rounded-lg border border-slate-700">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <span className="text-sm font-mono">FastAPI Expert</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-slate-800 rounded-lg border border-slate-700">
              <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
              <span className="text-sm font-mono">PyTorch Dev</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 2: GALERÍA DE PROYECTOS */}
      <main className="py-20 px-8 max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl font-bold">Proyectos Seleccionados</h2>
            <p className="text-slate-500 mt-2">Soluciones de IA listas para producción</p>
          </div>
          <div className="h-[1px] flex-1 bg-slate-800 ml-8 hidden md:block"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Tu proyecto de navegación */}
          <ProjectCard 
            title="Navegación de Cultivos"
            description="Segmentación semántica en tiempo real para guiado autónomo de maquinaria agrícola. Optimizado para correr en contenedores Docker."
            tags={["PyTorch", "OpenCV", "FastAPI", "Docker"]}
            githubLink="#"
            demoLink={handleDemoClick}
            image="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=400" 
          />

          {/* Puedes añadir un segundo proyecto vacío para ver cómo se ve el grid */}
          <ProjectCard 
            title="Detección de Anomalías"
            description="Modelo de clasificación para control de calidad industrial. Integración continua con GitHub Actions."
            tags={["Deep Learning", "Python", "CI/CD"]}
            githubLink="#"
            demoLink={() => alert("Próximamente")}
            image="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=400"
          />

        </div>
      </main>

      {/* FOOTER */}
      <footer className="py-10 text-center border-t border-slate-800 text-slate-500 text-sm">
        <p>© 2026 Rodrigo Oppe - Desarrollado con el stack de AI Engineer</p>
      </footer>
    </div>
  );
}

export default App;