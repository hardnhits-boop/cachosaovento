/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Gallery from "./components/Gallery";
import BeforeAfter from "./components/BeforeAfter";
import Scheduler from "./components/Scheduler";
import Map from "./components/Map";
import Footer from "./components/Footer";
import { STORE_UNITS } from "./types";

export default function App() {
  const [activeSection, setActiveSection] = useState("inicio");
  const [preselectedService, setPreselectedService] = useState<string | undefined>(undefined);
  const [selectedUnit, setSelectedUnit] = useState<"anchieta" | "petropolis" >("anchieta");
  const activeStore = STORE_UNITS.find(u => u.id === selectedUnit) || STORE_UNITS[0];

  // Monitor layout elements intersection to update active menu link
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["inicio", "servicos", "antes-depois", "agendamento", "localizacao"];
      const scrollPosition = window.scrollY + 120;

      for (const sect of sections) {
        const el = document.getElementById(sect);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sect);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigate = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      const offset = 80; // height of fixed header
      const elementPosition = el.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setActiveSection(sectionId);
    }
  };

  const handleSelectService = (serviceName: string) => {
    setPreselectedService(serviceName);
  };

  const handleClearPreset = () => {
    setPreselectedService(undefined);
  };

  return (
    <div className="min-h-screen bg-stone-950 text-stone-100 flex flex-col justify-between selection:bg-amber-800 selection:text-white">
      {/* Upper Navigation Bar */}
      <Navbar 
        onNavigate={handleNavigate} 
        activeSection={activeSection} 
        selectedUnit={selectedUnit} 
        onUnitChange={setSelectedUnit} 
      />

      {/* Main Sections flow */}
      <main className="flex-1">
        {/* Banner section */}
        <Hero onNavigate={handleNavigate} onSelectService={handleSelectService} selectedUnit={selectedUnit} />
        
        {/* Cuts & Treatments Gallery and Menu sheet */}
        <Gallery onSelectService={handleSelectService} onNavigate={handleNavigate} selectedUnit={selectedUnit} />
        
        {/* Before & After comparison showcase */}
        <BeforeAfter />
        
        {/* Online Booking System styled like active chat bubble pre-filling WhatsApp */}
        <Scheduler 
          preselectedServiceName={preselectedService} 
          onClearPreselectedService={handleClearPreset} 
          selectedUnit={selectedUnit}
        />
        
        {/* Directions and routes map */}
        <Map selectedUnit={selectedUnit} onUnitChange={setSelectedUnit} />
      </main>

      {/* Basement floor footer */}
      <Footer onNavigate={handleNavigate} selectedUnit={selectedUnit} />

      {/* Floating WhatsApp Quick Action Button */}
      <a
        href={`https://wa.me/${activeStore.whatsappNumber}?text=${encodeURIComponent(`Olá! Gostaria de agendar um atendimento no Salão Cachos ao Vento (${activeStore.name}).`)}`}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 px-4 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider shadow-2xl shadow-emerald-950/70 border border-emerald-400/40 transition-all transform hover:scale-105 active:scale-95 group cursor-pointer"
        title={`Conversar no WhatsApp (${activeStore.phone})`}
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400"></span>
        </span>
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.62.962 3.238 1.484 5.352 1.486 5.424 0 9.835-4.407 9.839-9.833.002-2.63-1.011-5.1-2.853-6.945C17.09 1.957 14.63 1.006 12 1.006c-5.42 0-9.83 4.406-9.834 9.835-.002 2.158.56 3.791 1.543 5.405L2.68 21.415l5.228-1.371zM17.15 14.54c-.282-.143-1.67-.824-1.929-.918-.258-.093-.446-.142-.635.143-.188.285-.73.919-.893 1.1-.164.184-.327.208-.61.066-.282-.143-1.192-.44-2.271-1.402-.839-.748-1.405-1.67-1.57-1.954-.163-.283-.018-.437.124-.577.127-.126.283-.329.424-.492.143-.165.19-.283.284-.472.093-.19.047-.354-.024-.493-.07-.143-.635-1.53-.87-2.083-.228-.547-.48-.471-.659-.48l-.56-.01c-.198 0-.52.074-.792.372-.272.298-1.04 1.013-1.04 2.471 0 1.457 1.06 2.864 1.208 3.061.149.198 2.086 3.186 5.05 4.47.705.305 1.256.488 1.685.625.708.226 1.353.194 1.862.118.568-.085 1.67-.682 1.905-1.34.235-.658.235-1.223.164-1.34-.07-.117-.258-.19-.54-.332z" />
        </svg>
        <span className="hidden sm:inline">WhatsApp</span>
      </a>
    </div>
  );
}
