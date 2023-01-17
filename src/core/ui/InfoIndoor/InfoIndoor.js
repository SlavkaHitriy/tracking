import React from 'react'
import cn from 'classnames'

// Styles
import styles from './index.module.scss'

// Data
import { indoorTrackingTabsData } from '../../../data/indoorTrackingTabs'

// Components
import { Title } from '../Title'
import { Button } from '../Button'
import { Overview } from '../Overview'
import { Tab } from '../Tab'
import { Bundles } from '../Bundles'
import { Notes } from '../Notes'
import { Attachments } from '../Attachments'
import { TrackingData } from '../TrackingData'
import { History } from '../History'

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
