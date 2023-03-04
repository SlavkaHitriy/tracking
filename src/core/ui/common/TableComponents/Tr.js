import React from 'react'
import cn from 'classnames'

// Styles
import styles from './index.module.scss'

export const Tr = ({ className, children, onClick }) => {
    return (
        <tr
            className={cn(styles.tr, {
                [className]: className,
            })}
            onClick={onClick}
        >
            {children}
        </tr>
    )
}
