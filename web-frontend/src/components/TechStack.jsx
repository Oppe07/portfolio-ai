const TechStack = () => {
  const stack = [
    { name: "Python", color: "text-yellow-500", bg: "bg-yellow-500/10" },
    { name: "PyTorch", color: "text-orange-500", bg: "bg-orange-500/10" },
    { name: "FastAPI", color: "text-emerald-500", bg: "bg-emerald-500/10" },
    { name: "Docker", color: "text-sky-500", bg: "bg-sky-500/10" },
    { name: "OpenCV", color: "text-white", bg: "bg-slate-500/10" },
    { name: "NVIDIA CUDA", color: "text-green-500", bg: "bg-green-500/10" },
    { name: "YOLOv8", color: "text-violet-500", bg: "bg-violet-500/10" },
    { name: "React", color: "text-cyan-400", bg: "bg-cyan-400/10" },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-3 mt-8 max-w-3xl mx-auto">
      {stack.map((tech) => (
        <div 
          key={tech.name}
          className={`px-4 py-2 rounded-full border border-slate-700/50 ${tech.bg} flex items-center gap-2 group hover:border-slate-500 transition-all duration-300`}
        >
          <div className={`w-1.5 h-1.5 rounded-full ${tech.color} shadow-[0_0_8px_currentColor] group-hover:scale-150 transition-transform`}></div>
          <span className="text-xs font-mono font-bold tracking-wider text-slate-300">
            {tech.name}
          </span>
        </div>
      ))}
    </div>
  );
};

export default TechStack;