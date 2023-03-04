import React from 'react'
import cn from 'classnames'

// Styles
import styles from './index.module.scss'

export const Tab = ({ active, children, onClick }) => {
    return (
        <div
            className={cn(styles.tab, {
                [styles.tabActive]: active,
            })}
            onClick={onClick}
        >
            {children}
        </div>
    )
}
