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
              {/* WhatsApp Unidade Anchieta */}
              <a 
                href="https://wa.me/5521966348617?text=Ol%C3%A1%21+Gostaria+de+falar+com+o+Sal%C3%A3o+Cachos+ao+Vento+%28Unidade+Anchieta%29." 
                target="_blank" 
                rel="noreferrer" 
                className="h-8 px-2.5 rounded-full bg-stone-900 border border-stone-800 flex items-center justify-center gap-1.5 hover:bg-emerald-950 hover:border-emerald-500/50 text-stone-400 hover:text-emerald-400 transition-colors cursor-pointer text-xs font-bold"
                title="WhatsApp Unidade Anchieta ((21) 96634-8617)"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.62.962 3.238 1.484 5.352 1.486 5.424 0 9.835-4.407 9.839-9.833.002-2.63-1.011-5.1-2.853-6.945C17.09 1.957 14.63 1.006 12 1.006c-5.42 0-9.83 4.406-9.834 9.835-.002 2.158.56 3.791 1.543 5.405L2.68 21.415l5.228-1.371zM17.15 14.54c-.282-.143-1.67-.824-1.929-.918-.258-.093-.446-.142-.635.143-.188.285-.73.919-.893 1.1-.164.184-.327.208-.61.066-.282-.143-1.192-.44-2.271-1.402-.839-.748-1.405-1.67-1.57-1.954-.163-.283-.018-.437.124-.577.127-.126.283-.329.424-.492.143-.165.19-.283.284-.472.093-.19.047-.354-.024-.493-.07-.143-.635-1.53-.87-2.083-.228-.547-.48-.471-.659-.48l-.56-.01c-.198 0-.52.074-.792.372-.272.298-1.04 1.013-1.04 2.471 0 1.457 1.06 2.864 1.208 3.061.149.198 2.086 3.186 5.05 4.47.705.305 1.256.488 1.685.625.708.226 1.353.194 1.862.118.568-.085 1.67-.682 1.905-1.34.235-.658.235-1.223.164-1.34-.07-.117-.258-.19-.54-.332z" />
                </svg>
                <span className="text-[10px] uppercase font-bold text-emerald-400">Anchieta</span>
              </a>
              {/* WhatsApp Unidade Petrópolis */}
              <a 
                href="https://wa.me/5521990599641?text=Ol%C3%A1%21+Gostaria+de+falar+com+o+Sal%C3%A3o+Cachos+ao+Vento+%28Unidade+Petr%C3%B3polis%29." 
                target="_blank" 
                rel="noreferrer" 
                className="h-8 px-2.5 rounded-full bg-stone-900 border border-stone-800 flex items-center justify-center gap-1.5 hover:bg-emerald-950 hover:border-emerald-500/50 text-stone-400 hover:text-emerald-400 transition-colors cursor-pointer text-xs font-bold"
                title="WhatsApp Unidade Petrópolis ((21) 99059-9641)"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.62.962 3.238 1.484 5.352 1.486 5.424 0 9.835-4.407 9.839-9.833.002-2.63-1.011-5.1-2.853-6.945C17.09 1.957 14.63 1.006 12 1.006c-5.42 0-9.83 4.406-9.834 9.835-.002 2.158.56 3.791 1.543 5.405L2.68 21.415l5.228-1.371zM17.15 14.54c-.282-.143-1.67-.824-1.929-.918-.258-.093-.446-.142-.635.143-.188.285-.73.919-.893 1.1-.164.184-.327.208-.61.066-.282-.143-1.192-.44-2.271-1.402-.839-.748-1.405-1.67-1.57-1.954-.163-.283-.018-.437.124-.577.127-.126.283-.329.424-.492.143-.165.19-.283.284-.472.093-.19.047-.354-.024-.493-.07-.143-.635-1.53-.87-2.083-.228-.547-.48-.471-.659-.48l-.56-.01c-.198 0-.52.074-.792.372-.272.298-1.04 1.013-1.04 2.471 0 1.457 1.06 2.864 1.208 3.061.149.198 2.086 3.186 5.05 4.47.705.305 1.256.488 1.685.625.708.226 1.353.194 1.862.118.568-.085 1.67-.682 1.905-1.34.235-.658.235-1.223.164-1.34-.07-.117-.258-.19-.54-.332z" />
                </svg>
                <span className="text-[10px] uppercase font-bold text-emerald-400">Petrópolis</span>
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
                  <span className="font-bold text-stone-300 block">Endereços por Unidade:</span>
                  <div className="space-y-1.5 mt-1">
                    <div>
                      <span className="text-stone-400 text-xs block font-medium">Unidade Anchieta:</span>
                      <span className="text-stone-300 text-xs font-semibold block">Capitão Mário Barbedo, 366</span>
                      <span className="text-[11px] text-stone-500 block">Anchieta, Rio de Janeiro - RJ</span>
                    </div>
                    <div>
                      <span className="text-stone-400 text-xs block font-medium">Unidade Petrópolis:</span>
                      <span className="text-stone-300 text-xs font-semibold block">Rua Teresa</span>
                      <span className="text-[11px] text-stone-500 block">Petrópolis - RJ</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-2.5 pt-1">
                <Phone className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                <div className="space-y-1.5">
                  <span className="font-bold text-stone-300 block">WhatsApp por Unidade:</span>
                  <div>
                    <span className="text-stone-400 text-xs block font-medium">Unidade Anchieta:</span>
                    <a 
                      href="https://wa.me/5521966348617?text=Ol%C3%A1%21+Gostaria+de+falar+com+o+Sal%C3%A3o+Cachos+ao+Vento+%28Unidade+Anchieta%29." 
                      target="_blank" 
                      rel="noreferrer" 
                      className="text-emerald-400 hover:text-emerald-300 font-mono text-xs font-bold transition-colors"
                    >
                      (21) 96634-8617 → Chamar no WhatsApp
                    </a>
                  </div>
                  <div>
                    <span className="text-stone-400 text-xs block font-medium">Unidade Petrópolis:</span>
                    <a 
                      href="https://wa.me/5521990599641?text=Ol%C3%A1%21+Gostaria+de+falar+com+o+Sal%C3%A3o+Cachos+ao+Vento+%28Unidade+Petr%C3%B3polis%29." 
                      target="_blank" 
                      rel="noreferrer" 
                      className="text-emerald-400 hover:text-emerald-300 font-mono text-xs font-bold transition-colors"
                    >
                      (21) 99059-9641 → Chamar no WhatsApp
                    </a>
                  </div>
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
