import React, { useRef, useState } from 'react'
import cn from 'classnames'

// Styles
import styles from './index.module.scss'

// Data
import { trackersData } from '../../../data/trackers'
import { statusesData } from '../../../data/statuses'
import { shipmentsData } from '../../../data/shipments'

// Components
import { SvgSprite } from '../SvgSprite/SvgSprite'
import { Title } from '../Title'
import { Button } from '../Button'
import { Select } from '../Select'
import { Input } from '../Input'
import { useInput } from '../../hooks/useInput'
import { THead } from '../TableComponents/THead'
import { Tr } from '../TableComponents/Tr'
import { Th } from '../TableComponents/Th'
import { Table } from '../TableComponents/Table'
import { TBody } from '../TableComponents/TBody'
import { Td } from '../TableComponents/Td'
import { Status } from '../Status'
import { Pagination } from '../Pagination'

export const MainInfo = ({ title, setOpenedNewData, setOpenedBriefInfo }) => {
    const searchInp = useInput('')
    const trackers = useRef(trackersData)
    const statuses = useRef(statusesData)
    const items = useRef(shipmentsData)

    return (
        <div className={styles.info}>
            <div className={styles.infoHeader}>
                <div className={cn(styles.infoTitleWrap, 'mb-5')}>
                    <Title className={styles.infoTitle}>
                        <SvgSprite className={'mr-3'} spriteID={'track'} />
                        {title}
                    </Title>
                    <Button
                        className={cn(styles.infoTitleBtn, 'ml-3')}
                        onClick={() => setOpenedNewData(true)}
                        plus
                    />
                </div>
                <div className={styles.infoHeaderTrackers}>
                    {trackers.current.map((tracker) => (
                        <div
                            className={styles.infoHeaderTracker}
                            key={tracker.id}
                        >
                            <div
                                className={cn(
                                    styles.infoHeaderTrackerCount,
                                    'mb-1'
                                )}
                            >
                                {tracker.count > 9
                                    ? tracker.count
                                    : '0' + tracker.count}
                            </div>
                            <span
                                className={cn(
                                    styles.infoHeaderTrackerSeparator,
                                    'mb-3'
                                )}
                                style={{ backgroundColor: tracker.color }}
                            />
                            <div className={styles.infoHeaderTrackerName}>
                                {tracker.name}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className={styles.infoContent}>
                <div className={styles.infoContentHeader}>
                    <Select
                        className={styles.infoContentFilter}
                        values={statuses.current}
                        staticValue={'View'}
                    />
                    <Input
                        className={cn(styles.infoContentSearch, 'ml-4')}
                        placeholder={'Search...'}
                        {...searchInp}
                    />
                </div>
                <div className={styles.infoTableWrap}>
                    <Table>
                        <THead>
                            <Tr>
                                <Th width={'140px'}>Name</Th>
                                <Th width={'140px'}>Status</Th>
                                <Th>Last Transmission</Th>
                                <Th width={'20px'}></Th>
                            </Tr>
                        </THead>
                        <TBody>
                            {items.current.map((item) => (
                                <Tr key={item.id}>
                                    <Td>{item.name}</Td>
                                    <Td>
                                        <Status code={item.status} />
                                    </Td>
                                    <Td>{item.date}</Td>
                                    <Td>
                                        <Button more onClick={() => setOpenedBriefInfo(true)} />
                                    </Td>
                                </Tr>
                            ))}
                        </TBody>
                    </Table>
                </div>
            </div>
            <div className={styles.infoPagination}>
                <Pagination />
            </div>
        </div>
    )
}
