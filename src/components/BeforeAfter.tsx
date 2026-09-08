/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { ArrowRightLeft, ZoomIn, X, Sparkles } from "lucide-react";

interface BeforeAfterItem {
  id: number;
  title: string;
  description: string;
  beforeNames: string[];
  afterNames: string[];
  beforeFallback: string;
  afterFallback: string;
  stylist: string;
}

const BEFORE_AFTER_DATA: BeforeAfterItem[] = [
  {
    id: 1,
    title: "Transformação 01",
    description: "Alongamento das espirais, redução do encolhimento e ativação de brilho espelhado com cachos ultra-definidos até as costas.",
    beforeNames: ["/antes1.jpg", "/1antes.jpg", "/images/antes1.jpg", "/images/1antes.jpg"],
    afterNames: ["/depois1.jpg", "/1depois.jpg", "/images/depois1.jpg", "/images/1depois.jpg"],
    beforeFallback: "https://images.unsplash.com/photo-1518887570146-0612132dd618?q=80&w=600",
    afterFallback: "https://images.unsplash.com/photo-1605497746444-ac9dbd39a685?q=80&w=600",
    stylist: "Matias Oliveira"
  },
  {
    id: 2,
    title: "Transformação 02",
    description: "Tratamento de nutrição e umectação profunda, desenhando cachos bem delineados e alinhados com acabamento sedoso.",
    beforeNames: ["/antes2.jpg", "/2antes.jpg", "/images/antes2.jpg", "/images/2antes.jpg"],
    afterNames: ["/depois2.jpg", "/2depois.jpg", "/images/depois2.jpg", "/images/2depois.jpg"],
    beforeFallback: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=600",
    afterFallback: "https://images.unsplash.com/photo-1595959183075-c1d0a1a1964d?q=80&w=600",
    stylist: "Iara Barbosa"
  },
  {
    id: 3,
    title: "Transformação 03",
    description: "Corte em camadas para dar balanço com finalização fitada, eliminando o frizz e destacando o comprimento em cascata.",
    beforeNames: ["/antes3.jpg", "/3antes.jpg", "/images/antes3.jpg", "/images/3antes.jpg"],
    afterNames: ["/depois3.jpg", "/3depois.jpg", "/images/depois3.jpg", "/images/3depois.jpg"],
    beforeFallback: "https://images.unsplash.com/photo-1582095133179-bfd08e2fc6b3?q=80&w=600",
    afterFallback: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=600",
    stylist: "Dandara Santos"
  },
  {
    id: 4,
    title: "Transformação 04",
    description: "Texturização e abertura da curvatura crespa 4C com tecnologia umectante, valorizando a densidade com definição incrível.",
    beforeNames: ["/antes4.jpg", "/4antes.jpg", "/images/antes4.jpg", "/images/4antes.jpg"],
    afterNames: ["/depois4.jpg", "/4depois.jpg", "/images/depois4.jpg", "/images/4depois.jpg"],
    beforeFallback: "https://images.unsplash.com/photo-1595959183075-c1d0a1a1964d?q=80&w=600",
    afterFallback: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?q=80&w=600",
    stylist: "Dandara Santos"
  },
  {
    id: 5,
    title: "Transformação 05",
    description: "Realce dos tons iluminados com reestruturação da fibra, conferindo balanço, maleabilidade e definição perfeita.",
    beforeNames: ["/antes5.jpg", "/5antes.jpg", "/images/antes5.jpg", "/images/5antes.jpg"],
    afterNames: ["/depois5.jpg", "/5depois.jpg", "/images/depois5.jpg", "/images/5depois.jpg"],
    beforeFallback: "https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=600",
    afterFallback: "https://images.unsplash.com/photo-1620331708837-5e8891515590?q=80&w=600",
    stylist: "Matias Oliveira"
  }
];

interface ModalInfo {
  item: BeforeAfterItem;
  view: "before" | "after";
}

export default function BeforeAfter() {
  const [imageStages, setImageStages] = useState<Record<string, number>>({});
  const [customImages, setCustomImages] = useState<Record<string, string>>({});
  const [activeModal, setActiveModal] = useState<ModalInfo | null>(null);

  // Load custom photos from localStorage if available
  useEffect(() => {
    try {
      const saved = localStorage.getItem("salao_custom_photos");
      if (saved) {
        setCustomImages(JSON.parse(saved));
      }
    } catch (e) {
      console.warn("Could not read localStorage for custom photos:", e);
    }
  }, []);

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveModal(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleImageError = (key: string) => {
    setImageStages(prev => {
      const current = prev[key] || 0;
      return { ...prev, [key]: current + 1 };
    });
  };

  const getImageSrc = (item: BeforeAfterItem, type: "before" | "after") => {
    const key = `${type}-${item.id}`;
    if (customImages[key]) {
      return customImages[key];
    }
    const stage = imageStages[key] || 0;
    const nameList = type === "before" ? item.beforeNames : item.afterNames;

    if (stage < nameList.length) {
      return nameList[stage];
    }
    return type === "before" ? item.beforeFallback : item.afterFallback;
  };

  return (
    <section id="antes-depois" className="bg-stone-950 py-10 border-t border-stone-850 relative overflow-hidden">
      {/* Decorative background blurs */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-amber-900/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-yellow-900/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-6">
          <span className="font-mono text-[10px] sm:text-xs font-bold text-amber-500 uppercase tracking-widest block mb-1">
            TRANSFORMAÇÕES REAIS • ANTES E DEPOIS
          </span>
          <h2 className="font-sans font-black text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight uppercase">
            Galeria de Transformação
          </h2>
          <div className="w-12 h-0.5 bg-yellow-500 mx-auto mt-2 rounded-full" />
          <p className="font-sans text-stone-300 text-xs sm:text-sm mt-3 leading-relaxed">
            Compare o estado inicial com os resultados surpreendentes de nossas clientes. Toque ou clique em qualquer foto para <span className="text-amber-400 font-semibold">ampliar e ver em tela cheia</span>.
          </p>
        </div>

        {/* Comparison Showcase Grid */}
        <div className="space-y-6 max-w-4xl mx-auto">
          {BEFORE_AFTER_DATA.map((item) => (
            <div 
              key={item.id}
              className="bg-stone-900/40 p-2.5 sm:p-4 rounded-2xl border border-stone-850 hover:border-amber-950/50 transition-all shadow-lg"
            >
              {/* Dual side-by-side images comparison layout */}
              <div className="grid grid-cols-2 gap-2 sm:gap-4 items-stretch relative">
                
                {/* Before Frame Card */}
                <div 
                  id={`card-before-${item.id}`}
                  onClick={() => setActiveModal({ item, view: "before" })}
                  className="relative rounded-xl overflow-hidden aspect-[3/4] bg-stone-950 border border-stone-800 group shadow-md flex flex-col justify-end cursor-pointer hover:border-stone-700 transition-all"
                  title="Clique para ampliar o Antes"
                >
                  <img
                    src={getImageSrc(item, "before")}
                    alt={`Antes - ${item.title}`}
                    referrerPolicy="no-referrer"
                    onError={() => handleImageError(`before-${item.id}`)}
                    className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Visual Badge indicator */}
                  <div className="absolute top-2 left-2 sm:top-3 sm:left-3 inline-flex items-center gap-1 sm:gap-1.5 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full bg-black/80 backdrop-blur-md border border-red-500/30 text-[8px] sm:text-[10px] font-bold text-red-400 uppercase tracking-widest pointer-events-none">
                    <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse" />
                    Antes
                  </div>

                  {/* Zoom hint on hover */}
                  <div className="absolute bottom-2 right-2 p-1.5 rounded-lg bg-black/70 text-stone-300 opacity-80 group-hover:opacity-100 group-hover:text-amber-400 group-hover:bg-black/90 transition-all pointer-events-none">
                    <ZoomIn className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* After Frame Card */}
                <div 
                  id={`card-after-${item.id}`}
                  onClick={() => setActiveModal({ item, view: "after" })}
                  className="relative rounded-xl overflow-hidden aspect-[3/4] bg-stone-950 border border-stone-800 group shadow-md flex flex-col justify-end cursor-pointer hover:border-stone-700 transition-all"
                  title="Clique para ampliar o Depois"
                >
                  <img
                    src={getImageSrc(item, "after")}
                    alt={`Depois - ${item.title}`}
                    referrerPolicy="no-referrer"
                    onError={() => handleImageError(`after-${item.id}`)}
                    className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent pointer-events-none" />

                  {/* Visual Badge indicator */}
                  <div className="absolute top-2 left-2 sm:top-3 sm:left-3 inline-flex items-center gap-1 sm:gap-1.5 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full bg-black/80 backdrop-blur-md border border-emerald-500/30 text-[8px] sm:text-[10px] font-bold text-emerald-400 uppercase tracking-widest pointer-events-none">
                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                    Depois
                  </div>

                  {/* Zoom hint on hover */}
                  <div className="absolute bottom-2 right-2 p-1.5 rounded-lg bg-black/70 text-stone-300 opacity-80 group-hover:opacity-100 group-hover:text-amber-400 group-hover:bg-black/90 transition-all pointer-events-none">
                    <ZoomIn className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Separator / arrow layout */}
                <div className="flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-stone-900 border border-amber-500/40 text-yellow-500 items-center justify-center shadow-xl pointer-events-none">
                  <ArrowRightLeft className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                </div>

              </div>

              {/* Sub-text description */}
              <div className="mt-3 px-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-4 text-left">
                <p className="font-sans text-[11px] sm:text-xs text-stone-300 leading-snug">
                  <strong className="text-amber-400 font-semibold mr-1">{item.title}:</strong>
                  {item.description}
                </p>
                <span className="font-mono text-[9px] sm:text-[10px] text-stone-500 whitespace-nowrap">
                  Especialista: {item.stylist}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Zoom Modal */}
      {activeModal && (
        <div 
          id="lightbox-modal"
          onClick={() => setActiveModal(null)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 transition-opacity"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-xl w-full flex flex-col items-center justify-center max-h-[96vh]"
          >
            {/* Close Button */}
            <button
              id="btn-close-lightbox"
              onClick={() => setActiveModal(null)}
              className="absolute -top-11 right-0 sm:top-2 sm:right-2 z-50 p-2 rounded-full bg-stone-900/90 text-stone-300 hover:text-white hover:bg-stone-800 transition-colors border border-stone-700 cursor-pointer shadow-lg"
              title="Fechar"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Toggle Selector between Antes & Depois */}
            <div className="flex items-center gap-1.5 bg-stone-900/95 p-1 rounded-full border border-stone-800 mb-2.5 shadow-md">
              <button
                onClick={() => setActiveModal(prev => prev ? { ...prev, view: "before" } : null)}
                className={`px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  activeModal.view === "before"
                    ? "bg-red-500/25 text-red-300 border border-red-500/40 shadow"
                    : "text-stone-400 hover:text-stone-200"
                }`}
              >
                Antes
              </button>
              <button
                onClick={() => setActiveModal(prev => prev ? { ...prev, view: "after" } : null)}
                className={`px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  activeModal.view === "after"
                    ? "bg-emerald-500/25 text-emerald-300 border border-emerald-500/40 shadow"
                    : "text-stone-400 hover:text-stone-200"
                }`}
              >
                Depois
              </button>
            </div>

            {/* Enlarged Image */}
            <div className="relative rounded-2xl overflow-hidden bg-stone-950 border border-stone-800 shadow-2xl max-h-[74vh] sm:max-h-[78vh] flex items-center justify-center">
              <img
                src={getImageSrc(activeModal.item, activeModal.view)}
                alt={`${activeModal.view === "before" ? "Antes" : "Depois"} - ${activeModal.item.title}`}
                referrerPolicy="no-referrer"
                className="max-h-[74vh] sm:max-h-[78vh] w-auto max-w-full object-contain rounded-xl"
              />
              <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/80 backdrop-blur-md border border-stone-700 text-xs font-bold uppercase tracking-widest">
                <span className={`w-2 h-2 rounded-full ${activeModal.view === "before" ? "bg-red-500" : "bg-emerald-500"}`} />
                <span className={activeModal.view === "before" ? "text-red-400" : "text-emerald-400"}>
                  {activeModal.view === "before" ? "Antes" : "Depois"}
                </span>
              </div>
            </div>

            {/* Caption in Modal */}
            <div className="mt-2.5 text-center px-4 max-w-lg">
              <h4 className="font-sans font-bold text-stone-100 text-sm sm:text-base">
                {activeModal.item.title} — {activeModal.item.stylist}
              </h4>
              <p className="font-sans text-xs text-stone-400 mt-0.5 leading-snug">
                {activeModal.item.description}
              </p>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}

