import { Reveal } from "./Reveal";

const WHATSAPP_LINK =
  "https://wa.me/35699713103?text=Hi%20Felipe%2C%20I%27d%20love%20to%20talk%20about%20a%20project.";

export function FinalCta() {
  return (
    <Reveal
      as="section"
      className="section"
      aria-labelledby="final-cta-heading"
    >
      <div className="final-cta">
        <div>
          <h2 id="final-cta-heading" className="final-cta-title">
            Have an idea?
          </h2>
          <p className="final-cta-text">
            Tell me what you&apos;re building. I&apos;ll tell you how to build
            it properly.
          </p>
          <div className="final-cta-actions">
            <a
              className="primary-button"
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
            >
              Message me on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

