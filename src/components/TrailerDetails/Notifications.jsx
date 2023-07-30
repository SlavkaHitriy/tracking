import { Box, Stack } from '@mui/material';
import { Datepicker } from '../Datepicker/index.js';
import React from 'react';
import { Filters } from '../Filters/index.js';
import { columns, rows } from './staticData/notificationsData.jsx';
import { DefaultDataGrid } from '../DefaultDataGrid/index.js';

export const Notifications = () => {
    return (
        <Stack spacing={2} height={'100%'}>
            <Stack
                direction={'row'}
                spacing={2}
                justifyContent={'space-between'}
            >
                <Stack direction={'row'} spacing={2}>
                    <Datepicker />
                    <Datepicker />
                </Stack>
                <Filters />
            </Stack>
            <Box flexGrow={1}>
                <DefaultDataGrid
                    pageItems={10}
                    pageSizeOptions={[10, 30, 60]}
                    columns={columns}
                    rows={rows}
                    onRowClick={() => {}}
                />
            </Box>
        </Stack>
    );
};
