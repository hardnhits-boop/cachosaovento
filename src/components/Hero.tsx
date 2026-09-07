/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, ArrowRight } from "lucide-react";
import { STORE_UNITS } from "../types";

interface HeroProps {
  onNavigate: (sectionId: string) => void;
  onSelectService: (serviceName: string) => void;
  selectedUnit?: "anchieta" | "petropolis";
}

const WhatsAppIconLeft = () => (
  <svg className="w-4 h-4 text-stone-950 fill-current" viewBox="0 0 24 24" fill="currentColor">
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.62.962 3.238 1.484 5.352 1.486 5.424 0 9.835-4.407 9.839-9.833.002-2.63-1.011-5.1-2.853-6.945C17.09 1.957 14.63 1.006 12 1.006c-5.42 0-9.83 4.406-9.834 9.835-.002 2.158.56 3.791 1.543 5.405L2.68 21.415l5.228-1.371zM17.15 14.54c-.282-.143-1.67-.824-1.929-.918-.258-.093-.446-.142-.635.143-.188.285-.73.919-.893 1.1-.164.184-.327.208-.61.066-.282-.143-1.192-.44-2.271-1.402-.839-.748-1.405-1.67-1.57-1.954-.163-.283-.018-.437.124-.577.127-.126.283-.329.424-.492.143-.165.19-.283.284-.472.093-.19.047-.354-.024-.493-.07-.143-.635-1.53-.87-2.083-.228-.547-.48-.471-.659-.48l-.56-.01c-.198 0-.52.074-.792.372-.272.298-1.04 1.013-1.04 2.471 0 1.457 1.06 2.864 1.208 3.061.149.198 2.086 3.186 5.05 4.47.705.305 1.256.488 1.685.625.708.226 1.353.194 1.862.118.568-.085 1.67-.682 1.905-1.34.235-.658.235-1.223.164-1.34-.07-.117-.258-.19-.54-.332z" />
  </svg>
);

export default function Hero({ onNavigate, onSelectService, selectedUnit = "anchieta" }: HeroProps) {
  const activeStore = STORE_UNITS.find(u => u.id === selectedUnit) || STORE_UNITS[0];
  const [activeImageIdx, setActiveImageIdx] = useState(0);
  const heroImages = [
    "https://images.unsplash.com/photo-1582095133179-bfd08e2fc6b3?q=80&w=1200",
    "https://images.unsplash.com/photo-1605497746444-ac9dbd39a685?q=80&w=1200",
    "https://images.unsplash.com/photo-1595959183075-c1d0a1a1964d?q=80&w=1200",
    "https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=1200"
  ];

  const handleDirectWhatsApp = () => {
    const text = `Olá! Gostaria de agendar um horário no Salão Cachos ao Vento (${activeStore.name}).`;
    window.open(`https://wa.me/${activeStore.whatsappNumber}?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImageIdx((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <section id="inicio" className="relative min-h-screen bg-stone-950 pt-24 pb-16 overflow-hidden flex flex-col justify-start">
      {/* Background radial soft light to make it incredibly elegant */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-amber-900/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-yellow-900/5 rounded-full blur-[100px] pointer-events-none" />
      
      {/* TOP: Banner Section (Intro & Main Cover Image Side-by-Side) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column Text */}
        <div className="lg:col-span-6 flex flex-col justify-center text-left">
          {/* Accent Header Badge */}
          <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-amber-950/75 border border-amber-900/40 w-max mb-6">
            <Sparkles className="w-4 h-4 text-amber-500" />
            <span className="font-mono text-xs font-semibold tracking-widest text-amber-400 uppercase">
              Especialistas em Cabelo Afro
            </span>
          </div>

          <h1 className="font-sans font-black text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.05] text-white">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-400">
              Salão Cachos ao Vento
            </span>
          </h1>
          
          <p className="font-sans text-stone-200 text-base md:text-lg mt-6 leading-relaxed max-w-lg font-medium">
            Salão Cachos ao Vento, especializado em Afro e Cacheados. Resgatamos e exaltamos a potência de cabelos crespos, cacheados e ondulados no Rio de Janeiro através de técnicas limpas e acolhimento focado na sua saúde capilar.
          </p>

          {/* Buttons CTA */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button
              onClick={handleDirectWhatsApp}
              className="px-8 py-4 rounded-full bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-stone-950 font-bold uppercase tracking-widest text-xs shadow-xl shadow-emerald-950/40 transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer flex items-center gap-2.5 group"
              title={`Chamar no WhatsApp (${activeStore.phone})`}
            >
              <WhatsAppIconLeft />
              Agendar no WhatsApp
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => onNavigate("servicos")}
              className="px-6 py-4 rounded-full border border-stone-800 hover:bg-stone-900/50 text-stone-200 hover:text-white transition-colors uppercase tracking-widest text-xs font-bold cursor-pointer"
            >
              Ver MENU
            </button>
          </div>
        </div>

        {/* Right Column - Sliding Banner Image Showcase */}
        <div className="lg:col-span-6 relative flex justify-center items-center">
          {/* Frame decoration */}
          <div className="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-amber-600/20 to-yellow-500/10 blur-xl opacity-75 pointer-events-none" />
          
          <div className="relative w-full max-w-lg aspect-[4/5] sm:aspect-[4/3] lg:aspect-[4/5] rounded-2xl overflow-hidden border border-amber-900/30 bg-stone-900/50 shadow-2xl flex flex-col justify-end">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeImageIdx}
                src={heroImages[activeImageIdx]}
                alt="Banner Cachos ao Vento"
                referrerPolicy="no-referrer"
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0 w-full h-full object-cover object-center"
              />
            </AnimatePresence>

            {/* Dark gradient overlay for modern rich typography overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent" />

            {/* Logo Tag */}
            <div className="absolute top-4 right-4 bg-stone-900/95 border border-amber-500/30 backdrop-blur-md text-yellow-500 font-mono text-[10px] font-bold uppercase px-3 py-1 rounded-full shadow-lg flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-yellow-500 animate-pulse" />
              Cachos ao Vento RJ
            </div>

            {/* Fixed Caption inside the Image Frame */}
            <div className="relative p-6 sm:p-8 text-left z-10">
              <p className="font-mono text-xs uppercase tracking-widest text-amber-500 font-bold">
                Arte, Cuidado & Identidade
              </p>
              <h3 className="font-sans font-black text-2xl sm:text-3xl text-white mt-1 leading-none uppercase">
                Tratamento Humanizado
              </h3>
              <p className="font-sans text-xs sm:text-sm text-stone-300 mt-2.5 leading-relaxed">
                Cada cacho é único. Nossa missão é destacar a curvatura de seus fios com a saúde e o respeito que eles merecem.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
