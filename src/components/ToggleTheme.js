import React from 'react'
import PropTypes from 'prop-types'
import { ThemeToggler } from 'gatsby-plugin-dark-mode'
import toggleThemeStyle from './ToggleTheme.module.css';

class ToggleTheme extends React.PureComponent {
  render() {
    console.log('', )
    return (
      <div className={toggleThemeStyle.toggleThemeContainer}>
        <ThemeToggler>
          {({ theme, toggleTheme }) => (
            <label className={toggleThemeStyle.switch}>
              <input
                type="checkbox"
                onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
                checked={theme === 'dark'}
              />{' '}
              <div className={`${toggleThemeStyle.slider} ${toggleThemeStyle.round}`}/>
            </label>
          )}
        </ThemeToggler>
      </div>
    )
  }
}

ToggleTheme.propTypes = {}

export default ToggleTheme
