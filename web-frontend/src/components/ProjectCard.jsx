import React from 'react';

const ProjectCard = ({ title, description, tags, githubLink, demoLink, image }) => {
  return (
    <div className="bg-slate-800 border border-slate-700 rounded-xl overflow-hidden hover:border-sky-500/50 transition-all group">
      {/* Contenedor de Imagen / Preview */}
      <div className="h-48 bg-slate-900 overflow-hidden relative">
        <img 
          src={image || "https://via.placeholder.com/400x225?text=AI+Model+Preview"} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
        />
        <div className="absolute top-2 right-2">
          <span className="bg-slate-900/80 text-sky-400 text-[10px] font-mono px-2 py-1 rounded border border-sky-500/30 backdrop-blur-sm">
            DOCKER_READY
          </span>
        </div>
      </div>

      {/* Contenido Técnico */}
      <div className="p-5">
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-slate-400 text-sm leading-relaxed mb-4">
          {description}
        </p>

        {/* Tags de Tecnologías */}
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag, index) => (
            <span key={index} className="text-[11px] font-mono bg-slate-700 text-slate-300 px-2 py-0.5 rounded">
              #{tag}
            </span>
          ))}
        </div>

        {/* Botones de Acción */}
        <div className="flex gap-3">
          <a 
            href={githubLink}
            className="flex-1 text-center py-2 bg-slate-700 hover:bg-slate-600 text-white text-sm font-medium rounded-lg transition-colors"
          >
            Code
          </a>
          <button 
            onClick={demoLink}
            className="flex-[2] py-2 bg-sky-600 hover:bg-sky-500 text-white text-sm font-medium rounded-lg transition-colors shadow-lg shadow-sky-900/20"
          >
            Probar IA
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;