import React from 'react'
import cn from 'classnames'

// Styles
import styles from './index.module.scss'

export const Title = ({className, children}) => {
    return (
        <h3 className={cn(styles.title, {
            [className]: className
        })}>
            {children}
        </h3>
    )
}
