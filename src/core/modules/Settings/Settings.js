import cn from 'classnames'
import React, { useState } from 'react'

import { settingsTabsData } from '../../../data/settingsTabs'
import { PageWrapper } from '../../ui/PageWrapper'
import { SvgSprite } from '../../ui/common/SvgSprite/SvgSprite'
import { Tab } from '../../ui/common/Tab'
import { Title } from '../../ui/common/Title'
import { SettingsCompany } from './SettingsCompany'
import { SettingsConfiguration } from './SettingsConfiguration'
import { SettingsGateways } from './SettingsGateways'
import { SettingsManager } from './SettingsManager'
import { SettingsSatelliteTrackers } from './SettingsSatelliteTrackers'
import { SettingsServiceProviders } from './SettingsServiceProviders'
import { SettingsWirelessTrackers } from './SettingsWirelessTrackers'
import styles from './index.module.scss'

export const Settings = () => {
    const [activeTab, setActiveTab] = useState(settingsTabsData[0].value)

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
    )
}
