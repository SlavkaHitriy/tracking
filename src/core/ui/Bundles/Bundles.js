import React, { useState } from 'react'
import cn from 'classnames'

// Styles
import styles from './index.module.scss'

// Components
import { CountItem } from '../common/CountItem'
import { Button } from '../common/Button'
import { Table } from '../common/TableComponents/Table'
import { THead } from '../common/TableComponents/THead'
import { Tr } from '../common/TableComponents/Tr'
import { Th } from '../common/TableComponents/Th'
import { TBody } from '../common/TableComponents/TBody'
import { Td } from '../common/TableComponents/Td'
import { SvgSprite } from '../common/SvgSprite/SvgSprite'
import { ExactBundle } from './ExactBundle'

export const Bundles = ({ setActivePopup }) => {
    const [openedExactBundles, setOpenedExactBundles] = useState(false)

    return (
        <div className={cn(styles.bundles, 'mt-5')}>
            {openedExactBundles ? (
                <ExactBundle setOpenedExactBundles={setOpenedExactBundles} />
            ) : (
                <>
                    <div className={cn(styles.bundlesHeader, 'mb-5')}>
                        <CountItem
                            className={styles.bundlesHeaderItem}
                            tracker={{
                                count: 6,
                                name: 'Bundles',
                                color: '#262B40',
                            }}
                        />
                        <CountItem
                            className={styles.bundlesHeaderItem}
                            tracker={{
                                count: 325,
                                name: 'Total Items',
                                color: '#262B40',
                            }}
                        />
                        <div
                            className={styles.bundlesHeaderItem}
                            onClick={() => setActivePopup('newBundle')}
                        >
                            <Button
                                className={styles.bundlesHeaderBtn}
                                plus
                                green
                            />
                            <span className={styles.bundlesHeaderName}>
                                Add Bundle
                            </span>
                        </div>
                    </div>
                    <div className={styles.bundlesTableWrap}>
                        <Table>
                            <THead>
                                <Tr>
                                    <Th width={105}>Bundle #</Th>
                                    <Th>Asset Type</Th>
                                    <Th width={125}>QTY Items</Th>
                                    <Th>Service Provider</Th>
                                    <Th width={105}>Truck</Th>
                                    <Th width={105}>Rig Code</Th>
                                    <Th width={30}></Th>
                                </Tr>
                            </THead>
                            <TBody>
                                <Tr
                                    className={styles.bundlesTr}
                                    onClick={() => setOpenedExactBundles(true)}
                                >
                                    <Td>01</Td>
                                    <Td>Drill Pipe 5 7/8</Td>
                                    <Td>45</Td>
                                    <Td>Black Diamond</Td>
                                    <Td>4501</Td>
                                    <Td>V-117</Td>
                                    <Td className={styles.bundlesArrow}>
                                        <SvgSprite spriteID={'arrow'} />
                                    </Td>
                                </Tr>
                                <Tr
                                    className={styles.bundlesTr}
                                    onClick={() => setOpenedExactBundles(true)}
                                >
                                    <Td>02</Td>
                                    <Td>Drill Pipe 5 7/8</Td>
                                    <Td>45</Td>
                                    <Td>Black Diamond</Td>
                                    <Td>4501</Td>
                                    <Td>V-117</Td>
                                    <Td className={styles.bundlesArrow}>
                                        <SvgSprite spriteID={'arrow'} />
                                    </Td>
                                </Tr>
                                <Tr
                                    className={styles.bundlesTr}
                                    onClick={() => setOpenedExactBundles(true)}
                                >
                                    <Td>03</Td>
                                    <Td>Drill Pipe 5 7/8</Td>
                                    <Td>45</Td>
                                    <Td>Black Diamond</Td>
                                    <Td>4501</Td>
                                    <Td>V-117</Td>
                                    <Td className={styles.bundlesArrow}>
                                        <SvgSprite spriteID={'arrow'} />
                                    </Td>
                                </Tr>
                                <Tr
                                    className={styles.bundlesTr}
                                    onClick={() => setOpenedExactBundles(true)}
                                >
                                    <Td>04</Td>
                                    <Td>Drill Pipe 5 7/8</Td>
                                    <Td>45</Td>
                                    <Td>Black Diamond</Td>
                                    <Td>4501</Td>
                                    <Td>V-117</Td>
                                    <Td className={styles.bundlesArrow}>
                                        <SvgSprite spriteID={'arrow'} />
                                    </Td>
                                </Tr>
                                <Tr
                                    className={styles.bundlesTr}
                                    onClick={() => setOpenedExactBundles(true)}
                                >
                                    <Td>05</Td>
                                    <Td>Drill Pipe 5 7/8</Td>
                                    <Td>45</Td>
                                    <Td>Black Diamond</Td>
                                    <Td>4501</Td>
                                    <Td>V-117</Td>
                                    <Td className={styles.bundlesArrow}>
                                        <SvgSprite spriteID={'arrow'} />
                                    </Td>
                                </Tr>
                                <Tr
                                    className={styles.bundlesTr}
                                    onClick={() => setOpenedExactBundles(true)}
                                >
                                    <Td>06</Td>
                                    <Td>Drill Pipe 5 7/8</Td>
                                    <Td>45</Td>
                                    <Td>Black Diamond</Td>
                                    <Td>4501</Td>
                                    <Td>V-117</Td>
                                    <Td className={styles.bundlesArrow}>
                                        <SvgSprite spriteID={'arrow'} />
                                    </Td>
                                </Tr>
                            </TBody>
                        </Table>
                    </div>
                </>
            )}
        </div>
    )
}
