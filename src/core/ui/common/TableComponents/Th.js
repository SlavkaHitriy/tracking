import React from 'react'

// Styles
import styles from './index.module.scss'

export const Th = ({children, width}) => {
    return (
        <th className={styles.th} style={{width: width}}>
            {children}
        </th>
    )
}
