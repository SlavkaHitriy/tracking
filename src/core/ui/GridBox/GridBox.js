import React from 'react'
import cn from 'classnames'

// Styles
import styles from './index.module.scss'

export const GridBox = ({className, children, columns, template}) => {
    return (
        <div className={cn(styles.gridBox, {
            [className]: className
        })} style={{gridTemplateColumns: columns ? `repeat(${columns}, 1fr)` : template}}>
            {children}
        </div>
    )
}
