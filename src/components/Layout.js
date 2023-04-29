/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import { MDXProvider } from '@mdx-js/react'

import { mainContainer, toggleContainer } from './layout.module.css'
import Header from './Header'
// import Toggle from 'react-toggle'
import 'react-toggle/style.css' // for ES6 modules
// import Helmet from 'react-helmet'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
library.add(fab, faCheckSquare, faCoffee)

const Layout = ({ children }) => {
    const [mode, setMode] = useState('light')
    const [isMenuActive, setIsMenuActive] = useState(false)
    // useEffect(() => {
    //     setTheme({
    //         theme: window.__theme,
    //     })
    // }, [])

    const handleMenuClick = () => {
        setIsMenuActive({
            isMenuActive: !isMenuActive,
        })
    }
    return (
        <StaticQuery
            query={graphql`
                query SiteTitleQuery {
                    site {
                        siteMetadata {
                            title
                            menuLinks {
                                name
                                link
                            }
                        }
                    }
                }
            `}
            render={(data) =>
                console.log('data', data) || (
                    <>
                        {/*<Helmet*/}
                        {/*    meta={[*/}
                        {/*        {*/}
                        {/*            name: 'theme-color',*/}
                        {/*            content:*/}
                        {/*                this.state.theme === 'light'*/}
                        {/*                    ? '#ffa8c5'*/}
                        {/*                    : '#282c35',*/}
                        {/*        },*/}
                        {/*    ]}*/}
                        {/*/>*/}
                        <Header
                            mode={mode}
                            onMenuClick={handleMenuClick}
                            siteTitle={data.site.siteMetadata.title}
                            menuLinks={data.site.siteMetadata.menuLinks}
                        />
                        {/*<div className={toggleContainer}>*/}
                        {/*    {this.state.theme !== null ? (*/}
                        {/*        <Toggle*/}
                        {/*            aria-label="darktheme"*/}
                        {/*            icons={false}*/}
                        {/*            className="toggle-theme"*/}
                        {/*            checked={this.state.theme === 'dark'}*/}
                        {/*            onChange={(e) =>*/}
                        {/*                window.__setPreferredTheme(*/}
                        {/*                    e.target.checked ? 'dark' : 'light'*/}
                        {/*                )*/}
                        {/*            }*/}
                        {/*        />*/}
                        {/*    ) : (*/}
                        {/*        <div style={{ height: '24px' }} />*/}
                        {/*    )}*/}
                        {/*</div>*/}
                        <div className={mainContainer}>
                            <MDXProvider>{children}</MDXProvider>
                        </div>
                    </>
                )
            }
        />
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
