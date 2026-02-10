import { Reveal } from "./Reveal";

export function Personality() {
  return (
    <Reveal as="section" className="section" aria-labelledby="personality-heading">
      <header className="section-header">
        <h2 id="personality-heading" className="section-title">
          No agency layers. No buzzwords.
        </h2>
      </header>
      <p className="personality-text">
        You talk to the person building your product. Always.
        <br />
        No account managers. No mystery team. Just direct collaboration.
      </p>
    </Reveal>
  );
}

