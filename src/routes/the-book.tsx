import { createFileRoute } from '@tanstack/react-router'
import { SiteFooter } from './index'

const GUMROAD_URL = 'https://realnadinex.gumroad.com/l/thecarbonledger'

export const Route = createFileRoute('/the-book')({
  head: () => ({
    meta: [
      { title: 'The Carbon Ledger — Nadine Pillay' },
      {
        name: 'description',
        content:
          'The Carbon Ledger by Nadine Pillay examines how net zero climate frameworks function as debt mechanisms — and who pays. Available now on Gumroad.',
      },
    ],
  }),
  component: TheBookPage,
})

function TheBookPage() {
  return (
    <>
      <div
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
          The Book
        </div>

        {/* Hero — cover + title */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '240px 1fr',
            gap: '4rem',
            alignItems: 'start',
            marginBottom: 'clamp(3rem, 6vw, 5rem)',
          }}
          className="book-hero-grid"
        >
          {/* Book cover placeholder — replace img src when cover file is supplied */}
          <img
  src="/book-cover.png"
  alt="The Carbon Ledger — Nadine Pillay"
  style={{
    width: '100%',
    display: 'block',
  }}
/>
            <div
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: '0.55rem',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'var(--np-accent)',
              }}
            >
              Cover
            </div>
            <div
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: '1.1rem',
                fontWeight: 600,
                textAlign: 'center',
                lineHeight: 1.3,
                color: 'var(--np-text)',
              }}
            >
              The Carbon Ledger
            </div>
            <div
              style={{
                width: '2.5rem',
                height: '1px',
                background: 'var(--np-accent)',
              }}
            />
            <div
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: '0.85rem',
                color: 'var(--np-muted)',
                textAlign: 'center',
              }}
            >
              The Hidden Arithmetic
              <br />
              Behind Net Zero
            </div>
            <div
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: '0.6rem',
                color: 'var(--np-muted)',
                marginTop: '0.5rem',
              }}
            >
              Nadine Pillay
            </div>
          </div>

          {/* Title + CTA */}
          <div>
            <h1
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                fontWeight: 400,
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
                color: 'var(--np-text)',
                marginBottom: '0.75rem',
              }}
            >
              The Carbon Ledger
            </h1>
            <div
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: 'clamp(1rem, 2.2vw, 1.3rem)',
                fontStyle: 'italic',
                color: 'var(--np-muted)',
                marginBottom: '2rem',
              }}
            >
              The Hidden Arithmetic Behind Net Zero
            </div>

            <a
              href={GUMROAD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ display: 'inline-block', marginBottom: '1rem' }}
            >
              Buy the book
            </a>

            <div
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: '0.6rem',
                color: 'var(--np-muted)',
                letterSpacing: '0.05em',
                marginTop: '0.75rem',
              }}
            >
              Available on Gumroad
            </div>
          </div>
        </div>

        {/* The Argument */}
        <section
          style={{
            borderTop: '1px solid var(--np-border)',
            paddingTop: 'clamp(2.5rem, 5vw, 4rem)',
            marginBottom: 'clamp(2.5rem, 5vw, 4rem)',
          }}
        >
          <div
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: '0.65rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'var(--np-muted)',
              marginBottom: '2rem',
            }}
          >
            The Argument
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
              Net zero is not a climate goal. It is an equation. One ton emitted requires one ton
              avoided. The atmosphere is balanced. The books are clean. The planet is saved. This
              is the mathematics you are meant to accept without examining it too closely — because
              the moment you examine it, the moment you ask what "avoided" actually means, who
              calculates it, against what baseline, and who profits from the calculation, the
              equation dissolves.
            </p>
            <p style={{ marginBottom: '1.5rem' }}>
              What remains is not a climate framework. It is an accounting system. And like every
              accounting system designed by those who hold the ledger, it was built to produce a
              specific result. The result is not atmospheric stability. The result is the continued
              right of the wealthy to consume, underwritten by the enforced underdevelopment of
              the poor.
            </p>
            <p>
              <em>The Carbon Ledger</em> traces this architecture from its origins in a single
              sentence at the 1972 Stockholm Conference to its current form as sovereign debt
              dressed as climate finance. It is written for the person who has felt the game being
              played without being able to name the rules. It gives them the name.
            </p>
          </div>
        </section>

        {/* Three Acts */}
        <section
          style={{
            borderTop: '1px solid var(--np-border)',
            paddingTop: 'clamp(2.5rem, 5vw, 4rem)',
            marginBottom: 'clamp(2.5rem, 5vw, 4rem)',
          }}
        >
          <div
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: '0.65rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'var(--np-muted)',
              marginBottom: '2.5rem',
            }}
          >
            Structure
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '2rem',
            }}
            className="acts-grid"
          >
            {[
              {
                act: 'Act I',
                title: 'The Board',
                description:
                  'How the game was designed. Between 1972 and today, a legal and financial architecture transformed the atmosphere into property, development into liability, and poverty into an asset class. This act names the architects and traces the blueprint.',
              },
              {
                act: 'Act II',
                title: 'The Ledger',
                description:
                  'What the game actually costs. South Africa as the primary laboratory: the JETP, the R1.25 trillion financing gap, the methane undercounting, the 422,000 jobs, the compound interest accruing across generations. Indonesia, Colombia, and the DRC as proof the mechanism repeats. The ledger is the same everywhere. Only the currency changes.',
              },
              {
                act: 'Act III',
                title: 'The Move',
                description:
                  'How to stop being played. Not escape — you cannot escape a board you live on. But the conscious, chosen, historically grounded refusal to be moved by hands you can now see. What repudiation looks like. What the atmospheric commons restored would require.',
              },
            ].map((item) => (
              <div
                key={item.act}
                style={{
                  borderTop: '2px solid var(--np-border)',
                  paddingTop: '1.5rem',
                }}
              >
                <div
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: '0.6rem',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: 'var(--np-accent)',
                    marginBottom: '0.75rem',
                  }}
                >
                  {item.act}
                </div>
                <h3
                  style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontSize: '1.3rem',
                    fontWeight: 500,
                    color: 'var(--np-text)',
                    marginBottom: '0.75rem',
                    lineHeight: 1.2,
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontFamily: "'Instrument Sans', sans-serif",
                    fontSize: '0.9rem',
                    color: 'var(--np-muted)',
                    lineHeight: 1.65,
                  }}
                >
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Praise section — hidden until endorsements are available */}
        {/* Uncomment and populate when reviews are received:
        <section
          style={{
            borderTop: '1px solid var(--np-border)',
            paddingTop: 'clamp(2.5rem, 5vw, 4rem)',
            marginBottom: 'clamp(2.5rem, 5vw, 4rem)',
          }}
        >
          <div
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: '0.65rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'var(--np-muted)',
              marginBottom: '2.5rem',
            }}
          >
            Praise
          </div>
          <div
            style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2rem' }}
            className="praise-grid"
          >
          </div>
        </section>
        */}

        {/* Bottom CTA */}
        <div
          style={{
            borderTop: '1px solid var(--np-border)',
            paddingTop: '3rem',
            textAlign: 'center',
          }}
        >
          <a
            href={GUMROAD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Buy the book
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .book-hero-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
          .book-hero-grid > div:first-child {
            max-width: 200px;
          }
          .acts-grid {
            grid-template-columns: 1fr !important;
          }
          .praise-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>

      <SiteFooter />
    </>
  )
}
