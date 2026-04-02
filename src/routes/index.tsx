import { createFileRoute } from '@tanstack/react-router'
import { fetchRssFeed, type RssPost } from '@/server/rss.functions'

const GUMROAD_URL = 'https://realnadinex.gumroad.com/l/thecarbonledger'

export const Route = createFileRoute('/')({
  head: () => ({
    meta: [
      { title: 'Nadine Pillay — Author & Analyst' },
      {
        name: 'description',
        content:
          'Nadine Pillay is a South African author and analyst. Her debut book, The Carbon Ledger, examines how net zero climate frameworks function as debt mechanisms — and who pays.',
      },
    ],
  }),
  loader: async () => {
    const posts = await fetchRssFeed({ data: { limit: 3 } })
    return { posts }
  },
  component: HomePage,
})

function HomePage() {
  const { posts } = Route.useLoaderData()

  return (
    <>
      <HeroSection />
      <BookArgumentSection />
      <PullQuoteSection />
      {posts && posts.length > 0 && <BlogPreviewSection posts={posts} />}
      <SiteFooter />
    </>
  )
}

function HeroSection() {
  return (
    <section
      style={{
        maxWidth: '72rem',
        margin: '0 auto',
        padding: 'clamp(4rem, 10vw, 8rem) 1.5rem clamp(3rem, 8vw, 6rem)',
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 1fr) auto',
          gap: '4rem',
          alignItems: 'start',
        }}
        className="hero-grid"
      >
        <div>
          <h1
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: 'clamp(3.5rem, 9vw, 7rem)',
              fontWeight: 600,
              lineHeight: 0.95,
              letterSpacing: '-0.02em',
              color: 'var(--np-text)',
              marginBottom: '1.5rem',
            }}
          >
            NADINE
            <br />
            PILLAY
          </h1>

          <p
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)',
              fontStyle: 'italic',
              color: 'var(--np-muted)',
              marginBottom: '2.5rem',
              lineHeight: 1.5,
              maxWidth: '36rem',
            }}
          >
            The arithmetic does not lie. Even when the language does.
          </p>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a
              href={GUMROAD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Buy the book
            </a>
            <a
              href="https://realnadinex.substack.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              Read the writing
            </a>
          </div>
        </div>

        {/* Book cover */}
        <div
          className="book-cover-placeholder"
          style={{
            width: 'clamp(140px, 18vw, 220px)',
            aspectRatio: '2/3',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.5rem 1rem',
            gap: '0.75rem',
            flexShrink: 0,
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
            Cover
          </div>
          <div
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: '0.85rem',
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
              width: '2rem',
              height: '1px',
              background: 'var(--np-accent)',
            }}
          />
          <div
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: '0.75rem',
              color: 'var(--np-muted)',
              textAlign: 'center',
            }}
          >
            Nadine Pillay
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 600px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
          }
          .hero-grid > div:last-child {
            width: 160px !important;
          }
        }
      `}</style>
    </section>
  )
}

function BookArgumentSection() {
  return (
    <section
      style={{
        borderTop: '1px solid var(--np-border)',
        background: 'var(--np-surface)',
        padding: 'clamp(3rem, 6vw, 5rem) 1.5rem',
      }}
    >
      <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
        <div
          className="argument-grid"
          style={{ display: 'grid', gridTemplateColumns: '12rem 1fr', gap: '3rem', alignItems: 'start' }}
        >
          <div
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: '0.65rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'var(--np-muted)',
              paddingTop: '0.3rem',
            }}
          >
            What this book argues
          </div>
          <div>
            <p
              style={{
                fontFamily: "'Instrument Sans', sans-serif",
                fontSize: 'clamp(1rem, 1.8vw, 1.1rem)',
                lineHeight: 1.75,
                color: 'var(--np-text)',
                marginBottom: '1.25rem',
                maxWidth: '52rem',
              }}
            >
              Net zero is not a climate target. It is an accounting structure — one designed to
              defer the cost of atmospheric damage across decades and assign its settlement to the
              countries least responsible for creating it. <em>The Carbon Ledger</em> traces the
              legal, financial, and technical architecture through which the sky was enclosed,
              development was converted to debt, and the vocabulary of rescue was placed in service
              of extraction.
            </p>
            <p
              style={{
                fontFamily: "'Instrument Sans', sans-serif",
                fontSize: 'clamp(1rem, 1.8vw, 1.1rem)',
                lineHeight: 1.75,
                color: 'var(--np-text)',
                maxWidth: '52rem',
              }}
            >
              The arithmetic has always been available. This book makes it visible.
            </p>
            <div style={{ marginTop: '2rem' }}>
              <a
                href="/the-book"
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: '0.7rem',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'var(--np-accent)',
                  borderBottom: '1px solid var(--np-accent)',
                  paddingBottom: '2px',
                  transition: 'opacity 0.15s ease',
                }}
              >
                More about the book →
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .argument-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}

function PullQuoteSection() {
  return (
    <section
      style={{
        padding: 'clamp(3rem, 6vw, 5rem) 1.5rem',
      }}
    >
      <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
        <blockquote className="pull-quote">
          <p>
            "Four systems. One argument. The equation is this: you are the minus. They are the
            plus. The sum is always zero. The profit is always theirs."
          </p>
          <cite>— The Carbon Ledger, Chapter 3</cite>
        </blockquote>
      </div>
    </section>
  )
}

function BlogPreviewSection({ posts }: { posts: RssPost[] }) {
  return (
    <section
      id="writing"
      style={{
        borderTop: '1px solid var(--np-border)',
        padding: 'clamp(3rem, 6vw, 5rem) 1.5rem',
      }}
    >
      <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'baseline',
            marginBottom: '2.5rem',
          }}
        >
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
              fontWeight: 400,
              color: 'var(--np-text)',
            }}
          >
            Recent Writing
          </h2>
          <a
            href="/writing"
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: '0.65rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'var(--np-muted)',
              transition: 'color 0.15s ease',
            }}
            onMouseEnter={(e) => ((e.target as HTMLElement).style.color = 'var(--np-accent)')}
            onMouseLeave={(e) => ((e.target as HTMLElement).style.color = 'var(--np-muted)')}
          >
            All posts →
          </a>
        </div>

        <div>
          {posts.map((post, i) => (
            <PostEntry key={i} post={post} />
          ))}
        </div>
      </div>
    </section>
  )
}

function PostEntry({ post }: { post: RssPost }) {
  return (
    <a
      href={post.link}
      target="_blank"
      rel="noopener noreferrer"
      className="post-card"
      style={{ display: 'block' }}
    >
      <div
        style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: '0.65rem',
          letterSpacing: '0.1em',
          color: 'var(--np-muted)',
          marginBottom: '0.5rem',
        }}
      >
        {post.dateFormatted}
      </div>
      <h3
        style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)',
          fontWeight: 500,
          color: 'var(--np-text)',
          marginBottom: '0.5rem',
          lineHeight: 1.3,
          transition: 'color 0.15s ease',
        }}
        className="hover-accent"
      >
        {post.title}
      </h3>
      {post.excerpt && (
        <p
          style={{
            fontFamily: "'Instrument Sans', sans-serif",
            fontSize: '0.9rem',
            color: 'var(--np-muted)',
            lineHeight: 1.6,
            marginBottom: '0.75rem',
          }}
        >
          {post.excerpt}
        </p>
      )}
      <span
        style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: '0.65rem',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          color: 'var(--np-accent)',
        }}
      >
        Read →
      </span>
    </a>
  )
}

export function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer
      style={{
        borderTop: '1px solid var(--np-border)',
        background: 'var(--np-surface)',
        padding: '3rem 1.5rem',
        marginTop: '2rem',
      }}
    >
      <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'start',
            flexWrap: 'wrap',
            gap: '2rem',
            marginBottom: '2.5rem',
          }}
        >
          <div>
            <div
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: '1.1rem',
                fontWeight: 500,
                color: 'var(--np-text)',
                marginBottom: '0.5rem',
              }}
            >
              Nadine Pillay
            </div>
            <div
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: '0.65rem',
                color: 'var(--np-muted)',
                letterSpacing: '0.05em',
              }}
            >
              Author · Analyst · Narrative Architect
            </div>
          </div>

          <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', alignItems: 'center' }}>
            {[
              { label: 'Buy the Book', href: GUMROAD_URL, title: 'Buy The Carbon Ledger on Gumroad' },
              { label: 'Substack', href: 'https://realnadinex.substack.com', title: 'Substack' },
              { label: 'LinkedIn', href: 'https://www.linkedin.com/in/realnadinex/', title: 'LinkedIn' },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                title={link.title}
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: '0.65rem',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'var(--np-muted)',
                  transition: 'color 0.15s ease',
                }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = 'var(--np-accent)')}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = 'var(--np-muted)')}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div
          style={{
            borderTop: '1px solid var(--np-border)',
            paddingTop: '1.5rem',
            display: 'flex',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
          }}
        >
          <span
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: '0.6rem',
              color: 'var(--np-muted)',
              letterSpacing: '0.05em',
            }}
          >
            © {year} Nadine Pillay. All rights reserved.
          </span>
          <span
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: '0.6rem',
              color: 'var(--np-muted)',
              letterSpacing: '0.05em',
              maxWidth: '42rem',
            }}
          >
            This site does not use cookies or collect personal data beyond standard server logs.
            In accordance with POPIA (South Africa), no personal information is stored or shared
            without consent.
          </span>
        </div>
      </div>
    </footer>
  )
}
