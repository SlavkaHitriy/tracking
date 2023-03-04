import React from 'react'

// Styles
import styles from './index.module.scss'

export const TBody = ({children}) => {
    return (
        <tbody className={styles.tbody}>
            {children}
        </tbody>
    )
}
