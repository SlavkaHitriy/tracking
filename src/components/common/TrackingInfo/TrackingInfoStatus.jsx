import cn from 'classnames'
import React from 'react'

import styles from './index.module.scss'

export const TrackingInfoStatus = ({ statusCode }) => {
    return (
        <div
            className={cn(styles.infoStatus, {
                [styles.infoStatusOnline]: statusCode === 1,
                [styles.infoStatusOffline]: statusCode === 2,
            })}
        >
            {statusCode === 1 && 'Online'}
            {statusCode === 2 && 'Offline'}
            <span />
        </div>
    )
}
