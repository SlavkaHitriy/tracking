import cn from 'classnames'
import React from 'react'

// Styles
import styles from './index.module.scss'

export const SettingsGateways = () => {
    return (
        <div className={cn(styles.settingsWrap, styles.settingsGateways)}>
            Gateways
        </div>
    )
}
