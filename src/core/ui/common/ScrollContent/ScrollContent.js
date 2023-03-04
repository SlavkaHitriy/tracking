import cn from 'classnames'
import React, { useRef } from 'react'

import { useFindElementHeight } from '../../../hooks/useFindElementHeight'
// Styles
import styles from './index.module.scss'

export const ScrollContent = ({ children, className }) => {
    const contentEl = useRef()
    const elementHeight = useFindElementHeight(contentEl)

    return (
        <div
            ref={contentEl}
            style={{ height: `${elementHeight}px` }}
            className={cn(styles.content, {
                [className]: className,
            })}
        >
            {children}
        </div>
    )
}
