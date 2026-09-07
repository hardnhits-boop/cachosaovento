/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Scissors, Calendar, MapPin, Instagram, Sparkles, Clock, Phone, Droplet, Palette, Paintbrush, Wind } from "lucide-react";
import { STORE_UNITS } from "../types";

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
  activeSection: string;
  selectedUnit: "anchieta" | "petropolis";
  onUnitChange: (unit: "anchieta" | "petropolis") => void;
}

export default function Navbar({ onNavigate, activeSection, selectedUnit, onUnitChange }: NavbarProps) {
  const activeStore = STORE_UNITS.find(u => u.id === selectedUnit) || STORE_UNITS[0];
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const menuItems = [
    {
      id: "inicio",
      label: "Início",
      submenu: null
    },
    {
      id: "servicos",
      label: "Serviços",
      submenu: [
        { title: "Relaxamento", description: "Definição sem volume", icon: Sparkles },
        { title: "Soltura de cachos", description: "Definição com volume", icon: Wind },
        { title: "Reconstrução Capilar", description: "Recuperação profunda", icon: Droplet },
        { title: "Reposição de óleo", description: "Nutrição lipídica", icon: Sparkles },
        { title: "Californiana", description: "Iluminação solar", icon: Palette },
        { title: "Colorações", description: "Tons de alta qualidade", icon: Palette },
        { title: "Cores fantasia", description: "Customização artística", icon: Paintbrush },
        { title: "Corte", description: "Corte seco personalizado", icon: Scissors }
      ]
    },
    {
      id: "antes-depois",
      label: "Antes & Depois",
      submenu: null
    },
    {
      id: "agendamento",
      label: "Agendamento",
      submenu: [
        { title: "Marcar Horário", description: "Escolha dia, hora e profissional", icon: Calendar },
        { title: "Suporte WhatsApp", description: "Fale direto pelas unidades", icon: Phone }
      ]
    },
    {
      id: "localizacao",
      label: "Localização",
      submenu: [
        { title: "Como Chegar", description: selectedUnit === "anchieta" ? "Anchieta, Rio de Janeiro" : "Centro de Petrópolis, RJ", icon: MapPin }
      ]
    }
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setIsOpen(false);
    setHoveredItem(null);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-55 bg-stone-950/90 backdrop-blur-md border-b border-amber-900/20 text-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div 
            className="flex items-center space-x-3 cursor-pointer group"
            onClick={() => handleLinkClick("inicio")}
          >
            <div className="relative flex items-center justify-center w-11 h-11 rounded-full bg-gradient-to-tr from-amber-700 to-yellow-500 shadow-lg shadow-amber-950/50">
              <Sparkles className="w-5 h-5 text-stone-950 animate-pulse" />
            </div>
            <div>
              <span className="font-sans font-black text-base sm:text-lg leading-tight tracking-wider uppercase block text-amber-500 group-hover:text-yellow-400 transition-colors">
                Salão Cachos ao Vento
              </span>
              <span className="font-mono text-[9px] sm:text-xs tracking-widest text-stone-400 block uppercase">
                Especializado em Afro e Cacheados
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1 lg:space-x-4 items-center h-full">
            {menuItems.map((item) => (
              <div
                key={item.id}
                className="relative h-full flex items-center py-2 px-3 lg:px-4"
                onMouseEnter={() => setHoveredItem(item.id)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <button
                  onClick={() => handleLinkClick(item.id)}
                  className={`relative font-sans text-sm font-medium tracking-wide uppercase transition-colors cursor-pointer py-2 ${
                    activeSection === item.id 
                      ? "text-yellow-500 font-semibold" 
                      : "text-stone-300 hover:text-white"
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <motion.div 
                      layoutId="activeUnderline"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-yellow-500"
                    />
                  )}
                </button>

                {/* Interactive Hover Dropdown */}
                <AnimatePresence>
                  {hoveredItem === item.id && item.submenu && (
                    <motion.div
                      initial={{ opacity: 0, y: 15, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.15, ease: "easeOut" }}
                      className="absolute top-18 left-1/2 -translate-x-1/2 w-72 bg-stone-900 border border-amber-900/30 rounded-xl shadow-2xl p-4 overflow-hidden z-60"
                    >
                      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-700 to-yellow-500" />
                      <div className="space-y-4">
                        {item.submenu.map((sub, idx) => {
                          const IconComp = sub.icon;
                          return (
                            <div 
                              key={idx}
                              onClick={() => handleLinkClick(item.id)}
                              className="flex items-start space-x-3 p-2 rounded-lg hover:bg-stone-800/60 cursor-pointer group/sub transition-colors"
                            >
                              <div className="p-1.5 rounded-md bg-amber-950 text-amber-500 group-hover/sub:bg-amber-800 group-hover/sub:text-yellow-400 transition-colors">
                                <IconComp className="w-4 h-4" />
                              </div>
                              <div>
                                <h4 className="font-sans text-xs font-bold text-stone-100 uppercase tracking-wider group-hover/sub:text-yellow-400 transition-colors">
                                  {sub.title}
                                </h4>
                                <p className="font-sans text-xs text-stone-400 mt-0.5">
                                  {sub.description}
                                </p>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}

            {/* Unidade Selector Switcher */}
            <div className="flex bg-stone-900/90 border border-amber-900/30 p-1 rounded-full ml-2 border-stone-800">
              <button
                onClick={() => onUnitChange("anchieta")}
                className={`px-3 py-1.5 rounded-full text-[10px] font-bold uppercase transition-all whitespace-nowrap cursor-pointer ${
                  selectedUnit === "anchieta"
                    ? "bg-amber-800 text-stone-100 shadow-md animate-pulse-once"
                    : "text-stone-400 hover:text-stone-200"
                }`}
              >
                Anchieta
              </button>
              <button
                onClick={() => onUnitChange("petropolis")}
                className={`px-3 py-1.5 rounded-full text-[10px] font-bold uppercase transition-all whitespace-nowrap cursor-pointer ${
                  selectedUnit === "petropolis"
                    ? "bg-amber-800 text-stone-100 shadow-md animate-pulse-once"
                    : "text-stone-400 hover:text-stone-200"
                }`}
              >
                Petrópolis
              </button>
            </div>

            {/* Instagram Link Button */}
            <a 
              href="https://www.instagram.com/cachosaoventorj?igsh=a2htNndpeGo3d3Bn"
              target="_blank"
              rel="noreferrer"
              className="ml-3 p-2.5 rounded-full bg-stone-900 border border-stone-800 text-stone-400 hover:text-yellow-400 hover:border-amber-900 transition-all cursor-pointer flex items-center justify-center gap-1 text-xs font-bold"
              title="@cachosaoventorj"
            >
              <Instagram className="w-3.5 h-3.5" />
              <span className="hidden xl:inline text-[10px] uppercase font-bold tracking-wider">@cachosaoventorj</span>
            </a>

            {/* Direct WhatsApp Link Button */}
            <a 
              href={`https://wa.me/${activeStore.whatsappNumber}?text=${encodeURIComponent(`Olá! Gostaria de falar com o Salão Cachos ao Vento (${activeStore.name}).`)}`}
              target="_blank" 
              rel="noreferrer" 
              className="ml-2 p-2.5 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 hover:text-white hover:bg-emerald-600 hover:border-emerald-400 transition-all cursor-pointer flex items-center justify-center gap-1 text-xs font-bold shadow-md shadow-emerald-950/40"
              title={`Chamar no WhatsApp (${activeStore.phone})`}
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.62.962 3.238 1.484 5.352 1.486 5.424 0 9.835-4.407 9.839-9.833.002-2.63-1.011-5.1-2.853-6.945C17.09 1.957 14.63 1.006 12 1.006c-5.42 0-9.83 4.406-9.834 9.835-.002 2.158.56 3.791 1.543 5.405L2.68 21.415l5.228-1.371zM17.15 14.54c-.282-.143-1.67-.824-1.929-.918-.258-.093-.446-.142-.635.143-.188.285-.73.919-.893 1.1-.164.184-.327.208-.61.066-.282-.143-1.192-.44-2.271-1.402-.839-.748-1.405-1.67-1.57-1.954-.163-.283-.018-.437.124-.577.127-.126.283-.329.424-.492.143-.165.19-.283.284-.472.093-.19.047-.354-.024-.493-.07-.143-.635-1.53-.87-2.083-.228-.547-.48-.471-.659-.48l-.56-.01c-.198 0-.52.074-.792.372-.272.298-1.04 1.013-1.04 2.471 0 1.457 1.06 2.864 1.208 3.061.149.198 2.086 3.186 5.05 4.47.705.305 1.256.488 1.685.625.708.226 1.353.194 1.862.118.568-.085 1.67-.682 1.905-1.34.235-.658.235-1.223.164-1.34-.07-.117-.258-.19-.54-.332z" />
              </svg>
              <span className="hidden xl:inline text-[10px] uppercase font-bold tracking-wider text-emerald-300">WhatsApp</span>
            </a>

            {/* Agendar CTA in navbar */}
            <button
              onClick={() => handleLinkClick("agendamento")}
              className="ml-4 px-5 py-2.5 rounded-full bg-gradient-to-r from-amber-800 to-amber-600 hover:from-amber-700 hover:to-amber-500 text-stone-950 font-bold uppercase tracking-wider text-xs shadow-lg shadow-amber-950/50 transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer flex items-center gap-1.5"
            >
              <Calendar className="w-3.5 h-3.5" />
              Agendar Agora
            </button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-stone-400 hover:text-white hover:bg-stone-900 focus:outline-none cursor-pointer"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden bg-stone-950 border-b border-amber-900/30 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {/* Mobile Unidade Switcher */}
              <div className="px-4 py-2.5 border-b border-stone-900">
                <span className="font-mono text-[9px] text-stone-400 uppercase block tracking-wider mb-2 font-bold">Unidade Ativa:</span>
                <div className="flex bg-stone-900 border border-amber-900/30 p-1 rounded-full w-full justify-between">
                  <button
                    onClick={() => {
                      onUnitChange("anchieta");
                    }}
                    className={`flex-1 text-center py-2 rounded-full text-[11px] font-bold uppercase transition-all cursor-pointer ${
                      selectedUnit === "anchieta"
                        ? "bg-amber-800 text-stone-100 shadow"
                        : "text-stone-400 hover:text-stone-200"
                    }`}
                  >
                    Anchieta (RJ)
                  </button>
                  <button
                    onClick={() => {
                      onUnitChange("petropolis");
                    }}
                    className={`flex-1 text-center py-2 rounded-full text-[11px] font-bold uppercase transition-all cursor-pointer ${
                      selectedUnit === "petropolis"
                        ? "bg-amber-800 text-stone-100 shadow"
                        : "text-stone-400 hover:text-stone-200"
                    }`}
                  >
                    Petrópolis (RJ)
                  </button>
                </div>
              </div>

              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleLinkClick(item.id)}
                  className={`w-full text-left px-4 py-3 rounded-xl font-sans text-sm font-semibold uppercase tracking-wider transition-all flex items-center justify-between ${
                    activeSection === item.id
                      ? "bg-amber-950/60 text-yellow-400 border-l-4 border-yellow-500"
                      : "text-stone-300 hover:bg-stone-900 hover:text-white"
                  }`}
                >
                  <span>{item.label}</span>
                  <span className="text-[10px] text-stone-500 font-mono">
                    /{item.id}
                  </span>
                </button>
              ))}
              <div className="pt-4 px-4 space-y-2">
                <a
                  href={`https://wa.me/${activeStore.whatsappNumber}?text=${encodeURIComponent(`Olá! Gostaria de agendar um atendimento no Salão Cachos ao Vento (${activeStore.name}).`)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold uppercase tracking-widest text-center text-xs shadow-lg shadow-emerald-950/40 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.62.962 3.238 1.484 5.352 1.486 5.424 0 9.835-4.407 9.839-9.833.002-2.63-1.011-5.1-2.853-6.945C17.09 1.957 14.63 1.006 12 1.006c-5.42 0-9.83 4.406-9.834 9.835-.002 2.158.56 3.791 1.543 5.405L2.68 21.415l5.228-1.371zM17.15 14.54c-.282-.143-1.67-.824-1.929-.918-.258-.093-.446-.142-.635.143-.188.285-.73.919-.893 1.1-.164.184-.327.208-.61.066-.282-.143-1.192-.44-2.271-1.402-.839-.748-1.405-1.67-1.57-1.954-.163-.283-.018-.437.124-.577.127-.126.283-.329.424-.492.143-.165.19-.283.284-.472.093-.19.047-.354-.024-.493-.07-.143-.635-1.53-.87-2.083-.228-.547-.48-.471-.659-.48l-.56-.01c-.198 0-.52.074-.792.372-.272.298-1.04 1.013-1.04 2.471 0 1.457 1.06 2.864 1.208 3.061.149.198 2.086 3.186 5.05 4.47.705.305 1.256.488 1.685.625.708.226 1.353.194 1.862.118.568-.085 1.67-.682 1.905-1.34.235-.658.235-1.223.164-1.34-.07-.117-.258-.19-.54-.332z" />
                  </svg>
                  Conversar no WhatsApp ({activeStore.phone})
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
