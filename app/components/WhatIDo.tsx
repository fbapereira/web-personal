import { Reveal } from "./Reveal";

export function WhatIDo() {
  return (
    <Reveal as="section" className="section" aria-labelledby="what-happens-heading">
      <header className="section-header">
        <h2 id="what-happens-heading" className="section-title">
          What happens when you work with me
        </h2>
      </header>
      <ul className="bullet-list" aria-label="What I actually do">
        <li>I turn ideas into production-ready products</li>
        <li>I build systems, not just pages</li>
        <li>I care about performance, structure, and maintainability</li>
        <li>I ship clean code that other developers enjoy working with</li>
        <li>I think like a product partner, not just a coder</li>
      </ul>
    </Reveal>
  );
}

