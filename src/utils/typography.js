import Typography from 'typography'
import oceanBeachTheme from 'typography-theme-ocean-beach'

oceanBeachTheme.overrideThemeStyles = ({ rhythm }, options) => ({
  a: {
    // color: '#222',
    textDecoration: 'none',
    backgroundImage: 'none',
    textShadow: 'none',
    color: 'var(--textLink)',
  },
  // gatsby-remark-autolink-headers - don't underline when hidden
  'a.anchor': {
    boxShadow: 'none',
  },
  // gatsby-remark-autolink-headers - use theme colours for the link icon
  'a.anchor svg[aria-hidden="true"]': {
    stroke: 'var(--textLink)',
  },
  hr: {
    background: 'var(--hr)',
  },
  'h1, h2, h3': {
    color: 'var(--textTitle)',
  },
  ul: {
    listStyle: 'none',
    margin: 0
  },
  pre: {
    fontSize: 'inherit'
  },
  blockquote: {
    color: 'var(--textNormal)',
  }
})
const typography = new Typography(oceanBeachTheme)

// Export helper functions
export const { scale, rhythm, options } = typography
export default typography
