import React, { useState } from 'react';

import { ScrollContent } from '../../components/ScrollContent/index.js';
import { Title } from '../../components/Title/index.js';
import styles from './index.module.scss';
import { Box, Stack } from '@mui/material';
import { Add } from '@mui/icons-material';
import { DefaultIconButton } from '../../components/DefaultIconButton/index.js';
import { DefaultDataGrid } from '../../components/DefaultDataGrid/index.js';
import { Tab } from '../../components/Tab/index.js';
import { SettingsCategoryDetails } from './SettingsCategoryDetails.jsx';
import { SettingsTypeDetails } from './SettingsTypeDetails.jsx';
import {
    categoryColumns,
    categoryRows,
} from './staticData/tableCategoriesData.jsx';
import { typesColumns, typesRows } from './staticData/tableTypesData.jsx';

export const SettingsConfiguration = () => {
    const [activeTab, setActiveTab] = useState('categories');
    const [isActiveCategoryDetails, setIsActiveCategoryDetails] =
        useState(false);
    const [isActiveTypeDetails, setIsActiveTypeDetails] = useState(false);

    return (
        <Box className={styles.settingsWrap}>
            <ScrollContent className={styles.settingCompany}>
                <Stack
                    direction={'row'}
                    justifyContent={'space-between'}
                    mb={4}
                >
                    <Title>Asset Configuration</Title>
                    <DefaultIconButton icon={<Add />} />
                </Stack>
                <Stack direction={'row'} mb={3}>
                    <Tab
                        className={styles.settingsConfTab}
                        activeClassName={styles.settingsConfTabActive}
                        active={activeTab === 'categories'}
                        onClick={() => setActiveTab('categories')}
                    >
                        Categories
                    </Tab>
                    <Tab
                        className={styles.settingsConfTab}
                        activeClassName={styles.settingsConfTabActive}
                        active={activeTab === 'types'}
                        onClick={() => setActiveTab('types')}
                    >
                        Types
                    </Tab>
                </Stack>
                <Box className={styles.settingsCompanyWrap}>
                    {activeTab === 'categories' && (
                        <DefaultDataGrid
                            columns={categoryColumns}
                            rows={categoryRows}
                            onRowClick={() => setIsActiveCategoryDetails(true)}
                        />
                    )}
                    {activeTab === 'types' && (
                        <DefaultDataGrid
                            columns={typesColumns}
                            rows={typesRows}
                            onRowClick={() => setIsActiveTypeDetails(true)}
                        />
                    )}
                </Box>
            </ScrollContent>
            {isActiveCategoryDetails && (
                <SettingsCategoryDetails
                    closeDetails={() => setIsActiveCategoryDetails(false)}
                />
            )}
            {isActiveTypeDetails && (
                <SettingsTypeDetails
                    closeDetails={() => setIsActiveTypeDetails(false)}
                />
            )}
        </Box>
    );
};
