import React from 'react'

// Styles
import styles from './index.module.scss'

// Data
import { briefInfoProgressData } from '../../../data/briefInfoProgress'

// Components
import { Progress } from '../Progress'
import { Button } from '../Button'

export const BriefInfo = ({ setOpenedBriefInfo }) => {
    return (
        <div className={styles.info}>
            <div className={styles.infoProgressWrap}>
                <Progress
                    data={briefInfoProgressData}
                    title={'23423244'}
                    subtitle={'Commercial Invoice'}
                />
            </div>
            <div className={styles.infoContent}>
                <div className={styles.infoBox}>
                    <div className={styles.infoItem}>
                        <div className={styles.infoName}>Service Provider</div>
                        <div className={styles.infoValue}>ACME Company</div>
                    </div>
                    <div className={styles.infoItem}>
                        <div className={styles.infoName}>Asset Type</div>
                        <div className={styles.infoValue}>Brick Load</div>
                    </div>
                </div>
                <div className={styles.infoItem}>
                    <div className={styles.infoName}>Description</div>
                    <div className={styles.infoValue}>
                        Stock Brick, 1,200 LBS, Black-Route, 1220
                    </div>
                </div>
            </div>
            <Button
                className={styles.infoBtn}
                text={'More detail'}
                onClick={() => setOpenedBriefInfo(false)}
                standard
            />
        </div>
    )
}
