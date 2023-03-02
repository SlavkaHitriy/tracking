import React, { useRef, useState } from 'react'
import cn from 'classnames'

// Styles
import styles from './index.module.scss'

// Data
import { trackersData } from '../../../data/trackers'
import { statusesData } from '../../../data/statuses'
import { shipmentsData } from '../../../data/shipments'

// Components
import { SvgSprite } from '../common/SvgSprite/SvgSprite'
import { Title } from '../common/Title'
import { Button } from '../common/Button'
import { Select } from '../common/Select'
import { Input } from '../common/Input'
import { useInput } from '../../hooks/useInput'
import { THead } from '../common/TableComponents/THead'
import { Tr } from '../common/TableComponents/Tr'
import { Th } from '../common/TableComponents/Th'
import { Table } from '../common/TableComponents/Table'
import { TBody } from '../common/TableComponents/TBody'
import { Td } from '../common/TableComponents/Td'
import { Status } from '../common/Status'
import { Pagination } from '../common/Pagination'
import { CountItem } from '../common/CountItem'

export const MainInfo = ({ title, setActivePopup, icon }) => {
    const searchInp = useInput('')
    const trackers = useRef(trackersData)
    const statuses = useRef(statusesData)
    const items = useRef(shipmentsData)

    return (
        <div className={styles.info}>
            <div className={styles.infoHeader}>
                <div className={cn(styles.infoTitleWrap, 'mb-5')}>
                    <Title className={styles.infoTitle}>
                        <SvgSprite className={'mr-3'} spriteID={icon} />
                        {title}
                    </Title>
                    <Button
                        className={cn(styles.infoTitleBtn, 'ml-3')}
                        onClick={() => setActivePopup('new')}
                        plus
                    />
                </div>
                <div className={styles.infoHeaderTrackers}>
                    {trackers.current.map((tracker) => (
                        <CountItem
                            className={styles.infoHeaderTracker}
                            tracker={tracker}
                            key={tracker.id}
                        />
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
                                        <Button
                                            more
                                            onClick={() =>
                                                setActivePopup('brief')
                                            }
                                        />
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
