import { HeadContent, Scripts, createRootRoute, Link, useRouterState } from '@tanstack/react-router'
import '../styles.css'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'Nadine Pillay' },
      {
        name: 'description',
        content:
          'Nadine Pillay is a South African author and analyst. Her debut book, The Carbon Ledger, examines how net zero climate frameworks function as debt mechanisms — and who pays.',
      },
      { property: 'og:site_name', content: 'Nadine Pillay' },
      { property: 'og:type', content: 'website' },
      { name: 'theme-color', content: '#0a0a08' },
    ],
    links: [
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,600&family=Instrument+Sans:wght@300;400;500;600&family=DM+Mono:wght@300;400;500&display=swap',
      },
    ],
  }),
  shellComponent: RootDocument,
})

function SiteNav() {
  const router = useRouterState()
  const pathname = router.location.pathname

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/the-book', label: 'The Book' },
    { to: '/writing', label: 'Writing' },
  ]

  return (
    <nav className="site-nav">
      <div
        style={{
          maxWidth: '72rem',
          margin: '0 auto',
          padding: '0 1.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '4rem',
        }}
      >
        <Link
          to="/"
          style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: '0.7rem',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: 'var(--np-accent)',
            fontWeight: 500,
          }}
        >
          Nadine Pillay
        </Link>

        <div
          style={{
            display: 'flex',
            gap: '2rem',
            alignItems: 'center',
          }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: '0.7rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color:
                  pathname === link.to
                    ? 'var(--np-accent)'
                    : 'var(--np-muted)',
                transition: 'color 0.15s ease',
                fontWeight: 400,
              }}
              onMouseEnter={(e) => {
                if (pathname !== link.to)
                  (e.target as HTMLElement).style.color = 'var(--np-text)'
              }}
              onMouseLeave={(e) => {
                if (pathname !== link.to)
                  (e.target as HTMLElement).style.color = 'var(--np-muted)'
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <SiteNav />
        <main className="fade-in">{children}</main>
        <Scripts />
      </body>
    </html>
  )
}
