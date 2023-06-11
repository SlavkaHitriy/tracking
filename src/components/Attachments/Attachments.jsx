import cn from 'classnames';
import React from 'react';

import { DefaultButton } from '../common/DefaultButton';
import { TBody } from '../common/TableComponents/TBody.jsx';
import { THead } from '../common/TableComponents/THead.jsx';
import { Table } from '../common/TableComponents/Table.jsx';
import { Td } from '../common/TableComponents/Td.jsx';
import { Th } from '../common/TableComponents/Th.jsx';
import { Tr } from '../common/TableComponents/Tr.jsx';
import styles from './index.module.scss';

export const Attachments = () => {
    return (
        <div className={cn(styles.notes, 'mt-5')}>
            <DefaultButton className={styles.notesAdd} plus />
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
                                <DefaultButton more />
                            </Td>
                        </Tr>
                        <Tr>
                            <Td>Phil Jackson</Td>
                            <Td>Customs_form_2305.pdf</Td>
                            <Td>11/01/22 12:33PM</Td>
                            <Td>
                                <DefaultButton more />
                            </Td>
                        </Tr>
                        <Tr>
                            <Td>Bob Moore</Td>
                            <Td>Inventory_1.jpg</Td>
                            <Td>11/01/22 12:33PM</Td>
                            <Td>
                                <DefaultButton more />
                            </Td>
                        </Tr>
                        <Tr>
                            <Td>Phil Jackson</Td>
                            <Td>Approved_Purchase_order.pdf</Td>
                            <Td>11/01/22 12:33PM</Td>
                            <Td>
                                <DefaultButton more />
                            </Td>
                        </Tr>
                        <Tr>
                            <Td>Phil Jackson</Td>
                            <Td>Completed_pipe_package_22.pdf</Td>
                            <Td>11/01/22 12:33PM</Td>
                            <Td>
                                <DefaultButton more />
                            </Td>
                        </Tr>
                        <Tr>
                            <Td>Bob Moore</Td>
                            <Td>Inventory_11.jpg</Td>
                            <Td>11/01/22 12:33PM</Td>
                            <Td>
                                <DefaultButton more />
                            </Td>
                        </Tr>
                    </TBody>
                </Table>
            </div>
        </div>
    );
};
