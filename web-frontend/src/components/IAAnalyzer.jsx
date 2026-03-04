import { useState } from 'react';

const IAAnalyzer = () => {
  const [loading, setLoading] = useState(false);
  const [resultado, setResultado] = useState(null);
  const [originalPreview, setOriginalPreview] = useState(null); // Para mostrar la original

  const handleFileUpload = async (event) => {
    const archivo = event.target.files[0];
    if (!archivo) return;

    setResultado(null); // Limpiar resultado anterior
    setLoading(true);

    // 1. Mostrar preview de la original en el navegador
    const reader = new FileReader();
    reader.onloadend = () => {
      setOriginalPreview(reader.result);
    };
    reader.readAsDataURL(archivo);

    // 2. Preparar el envío al Backend
    const formData = new FormData();
    formData.append('file', archivo);

    try {
      const response = await fetch('http://127.0.0.1:8000/predict', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();
      setResultado(data);
    } catch (error) {
      console.error("Error:", error);
      alert("Error de conexión. ¿Está encendido el servidor FastAPI?");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-700 shadow-inner">
      {/* Botón de subida (estilo drag & drop) */}
      <div className="flex flex-col items-center justify-center border-2 border-dashed border-slate-700 rounded-xl p-6 hover:border-sky-500/50 transition-colors cursor-pointer relative mb-6">
        <input 
          type="file" 
          accept="image/*" 
          onChange={handleFileUpload}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
        />
        <p className="text-sm text-slate-400">Sube una foto de un cultivo</p>
      </div>

      {loading && (
        <div className="flex items-center justify-center gap-3 text-sky-400 font-mono text-xs mb-6 animate-pulse">
          <div className="w-4 h-4 border-2 border-sky-400 border-t-transparent rounded-full animate-spin"></div>
          ANALIZING_ON_GPU_KATANA...
        </div>
      )}

      {/* --- VISUALIZACIÓN DE RESULTADOS --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {originalPreview && (
          <div>
            <p className="text-xs font-mono text-slate-500 mb-2 uppercase">Original</p>
            <div className="rounded-lg overflow-hidden border border-slate-700">
              <img src={originalPreview} alt="Original" className="w-full h-auto" />
            </div>
          </div>
        )}

        {resultado && (
          <div>
            <p className="text-xs font-mono text-green-400 mb-2 uppercase tracking-widest italic animate-pulse">
              {">"} AI_OVERLAY_RESULT
            </p>
            <div className="rounded-lg overflow-hidden border border-green-500/30 shadow-[0_0_15px_rgba(74,222,128,0.1)]">
              <img src={resultado.overlay} alt="AI Overlay" className="w-full h-auto" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default IAAnalyzer;