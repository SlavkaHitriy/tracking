import { LinearProgress, Stack, Typography } from '@mui/material';
import React from 'react';

export const columns = [
    {
        field: 'location',
        headerName: 'Location',
        width: 130,
        renderCell: ({ value }) => (
            <Typography color={'secondary'} fontSize={13}>
                {value}
            </Typography>
        ),
    },
    { field: 'temp', headerName: 'Temp', width: 85 },
    { field: 'speed', headerName: 'Speed', width: 85 },
    { field: 'altitude', headerName: 'Altitude', width: 85 },
    { field: 'date', headerName: 'Date', width: 85 },
    {
        field: 'timeline',
        flex: 1,
        renderHeader: () => (
            <Stack
                width={'100%'}
                direction={'row'}
                justifyContent={'space-between'}
                spacing={1}
            >
                <Typography fontWeight={700}>Time</Typography>
                <Typography fontWeight={700}>Duration</Typography>
            </Stack>
        ),
        renderCell: ({ value: [firstWord, secondWord] }) => (
            <Stack width={'100%'} maxWidth={'200px'}>
                <Stack
                    direction={'row'}
                    justifyContent={'space-between'}
                    spacing={2}
                >
                    <Typography fontSize={13}>{firstWord}</Typography>
                    <Typography fontSize={13}>{secondWord}</Typography>
                </Stack>
                <LinearProgress
                    variant='determinate'
                    value={90}
                    sx={{
                        height: 10,
                        backgroundColor: 'grey.light',
                        borderRadius: '10px',
                        boxShadow: 'inset 0 3px 6px rgba(0 0 0 / 16%)',
                        '.MuiLinearProgress-bar': {
                            backgroundColor: 'secondary.main',
                            borderRadius: '10px',
                        },
                    }}
                />
            </Stack>
        ),
    },
];

export const rows = [
    {
        id: 1,
        location: 'Houston, Texas',
        temp: '99.33',
        speed: '24.5',
        altitude: '12.1',
        date: '06/02/23',
        timeline: ['01:05 PM', '2 h 30 m'],
    },
    {
        id: 2,
        location: 'Houston, Texas',
        temp: '99.33',
        speed: '24.5',
        altitude: '12.1',
        date: '06/02/23',
        timeline: ['01:05 PM', '2 h 30 m'],
    },
    {
        id: 3,
        location: 'Houston, Texas',
        temp: '99.33',
        speed: '24.5',
        altitude: '12.1',
        date: '06/02/23',
        timeline: ['01:05 PM', '2 h 30 m'],
    },
    {
        id: 4,
        location: 'Houston, Texas',
        temp: '99.33',
        speed: '24.5',
        altitude: '12.1',
        date: '06/02/23',
        timeline: ['01:05 PM', '2 h 30 m'],
    },
    {
        id: 5,
        location: 'Houston, Texas',
        temp: '99.33',
        speed: '24.5',
        altitude: '12.1',
        date: '06/02/23',
        timeline: ['01:05 PM', '2 h 30 m'],
    },
];
