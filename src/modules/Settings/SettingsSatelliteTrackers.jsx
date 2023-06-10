import cn from 'classnames';
import React, { useRef } from 'react';

import { Button } from '../../components/common/Button/index.js';
import { ColorStatus } from '../../components/common/ColorStatus/index.js';
import { CountItem } from '../../components/common/CountItem/index.js';
import { InfoItem } from '../../components/common/InfoItem/index.js';
import { Input } from '../../components/common/Input/index.js';
import { ScrollContent } from '../../components/common/ScrollContent/index.js';
import { Select } from '../../components/common/Select/index.js';
import { TBody } from '../../components/common/TableComponents/TBody.jsx';
import { THead } from '../../components/common/TableComponents/THead.jsx';
import { Table } from '../../components/common/TableComponents/Table.jsx';
import { Td } from '../../components/common/TableComponents/Td.jsx';
import { Th } from '../../components/common/TableComponents/Th.jsx';
import { Tr } from '../../components/common/TableComponents/Tr.jsx';
import { Title } from '../../components/common/Title/index.js';
import { TrackingInfo } from '../../components/common/TrackingInfo/index.js';
import { TrackingInfoDate } from '../../components/common/TrackingInfo/TrackingInfoDate.jsx';
import { TrackingInfoName } from '../../components/common/TrackingInfo/TrackingInfoName.jsx';
import { TrackingInfoStatus } from '../../components/common/TrackingInfo/TrackingInfoStatus.jsx';
import { TrackingInfoValue } from '../../components/common/TrackingInfo/TrackingInfoValue.jsx';
import { sitesData } from '../../data/sites.js';
import { testValuesData } from '../../data/testValues.js';
import { trackersData } from '../../data/trackers.js';
import { useInput } from '../../core/hooks/useInput.jsx';
import { SettingsActions } from './common/SettingsActions/index.js';
// Styles
import styles from './index.module.scss';

export const SettingsSatelliteTrackers = () => {
    const searchInp = useInput('');
    const trackers = useRef(trackersData);
    const testValues = useRef(testValuesData);
    const items = useRef(sitesData);

    return (
        <div className={cn(styles.settingsWrap, styles.settingsFlex)}>
            <div className={styles.settingsLeft}>
                <div className={styles.settingsHeader}>
                    <div className={cn(styles.settingsTitleWrap, 'mb-5')}>
                        <Title>Satellite Trackers</Title>
                        <Button
                            className={cn(styles.settingsTitleBtn, 'ml-3')}
                            onClick={() => {}}
                            plus
                        />
                    </div>
                    <div className={styles.settingsTrackers}>
                        {trackers.current.map((tracker) => (
                            <CountItem
                                className={styles.settingsTracker}
                                tracker={tracker}
                                key={tracker.id}
                            />
                        ))}
                    </div>
                </div>
                <div className={styles.settingsInfoContent}>
                    <div className={styles.settingsInfoContentHeader}>
                        <Select
                            className={styles.settingsFilter}
                            values={testValues.current}
                            staticValue={'View'}
                        />
                        <Input
                            className={cn(styles.settingsSearch, 'ml-4')}
                            placeholder={'Search...'}
                            {...searchInp}
                        />
                    </div>
                    <ScrollContent>
                        <Table>
                            <THead>
                                <Tr>
                                    <Th width={'140px'}>Tracker ID</Th>
                                    <Th width={'160px'}>Tracker Name</Th>
                                    <Th>Status</Th>
                                    <Th width={'20px'}></Th>
                                </Tr>
                            </THead>
                            <TBody>
                                {items.current.map((item) => (
                                    <Tr key={item.id}>
                                        <Td>{item.name}</Td>
                                        <Td>{item.email}</Td>
                                        <Td>{item.role}</Td>
                                        <Td>
                                            <ColorStatus code={item.status} />
                                        </Td>
                                    </Tr>
                                ))}
                            </TBody>
                        </Table>
                    </ScrollContent>
                </div>
            </div>
            <div className={styles.settingsRight}>
                <ScrollContent className={styles.settingsRightContent}>
                    <Title className={'mb-6'}>Details</Title>
                    <div className={styles.settingsRightBox}>
                        <InfoItem name={'Tracker ID'} value={'F-0x007ca4'} />
                        <InfoItem
                            name={'Tracker Name'}
                            value={'Tracker 12433'}
                        />
                        <InfoItem
                            name={'Status'}
                            selectValues={testValues.current}
                            bottomSelect
                        />
                        <InfoItem
                            name={'Manufacturer'}
                            selectValues={testValues.current}
                            bottomSelect
                        />
                    </div>
                    <div className={styles.settingsTrackingInfo}>
                        <TrackingInfo columns={5}>
                            <div>
                                <TrackingInfoName>Status</TrackingInfoName>
                                <TrackingInfoStatus statusCode={2} />
                            </div>
                            <div>
                                <TrackingInfoName>Date/Time</TrackingInfoName>
                                <TrackingInfoDate>
                                    11/01/22 12:23PM
                                </TrackingInfoDate>
                            </div>

                            <div>
                                <TrackingInfoName>Category</TrackingInfoName>
                                <TrackingInfoValue>TAG</TrackingInfoValue>
                            </div>
                            <div>
                                <TrackingInfoName>Serial Code</TrackingInfoName>
                                <TrackingInfoValue>
                                    aa:20:bb:12:00:12
                                </TrackingInfoValue>
                            </div>
                            <div>
                                <TrackingInfoName>Battery %</TrackingInfoName>
                                <TrackingInfoValue>95</TrackingInfoValue>
                            </div>
                            <div>
                                <TrackingInfoName>Heading</TrackingInfoName>
                                <TrackingInfoValue>-88.32</TrackingInfoValue>
                            </div>
                            <div>
                                <TrackingInfoName>Speed (m/s)</TrackingInfoName>
                                <TrackingInfoValue>23.1</TrackingInfoValue>
                            </div>
                            <div>
                                <TrackingInfoName>Coordinates</TrackingInfoName>
                                <TrackingInfoValue>
                                    -75.67088, 45.34612
                                </TrackingInfoValue>
                            </div>
                        </TrackingInfo>
                    </div>
                </ScrollContent>
                <SettingsActions
                    onSubmit={() => {}}
                    onCancel={() => {}}
                    onDelete={() => {}}
                />
            </div>
        </div>
    );
};
