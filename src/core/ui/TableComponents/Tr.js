import React from 'react'

// Styles
import styles from './index.module.scss'

export const Tr = ({children}) => {
    return (
        <tr className={styles.tr}>
            {children}
        </tr>
    )
}
