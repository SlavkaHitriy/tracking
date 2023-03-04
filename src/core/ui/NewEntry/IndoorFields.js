import React, { useRef } from 'react'

// Styles
import styles from './index.module.scss'

// Data
import { trackersSelectData } from '../../../data/trackersSelect'
import { prioritySelectData } from '../../../data/prioritySelect'
import { statusSelectData } from '../../../data/statusSelect'

// Components
import { Select } from '../common/Select'

export const IndoorFields = () => {
    const trackers = useRef(trackersSelectData)
    const priority = useRef(prioritySelectData)
    const statuses = useRef(statusSelectData)

    return (
        <>
            <div className={styles.entryItem}>
                <div className={styles.entryItemName}>
                    Tracker
                </div>
                <div className={styles.entryItemValue}>
                    <Select
                        className={styles.entryItemSelect}
                        values={trackers.current}
                    />
                </div>
            </div>
            <div className={styles.entryItem}>
                <div className={styles.entryItemName}>
                    Priority
                </div>
                <div className={styles.entryItemValue}>
                    <Select
                        className={styles.entryItemSelect}
                        values={priority.current}
                    />
                </div>
            </div>
            <div className={styles.entryItem}>
                <div className={styles.entryItemName}>
                    Order/Router
                </div>
                <div className={styles.entryItemValue}>10287870</div>
            </div>
            <div className={styles.entryItem}>
                <div className={styles.entryItemName}>
                    Status Notification
                </div>
                <div className={styles.entryItemValue}>
                    <Select
                        className={styles.entryItemSelect}
                        values={statuses.current}
                    />
                </div>
            </div>
        </>
    )
}
