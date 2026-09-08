/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { STORE_UNITS } from "../types";
import { Sparkles } from "lucide-react";

interface SchedulerProps {
  preselectedServiceName?: string;
  onClearPreselectedService?: () => void;
  selectedUnit: "anchieta" | "petropolis";
}

const WhatsAppIcon = () => (
  <svg className="w-14 h-14 text-emerald-500 fill-current" viewBox="0 0 24 24" fill="currentColor">
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.62.962 3.238 1.484 5.352 1.486 5.424 0 9.835-4.407 9.839-9.833.002-2.63-1.011-5.1-2.853-6.945C17.09 1.957 14.63 1.006 12 1.006c-5.42 0-9.83 4.406-9.834 9.835-.002 2.158.56 3.791 1.543 5.405L2.68 21.415l5.228-1.371zM17.15 14.54c-.282-.143-1.67-.824-1.929-.918-.258-.093-.446-.142-.635.143-.188.285-.73.919-.893 1.1-.164.184-.327.208-.61.066-.282-.143-1.192-.44-2.271-1.402-.839-.748-1.405-1.67-1.57-1.954-.163-.283-.018-.437.124-.577.127-.126.283-.329.424-.492.143-.165.19-.283.284-.472.093-.19.047-.354-.024-.493-.07-.143-.635-1.53-.87-2.083-.228-.547-.48-.471-.659-.48l-.56-.01c-.198 0-.52.074-.792.372-.272.298-1.04 1.013-1.04 2.471 0 1.457 1.06 2.864 1.208 3.061.149.198 2.086 3.186 5.05 4.47.705.305 1.256.488 1.685.625.708.226 1.353.194 1.862.118.568-.085 1.67-.682 1.905-1.34.235-.658.235-1.223.164-1.34-.07-.117-.258-.19-.54-.332z" />
  </svg>
);

const InstagramIcon = () => (
  <svg className="w-14 h-14 text-pink-500 fill-current" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
);

export default function Scheduler({ preselectedServiceName, onClearPreselectedService, selectedUnit }: SchedulerProps) {
  const activeStore = STORE_UNITS.find(u => u.id === selectedUnit) || STORE_UNITS[0];
  const otherStore = STORE_UNITS.find(u => u.id !== activeStore.id) || STORE_UNITS[1];

  const handleWhatsAppAction = () => {
    // Standard high-quality WhatsApp URL
    const phoneNum = activeStore.whatsappNumber;
    let text = `Olá! Gostaria de agendar um atendimento no Cachos ao Vento (${activeStore.name}).`;
    
    if (preselectedServiceName) {
      text = `Olá! Gostaria de agendar o serviço de "*${preselectedServiceName}*" na *${activeStore.name}*.`;
    }
    
    const waUrl = `https://wa.me/${phoneNum}?text=${encodeURIComponent(text)}`;
    window.open(waUrl, "_blank", "noopener,noreferrer");
  };

  const handleInstagramAction = () => {
    window.open("https://www.instagram.com/cachosaoventorj?igsh=a2htNndpeGo3d3Bn", "_blank", "noopener,noreferrer");
  };

  return (
    <section id="agendamento" className="bg-stone-900 py-10 border-t border-stone-800 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-5">
          <span className="font-mono text-[10px] sm:text-xs font-bold text-amber-500 uppercase tracking-widest block mb-1">
            Atendimento Exclusivo
          </span>
          <h2 className="font-sans font-black text-2xl sm:text-3xl text-white tracking-tight uppercase">
            Agende Seu Atendimento Direto
          </h2>
          <div className="w-12 h-0.5 bg-yellow-500 mx-auto mt-2 rounded-full" />
          <p className="font-sans text-stone-300 text-xs sm:text-sm mt-3">
            Escolha uma das nossas filiais no menu e entre em contato direto conosco para marcar seu horário. Estamos prontos para te acolher com a melhor estrutura e carinho no Rio de Janeiro!
          </p>
        </div>

        {/* Display Banner alert if service was preset from gallery */}
        <AnimatePresence>
          {preselectedServiceName && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="mb-10 p-4 rounded-2xl bg-amber-950/60 border border-amber-500/40 text-yellow-500 text-xs sm:text-sm font-sans flex items-center justify-between gap-4 max-w-3xl mx-auto text-left"
            >
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-yellow-400 flex-shrink-0 animate-pulse" />
                <span>
                  Você escolheu o serviço: <span className="font-bold underline text-white">“{preselectedServiceName}”</span>. Clique em "Enviar Mensagem" no WhatsApp para solicitar diretamente!
                </span>
              </div>
              <button
                onClick={onClearPreselectedService}
                className="px-2.5 py-1 rounded bg-amber-800 text-white font-bold uppercase text-[10px] tracking-wider cursor-pointer hover:bg-amber-700 transition-colors"
              >
                Limpar
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Two prominent visual cards in a grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          
          {/* WhatsApp Connection Card */}
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
            className="bg-stone-950 border border-emerald-500/20 hover:border-emerald-500/50 rounded-3xl p-8 flex flex-col items-center text-center shadow-2xl relative overflow-hidden group cursor-pointer"
            onClick={handleWhatsAppAction}
          >
            {/* Green glowing corner layout */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 rounded-full blur-[40px] pointer-events-none group-hover:bg-emerald-500/10 transition-colors" />
            
            <div className="p-4 rounded-2xl bg-emerald-950/50 border border-emerald-500/25 mb-6 group-hover:scale-110 transition-transform duration-300">
              <WhatsAppIcon />
            </div>
            
            <h3 className="font-sans font-black text-xl text-stone-100 uppercase tracking-wider mb-1">
              WhatsApp {activeStore.name}
            </h3>
            <span className="text-emerald-400 font-mono text-xs font-bold mb-3 block">
              {activeStore.phone}
            </span>
            
            <p className="font-sans text-xs sm:text-sm text-stone-400 leading-relaxed max-w-xs mb-6">
              Fale direto com a nossa equipe da <strong className="text-emerald-400 font-bold">{activeStore.name}</strong> para agendar seu horário com rapidez e atenção.
            </p>
            
            <div className="mt-auto w-full space-y-2.5">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleWhatsAppAction();
                }}
                className="w-full py-3.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold uppercase tracking-wider text-xs shadow-lg shadow-emerald-950/50 transition-colors cursor-pointer flex items-center justify-center gap-1.5"
                title={`Conversar com a ${activeStore.name}`}
              >
                <span>WhatsApp {activeStore.name}</span>
                <span className="font-mono text-[11px] opacity-90">({activeStore.phone})</span>
              </button>

              {otherStore && (
                <a
                  href={`https://wa.me/${otherStore.whatsappNumber}?text=${encodeURIComponent(preselectedServiceName ? `Olá! Gostaria de agendar o serviço de "${preselectedServiceName}" na ${otherStore.name}.` : `Olá! Gostaria de agendar um atendimento no Salão Cachos ao Vento (${otherStore.name}).`)}`}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="w-full py-2.5 px-3 rounded-xl bg-stone-900 border border-emerald-500/30 hover:border-emerald-400 text-emerald-400 hover:text-white font-bold uppercase tracking-wider text-[11px] transition-colors cursor-pointer flex items-center justify-center gap-1.5"
                  title={`Conversar com a ${otherStore.name}`}
                >
                  <span>WhatsApp {otherStore.name}</span>
                  <span className="font-mono text-[10px] opacity-85">({otherStore.phone})</span>
                </a>
              )}
            </div>
          </motion.div>

          {/* Instagram Connection Card */}
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
            className="bg-stone-950 border border-pink-500/20 hover:border-pink-500/50 rounded-3xl p-8 flex flex-col items-center text-center shadow-2xl relative overflow-hidden group cursor-pointer"
            onClick={handleInstagramAction}
          >
            {/* Pink glowing corner layout */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-pink-500/5 rounded-full blur-[40px] pointer-events-none group-hover:bg-pink-500/10 transition-colors" />
            
            <div className="p-4 rounded-2xl bg-pink-950/50 border border-pink-500/25 mb-6 group-hover:scale-110 transition-transform duration-300">
              <InstagramIcon />
            </div>
            
            <h3 className="font-sans font-black text-xl text-stone-100 uppercase tracking-wider mb-2">
              Nosso Instagram
            </h3>
            
            <p className="font-sans text-xs sm:text-sm text-stone-400 leading-relaxed max-w-xs mb-8">
              Acompanhe transformações incríveis diárias de cortes e colorações, novidades e stories exclusivos da nossa coroa capilar <strong className="text-pink-400 font-bold">@cachosaoventorj</strong>.
            </p>
            
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleInstagramAction();
              }}
              className="mt-auto w-full py-3.5 rounded-xl bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 text-white font-bold uppercase tracking-widest text-xs shadow-lg shadow-pink-950/50 transition-colors cursor-pointer flex items-center justify-center gap-2"
            >
              Acessar Perfil
            </button>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
