import cn from 'classnames'
import React from 'react'

// Styles
import styles from './index.module.scss'

export const SettingsConfiguration = () => {
    return (
        <div className={cn(styles.settingsWrap, styles.settingsConf)}>
            Configuration
        </div>
    )
}
