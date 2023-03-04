import cn from 'classnames'
import React from 'react'

// Styles
import styles from './index.module.scss'

export const SettingsServiceProviders = () => {
    return (
        <div className={cn(styles.settingsWrap, styles.settingsProdivers)}>
            Providers
        </div>
    )
}
