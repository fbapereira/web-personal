import { Hero } from "./components/Hero";
import { WhatIDo } from "./components/WhatIDo";
import { TechApproach } from "./components/TechApproach";
import { WhoThisIsFor } from "./components/WhoThisIsFor";
import { Personality } from "./components/Personality";
import { FinalCta } from "./components/FinalCta";

export default function HomePage() {
  return (
    <>
      <main className="page" aria-label="Freelance web engineer landing page">
        <div className="page-inner">
          <Hero />
          <WhatIDo />
          <TechApproach />
          <WhoThisIsFor />
          <Personality />
          <FinalCta />
        </div>
      </main>
      <footer className="footer" aria-label="Site footer">
        <div className="page">
          <div className="footer-inner">
            <span>Minimal site. Maximum attention on your product.</span>
          </div>
        </div>
      </footer>
    </>
  );
}

