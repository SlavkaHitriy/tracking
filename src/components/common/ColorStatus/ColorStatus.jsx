import React, { useRef } from 'react'

// Styles
import styles from './index.module.scss'

export const ColorStatus = ({ code }) => {
    const colors = useRef({
        1: '#76C278',
        2: '#51A2F7',
        3: '#E83880',
    })

    return (
        <div
            className={styles.status}
            style={{
                backgroundColor: colors.current[code] || '#76C278',
            }}
        />
    )
}
