import React from 'react'
import cn from 'classnames'

// Styles
import styles from './index.module.scss'

export const GridName = ({className, children}) => {
    return (
        <div className={cn(styles.gridName, {
            [className]: className
        })}>
            {children}
        </div>
    )
}
