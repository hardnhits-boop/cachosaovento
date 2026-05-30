/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Sparkles, Phone, Mail, MapPin, Clock, Instagram, Send, Heart } from "lucide-react";
import { STORE_UNITS } from "../types";

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  selectedUnit: "anchieta" | "petropolis";
}

export default function Footer({ onNavigate, selectedUnit }: FooterProps) {
  const currentYear = new Date().getFullYear();
  const activeStore = STORE_UNITS.find(u => u.id === selectedUnit) || STORE_UNITS[0];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
  };

  return (
    <footer className="bg-stone-950 border-t border-stone-900 text-stone-100 pt-16 pb-8 relative z-10 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Column 1: Brand & Commitment */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3 cursor-pointer" onClick={() => handleLinkClick("inicio")}>
              <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-amber-700 to-yellow-500 flex items-center justify-center text-stone-950 font-bold text-sm">
                👑
              </div>
              <div>
                <span className="font-sans font-black text-base tracking-widest text-amber-500 uppercase block">
                  Salão Cachos ao Vento
                </span>
                <span className="font-mono text-[10px] tracking-wider text-stone-500 uppercase block">
                  Especializado em Afro e Cacheados
                </span>
              </div>
            </div>
            
            <p className="font-sans text-xs sm:text-sm text-stone-400 leading-relaxed">
              Resgatando a ancestralidade e elevando o poder dos seus fios. Especialistas apaixonados em relaxamento, soltura de cachos, corte a seco, hidratação nutritiva e cores fantasia no Rio de Janeiro.
            </p>

            <div className="flex space-x-3 pt-2">
              <a 
                href="https://www.instagram.com/cachosaoventorj?igsh=a2htNndpeGo3d3Bn" 
                target="_blank" 
                rel="noreferrer" 
                className="w-8 h-8 rounded-full bg-stone-900 border border-stone-800 flex items-center justify-center hover:bg-stone-850 hover:border-amber-900 text-stone-400 hover:text-yellow-400 transition-colors cursor-pointer"
                title="@cachosaoventorj"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a 
                href={`https://wa.me/${activeStore.whatsappNumber}`} 
                target="_blank" 
                rel="noreferrer" 
                className="w-8 h-8 rounded-full bg-stone-900 border border-stone-800 flex items-center justify-center hover:bg-stone-850 hover:border-amber-900 text-stone-400 hover:text-yellow-400 transition-colors cursor-pointer"
              >
                <Send className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-sans font-bold text-stone-200 text-sm tracking-widest uppercase mb-4 flex items-center gap-2">
              <span className="w-1 h-4 bg-amber-500 rounded" />
              Mapa do Site
            </h4>
            <div className="grid grid-cols-1 gap-2.5">
              {[
                { id: "inicio", label: "Início" },
                { id: "servicos", label: "Nossos Serviços" },
                { id: "galeria-resultados", label: "Galeria de Fotos" },
                { id: "agendamento", label: "Agendamento WhatsApp" },
                { id: "localizacao", label: `Endereço (${activeStore.id === "anchieta" ? "Anchieta" : "Petrópolis"})` }
              ].map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className="text-left font-sans text-xs sm:text-sm text-stone-400 hover:text-yellow-400 cursor-pointer transition-colors block"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Column 3: Contact & Hours */}
          <div className="space-y-4">
            <h4 className="font-sans font-bold text-stone-200 text-sm tracking-widest uppercase mb-4 flex items-center gap-2">
              <span className="w-1 h-4 bg-amber-500 rounded" />
              Atendimento
            </h4>
            
            <div className="space-y-3 font-sans text-xs sm:text-sm text-stone-400">
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-stone-300 block">Horário de Funcionamento:</span>
                  <span>Terça a Sábado: 09:00h às 19:00h</span>
                  <span className="block text-stone-500 text-[11px] mt-0.5">Domingo e Segunda: Fechado</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5 pt-1">
                <MapPin className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-stone-300 block">Endereço Ativo:</span>
                  <span className="text-stone-300 block font-semibold">{activeStore.name}</span>
                  <span className="text-[11px] text-stone-400 block">{activeStore.addressDetail}</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5 pt-1">
                <Phone className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-stone-300 block">WhatsApp Comercial:</span>
                  <a href={`https://wa.me/${activeStore.whatsappNumber}`} target="_blank" rel="noreferrer" className="hover:text-yellow-400 transition-colors">{activeStore.phone}</a>
                </div>
              </div>
            </div>
          </div>

          {/* Column 4: Newsletter or Statement */}
          <div className="space-y-4">
            <h4 className="font-sans font-bold text-stone-200 text-sm tracking-widest uppercase mb-4 flex items-center gap-2">
              <span className="w-1 h-4 bg-amber-500 rounded" />
              Nosso Compromisso
            </h4>
            <div className="p-4 bg-stone-900/60 rounded-2xl border border-stone-800/60 space-y-3">
              <p className="font-sans text-xs text-stone-400 leading-normal">
                Nossos produtos de manutenção e acabamento são livres de silicone insolúvel, sulfatos pesados, parabenos ou óleos minerais. Valorizamos marcas nacionais e cooperativas produtoras de óleos vegetais prensados do Nordeste.
              </p>
              <span className="font-mono text-[10px] text-yellow-500 uppercase tracking-widest font-black flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 animate-pulse" />
                Beleza Limpa & Ancestral
              </span>
            </div>
          </div>

        </div>

        {/* Lower credit bar */}
        <div className="pt-8 mt-8 border-t border-stone-900/80 text-center flex flex-col sm:flex-row items-center justify-between gap-4 font-sans text-xs text-stone-500">
          <p>© {currentYear} Salão Cachos ao Vento. Todos os direitos reservados.</p>
          <p className="flex items-center gap-1">
            Espalhando autoestima <Heart className="w-3.5 h-3.5 text-red-600 fill-red-600 animate-pulse" /> no Rio de Janeiro.
          </p>
        </div>

      </div>
    </footer>
  );
}
