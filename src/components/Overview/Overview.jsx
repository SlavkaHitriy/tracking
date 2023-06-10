import cn from 'classnames';
import React from 'react';

// Data
import { overviewProgressData } from '../../data/overviewProgress';
// Components
import { Progress } from '../Progress';
import { GridBox } from '../common/GridBox';
import { GridName } from '../common/GridName';
import { GridValue } from '../common/GridValue';
import { SvgSprite } from '../common/SvgSprite/SvgSprite.jsx';
import { Title } from '../common/Title';
// Styles
import styles from './index.module.scss';

export const Overview = ({ indoor }) => {
    return (
        <div className={styles.overview}>
            <div className={styles.overviewContent}>
                <Title className={cn(styles.overviewTitle, 'mb-6')}>
                    <SvgSprite className={'mr-3'} spriteID={'track'} />
                    Commercial: 23423244
                </Title>
                <GridBox template={'60% 40%'} className={styles.overviewBox}>
                    {indoor ? (
                        <>
                            <div>
                                <GridName>Current Zone</GridName>
                                <GridValue>Shipping Area</GridValue>
                            </div>
                            <div>
                                <GridName>Process ID</GridName>
                                <GridValue>10058</GridValue>
                            </div>
                            <div>
                                <GridName>Priority</GridName>
                                <GridValue>Normal</GridValue>
                            </div>
                            <div>
                                <GridName className={styles.overviewTracker}>
                                    Tracker <span />
                                </GridName>
                                <GridValue>Trk-1002</GridValue>
                            </div>
                            <div className={styles.overviewFullWidth}>
                                <GridName>Description</GridName>
                                <GridValue>
                                    Stock Brick, 1,200 LBS, Black-Route, 1220
                                </GridValue>
                            </div>
                        </>
                    ) : (
                        <>
                            <div>
                                <GridName>Rig Name</GridName>
                                <GridValue>Ocean Rig 107</GridValue>
                            </div>
                            <div>
                                <GridName>Asset Type</GridName>
                                <GridValue>Drill Pipe</GridValue>
                            </div>
                            <div>
                                <GridName>Service Provider</GridName>
                                <GridValue>ACME Company</GridValue>
                            </div>
                            <div>
                                <GridName>Archive</GridName>
                                <GridValue>1000233</GridValue>
                            </div>
                            <div>
                                <GridName>Commercial Invoice</GridName>
                                <GridValue>23423244</GridValue>
                            </div>
                            <div>
                                <GridName>Bundles</GridName>
                                <GridValue>None</GridValue>
                            </div>
                        </>
                    )}
                </GridBox>
                <GridBox template={'60% 40%'} className={styles.overviewBox}>
                    <div>
                        <GridName>Create Date</GridName>
                        <GridValue>October 1, 2022 9:36 AM</GridValue>
                    </div>
                    <div>
                        <GridName>Created By</GridName>
                        <GridValue>Bob Moore</GridValue>
                    </div>
                    <div>
                        <GridName>Last Updated</GridName>
                        <GridValue>November 08, 2022 12:02 PM</GridValue>
                    </div>
                    <div>
                        <GridName>Last Updated By</GridName>
                        <GridValue>John Smally</GridValue>
                    </div>
                </GridBox>
                <div className={styles.overviewWrap}>
                    <GridBox columns={2}>
                        {indoor ? (
                            <>
                                <div>
                                    <div className={styles.overviewBottomName}>
                                        Status
                                    </div>
                                    <div className={styles.overviewBottomValue}>
                                        In Process
                                    </div>
                                </div>
                                <div>
                                    <div className={styles.overviewBottomName}>
                                        Zone Duration
                                    </div>
                                    <div className={styles.overviewBottomValue}>
                                        24:23
                                    </div>
                                </div>
                                <div>
                                    <div className={styles.overviewBottomName}>
                                        Total Time
                                    </div>
                                    <div className={styles.overviewBottomValue}>
                                        48:25
                                    </div>
                                </div>
                                <div>
                                    <div className={styles.overviewBottomName}>
                                        Battery
                                    </div>
                                    <div className={styles.overviewBottomValue}>
                                        65%
                                    </div>
                                </div>
                            </>
                        ) : (
                            <>
                                <div>
                                    <div className={styles.overviewBottomName}>
                                        Tracked Items
                                    </div>
                                    <div className={styles.overviewBottomValue}>
                                        50
                                    </div>
                                </div>
                                <div>
                                    <div className={styles.overviewBottomName}>
                                        Active Time
                                    </div>
                                    <div className={styles.overviewBottomValue}>
                                        2 Days
                                    </div>
                                </div>
                                <div>
                                    <div className={styles.overviewBottomName}>
                                        Idle Time
                                    </div>
                                    <div className={styles.overviewBottomValue}>
                                        18:05
                                    </div>
                                </div>
                                <div>
                                    <div className={styles.overviewBottomName}>
                                        Total Trip
                                    </div>
                                    <div className={styles.overviewBottomValue}>
                                        2 Weeks
                                    </div>
                                </div>
                            </>
                        )}
                    </GridBox>
                </div>
            </div>
            <div className={styles.overviewProgress}>
                <Progress
                    title={'Progress'}
                    subtitle={'Steps'}
                    data={overviewProgressData}
                />
            </div>
        </div>
    );
};