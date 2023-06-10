import React from 'react'
import cn from 'classnames'

// Styles
import styles from './index.module.scss'

export const Td = ({className, children}) => {
    return (
        <td className={cn(styles.td, {
            [className]: className,
        })}>
            {children}
        </td>
    )
}
