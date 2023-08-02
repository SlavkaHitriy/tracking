import { Typography } from '@mui/material';
import React from 'react';

export const payAsTrackColumns = [
    {
        field: 'session',
        headerName: 'Session',
        width: 110,
        renderCell: ({ value }) => (
            <Typography color={'secondary'} fontSize={13}>
                {value}
            </Typography>
        ),
    },
    { field: 'userSetup', headerName: 'User Setup', width: 135 },
    { field: 'startTime', headerName: 'Start Time', flex: 1 },
    { field: 'endTime', headerName: 'End Time', flex: 1 },
    { field: 'duration', headerName: 'Duration', width: 90 },
];

export const payAsTrackRows = [
    {
        id: 1,
        session: '1000',
        userSetup: 'Daniel Pacheco',
        startTime: '06/02/23 01:05 PM',
        endTime: '06/02/23 01:05 PM',
        duration: '2 h 30 m',
    },
    {
        id: 2,
        session: '1000',
        userSetup: 'Daniel Pacheco',
        startTime: '06/02/23 01:05 PM',
        endTime: '06/02/23 01:05 PM',
        duration: '2 h 30 m',
    },
    {
        id: 3,
        session: '1000',
        userSetup: 'Daniel Pacheco',
        startTime: '06/02/23 01:05 PM',
        endTime: '06/02/23 01:05 PM',
        duration: '2 h 30 m',
    },
];
