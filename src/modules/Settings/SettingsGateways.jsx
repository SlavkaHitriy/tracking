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
import { sitesData } from '../../data/sites.js';
import { testValuesData } from '../../data/testValues.js';
import { trackersData } from '../../data/trackers.js';
import { useInput } from '../../core/hooks/useInput.jsx';
import { SettingsActions } from './common/SettingsActions/index.js';
// Styles
import styles from './index.module.scss';

export const SettingsGateways = () => {
    const searchInp = useInput('');
    const trackers = useRef(trackersData);
    const testValues = useRef(testValuesData);
    const items = useRef(sitesData);

    return (
        <div className={cn(styles.settingsWrap, styles.settingsFlex)}>
            <div className={styles.settingsLeft}>
                <div className={styles.settingsHeader}>
                    <div className={cn(styles.settingsTitleWrap, 'mb-5')}>
                        <Title>IoT Gateways</Title>
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
                                    <Th width={'140px'}>Gateway ID</Th>
                                    <Th width={'160px'}>Gateway Name</Th>
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
                        <InfoItem name={'Gateway ID'} value={'F-0x007ca4'} />
                        <InfoItem
                            name={'Gateway Name'}
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
