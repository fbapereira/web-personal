import { Reveal } from "./Reveal";

const WHATSAPP_LINK =
  "https://wa.me/35699713103?text=Hi%20Felipe%2C%20I%27d%20love%20to%20talk%20about%20a%20project.";

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
          <a className="primary-button" target="_blank" rel="noreferrer" href={WHATSAPP_LINK}>
            Send me your idea
          </a>
        </div>
      </Reveal>
    </header>
  );
}

