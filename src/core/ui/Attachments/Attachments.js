import React, { useState } from 'react'
import cn from 'classnames'

// Styles
import styles from './index.module.scss'

// Components
import { THead } from '../TableComponents/THead'
import { Tr } from '../TableComponents/Tr'
import { Th } from '../TableComponents/Th'
import { TBody } from '../TableComponents/TBody'
import { Td } from '../TableComponents/Td'
import { Table } from '../TableComponents/Table'
import { Button } from '../Button'
import { useInput } from '../../hooks/useInput'

export const Attachments = () => {
    return (
        <div className={cn(styles.notes, 'mt-5')}>
            <Button
                className={styles.notesAdd}
                plus
            />
            <div className={styles.notesTableWrap}>
                <Table>
                    <THead>
                        <Tr>
                            <Th width={140}>Added By</Th>
                            <Th>Attachments</Th>
                            <Th width={175}>Create Date</Th>
                            <Th width={40} />
                        </Tr>
                    </THead>
                    <TBody>
                        <Tr>
                            <Td>Bob Moore</Td>
                            <Td>Inventory_list_pipe.xls</Td>
                            <Td>11/01/22 12:23PM</Td>
                            <Td>
                                <Button more />
                            </Td>
                        </Tr>
                        <Tr>
                            <Td>Phil Jackson</Td>
                            <Td>Customs_form_2305.pdf</Td>
                            <Td>11/01/22 12:33PM</Td>
                            <Td>
                                <Button more />
                            </Td>
                        </Tr>
                        <Tr>
                            <Td>Bob Moore</Td>
                            <Td>Inventory_1.jpg</Td>
                            <Td>11/01/22 12:33PM</Td>
                            <Td>
                                <Button more />
                            </Td>
                        </Tr>
                        <Tr>
                            <Td>Phil Jackson</Td>
                            <Td>Approved_Purchase_order.pdf</Td>
                            <Td>11/01/22 12:33PM</Td>
                            <Td>
                                <Button more />
                            </Td>
                        </Tr>
                        <Tr>
                            <Td>Phil Jackson</Td>
                            <Td>Completed_pipe_package_22.pdf</Td>
                            <Td>11/01/22 12:33PM</Td>
                            <Td>
                                <Button more />
                            </Td>
                        </Tr>
                        <Tr>
                            <Td>Bob Moore</Td>
                            <Td>Inventory_11.jpg</Td>
                            <Td>11/01/22 12:33PM</Td>
                            <Td>
                                <Button more />
                            </Td>
                        </Tr>
                    </TBody>
                </Table>
            </div>
        </div>
    )
}
