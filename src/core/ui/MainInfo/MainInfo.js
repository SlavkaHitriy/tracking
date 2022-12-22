import React, { useRef } from 'react'
import cn from 'classnames'

// Styles
import styles from './index.module.scss'

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

export const MainInfo = ({title}) => {
    const searchInp = useInput('')

    const trackers = useRef([
        {
            id: 1,
            name: 'Total Trackers',
            count: 23,
            color: '#9E9E9E',
        },
        {
            id: 2,
            name: 'Ready',
            count: 1,
            color: '#262B40',
        },
        {
            id: 3,
            name: 'Tracking',
            count: 10,
            color: '#19A872',
        },
        {
            id: 4,
            name: 'Completed',
            count: 2,
            color: '#0061FF',
        },
    ])
    const statuses = useRef([
        {
            id: 1,
            name: 'All status',
            value: 0,
        },
        {
            id: 2,
            name: 'Ready',
            value: 1,
        },
        {
            id: 3,
            name: 'Tracking',
            value: 2,
        },
        {
            id: 4,
            name: 'Completed',
            value: 3,
        },
        {
            id: 5,
            name: 'Documentation',
            value: 4,
        },
    ])
    const items = useRef([
        {
            id: 1,
            name: 'Shipment 101',
            status: 2,
            date: '11/01/22 12:23PM',
        },
        {
            id: 2,
            name: 'Shipment 102',
            status: 1,
            date: '11/01/22 12:33PM',
        },
        {
            id: 3,
            name: 'Shipment 103',
            status: 2,
            date: '11/01/22 12:23PM',
        },
        {
            id: 4,
            name: 'Shipment 104',
            status: 2,
            date: '11/01/22 12:23PM',
        },
        {
            id: 5,
            name: 'Shipment 105',
            status: 4,
            date: '11/01/22 12:23PM',
        },
        {
            id: 6,
            name: 'Shipment 106',
            status: 2,
            date: '11/01/22 12:23PM',
        },
        {
            id: 7,
            name: 'Shipment 099',
            status: 3,
            date: '11/01/22 12:23PM',
        },
    ])

    return (
        <div className={styles.info}>
            <div className={styles.infoHeader}>
                <div className={cn(styles.infoTitleWrap, 'mb-5')}>
                    <Title className={styles.infoTitle}>
                        <SvgSprite className={'mr-3'} spriteID={'track'} />
                        {title}
                    </Title>
                    <Button className={cn(styles.infoTitleBtn, 'ml-3')} plus />
                </div>
                <div className={styles.infoHeaderTrackers}>
                    {
                        trackers.current.map(tracker => (
                            <div className={styles.infoHeaderTracker} key={tracker.id}>
                                <div className={cn(styles.infoHeaderTrackerCount, 'mb-1')}>
                                    {tracker.count > 9 ? tracker.count : '0' + tracker.count}
                                </div>
                                <span
                                    className={cn(styles.infoHeaderTrackerSeparator, 'mb-3')}
                                    style={{backgroundColor: tracker.color}}
                                />
                                <div className={styles.infoHeaderTrackerName}>
                                    {tracker.name}
                                </div>
                            </div>
                        ))
                    }
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
                            {
                                items.current.map(item => (
                                    <Tr key={item.id}>
                                        <Td>
                                            {item.name}
                                        </Td>
                                        <Td>
                                            <Status code={item.status} />
                                        </Td>
                                        <Td>
                                            {item.date}
                                        </Td>
                                        <Td>
                                            <Button more/>
                                        </Td>
                                    </Tr>
                                ))
                            }
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
