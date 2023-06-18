import React, { useState } from 'react';

import { ScrollContent } from '../../components/ScrollContent/index.js';
import { Title } from '../../components/Title/index.js';
import styles from './index.module.scss';
import { Box, Stack, Typography } from '@mui/material';
import { Add } from '@mui/icons-material';
import { DefaultIconButton } from '../../components/DefaultIconButton/index.js';
import { columns, rows } from './staticData/tableData.jsx';
import { DefaultDataGrid } from '../../components/DefaultDataGrid/index.js';
import { SettingsDetails } from './SettingsDetails.jsx';

export const SettingsUsers = () => {
    const [isActiveDetails, setIsActiveDetails] = useState(false);

    return (
        <Box className={styles.settingsWrap}>
            <ScrollContent className={styles.settingCompany}>
                <Stack
                    direction={'row'}
                    justifyContent={'space-between'}
                    mb={4}
                >
                    <Stack direction={'row'} spacing={2}>
                        <Title>Users</Title>
                        <Typography color={'grey.blue'} fontSize={20}>
                            (25)
                        </Typography>
                    </Stack>
                    <DefaultIconButton icon={<Add />} />
                </Stack>
                <Box className={styles.settingsCompanyWrap}>
                    <DefaultDataGrid
                        columns={columns}
                        rows={rows}
                        onRowClick={() => setIsActiveDetails(true)}
                        getRowHeight={() => 'auto'}
                    />
                </Box>
            </ScrollContent>
            {isActiveDetails && (
                <SettingsDetails
                    closeDetails={() => setIsActiveDetails(false)}
                />
            )}
        </Box>
    );
};
