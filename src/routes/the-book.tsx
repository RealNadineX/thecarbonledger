import { createFileRoute } from '@tanstack/react-router'
import { SiteFooter } from './index'

export const Route = createFileRoute('/the-book')({
  head: () => ({
    meta: [
      { title: 'The Carbon Ledger — Nadine Pillay' },
      {
        name: 'description',
        content:
          'The Carbon Ledger by Nadine Pillay examines how net zero climate frameworks function as debt mechanisms — and who pays. Available now.',
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
          {/* Book cover */}
          <div
            className="book-cover-placeholder"
            style={{
              width: '100%',
              aspectRatio: '2/3',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '2rem 1.5rem',
              gap: '1rem',
            }}
          >
            <div
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: '0.55rem',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'var(--np-accent)',
              }}
            >
              Cover to be supplied
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
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              title="Buy The Carbon Ledger — link to be updated"
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
              [First paragraph — the book's central argument in full, 3–5 sentences. To be supplied
              by the author. This section makes the case directly: what the book says, not just
              what it is about.]
            </p>
            <p style={{ marginBottom: '1.5rem' }}>
              [Second paragraph — the analytical method or the stakes. What does this book do that
              other writing on climate does not?]
            </p>
            <p>
              [Third paragraph — who this book is for, or why this argument matters now.]
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
                title: 'The Language of Zero',
                description:
                  'How the concept of net zero was constructed, and what obligations it was designed to absorb.',
              },
              {
                act: 'Act II',
                title: 'The Arithmetic',
                description:
                  'Carbon accounting, offset markets, and the mathematics of deferral. Who counts, and on whose terms.',
              },
              {
                act: 'Act III',
                title: 'Who Pays',
                description:
                  'The distribution of climate cost across geographies, generations, and economic positions.',
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

        {/* Reviews / Endorsements placeholder */}
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
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '2rem',
            }}
            className="praise-grid"
          >
            {[1, 2].map((i) => (
              <div
                key={i}
                style={{
                  borderLeft: '2px solid var(--np-border)',
                  paddingLeft: '1.5rem',
                }}
              >
                <p
                  style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontSize: '1.1rem',
                    fontStyle: 'italic',
                    color: 'var(--np-muted)',
                    lineHeight: 1.6,
                    marginBottom: '1rem',
                  }}
                >
                  "Endorsement or review quote to be populated here."
                </p>
                <div
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: '0.6rem',
                    letterSpacing: '0.1em',
                    color: 'var(--np-muted)',
                  }}
                >
                  — Reviewer name, publication or title
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom CTA */}
        <div
          style={{
            borderTop: '1px solid var(--np-border)',
            paddingTop: '3rem',
            textAlign: 'center',
          }}
        >
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            title="Buy The Carbon Ledger — link to be updated"
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
