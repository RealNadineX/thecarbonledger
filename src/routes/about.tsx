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

            {/* Bio copy — placeholder for author-supplied content */}
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
                Nadine Pillay is a South African author and analyst whose work sits at the
                intersection of finance, policy, and ecological debt. Her writing asks the questions
                that climate frameworks prefer to leave unanswered.
              </p>
              <p style={{ marginBottom: '1.5rem' }}>
                [Author bio to be supplied. This is a placeholder for the full prose biography —
                written in the first or third person as preferred, without a CV format or awards
                list. The emphasis is on perspective, not credential.]
              </p>
              <p style={{ marginBottom: '1.5rem' }}>
                [Second paragraph — background, analytical approach, or intellectual lineage.]
              </p>
              <p>
                [Third paragraph — current focus, what the author is working on, or a closing
                statement about the work.]
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
                  href: 'https://linkedin.com/in/nadinepillay',
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
            <div
              className="photo-placeholder"
              style={{
                width: '100%',
                aspectRatio: '3/4',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
              }}
            >
              <div
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: '0.6rem',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'var(--np-muted)',
                }}
              >
                Author photo
              </div>
              <div
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: '0.55rem',
                  color: 'var(--np-border)',
                }}
              >
                to be supplied
              </div>
            </div>
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
