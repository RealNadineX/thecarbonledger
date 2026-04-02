import { createFileRoute } from '@tanstack/react-router'
import { fetchRssFeed, type RssPost } from '@/server/rss.functions'
import { SiteFooter } from './index'

export const Route = createFileRoute('/writing')({
  head: () => ({
    meta: [
      { title: 'Writing — Nadine Pillay' },
      {
        name: 'description',
        content:
          'Essays and analysis by Nadine Pillay on climate finance, net zero accountability, and the politics of carbon accounting.',
      },
    ],
  }),
  loader: async () => {
    const posts = await fetchRssFeed({ data: { limit: 0 } })
    return { posts }
  },
  component: WritingPage,
})

function WritingPage() {
  const { posts } = Route.useLoaderData()

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
            marginBottom: '1rem',
          }}
        >
          Writing
        </div>

        <h1
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: 'clamp(2.5rem, 6vw, 4rem)',
            fontWeight: 400,
            lineHeight: 1.05,
            letterSpacing: '-0.02em',
            color: 'var(--np-text)',
            marginBottom: '1rem',
          }}
        >
          Essays &amp; Analysis
        </h1>

        <p
          style={{
            fontFamily: "'Instrument Sans', sans-serif",
            fontSize: '1rem',
            color: 'var(--np-muted)',
            lineHeight: 1.6,
            marginBottom: '3.5rem',
            maxWidth: '36rem',
          }}
        >
          Published on{' '}
          <a
            href="https://realnadinex.substack.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: 'var(--np-accent)',
              borderBottom: '1px solid var(--np-accent)',
              paddingBottom: '1px',
            }}
          >
            Substack
          </a>
          . Each post links out to the full text.
        </p>

        {posts && posts.length > 0 ? (
          <PostList posts={posts} />
        ) : (
          <EmptyState />
        )}
      </div>
      <SiteFooter />
    </>
  )
}

function PostList({ posts }: { posts: RssPost[] }) {
  return (
    <div>
      {posts.map((post, i) => (
        <a
          key={i}
          href={post.link}
          target="_blank"
          rel="noopener noreferrer"
          className="post-card"
          style={{ display: 'block' }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'baseline',
              flexWrap: 'wrap',
              gap: '0.5rem',
              marginBottom: '0.5rem',
            }}
          >
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)',
                fontWeight: 500,
                color: 'var(--np-text)',
                lineHeight: 1.3,
                transition: 'color 0.15s ease',
              }}
              className="hover-accent"
            >
              {post.title}
            </h2>
            <span
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: '0.65rem',
                letterSpacing: '0.08em',
                color: 'var(--np-muted)',
                flexShrink: 0,
              }}
            >
              {post.dateFormatted}
            </span>
          </div>

          {post.excerpt && (
            <p
              style={{
                fontFamily: "'Instrument Sans', sans-serif",
                fontSize: '0.9rem',
                color: 'var(--np-muted)',
                lineHeight: 1.65,
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
      ))}
    </div>
  )
}

function EmptyState() {
  return (
    <div
      style={{
        borderTop: '1px solid var(--np-border)',
        paddingTop: '2.5rem',
        paddingBottom: '2.5rem',
      }}
    >
      <p
        style={{
          fontFamily: "'Instrument Sans', sans-serif",
          fontSize: '1rem',
          color: 'var(--np-muted)',
          lineHeight: 1.65,
          marginBottom: '1.5rem',
        }}
      >
        Writing is published on Substack. Subscribe to receive new essays directly.
      </p>
      <a
        href="https://realnadinex.substack.com"
        target="_blank"
        rel="noopener noreferrer"
        className="btn-secondary"
      >
        Visit Substack ↗
      </a>
    </div>
  )
}
