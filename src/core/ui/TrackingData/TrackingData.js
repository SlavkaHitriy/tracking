import cn from 'classnames'
import React, { useRef, useState } from 'react'

import { dataTypesData } from '../../../data/dataTypes'
// Data
import { trackingDataTabData } from '../../../data/trackingDataTab'
import { GridBox } from '../common/GridBox'
import { GridName } from '../common/GridName'
import { GridValue } from '../common/GridValue'
// Components
import { Select } from '../common/Select'
import { Tab } from '../common/Tab'
import { TBody } from '../common/TableComponents/TBody'
import { THead } from '../common/TableComponents/THead'
import { Table } from '../common/TableComponents/Table'
import { Td } from '../common/TableComponents/Td'
import { Th } from '../common/TableComponents/Th'
import { Tr } from '../common/TableComponents/Tr'
import { TrackingInfo } from '../common/TrackingInfo'
import { TrackingInfoDate } from '../common/TrackingInfo/TrackingInfoDate'
import { TrackingInfoName } from '../common/TrackingInfo/TrackingInfoName'
import { TrackingInfoStatus } from '../common/TrackingInfo/TrackingInfoStatus'
import { TrackingInfoValue } from '../common/TrackingInfo/TrackingInfoValue'
// Styles
import styles from './index.module.scss'

export const TrackingData = ({ indoor }) => {
    const data = useRef(trackingDataTabData)
    const [activeTab, setActiveTab] = useState(dataTypesData[0].value)

    return (
        <div className={styles.data}>
            <Select
                className={styles.dataSelect}
                values={data.current}
                staticValue={'Tracking ID'}
            />
            <TrackingInfo columns={indoor ? 4 : 5}>
                <div>
                    <TrackingInfoName>Status</TrackingInfoName>
                    <TrackingInfoStatus statusCode={1} />
                </div>
                <div>
                    <TrackingInfoName>Date/Time</TrackingInfoName>
                    <TrackingInfoDate>11/01/22 12:23PM</TrackingInfoDate>
                </div>
                {indoor ? (
                    <>
                        <div>
                            <TrackingInfoName>Category</TrackingInfoName>
                            <TrackingInfoValue>TAG</TrackingInfoValue>
                        </div>
                        <div>
                            <TrackingInfoName>Serial Code</TrackingInfoName>
                            <TrackingInfoValue>
                                aa:20:bb:12:00:12
                            </TrackingInfoValue>
                        </div>
                        <div>
                            <TrackingInfoName>Battery %</TrackingInfoName>
                            <TrackingInfoValue>95</TrackingInfoValue>
                        </div>
                        <div>
                            <TrackingInfoName>Heading</TrackingInfoName>
                            <TrackingInfoValue>-88.32</TrackingInfoValue>
                        </div>
                        <div>
                            <TrackingInfoName>Speed (m/s)</TrackingInfoName>
                            <TrackingInfoValue>23.1</TrackingInfoValue>
                        </div>
                        <div>
                            <TrackingInfoName>Coordinates</TrackingInfoName>
                            <TrackingInfoValue>
                                -75.67088, 45.34612
                            </TrackingInfoValue>
                        </div>
                    </>
                ) : (
                    <>
                        <div>
                            <TrackingInfoName>Latitude</TrackingInfoName>
                            <TrackingInfoValue>30.0235</TrackingInfoValue>
                        </div>
                        <div>
                            <TrackingInfoName>Longitude</TrackingInfoName>
                            <TrackingInfoValue>-95.1025</TrackingInfoValue>
                        </div>
                        <div>
                            <TrackingInfoName>Altitude (m)</TrackingInfoName>
                            <TrackingInfoValue>130</TrackingInfoValue>
                        </div>
                        <div>
                            <TrackingInfoName>Battery (mV)</TrackingInfoName>
                            <TrackingInfoValue>4.32</TrackingInfoValue>
                        </div>
                        <div>
                            <TrackingInfoName>CPU Temp</TrackingInfoName>
                            <TrackingInfoValue>120 °F</TrackingInfoValue>
                        </div>
                        <div>
                            <TrackingInfoName>Speed (m/s)</TrackingInfoName>
                            <TrackingInfoValue>23.1</TrackingInfoValue>
                        </div>
                        <div>
                            <TrackingInfoName>Heading</TrackingInfoName>
                            <TrackingInfoValue>-88.23</TrackingInfoValue>
                        </div>
                    </>
                )}
            </TrackingInfo>
            {!indoor && (
                <>
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
                        <TrackingInfo
                            className={styles.dataWrapBottom}
                            columns={3}
                        >
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
                        </TrackingInfo>
                    )}
                </>
            )}
        </div>
    )
}
