/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion } from "motion/react";
import { Sparkles, Eye, Scissors, Heart, ArrowRightLeft, Image as ImageIcon } from "lucide-react";

interface BeforeAfterItem {
  id: number;
  title: string;
  description: string;
  beforePath: string;
  afterPath: string;
  beforeFallback: string;
  afterFallback: string;
  stylist: string;
}

const BEFORE_AFTER_DATA: BeforeAfterItem[] = [
  {
    id: 1,
    title: "Transformação 01",
    description: "Recuperação do brilho natural e abertura das espirais com redução drástica do encolhimento e volume ultra-definido.",
    beforePath: "/images/1antes.jpg",
    afterPath: "/images/1depois.jpg",
    beforeFallback: "https://images.unsplash.com/photo-1518887570146-0612132dd618?q=80&w=500", // Dry/frizzy hair texture representation
    afterFallback: "https://images.unsplash.com/photo-1605497746444-ac9dbd39a685?q=80&w=500",  // Beautiful defined curls
    stylist: "Matias Oliveira"
  },
  {
    id: 2,
    title: "Transformação 02",
    description: "Processamento sutil com química verde focado no alinhamento suave e maciez absoluta do crespo tipo 4C.",
    beforePath: "/images/2antes.jpg",
    afterPath: "/images/2depois.jpg",
    beforeFallback: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=500", // Before treatment texture
    afterFallback: "https://images.unsplash.com/photo-1595959183075-c1d0a1a1964d?q=80&w=500", // After treatment shiny structure
    stylist: "Iara Barbosa"
  },
  {
    id: 3,
    title: "Transformação 03",
    description: "Retirada do peso cumulativo de pontas duplas para criar formato harmônico e valorizar o contorno da coroa.",
    beforePath: "/images/3antes.jpg",
    afterPath: "/images/3depois.jpg",
    beforeFallback: "https://images.unsplash.com/photo-1582095133179-bfd08e2fc6b3?q=80&w=500", // Wild unstructured curls
    afterFallback: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=500", // Visually high shape hair cut
    stylist: "Dandara Santos"
  },
  {
    id: 4,
    title: "Transformação 04",
    description: "Pontos de luz dourados orgânicos aplicados de forma degradê sem alterar a curvatura ou quebrar a elasticidade capilar.",
    beforePath: "/images/4antes.jpg",
    afterPath: "/images/4depois.jpg",
    beforeFallback: "https://images.unsplash.com/photo-1595959183075-c1d0a1a1964d?q=80&w=500", // Before coloring treatment
    afterFallback: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?q=80&w=500", // Stunning curly highlighted hair
    stylist: "Dandara Santos"
  },
  {
    id: 5,
    title: "Transformação 05",
    description: "Descoloração protegida com plex reconstrutor seguida de pigmentação expressiva magenta ultra vibrante.",
    beforePath: "/images/5antes.jpg",
    afterPath: "/images/5depois.jpg",
    beforeFallback: "https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=500", // Original treatment hair
    afterFallback: "https://images.unsplash.com/photo-1620331708837-5e8891515590?q=80&w=500", // Brilliant pink/crimson curly hair
    stylist: "Matias Oliveira"
  }
];

export default function BeforeAfter() {
  const [loadedImages, setLoadedImages] = useState<Record<string, boolean>>({});

  const handleImageError = (id: string) => {
    // If the local image is not found (404), fallback to our curated Unsplash asset URL
    setLoadedImages(prev => ({ ...prev, [id]: true }));
  };

  return (
    <section id="antes-depois" className="bg-stone-950 py-10 border-t border-stone-850 relative overflow-hidden">
      {/* Decorative Lights */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-amber-900/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-yellow-900/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-5">
          <span className="font-mono text-[10px] sm:text-xs font-bold text-amber-500 uppercase tracking-widest block mb-1">
            TRANSFORMAÇÕES REAIS • ANTES E DEPOIS
          </span>
          <h2 className="font-sans font-black text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight uppercase">
            Galeria de Transformação
          </h2>
          <div className="w-12 h-0.5 bg-yellow-500 mx-auto mt-2 rounded-full" />
          <p className="font-sans text-stone-300 text-xs sm:text-sm mt-3 leading-relaxed">
            Compare o estado inicial com os resultados surpreendentes de nossas clientes. Colocamos o <span className="text-red-400 font-bold">Antes</span> lado a lado com o <span className="text-emerald-400 font-bold">Depois</span> de cada tratamento para evidenciar a saúde, o brilho e a curvatura real dos fios.
          </p>
        </div>

        {/* Comparison Showcase Grid */}
        <div className="space-y-6 max-w-5xl mx-auto">
          {BEFORE_AFTER_DATA.map((item, idx) => (
            <div 
              key={item.id}
              className="bg-stone-900/40 p-2 sm:p-5 rounded-2xl border border-stone-850 hover:border-amber-950/50 transition-all shadow-xl"
            >
              {/* Dual side-by-side images comparison layout */}
              <div className="grid grid-cols-2 gap-2 sm:gap-4 items-stretch relative">
                
                {/* Before Frame Card */}
                <div className="relative rounded-xl overflow-hidden aspect-[4/3] bg-stone-950 border border-stone-800 group shadow-md flex flex-col justify-end">
                  <img
                    src={loadedImages[`b-${item.id}`] ? item.beforeFallback : item.beforePath}
                    alt={`Antes - Item ${item.id}`}
                    referrerPolicy="no-referrer"
                    onError={() => handleImageError(`b-${item.id}`)}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-102"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/20 to-transparent pointer-events-none" />
                  
                  {/* Visual Badge indicator */}
                  <div className="absolute top-2 left-2 sm:top-4 sm:left-4 inline-flex items-center gap-1 sm:gap-1.5 px-2 py-0.5 sm:px-3 sm:py-1 rounded-full bg-black/80 backdrop-blur-md border border-red-500/30 text-[8px] sm:text-[10px] font-bold text-red-400 uppercase tracking-widest">
                    <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse" />
                    Antes
                  </div>
                </div>

                {/* After Frame Card */}
                <div className="relative rounded-xl overflow-hidden aspect-[4/3] bg-stone-950 border border-stone-800 group shadow-md flex flex-col justify-end">
                  <img
                    src={loadedImages[`a-${item.id}`] ? item.afterFallback : item.afterPath}
                    alt={`Depois - Item ${item.id}`}
                    referrerPolicy="no-referrer"
                    onError={() => handleImageError(`a-${item.id}`)}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-102"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/20 to-transparent pointer-events-none" />

                  {/* Visual Badge indicator */}
                  <div className="absolute top-2 left-2 sm:top-4 sm:left-4 inline-flex items-center gap-1 sm:gap-1.5 px-2 py-0.5 sm:px-3 sm:py-1 rounded-full bg-black/80 backdrop-blur-md border border-emerald-500/30 text-[8px] sm:text-[10px] font-bold text-emerald-400 uppercase tracking-widest">
                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                    Depois
                  </div>
                </div>

                {/* Separator / arrow layout for widescreen and mobile styling */}
                <div className="flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-6 h-6 sm:w-9 sm:h-9 rounded-full bg-stone-900 border border-amber-500/40 text-yellow-500 items-center justify-center shadow-xl">
                  <ArrowRightLeft className="w-3 h-3 sm:w-4 sm:h-4" />
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
