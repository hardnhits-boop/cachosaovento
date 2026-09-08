/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { MapPin, Navigation, Map as MapIcon, Compass, Footprints, Train, Car } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { STORE_UNITS } from "../types";

interface MapProps {
  selectedUnit: "anchieta" | "petropolis";
  onUnitChange: (unit: "anchieta" | "petropolis") => void;
}

export default function Map({ selectedUnit, onUnitChange }: MapProps) {
  const activeStore = STORE_UNITS.find(u => u.id === selectedUnit) || STORE_UNITS[0];

  const handleOpenGoogleRoute = () => {
    window.open(activeStore.mapsUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="localizacao" className="bg-stone-900 py-12 border-t-2 border-stone-800 relative overflow-hidden">
      {/* Golden spotlight backdrop blur */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-amber-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 relative">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-950 border border-amber-500/40 text-[10px] font-bold text-yellow-500 uppercase tracking-widest mb-3 shadow-md">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
            Nossas Unidades
          </div>
          
          <h2 className="font-sans font-black text-3xl sm:text-4xl text-white tracking-tight leading-none uppercase">
            Como Chegar
          </h2>
          <div className="w-16 h-1 bg-yellow-500 mx-auto mt-3 rounded-full shadow" />
        </div>

        {/* Centralized Unit Selector */}
        <div className="flex justify-center mb-10">
          <div className="bg-stone-950 border border-stone-800 p-1.5 rounded-2xl flex items-center gap-1.5 shadow-xl">
            {STORE_UNITS.map((unit) => (
              <button
                key={unit.id}
                onClick={() => onUnitChange(unit.id as "anchieta" | "petropolis")}
                className={`px-6 py-2.5 rounded-xl font-sans font-black text-xs uppercase tracking-wider transition-all cursor-pointer ${
                  selectedUnit === unit.id
                    ? "bg-amber-600 text-stone-950 shadow-md shadow-amber-950/40"
                    : "text-stone-400 hover:text-stone-200 bg-transparent"
                }`}
              >
                {unit.id === "anchieta" ? "Anchieta (Rio)" : "Petrópolis"}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-6xl mx-auto">
          
          {/* Left Column: Coordinates & Address details */}
          <div className="lg:col-span-5 flex flex-col justify-center text-left">
            <div className="bg-stone-950 p-6 sm:p-8 rounded-3xl border border-stone-800/80 shadow-2xl relative space-y-5">
              
              <div className="flex items-center space-x-2 text-yellow-500">
                <MapPin className="w-5 h-5 text-yellow-400" />
                <span className="font-mono text-xs font-bold uppercase tracking-widest">{activeStore.name}</span>
              </div>
              
              <div>
                <h3 className="font-sans font-black text-xl sm:text-2xl text-stone-100">
                  {activeStore.address}
                </h3>
                <p className="font-sans text-xs sm:text-sm text-stone-300 mt-2 leading-relaxed">
                  {activeStore.addressDetail} <br />
                  <span className="text-amber-500/90 font-mono text-[11px] block mt-1">CEP: {activeStore.cep}</span>
                </p>
              </div>

              <div className="pt-4 border-t border-stone-900 flex flex-col gap-2.5">
                <div className="flex items-center justify-between text-xs font-mono text-stone-400">
                  <span>WhatsApp {activeStore.name}:</span>
                  <a 
                    href={`https://wa.me/${activeStore.whatsappNumber}?text=${encodeURIComponent(`Olá! Gostaria de falar com o Salão Cachos ao Vento (${activeStore.name}).`)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="text-emerald-400 hover:text-emerald-300 font-bold hover:underline"
                    title={`Chamar WhatsApp da ${activeStore.name}`}
                  >
                    {activeStore.phone}
                  </a>
                </div>
                <div className="flex items-center justify-between text-xs font-mono text-stone-400">
                  <span>Estrutura:</span>
                  <span className="text-emerald-400 font-bold">Ar Condicionado Climatizado ❄️</span>
                </div>
              </div>

              <button
                onClick={handleOpenGoogleRoute}
                className="w-full py-3.5 rounded-xl bg-amber-600 hover:bg-amber-500 text-stone-950 font-bold uppercase tracking-widest text-xs transition-all shadow-md cursor-pointer flex items-center justify-center gap-2"
              >
                <Navigation className="w-4 h-4" />
                Abrir no Google Maps
              </button>

            </div>
          </div>

          {/* Right Column: Interactive Google Maps Portal */}
          <div className="lg:col-span-7 h-full min-h-[350px]">
            <div className="relative w-full h-full min-h-[350px] rounded-3xl overflow-hidden border border-stone-800 bg-stone-950 shadow-2xl">
              <iframe
                title={`Mapa - ${activeStore.name}`}
                src={`https://maps.google.com/maps?q=${encodeURIComponent(activeStore.address + ", " + activeStore.city)}&t=&z=16&ie=UTF8&iwloc=B&output=embed`}
                className="w-full h-full min-h-[350px] border-0 select-none pointer-events-auto"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                style={{ filter: "contrast(1.05) brightness(0.9)" }}
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
