import cn from 'classnames';
import React, { useState } from 'react';

import { PageWrapper } from '../../components/PageWrapper/index.js';
import { SvgSprite } from '../../components/common/SvgSprite/SvgSprite.jsx';
import { Tab } from '../../components/common/Tab/index.js';
import { Title } from '../../components/common/Title/index.js';
import { settingsTabsData } from '../../data/settingsTabs.js';
import { SettingsCompany } from './SettingsCompany.jsx';
import { SettingsConfiguration } from './SettingsConfiguration.jsx';
import { SettingsGateways } from './SettingsGateways.jsx';
import { SettingsManager } from './SettingsManager.jsx';
import { SettingsSatelliteTrackers } from './SettingsSatelliteTrackers.jsx';
import { SettingsServiceProviders } from './SettingsServiceProviders.jsx';
import { SettingsWirelessTrackers } from './SettingsWirelessTrackers.jsx';
import styles from './index.module.scss';

export const Settings = () => {
    const [activeTab, setActiveTab] = useState(settingsTabsData[0].value);

    return (
        <PageWrapper>
            <div className={styles.settings}>
                <div className={styles.settingsTop}>
                    <Title className={cn(styles.settingsTitle)}>
                        <SvgSprite className={'mr-3'} spriteID={'settings'} />
                        Settings
                    </Title>
                    <div className={styles.settingsTabs}>
                        {settingsTabsData.map((tab) => (
                            <Tab
                                active={tab.value === activeTab}
                                onClick={() => setActiveTab(tab.value)}
                                key={tab.id}
                            >
                                {tab.name}
                            </Tab>
                        ))}
                    </div>
                </div>
                {activeTab === 'company' && <SettingsCompany />}
                {activeTab === 'configuration' && <SettingsConfiguration />}
                {activeTab === 'manager' && <SettingsManager />}
                {activeTab === 'serviceProviders' && (
                    <SettingsServiceProviders />
                )}
                {activeTab === 'satelliteTrackers' && (
                    <SettingsSatelliteTrackers />
                )}
                {activeTab === 'wirelessTrackers' && (
                    <SettingsWirelessTrackers />
                )}
                {activeTab === 'gateways' && <SettingsGateways />}
            </div>
        </PageWrapper>
    );
};
