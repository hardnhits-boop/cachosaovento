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

export default function App() {
  const [activeSection, setActiveSection] = useState("inicio");
  const [preselectedService, setPreselectedService] = useState<string | undefined>(undefined);
  const [selectedUnit, setSelectedUnit] = useState<"anchieta" | "petropolis" >("anchieta");

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
        <Hero onNavigate={handleNavigate} onSelectService={handleSelectService} />
        
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
    </div>
  );
}
