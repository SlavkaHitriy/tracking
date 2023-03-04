import cn from 'classnames'
import React from 'react'

// Styles
import styles from './index.module.scss'

export const SettingsSatelliteTrackers = () => {
    return (
        <div className={cn(styles.settingsWrap, styles.settingsSatellite)}>
            Satellite
        </div>
    )
}
