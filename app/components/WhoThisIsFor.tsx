import { Reveal } from "./Reveal";

export function WhoThisIsFor() {
  return (
    <Reveal as="section" className="section" aria-labelledby="who-this-is-for-heading">
      <header className="section-header">
        <h2 id="who-this-is-for-heading" className="section-title">
          We’ll work well together if…
        </h2>
      </header>
      <ul className="bullet-list">
        <li>You care about quality, not just “done”</li>
        <li>You want something built to grow, not to be rebuilt</li>
        <li>You prefer clarity over chaos</li>
        <li>You want a developer who thinks, not just types</li>
      </ul>
    </Reveal>
  );
}

