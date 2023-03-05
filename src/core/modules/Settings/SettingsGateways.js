import cn from 'classnames'
import React, { useRef } from 'react'

import { sitesData } from '../../../data/sites'
import { testValuesData } from '../../../data/testValues'
import { trackersData } from '../../../data/trackers'
import { useInput } from '../../hooks/useInput'
import { Button } from '../../ui/common/Button'
import { ColorStatus } from '../../ui/common/ColorStatus'
import { CountItem } from '../../ui/common/CountItem'
import { InfoItem } from '../../ui/common/InfoItem'
import { Input } from '../../ui/common/Input'
import { ScrollContent } from '../../ui/common/ScrollContent'
import { Select } from '../../ui/common/Select'
import { TBody } from '../../ui/common/TableComponents/TBody'
import { THead } from '../../ui/common/TableComponents/THead'
import { Table } from '../../ui/common/TableComponents/Table'
import { Td } from '../../ui/common/TableComponents/Td'
import { Th } from '../../ui/common/TableComponents/Th'
import { Tr } from '../../ui/common/TableComponents/Tr'
import { Title } from '../../ui/common/Title'
import { SettingsActions } from './common/SettingsActions'
// Styles
import styles from './index.module.scss'

export const SettingsGateways = () => {
    const searchInp = useInput('')
    const trackers = useRef(trackersData)
    const testValues = useRef(testValuesData)
    const items = useRef(sitesData)

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
    )
}
