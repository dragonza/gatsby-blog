import React from 'react'
import * as prevNextStyles from './PrevNext.module.css'
const PrevNext = (props) => {
    const { prev, next } = props

    return (
        <div>
            <ul className={prevNextStyles.prevNexContainer}>
                {prev && (
                    <li className={prevNextStyles.prev}>
                        <a href={prev.fields.slug}>
                            {' '}
                            &#x0003C;&#x0003C; {prev.frontmatter.title}
                        </a>
                    </li>
                )}
                {next && (
                    <li className={prevNextStyles.next}>
                        <a href={next.fields.slug}>
                            {next.frontmatter.title} &#x0003E;&#x0003E;
                        </a>
                    </li>
                )}
            </ul>
        </div>
    )
}

export default PrevNext
