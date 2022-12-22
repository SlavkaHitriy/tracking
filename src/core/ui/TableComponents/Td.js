import React from 'react'

// Styles
import styles from './index.module.scss'

export const Td = ({children}) => {
    return (
        <td className={styles.td}>
            {children}
        </td>
    )
}
