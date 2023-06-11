import React from 'react';

// Data
import { briefInfoProgressData } from '../../data/briefInfoProgress';
// Components
import { Progress } from '../Progress';
import { DefaultButton } from '../common/DefaultButton';
// Styles
import styles from './index.module.scss';

export const BriefInfo = ({ setActivePopup, indoor }) => {
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
                    {indoor ? (
                        <div className={styles.infoItem}>
                            <div className={styles.infoName}>Zone Duration</div>
                            <div className={styles.infoValue}>24:23</div>
                        </div>
                    ) : (
                        <div className={styles.infoItem}>
                            <div className={styles.infoName}>Asset Type</div>
                            <div className={styles.infoValue}>Brick Load</div>
                        </div>
                    )}
                </div>
                <div className={styles.infoItem}>
                    <div className={styles.infoName}>Description</div>
                    <div className={styles.infoValue}>
                        Stock Brick, 1,200 LBS, Black-Route, 1220
                    </div>
                </div>
            </div>
            <DefaultButton
                className={styles.infoBtn}
                text={'More detail'}
                onClick={() => setActivePopup('info')}
                standard
            />
        </div>
    );
};
