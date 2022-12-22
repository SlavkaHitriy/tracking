import React from 'react'

// Styles
import styles from './index.module.scss'

export const Table = ({children}) => {
    return (
        <table className={styles.table}>
            {children}
        </table>
    )
}
