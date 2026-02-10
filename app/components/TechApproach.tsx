import { Reveal } from "./Reveal";

export function TechApproach() {
  return (
    <Reveal as="section" className="section" aria-labelledby="how-i-build-heading">
      <header className="section-header">
        <h2 id="how-i-build-heading" className="section-title">
          How I build
        </h2>
      </header>
      <p className="section-body">
        Modern tools. Solid foundations. No shortcuts that hurt later.
      </p>
      <div className="two-column" aria-label="Tech and approach details">
        <section aria-labelledby="technologies-heading">
          <h3 id="technologies-heading" className="subheading">
            Technologies
          </h3>
          <ul className="bullet-list">
            <li>Next.js</li>
            <li>React</li>
            <li>TypeScript</li>
            <li>Internationalization (i18n)</li>
            <li>Scalable front-end architecture</li>
          </ul>
        </section>
        <section aria-labelledby="engineering-practices-heading">
          <h3 id="engineering-practices-heading" className="subheading">
            Engineering Practices
          </h3>
          <ul className="bullet-list">
            <li>Performance-first development</li>
            <li>Clean component systems</li>
            <li>CI/CD pipelines</li>
            <li>Maintainable codebases</li>
            <li>Long-term scalability over quick hacks</li>
          </ul>
        </section>
      </div>
    </Reveal>
  );
}

