import { Stack, Typography } from '@mui/material';
import React from 'react';
import { ColorStatus } from '../../ColorStatus/index.js';

export const columns = [
    {
        field: 'sensor',
        headerName: 'Sensor',
        width: 100,
    },
    { field: 'unit', headerName: 'Unit', width: 90 },
    { field: 'date', headerName: 'Date', flex: 1 },
    {
        field: 'value',
        headerName: 'Value',
        width: 90,
    },
    {
        field: 'threshold',
        headerName: 'Threshold',
        width: 95,
        renderCell: ({ value: { text, code } }) => (
            <Stack direction={'row'} alignItems={'center'} spacing={2}>
                <Typography>{text}</Typography>
                <ColorStatus code={code} />
            </Stack>
        ),
    },
];

export const rows = [
    {
        id: 1,
        sensor: 'Temperature',
        unit: 'Farenheit',
        date: '07/23/23 1:12PM',
        value: '100.2',
        threshold: {
            text: 'Under',
            code: 1,
        },
    },
    {
        id: 2,
        sensor: 'Temperature',
        unit: 'Farenheit',
        date: '07/23/23 1:12PM',
        value: '100.2',
        threshold: {
            text: 'Under',
            code: 2,
        },
    },
    {
        id: 3,
        sensor: 'Temperature',
        unit: 'Farenheit',
        date: '07/23/23 1:12PM',
        value: '100.2',
        threshold: {
            text: 'Under',
            code: 1,
        },
    },
    {
        id: 4,
        sensor: 'Temperature',
        unit: 'Farenheit',
        date: '07/23/23 1:12PM',
        value: '100.2',
        threshold: {
            text: 'Under',
            code: 2,
        },
    },
    {
        id: 5,
        sensor: 'Temperature',
        unit: 'Farenheit',
        date: '07/23/23 1:12PM',
        value: '100.2',
        threshold: {
            text: 'Under',
            code: 1,
        },
    },
    {
        id: 6,
        sensor: 'Temperature',
        unit: 'Farenheit',
        date: '07/23/23 1:12PM',
        value: '100.2',
        threshold: {
            text: 'Under',
            code: 2,
        },
    },
    {
        id: 7,
        sensor: 'Temperature',
        unit: 'Farenheit',
        date: '07/23/23 1:12PM',
        value: '100.2',
        threshold: {
            text: 'Under',
            code: 1,
        },
    },
    {
        id: 8,
        sensor: 'Temperature',
        unit: 'Farenheit',
        date: '07/23/23 1:12PM',
        value: '100.2',
        threshold: {
            text: 'Under',
            code: 2,
        },
    },
    {
        id: 9,
        sensor: 'Temperature',
        unit: 'Farenheit',
        date: '07/23/23 1:12PM',
        value: '100.2',
        threshold: {
            text: 'Under',
            code: 1,
        },
    },
    {
        id: 10,
        sensor: 'Temperature',
        unit: 'Farenheit',
        date: '07/23/23 1:12PM',
        value: '100.2',
        threshold: {
            text: 'Under',
            code: 2,
        },
    },
    {
        id: 11,
        sensor: 'Temperature',
        unit: 'Farenheit',
        date: '07/23/23 1:12PM',
        value: '100.2',
        threshold: {
            text: 'Under',
            code: 1,
        },
    },
    {
        id: 12,
        sensor: 'Temperature',
        unit: 'Farenheit',
        date: '07/23/23 1:12PM',
        value: '100.2',
        threshold: {
            text: 'Under',
            code: 2,
        },
    },
];
