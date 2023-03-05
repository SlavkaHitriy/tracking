import React, { useRef } from 'react'

import { prioritySelectData } from '../../../data/prioritySelect'
import { statusSelectData } from '../../../data/statusSelect'
// Data
import { trackersSelectData } from '../../../data/trackersSelect'
import { InfoItem } from '../common/InfoItem'
// Styles
import styles from './index.module.scss'

export const IndoorFields = () => {
    const trackers = useRef(trackersSelectData)
    const priority = useRef(prioritySelectData)
    const statuses = useRef(statusSelectData)

    return (
        <>
            <InfoItem
                className={styles.entryItem}
                name={'Tracker'}
                selectValues={trackers.current}
            />
            <InfoItem
                className={styles.entryItem}
                name={'Priority'}
                selectValues={priority.current}
            />
            <InfoItem
                className={styles.entryItem}
                name={'Order/Router'}
                value={'10287870'}
            />
            <InfoItem
                className={styles.entryItem}
                name={'ColorStatus Notification'}
                selectValues={statuses.current}
            />
        </>
    )
}
