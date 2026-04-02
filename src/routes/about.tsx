import { createFileRoute } from '@tanstack/react-router'
import { SiteFooter } from './index'

export const Route = createFileRoute('/about')({
  head: () => ({
    meta: [
      { title: 'About — Nadine Pillay' },
      {
        name: 'description',
        content:
          'Nadine Pillay is a South African author, analyst, and narrative architect. Author of The Carbon Ledger.',
      },
    ],
  }),
  component: AboutPage,
})

function AboutPage() {
  return (
    <>
      <article
        style={{
          maxWidth: '72rem',
          margin: '0 auto',
          padding: 'clamp(3rem, 7vw, 6rem) 1.5rem',
        }}
      >
        {/* Page label */}
        <div
          style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: '0.65rem',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: 'var(--np-muted)',
            marginBottom: '3rem',
          }}
        >
          About
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 280px',
            gap: '5rem',
            alignItems: 'start',
          }}
          className="about-grid"
        >
          {/* Bio */}
          <div>
            <h1
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
                fontWeight: 400,
                lineHeight: 1.05,
                letterSpacing: '-0.02em',
                color: 'var(--np-text)',
                marginBottom: '2.5rem',
              }}
            >
              Nadine Pillay
            </h1>

            <div
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: '0.65rem',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'var(--np-accent)',
                marginBottom: '2rem',
              }}
            >
              Author · Analyst · Narrative Architect
            </div>

            <div
              style={{
                fontFamily: "'Instrument Sans', sans-serif",
                fontSize: 'clamp(1rem, 1.8vw, 1.05rem)',
                lineHeight: 1.8,
                color: 'var(--np-text)',
                maxWidth: '52rem',
              }}
            >
              <p style={{ marginBottom: '1.5rem' }}>
                Nadine Pillay is a South African author and analyst based in South Africa. She writes
                about the intersection of climate policy, sovereign debt, and the financial
                architecture that determines who pays for the transition — and who profits from it.
              </p>
              <p style={{ marginBottom: '1.5rem' }}>
                Her work follows the money between climate language and debt service. Over the past
                year, she has traced the legal, financial, and technical mechanisms through which
                net zero frameworks convert atmospheric obligation into development debt — using
                South Africa as the primary case study and satellite data, treaty texts, and loan
                documents as the primary sources.
              </p>
              <p style={{ marginBottom: '1.5rem' }}>
                <em>The Carbon Ledger: The Hidden Arithmetic Behind Net Zero</em> is her first
                book. It began with a question about a number — R1.25 trillion, the financing gap
                South Africa was told it needed to close — and ended with a forensic account of
                how atmospheric obligation became an instrument of enclosure. The research took
                a year. The satellite data was captured on 1 March 2026.
              </p>
              <p>
                She is a narrative architect working across long-form nonfiction, strategic concept
                development, and public analysis. She believes trust and accuracy are the only
                sustainable currencies — in writing, as in finance.
              </p>
            </div>

            {/* External links */}
            <div
              style={{
                marginTop: '3rem',
                paddingTop: '2rem',
                borderTop: '1px solid var(--np-border)',
                display: 'flex',
                gap: '2rem',
                flexWrap: 'wrap',
              }}
            >
              {[
                {
                  label: 'Writing on Substack',
                  href: 'https://realnadinex.substack.com',
                },
                {
                  label: 'LinkedIn',
                  href: 'https://www.linkedin.com/in/realnadinex/',
                },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: '0.7rem',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: 'var(--np-accent)',
                    borderBottom: '1px solid var(--np-accent)',
                    paddingBottom: '2px',
                  }}
                >
                  {link.label} ↗
                </a>
              ))}
            </div>
          </div>

          {/* Author photo */}
          <div style={{ position: 'sticky', top: '5rem' }}>
            <img
              src="/Nadine Profile Photo.jpg"
              alt="Nadine Pillay"
              style={{
                width: '100%',
                aspectRatio: '3/4',
                objectFit: 'cover',
                objectPosition: 'center top',
                display: 'block',
                filter: 'grayscale(15%)',
              }}
            />
          </div>
        </div>
      </article>

      <style>{`
        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
          .about-grid > div:last-child {
            position: static !important;
            max-width: 280px;
          }
        }
      `}</style>

      <SiteFooter />
    </>
  )
}
