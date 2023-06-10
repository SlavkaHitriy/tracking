import React from 'react'

import styles from './index.module.scss'

export const TrackingInfoValue = ({ children }) => {
    return <div className={styles.infoValue}>{children}</div>
}
