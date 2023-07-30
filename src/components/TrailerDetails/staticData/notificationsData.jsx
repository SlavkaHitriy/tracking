import { Stack, Typography } from '@mui/material';
import React from 'react';
import { ColorStatus } from '../../ColorStatus/index.js';

export const columns = [
    {
        field: 'asset',
        headerName: 'Asset',
        width: 100,
    },
    { field: 'type', headerName: 'Type', width: 120 },
    { field: 'date', headerName: 'Date', width: 150 },
    {
        field: 'priority',
        headerName: 'Priority',
        width: 95,
        renderCell: ({ value: { text, code } }) => (
            <Stack direction={'row'} alignItems={'center'} spacing={2}>
                <Typography>{text}</Typography>
                <ColorStatus code={code} />
            </Stack>
        ),
    },
    { field: 'alertType', headerName: 'Alert Type', flex: 1 },
    {
        field: 'value',
        headerName: 'Value',
        width: 90,
        renderCell: ({ value }) => (
            <Typography fontWeight={700}>{value}</Typography>
        ),
    },
];

export const rows = [
    {
        id: 1,
        asset: 'Trailer 4482',
        type: 'Asset Alert',
        date: '07/23/23 1:12PM',
        priority: {
            text: '1',
            code: 1,
        },
        alertType: 'Temp Violation',
        value: '102F',
    },
    {
        id: 2,
        asset: 'Trailer 4482',
        type: 'Asset Alert',
        date: '07/23/23 1:12PM',
        priority: {
            text: '1',
            code: 1,
        },
        alertType: 'Temp Violation',
        value: '102F',
    },
    {
        id: 3,
        asset: 'Trailer 4482',
        type: 'Asset Alert',
        date: '07/23/23 1:12PM',
        priority: {
            text: '1',
            code: 1,
        },
        alertType: 'Temp Violation',
        value: '102F',
    },
    {
        id: 4,
        asset: 'Trailer 4482',
        type: 'Asset Alert',
        date: '07/23/23 1:12PM',
        priority: {
            text: '1',
            code: 1,
        },
        alertType: 'Temp Violation',
        value: '102F',
    },
    {
        id: 5,
        asset: 'Trailer 4482',
        type: 'Asset Alert',
        date: '07/23/23 1:12PM',
        priority: {
            text: '1',
            code: 1,
        },
        alertType: 'Temp Violation',
        value: '102F',
    },
    {
        id: 6,
        asset: 'Trailer 4482',
        type: 'Asset Alert',
        date: '07/23/23 1:12PM',
        priority: {
            text: '1',
            code: 1,
        },
        alertType: 'Temp Violation',
        value: '102F',
    },
    {
        id: 7,
        asset: 'Trailer 4482',
        type: 'Asset Alert',
        date: '07/23/23 1:12PM',
        priority: {
            text: '1',
            code: 1,
        },
        alertType: 'Temp Violation',
        value: '102F',
    },
    {
        id: 8,
        asset: 'Trailer 4482',
        type: 'Asset Alert',
        date: '07/23/23 1:12PM',
        priority: {
            text: '1',
            code: 1,
        },
        alertType: 'Temp Violation',
        value: '102F',
    },
    {
        id: 9,
        asset: 'Trailer 4482',
        type: 'Asset Alert',
        date: '07/23/23 1:12PM',
        priority: {
            text: '1',
            code: 1,
        },
        alertType: 'Temp Violation',
        value: '102F',
    },
    {
        id: 10,
        asset: 'Trailer 4482',
        type: 'Asset Alert',
        date: '07/23/23 1:12PM',
        priority: {
            text: '1',
            code: 1,
        },
        alertType: 'Temp Violation',
        value: '102F',
    },
    {
        id: 11,
        asset: 'Trailer 4482',
        type: 'Asset Alert',
        date: '07/23/23 1:12PM',
        priority: {
            text: '1',
            code: 1,
        },
        alertType: 'Temp Violation',
        value: '102F',
    },
    {
        id: 12,
        asset: 'Trailer 4482',
        type: 'Asset Alert',
        date: '07/23/23 1:12PM',
        priority: {
            text: '1',
            code: 1,
        },
        alertType: 'Temp Violation',
        value: '102F',
    },
    {
        id: 13,
        asset: 'Trailer 4482',
        type: 'Asset Alert',
        date: '07/23/23 1:12PM',
        priority: {
            text: '1',
            code: 1,
        },
        alertType: 'Temp Violation',
        value: '102F',
    },
];
