import cn from 'classnames';
import React, { useState } from 'react';

import { useInput } from '../../core/hooks/useInput.jsx';
import { DefaultButton } from '../common/DefaultButton';
import { TBody } from '../common/TableComponents/TBody.jsx';
// Components
import { THead } from '../common/TableComponents/THead.jsx';
import { Table } from '../common/TableComponents/Table.jsx';
import { Td } from '../common/TableComponents/Td.jsx';
import { Th } from '../common/TableComponents/Th.jsx';
import { Tr } from '../common/TableComponents/Tr.jsx';
// Styles
import styles from './index.module.scss';

export const Notes = () => {
    const textarea = useInput('');
    const [addNote, setAddNote] = useState(false);

    return (
        <div className={cn(styles.notes, 'mt-5')}>
            <DefaultButton
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
                                <DefaultButton more />
                            </Td>
                        </Tr>
                        <Tr>
                            <Td>Phil Jackson</Td>
                            <Td>What serial numbers?</Td>
                            <Td>11/01/22 12:33PM</Td>
                            <Td>
                                <DefaultButton more />
                            </Td>
                        </Tr>
                        <Tr>
                            <Td>Bob Moore</Td>
                            <Td>Last 20 entries were missing.</Td>
                            <Td>11/01/22 12:33PM</Td>
                            <Td>
                                <DefaultButton more />
                            </Td>
                        </Tr>
                        <Tr>
                            <Td>Phil Jackson</Td>
                            <Td>Confirmed</Td>
                            <Td>11/01/22 12:33PM</Td>
                            <Td>
                                <DefaultButton more />
                            </Td>
                        </Tr>
                        <Tr>
                            <Td>Phil Jackson</Td>
                            <Td>Updated customs documents</Td>
                            <Td>11/01/22 12:33PM</Td>
                            <Td>
                                <DefaultButton more />
                            </Td>
                        </Tr>
                        <Tr>
                            <Td>Bob Moore</Td>
                            <Td>Verified documents.</Td>
                            <Td>11/01/22 12:33PM</Td>
                            <Td>
                                <DefaultButton more />
                            </Td>
                        </Tr>
                    </TBody>
                </Table>
            </div>
            {addNote && (
                <>
                    <label className={styles.notesLabel} htmlFor='addNote'>
                        New Note
                    </label>
                    <textarea
                        className={styles.notesTextarea}
                        value={textarea.value}
                        onChange={textarea.onChange}
                        id='addNote'
                    />
                    <div className={styles.notesActions}>
                        <DefaultButton
                            className={styles.notesActionsBtn}
                            standard
                            dark
                            onClick={() => setAddNote(false)}
                        >
                            Cancel
                        </DefaultButton>
                        <DefaultButton
                            className={cn(
                                styles.notesActionsBtn,
                                styles.notesActionsBtnGreen
                            )}
                            standard
                            onClick={() => setAddNote(false)}
                        >
                            Save
                        </DefaultButton>
                    </div>
                </>
            )}
        </div>
    );
};
