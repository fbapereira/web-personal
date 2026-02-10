import { Reveal } from "./Reveal";

const MAILTO = "mailto:you@domain.com?subject=Let%27s%20build%20something";

export function Hero() {
  return (
    <header aria-label="Intro">
      <Reveal as="div" className="hero">
        <p className="hero-kicker">Freelance web engineer</p>
        <h1 className="hero-heading">
          Instead of building an amazing website for myself,
          <br />
          I decided to spend that time building one for you.
        </h1>
        <p className="hero-sub">
          I design and build fast, scalable, and thoughtful web platforms for
          people who care about doing things properly.
        </p>
        <div className="hero-actions">
          <a className="primary-button" href={MAILTO}>
            Send me your idea
          </a>
        </div>
      </Reveal>
    </header>
  );
}

