import cn from 'classnames'
import React from 'react'

// Data
import { indoorTrackingTabsData } from '../../data/indoorTrackingTabs'
import { Attachments } from '../Attachments'
import { Bundles } from '../Bundles'
import { History } from '../History'
import { Notes } from '../Notes'
import { Overview } from '../Overview'
import { TrackingData } from '../TrackingData'
import { Button } from '../common/Button'
import { Tab } from '../common/Tab'
// Components
import { Title } from '../common/Title'
// Styles
import styles from './index.module.scss'

export const InfoIndoor = ({ activeTab, setActiveTab, setActivePopup }) => {
    return (
        <div className={styles.info}>
            <Title className={cn(styles.infoTitle, 'mb-3')}>
                Details
                <Button className={styles.infoTitleBtn}>
                    <span />
                    <span />
                    <span />
                </Button>
            </Title>
            <div className={styles.infoTabs}>
                {indoorTrackingTabsData.map((tab) => (
                    <Tab
                        active={tab.value === activeTab}
                        onClick={() => setActiveTab(tab.value)}
                        key={tab.id}
                    >
                        {tab.name}
                    </Tab>
                ))}
            </div>
            <div className={styles.infoContent}>
                {activeTab === 'overview' && <Overview indoor />}
                {activeTab === 'history' && <History />}
                {activeTab === 'notes' && <Notes />}
                {activeTab === 'attachments' && <Attachments />}
                {activeTab === 'deviceData' && <TrackingData indoor />}
            </div>
        </div>
    )
}
