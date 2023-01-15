import React, { useState } from 'react'

// Styles
import styles from './index.module.scss'

// Data
import { exactBundleTabsData } from '../../../data/exactBundleTabs'

// Components
import { SvgSprite } from '../SvgSprite/SvgSprite'
import { Button } from '../Button'
import { GridBox } from '../GridBox'
import { GridName } from '../GridName'
import { GridValue } from '../GridValue'
import { Tab } from '../Tab'
import { Table } from '../TableComponents/Table'
import { THead } from '../TableComponents/THead'
import { Tr } from '../TableComponents/Tr'
import { Th } from '../TableComponents/Th'
import { TBody } from '../TableComponents/TBody'
import { Td } from '../TableComponents/Td'

export const ExactBundle = ({ setOpenedExactBundles }) => {
    const [activeTab, setActiveTab] = useState(exactBundleTabsData[0].value)

    return (
        <div className={styles.bundlesExact}>
            <div className={styles.bundlesExactHeader}>
                <div
                    className={styles.bundlesExactBack}
                    onClick={() => setOpenedExactBundles(false)}
                >
                    <SvgSprite spriteID={'arrow'} /> Back to Bundles
                </div>
                <div className={styles.bundlesExactName}>Bundle: 001</div>
                <Button className={styles.bundlesExactHeaderBtn} standard>
                    Edit
                </Button>
            </div>
            <div className={styles.bundlesExactInfo}>
                <GridBox template={`60% 40%`}>
                    <div>
                        <GridName>Asset Type</GridName>
                        <GridValue>Drill Pipe 5 7/8 S-135 Range 3</GridValue>
                    </div>
                    <div>
                        <GridName>QTY</GridName>
                        <GridValue>30</GridValue>
                    </div>
                    <div>
                        <GridName>Rig Code</GridName>
                        <GridValue>V-117</GridValue>
                    </div>
                    <div>
                        <GridName>Service Provider</GridName>
                        <GridValue>Black Diamond</GridValue>
                    </div>
                    <div>
                        <GridName>Truck/Vessel</GridName>
                        <GridValue>TR-2056</GridValue>
                    </div>
                    <div>
                        <GridName>Tracker</GridName>
                        <GridValue>F-0x007ca4</GridValue>
                    </div>
                </GridBox>
            </div>
            <div className={styles.bundlesExactTabsWrap}>
                <div className={styles.bundlesExactTabs}>
                    {exactBundleTabsData.map((tab) => (
                        <Tab
                            active={tab.value === activeTab}
                            onClick={() => setActiveTab(tab.value)}
                            key={tab.id}
                        >
                            {tab.name}
                        </Tab>
                    ))}
                </div>
                <Button className={styles.bundlesExactPlus} plus/>
            </div>
            <div className={styles.bundlesExactTableWrap}>
                {
                    activeTab === 'items' && (
                        <Table>
                            <THead>
                                <Tr>
                                    <Th>Asset Type</Th>
                                    <Th>Serial Number</Th>
                                    <Th width={175}>Timestamp</Th>
                                </Tr>
                            </THead>
                            <TBody>
                                <Tr className={styles.bundlesExactTr}>
                                    <Td>Drill Pipe 5 7/8 S-135 Range 3</Td>
                                    <Td>2001478</Td>
                                    <Td>11/01/22 12:23PM</Td>
                                </Tr>
                                <Tr className={styles.bundlesExactTr}>
                                    <Td>Drill Pipe 5 7/8 S-135 Range 3</Td>
                                    <Td>2001478</Td>
                                    <Td>11/01/22 12:23PM</Td>
                                </Tr>
                                <Tr className={styles.bundlesExactTr}>
                                    <Td>Drill Pipe 5 7/8 S-135 Range 3</Td>
                                    <Td>2001478</Td>
                                    <Td>11/01/22 12:23PM</Td>
                                </Tr>
                                <Tr className={styles.bundlesExactTr}>
                                    <Td>Drill Pipe 5 7/8 S-135 Range 3</Td>
                                    <Td>2001478</Td>
                                    <Td>11/01/22 12:23PM</Td>
                                </Tr>
                                <Tr className={styles.bundlesExactTr}>
                                    <Td>Drill Pipe 5 7/8 S-135 Range 3</Td>
                                    <Td>2001478</Td>
                                    <Td>11/01/22 12:23PM</Td>
                                </Tr>
                            </TBody>
                        </Table>
                    )
                }
                {
                    activeTab === 'documents' && (
                        <Table>
                            <THead>
                                <Tr>
                                    <Th>Added By</Th>
                                    <Th>Documents</Th>
                                    <Th width={175}>Create Date</Th>
                                </Tr>
                            </THead>
                            <TBody>
                                <Tr className={styles.bundlesExactTr}>
                                    <Td>Bob Moore</Td>
                                    <Td>Inventory_list_pipe.xls</Td>
                                    <Td>11/01/22 12:23PM</Td>
                                </Tr>
                                <Tr className={styles.bundlesExactTr}>
                                    <Td>Bob Moore</Td>
                                    <Td>Inventory_list_pipe.xls</Td>
                                    <Td>11/01/22 12:23PM</Td>
                                </Tr>
                                <Tr className={styles.bundlesExactTr}>
                                    <Td>Bob Moore</Td>
                                    <Td>Inventory_list_pipe.xls</Td>
                                    <Td>11/01/22 12:23PM</Td>
                                </Tr>
                                <Tr className={styles.bundlesExactTr}>
                                    <Td>Bob Moore</Td>
                                    <Td>Inventory_list_pipe.xls</Td>
                                    <Td>11/01/22 12:23PM</Td>
                                </Tr>
                                <Tr className={styles.bundlesExactTr}>
                                    <Td>Bob Moore</Td>
                                    <Td>Inventory_list_pipe.xls</Td>
                                    <Td>11/01/22 12:23PM</Td>
                                </Tr>
                            </TBody>
                        </Table>
                    )
                }
            </div>
        </div>
    )
}
