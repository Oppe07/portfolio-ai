import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-8 h-16 flex items-center justify-between">
        {/* Logo / Nombre */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-sky-500 rounded-lg flex items-center justify-center font-bold text-white shadow-lg shadow-sky-500/20">
            R
          </div>
          <span className="font-bold text-white tracking-tight hidden sm:block">
            RODRIGO <span className="text-sky-500">OPPE</span>
          </span>
        </div>

        {/* Links de Navegación */}
        <div className="flex gap-8 text-sm font-medium text-slate-400">
          <a href="#" className="hover:text-white transition-colors">Inicio</a>
          <a href="#proyectos" className="hover:text-white transition-colors">Proyectos</a>
          <a href="#stack" className="hover:text-white transition-colors">Stack</a>
          <a 
            href="mailto:tu-correo@ejemplo.com" 
            className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-sky-400 rounded-full border border-slate-700 transition-all"
          >
            Contacto
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;