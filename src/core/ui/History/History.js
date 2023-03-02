import React, { useState } from 'react'
import cn from 'classnames'

// Styles
import styles from './index.module.scss'

// Components
import { THead } from '../common/TableComponents/THead'
import { Tr } from '../common/TableComponents/Tr'
import { Th } from '../common/TableComponents/Th'
import { TBody } from '../common/TableComponents/TBody'
import { Td } from '../common/TableComponents/Td'
import { Table } from '../common/TableComponents/Table'

export const History = () => {
    return (
        <div className={cn(styles.history, 'mt-5')}>
            <div className={styles.historyTableWrap}>
                <Table>
                    <THead>
                        <Tr>
                            <Th width={130}>Reciever</Th>
                            <Th>Zone</Th>
                            <Th width={130}>Duration</Th>
                            <Th width={175}>Start Time</Th>
                            <Th width={175}>End Time</Th>
                        </Tr>
                    </THead>
                    <TBody>
                        <Tr className={styles.historyTr}>
                            <Td>GW1</Td>
                            <Td>Quality Area</Td>
                            <Td>01:23</Td>
                            <Td>11/01/22 12:23PM</Td>
                            <Td>11/01/22 12:23PM</Td>
                        </Tr>
                        <Tr className={styles.historyTr}>
                            <Td>GW2</Td>
                            <Td>Machine Bay 2</Td>
                            <Td>1 Day 1hr</Td>
                            <Td>11/01/22 12:23PM</Td>
                            <Td>11/01/22 12:23PM</Td>
                        </Tr>
                        <Tr className={styles.historyTr}>
                            <Td>GW3</Td>
                            <Td>Machine Bay 3</Td>
                            <Td>01:23</Td>
                            <Td>11/01/22 12:23PM</Td>
                            <Td>11/01/22 12:23PM</Td>
                        </Tr>
                        <Tr className={styles.historyTr}>
                            <Td>GW4</Td>
                            <Td>Quality Inspection 1</Td>
                            <Td>01:23</Td>
                            <Td>11/01/22 12:23PM</Td>
                            <Td>11/01/22 12:23PM</Td>
                        </Tr>
                        <Tr className={styles.historyTr}>
                            <Td>GW1</Td>
                            <Td>Rework Area </Td>
                            <Td>2 Day 3hr</Td>
                            <Td>11/01/22 12:23PM</Td>
                            <Td>11/01/22 12:23PM</Td>
                        </Tr>
                        <Tr className={styles.historyTr}>
                            <Td>GW-SHIP1</Td>
                            <Td>Machining Area</Td>
                            <Td>01:23</Td>
                            <Td>11/01/22 12:23PM</Td>
                            <Td>11/01/22 12:23PM</Td>
                        </Tr>
                    </TBody>
                </Table>
            </div>
        </div>
    )
}
