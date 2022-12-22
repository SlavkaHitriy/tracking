import React from 'react'

// Styles
import styles from './index.module.scss'

export const THead = ({children}) => {
    return (
        <thead className={styles.thead}>
            {children}
        </thead>
    )
}
