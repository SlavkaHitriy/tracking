import React, { useRef, useState } from 'react'
import cn from 'classnames'

// Styles
import styles from './index.module.scss'

// Data
import { trackingDataTabData } from '../../../data/trackingDataTab'
import { dataTypesData } from '../../../data/dataTypes'

// Components
import { Select } from '../Select'
import { GridBox } from '../GridBox'
import { Tab } from '../Tab'
import { THead } from '../TableComponents/THead'
import { Tr } from '../TableComponents/Tr'
import { Th } from '../TableComponents/Th'
import { TBody } from '../TableComponents/TBody'
import { Td } from '../TableComponents/Td'
import { Table } from '../TableComponents/Table'
import { GridName } from '../GridName'
import { GridValue } from '../GridValue'

export const TrackingData = ({indoor}) => {
    const data = useRef(trackingDataTabData)
    const [activeTab, setActiveTab] = useState(dataTypesData[0].value)

    return (
        <div className={styles.data}>
            <Select
                className={styles.dataSelect}
                values={data.current}
                staticValue={'Tracking ID'}
            />
            <div className={styles.dataWrap}>
                <GridBox columns={indoor ? 4 : 5}>
                    <div>
                        <div className={styles.dataName}>Status</div>
                        <div
                            className={cn(
                                styles.dataStatus,
                                styles.dataStatusOnline
                            )}
                        >
                            Online
                            <span />
                        </div>
                    </div>
                    <div>
                        <div className={styles.dataName}>Date/Time</div>
                        <div className={styles.dataDate}>11/01/22 12:23PM</div>
                    </div>
                    {
                        indoor ? (<>
                            <div>
                                <div className={styles.dataName}>Category</div>
                                <div className={styles.dataValue}>TAG</div>
                            </div>
                            <div>
                                <div className={styles.dataName}>Serial Code</div>
                                <div className={styles.dataValue}>aa:20:bb:12:00:12</div>
                            </div>
                            <div>
                                <div className={styles.dataName}>Battery %</div>
                                <div className={styles.dataValue}>95</div>
                            </div>
                            <div>
                                <div className={styles.dataName}>Heading</div>
                                <div className={styles.dataValue}>-88.32</div>
                            </div>
                            <div>
                                <div className={styles.dataName}>Speed (m/s)</div>
                                <div className={styles.dataValue}>23.1</div>
                            </div>
                            <div>
                                <div className={styles.dataName}>Coordinates</div>
                                <div className={styles.dataValue}>-75.67088, 45.34612</div>
                            </div>
                        </>) : (<>
                            <div>
                                <div className={styles.dataName}>Latitude</div>
                                <div className={styles.dataValue}>30.0235</div>
                            </div>
                            <div>
                                <div className={styles.dataName}>Longitude</div>
                                <div className={styles.dataValue}>-95.1025</div>
                            </div>
                            <div>
                                <div className={styles.dataName}>Altitude (m)</div>
                                <div className={styles.dataValue}>130</div>
                            </div>
                            <div>
                                <div className={styles.dataName}>Battery (mV)</div>
                                <div className={styles.dataValue}>4.32</div>
                            </div>
                            <div>
                                <div className={styles.dataName}>CPU Temp</div>
                                <div className={styles.dataValue}>120 °F</div>
                            </div>
                            <div>
                                <div className={styles.dataName}>Speed (m/s)</div>
                                <div className={styles.dataValue}>23.1</div>
                            </div>
                            <div>
                                <div className={styles.dataName}>Heading</div>
                                <div className={styles.dataValue}>-88.23</div>
                            </div>
                        </>)
                    }
                </GridBox>
            </div>
            {
                !indoor && (<>
                    <div className={styles.dataTabs}>
                        {dataTypesData.map((tab) => (
                            <Tab
                                active={tab.value === activeTab}
                                onClick={() => setActiveTab(tab.value)}
                                key={tab.id}
                            >
                                {tab.name}
                            </Tab>
                        ))}
                    </div>
                    {activeTab === 'trip' && (
                        <div className={styles.dataTableWrap}>
                            <Table>
                                <THead>
                                    <Tr>
                                        <Th width={100}>Speed</Th>
                                        <Th width={100}>Altitude</Th>
                                        <Th>Heading</Th>
                                        <Th>Latitude</Th>
                                        <Th>Longitude</Th>
                                        <Th width={175}>Timestamp</Th>
                                    </Tr>
                                </THead>
                                <TBody>
                                    <Tr className={styles.dataTr}>
                                        <Td>36</Td>
                                        <Td>130</Td>
                                        <Td>-88.96</Td>
                                        <Td>30.0235</Td>
                                        <Td>-95.1025</Td>
                                        <Td>11/01/22 12:23PM</Td>
                                    </Tr>
                                    <Tr className={styles.dataTr}>
                                        <Td>36</Td>
                                        <Td>130</Td>
                                        <Td>-88.96</Td>
                                        <Td>30.0235</Td>
                                        <Td>-95.1025</Td>
                                        <Td>11/01/22 12:23PM</Td>
                                    </Tr>
                                    <Tr className={styles.dataTr}>
                                        <Td>36</Td>
                                        <Td>130</Td>
                                        <Td>-88.96</Td>
                                        <Td>30.0235</Td>
                                        <Td>-95.1025</Td>
                                        <Td>11/01/22 12:23PM</Td>
                                    </Tr>
                                    <Tr className={styles.dataTr}>
                                        <Td>36</Td>
                                        <Td>130</Td>
                                        <Td>-88.96</Td>
                                        <Td>30.0235</Td>
                                        <Td>-95.1025</Td>
                                        <Td>11/01/22 12:23PM</Td>
                                    </Tr>
                                    <Tr className={styles.dataTr}>
                                        <Td>36</Td>
                                        <Td>130</Td>
                                        <Td>-88.96</Td>
                                        <Td>30.0235</Td>
                                        <Td>-95.1025</Td>
                                        <Td>11/01/22 12:23PM</Td>
                                    </Tr>
                                </TBody>
                            </Table>
                        </div>
                    )}
                    {activeTab === 'satellite' && (
                        <div className={cn(styles.dataWrap, styles.dataWrapBottom)}>
                            <GridBox columns={3}>
                                <div>
                                    <GridName>GPS Timestamp</GridName>
                                    <GridValue>12-01-22 1:34PM</GridValue>
                                </div>
                                <div>
                                    <GridName>Time to Fix</GridName>
                                    <GridValue>01:23 PM</GridValue>
                                </div>
                                <div>
                                    <GridName>Sat. Packet Creation</GridName>
                                    <GridValue>-101 rssi</GridValue>
                                </div>
                                <div>
                                    <GridName>RSSI - Recent Satellite</GridName>
                                    <GridValue>-105 rssi</GridValue>
                                </div>
                                <div>
                                    <GridName>SNR - Recent Satellite</GridName>
                                    <GridValue>-4</GridValue>
                                </div>
                                <div>
                                    <GridName>GPS Jamming Level</GridName>
                                    <GridValue>101</GridValue>
                                </div>
                                <div>
                                    <GridName>Horizontal DoP</GridName>
                                    <GridValue>457</GridValue>
                                </div>
                                <div>
                                    <GridName>Vertical DoP</GridName>
                                    <GridValue>100</GridValue>
                                </div>
                                <div>
                                    <GridName>GPS Spoofing</GridName>
                                    <GridValue>1</GridValue>
                                </div>
                            </GridBox>
                        </div>
                    )}
                </>)
            }
        </div>
    )
}
