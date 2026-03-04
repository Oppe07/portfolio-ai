const Experience = () => {
  const formation = [
    {
      role: "Docker & Containerization for AI",
      company: "Udemy / Especialización",
      date: "FEB 2026",
      desc: "Despliegue de microservicios, optimización de imágenes para cargas de trabajo de IA y gestión de contenedores con soporte GPU."
    },
    {
      role: "AI Engineer Specialized in Vision",
      company: "Portafolio Profesional",
      date: "EN PROGRESO",
      desc: "Desarrollo de pipelines de inferencia end-to-end utilizando FastAPI para la entrega de modelos de PyTorch y YOLO."
    }
  ];

  return (
    <div>
      <div className="flex items-center gap-4 mb-10">
        <h2 className="text-2xl font-bold uppercase tracking-tighter">Formación & Stack</h2>
        <div className="h-px bg-slate-800 flex-1"></div>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8">
        {formation.map((f, i) => (
          <div key={i} className="group p-6 bg-slate-800/20 border border-slate-800 rounded-2xl hover:bg-slate-800/40 transition-all">
            <span className="text-[10px] font-mono text-sky-500 tracking-[0.2em]">{f.date}</span>
            <h3 className="text-lg font-bold mt-1 group-hover:text-sky-400 transition-colors">{f.role}</h3>
            <p className="text-sm text-slate-500 mb-4">{f.company}</p>
            <p className="text-sm text-slate-400 leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;