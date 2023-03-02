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
import { Button } from '../common/Button'
import { useInput } from '../../hooks/useInput'

export const Notes = () => {
    const textarea = useInput('')
    const [addNote, setAddNote] = useState(false)

    return (
        <div className={cn(styles.notes, 'mt-5')}>
            <Button
                className={styles.notesAdd}
                onClick={() => setAddNote(true)}
                plus
            />
            <div className={styles.notesTableWrap}>
                <Table>
                    <THead>
                        <Tr>
                            <Th width={140}>Added By</Th>
                            <Th>Notes</Th>
                            <Th width={175}>Create Date</Th>
                            <Th width={40} />
                        </Tr>
                    </THead>
                    <TBody>
                        <Tr>
                            <Td>Bob Moore</Td>
                            <Td>Added missing joints to item list.</Td>
                            <Td>11/01/22 12:23PM</Td>
                            <Td>
                                <Button more />
                            </Td>
                        </Tr>
                        <Tr>
                            <Td>Phil Jackson</Td>
                            <Td>What serial numbers?</Td>
                            <Td>11/01/22 12:33PM</Td>
                            <Td>
                                <Button more />
                            </Td>
                        </Tr>
                        <Tr>
                            <Td>Bob Moore</Td>
                            <Td>Last 20 entries were missing.</Td>
                            <Td>11/01/22 12:33PM</Td>
                            <Td>
                                <Button more />
                            </Td>
                        </Tr>
                        <Tr>
                            <Td>Phil Jackson</Td>
                            <Td>Confirmed</Td>
                            <Td>11/01/22 12:33PM</Td>
                            <Td>
                                <Button more />
                            </Td>
                        </Tr>
                        <Tr>
                            <Td>Phil Jackson</Td>
                            <Td>Updated customs documents</Td>
                            <Td>11/01/22 12:33PM</Td>
                            <Td>
                                <Button more />
                            </Td>
                        </Tr>
                        <Tr>
                            <Td>Bob Moore</Td>
                            <Td>Verified documents.</Td>
                            <Td>11/01/22 12:33PM</Td>
                            <Td>
                                <Button more />
                            </Td>
                        </Tr>
                    </TBody>
                </Table>
            </div>
            {
                addNote && (<>
                    <label className={styles.notesLabel} htmlFor="addNote">
                        New Note
                    </label>
                    <textarea
                        className={styles.notesTextarea}
                        value={textarea.value}
                        onChange={textarea.onChange}
                        id="addNote"
                    />
                    <div className={styles.notesActions}>
                        <Button className={styles.notesActionsBtn} standard dark onClick={() => setAddNote(false)}>
                            Cancel
                        </Button>
                        <Button
                            className={cn(
                                styles.notesActionsBtn,
                                styles.notesActionsBtnGreen
                            )}
                            standard onClick={() => setAddNote(false)}
                        >
                            Save
                        </Button>
                    </div>
                </>)
            }
        </div>
    )
}
