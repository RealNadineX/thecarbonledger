import { createServerFn } from '@tanstack/react-start'

// Substack RSS feed — pulls all published essays from realnadinex.substack.com
const RSS_FEED_URL =
  process.env.RSS_FEED_URL || 'https://realnadinex.substack.com/feed'

export interface RssPost {
  title: string
  date: string
  dateFormatted: string
  excerpt: string
  link: string
}

function parseAtomFeed(xml: string): RssPost[] {
  const posts: RssPost[] = []
  // Support both Atom (<entry>) and RSS (<item>)
  const entryRegex = /<(?:entry|item)[\s>]([\s\S]*?)<\/(?:entry|item)>/g
  let match: RegExpExecArray | null

  while ((match = entryRegex.exec(xml)) !== null) {
    const entry = match[1]

    // Title
    const titleMatch =
      entry.match(/<title[^>]*>(?:<!\[CDATA\[)?([\s\S]*?)(?:\]\]>)?<\/title>/) ||
      entry.match(/<title[^>]*\/?>/)
    const title = titleMatch ? titleMatch[1].trim() : ''

    // Link — Atom uses <link href="..." />, RSS uses <link>url</link>
    const linkAtomMatch = entry.match(/<link[^>]+href=["']([^"']+)["']/)
    const linkRssMatch = entry.match(/<link[^>]*>(?:<!\[CDATA\[)?([\s\S]*?)(?:\]\]>)?<\/link>/)
    const link = linkAtomMatch
      ? linkAtomMatch[1].trim()
      : linkRssMatch
        ? linkRssMatch[1].trim()
        : ''

    // Date — Atom: <published> or <updated>, RSS: <pubDate>
    const dateMatch =
      entry.match(/<published[^>]*>([\s\S]*?)<\/published>/) ||
      entry.match(/<updated[^>]*>([\s\S]*?)<\/updated>/) ||
      entry.match(/<pubDate[^>]*>([\s\S]*?)<\/pubDate>/)
    const rawDate = dateMatch ? dateMatch[1].trim() : ''
    const dateObj = rawDate ? new Date(rawDate) : new Date()
    const dateFormatted = isNaN(dateObj.getTime())
      ? ''
      : dateObj.toLocaleDateString('en-GB', {
          day: 'numeric',
          month: 'long',
          year: 'numeric',
        })

    // Excerpt — Atom: <summary> or <content>, RSS: <description>
    const summaryMatch =
      entry.match(/<summary[^>]*>(?:<!\[CDATA\[)?([\s\S]*?)(?:\]\]>)?<\/summary>/) ||
      entry.match(/<description[^>]*>(?:<!\[CDATA\[)?([\s\S]*?)(?:\]\]>)?<\/description>/) ||
      entry.match(/<content[^>]*>(?:<!\[CDATA\[)?([\s\S]*?)(?:\]\]>)?<\/content>/)
    const rawSummary = summaryMatch ? summaryMatch[1].trim() : ''

    // Strip HTML tags for plain text excerpt
    const plainText = rawSummary.replace(/<[^>]+>/g, '').replace(/&[a-z]+;/gi, ' ').trim()
    const excerpt = plainText.length > 120 ? plainText.slice(0, 120).trimEnd() + '…' : plainText

    if (title && link) {
      posts.push({
        title,
        date: rawDate,
        dateFormatted,
        excerpt,
        link,
      })
    }
  }

  return posts
}

export const fetchRssFeed = createServerFn({ method: 'GET' })
  .inputValidator((data: { limit?: number }) => data)
  .handler(async ({ data }) => {
    const limit = data?.limit ?? 0

    try {
      const response = await fetch(RSS_FEED_URL, {
        headers: { Accept: 'application/atom+xml, application/rss+xml, application/xml, text/xml' },
        signal: AbortSignal.timeout(6000),
      })

      if (!response.ok) {
        return [] as RssPost[]
      }

      const xml = await response.text()
      const posts = parseAtomFeed(xml)
      return (limit > 0 ? posts.slice(0, limit) : posts) as RssPost[]
    } catch {
      return [] as RssPost[]
    }
  })
