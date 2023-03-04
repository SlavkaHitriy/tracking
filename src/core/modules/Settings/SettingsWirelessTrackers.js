import cn from 'classnames'
import React from 'react'

// Styles
import styles from './index.module.scss'

export const SettingsWirelessTrackers = () => {
    return (
        <div className={cn(styles.settingsWrap, styles.settingsWireless)}>
            Wireless
        </div>
    )
}
