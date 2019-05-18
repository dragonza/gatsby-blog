import Typography from "typography"
import oceanBeachTheme from "typography-theme-ocean-beach"

oceanBeachTheme.overrideThemeStyles = ({ rhythm }, options) => ({
  a: {
    // color: '#222',
    textDecoration: 'none',
    backgroundImage: 'none',
    textShadow: 'none',
    color: 'var(--textLink)',

  }
})
const typography = new Typography(oceanBeachTheme)


// Export helper functions
export const { scale, rhythm, options } = typography
export default typography
