/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { SERVICES, STORE_UNITS } from "../types";
import { MessageSquare } from "lucide-react";

interface GalleryProps {
  onSelectService: (serviceName: string) => void;
  onNavigate: (sectionId: string) => void;
  selectedUnit?: "anchieta" | "petropolis";
}

export default function Gallery({ onSelectService, onNavigate, selectedUnit = "anchieta" }: GalleryProps) {
  const activeStore = STORE_UNITS.find(u => u.id === selectedUnit) || STORE_UNITS[0];
  const otherStore = STORE_UNITS.find(u => u.id !== activeStore.id) || STORE_UNITS[1];

  const handleServiceClick = (serviceName: string) => {
    // Exact Portuguese pre-filled message layout with explicit unit:
    const text = `Olá! Quero marcar para ser atendido no serviço "${serviceName}" na ${activeStore.name}.`;
    const waUrl = `https://wa.me/${activeStore.whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(waUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="servicos" className="bg-stone-900 py-10 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-6">
          <span className="font-mono text-[10px] sm:text-xs font-bold text-amber-500 uppercase tracking-widest block mb-1">
            Menu Técnico & Cuidados
          </span>
          <h2 className="font-sans font-black text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight uppercase">
            Nossos Serviços
          </h2>
          <div className="w-12 h-0.5 bg-yellow-500 mx-auto mt-2 rounded-full" />
        </div>

        {/* Text-Based Interactive Service Menu List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              onClick={() => handleServiceClick(service.name)}
              className="bg-stone-950/60 hover:bg-stone-950 p-4 rounded-xl border border-stone-850 hover:border-amber-500/40 transition-all duration-300 flex flex-col justify-between items-start text-left cursor-pointer group shadow-sm"
            >
              <div className="w-full">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-sans font-extrabold text-sm sm:text-base text-stone-100 uppercase tracking-wide group-hover:text-amber-500 transition-colors">
                    {service.name}
                  </h3>
                  <div className="p-1 px-1.5 rounded bg-amber-950/45 border border-amber-900/30 text-amber-500 group-hover:bg-amber-600 group-hover:text-stone-950 transition-colors flex-shrink-0">
                    <MessageSquare className="w-3 h-3" />
                  </div>
                </div>
                <p className="font-sans text-xs text-stone-400 leading-normal mt-1">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Direct WhatsApp Action Buttons with explicit store units */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={() => {
              const text = `Olá! Quero agendar um atendimento no Salão Cachos ao Vento (${activeStore.name}).`;
              const waUrl = `https://wa.me/${activeStore.whatsappNumber}?text=${encodeURIComponent(text)}`;
              window.open(waUrl, "_blank", "noopener,noreferrer");
            }}
            className="px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-stone-950 font-sans font-black text-xs uppercase tracking-wider transition-all shadow-md cursor-pointer flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98]"
            title={`Chamar no WhatsApp da ${activeStore.name}`}
          >
            <span>WhatsApp {activeStore.name}</span>
            <span className="font-mono text-[11px] font-bold opacity-90">({activeStore.phone})</span>
          </button>

          {otherStore && (
            <button
              onClick={() => {
                const text = `Olá! Quero agendar um atendimento no Salão Cachos ao Vento (${otherStore.name}).`;
                const waUrl = `https://wa.me/${otherStore.whatsappNumber}?text=${encodeURIComponent(text)}`;
                window.open(waUrl, "_blank", "noopener,noreferrer");
              }}
              className="px-5 py-3.5 rounded-xl bg-stone-950 border border-emerald-500/40 hover:border-emerald-400 text-emerald-400 hover:text-white font-sans font-black text-xs uppercase tracking-wider transition-all shadow-md cursor-pointer flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98]"
              title={`Chamar no WhatsApp da ${otherStore.name}`}
            >
              <span>WhatsApp {otherStore.name}</span>
              <span className="font-mono text-[11px] font-bold opacity-85">({otherStore.phone})</span>
            </button>
          )}
        </div>

      </div>
    </section>
  );
}
