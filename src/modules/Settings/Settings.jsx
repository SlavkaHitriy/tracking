import React, { useState } from 'react';

import { Tab } from '../../components/common/Tab/index.js';
import { settingsTabsData } from '../../data/settingsTabs.js';
import { SettingsCompany } from './SettingsCompany.jsx';
import { SettingsConfiguration } from './SettingsConfiguration.jsx';
import styles from './index.module.scss';
import { Stack } from '@mui/material';
import { SettingsUsers } from './SettingsUsers.jsx';
import { SettingsTrackers } from './SettingsTrackers.jsx';

export const Settings = () => {
    const [activeTab, setActiveTab] = useState(settingsTabsData[0].value);

    return (
        <Stack direction={'row'} className={styles.settings}>
            <Stack
                p={4}
                className={styles.settingsAside}
                component={'aside'}
                spacing={1}
            >
                {settingsTabsData.map((tab) => (
                    <Tab
                        className={styles.settingsTab}
                        activeClassName={styles.settingsTabActive}
                        active={tab.value === activeTab}
                        onClick={() => setActiveTab(tab.value)}
                        key={tab.id}
                    >
                        {tab.name}
                    </Tab>
                ))}
            </Stack>
            {activeTab === 'users' && <SettingsUsers />}
            {activeTab === 'company' && <SettingsCompany />}
            {activeTab === 'configuration' && <SettingsConfiguration />}
            {activeTab === 'trackers' && <SettingsTrackers />}
        </Stack>
    );
};
