import cn from 'classnames'
import React from 'react'

// Styles
import styles from './index.module.scss'

export const SettingsManager = () => {
    return (
        <div className={cn(styles.settingsWrap, styles.settingsManager)}>
            Manager
        </div>
    )
}
