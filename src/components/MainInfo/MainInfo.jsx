import cn from 'classnames';
import React, { useRef, useState } from 'react';

import { useInput } from '../../core/hooks/useInput.jsx';
import { shipmentsData } from '../../data/shipments';
import { statusesData } from '../../data/statuses';
// Data
import { trackersData } from '../../data/trackers';
import { Button } from '../common/Button';
import { CountItem } from '../common/CountItem';
import { Input } from '../common/Input';
import { Pagination } from '../common/Pagination';
import { ScrollContent } from '../common/ScrollContent';
import { Select } from '../common/Select';
import { Status } from '../common/Status';
// Components
import { SvgSprite } from '../common/SvgSprite/SvgSprite.jsx';
import { TBody } from '../common/TableComponents/TBody.jsx';
import { THead } from '../common/TableComponents/THead.jsx';
import { Table } from '../common/TableComponents/Table.jsx';
import { Td } from '../common/TableComponents/Td.jsx';
import { Th } from '../common/TableComponents/Th.jsx';
import { Tr } from '../common/TableComponents/Tr.jsx';
import { Title } from '../common/Title';
// Styles
import styles from './index.module.scss';

export const MainInfo = ({ title, setActivePopup, icon }) => {
    const searchInp = useInput('');
    const trackers = useRef(trackersData);
    const statuses = useRef(statusesData);
    const items = useRef(shipmentsData);

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
                <ScrollContent>
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
                </ScrollContent>
            </div>
            <div className={styles.infoPagination}>
                <Pagination />
            </div>
        </div>
    );
};
