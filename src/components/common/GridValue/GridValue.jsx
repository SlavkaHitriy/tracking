import React from 'react'
import cn from 'classnames'

// Styles
import styles from './index.module.scss'

export const GridValue = ({className, children}) => {
    return (
        <div className={cn(styles.gridValue, {
            [className]: className
        })}>
            {children}
        </div>
    )
}
