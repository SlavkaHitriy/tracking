import cn from 'classnames';
import React from 'react';

// Data
import { globalTrackingTabsData } from '../../data/globalTrackingTabs';
import { Attachments } from '../Attachments';
import { Bundles } from '../Bundles';
import { Notes } from '../Notes';
import { Overview } from '../Overview';
import { TrackingData } from '../TrackingData';
import { DefaultButton } from '../common/DefaultButton';
import { Tab } from '../common/Tab';
// Components
import { Title } from '../common/Title';
// Styles
import styles from './index.module.scss';

export const InfoGlobal = ({ activeTab, setActiveTab, setActivePopup }) => {
    return (
        <div className={styles.info}>
            <Title className={cn(styles.infoTitle, 'mb-3')}>
                Details
                <DefaultButton className={styles.infoTitleBtn}>
                    <span />
                    <span />
                    <span />
                </DefaultButton>
            </Title>
            <div className={styles.infoTabs}>
                {globalTrackingTabsData.map((tab) => (
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
                {activeTab === 'overview' && <Overview />}
                {activeTab === 'bundles' && (
                    <Bundles setActivePopup={setActivePopup} />
                )}
                {activeTab === 'notes' && <Notes />}
                {activeTab === 'attachments' && <Attachments />}
                {activeTab === 'trackingData' && <TrackingData />}
            </div>
        </div>
    );
};
