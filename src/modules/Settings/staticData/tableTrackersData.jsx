import { Stack, Typography } from '@mui/material';
import React from 'react';
import { ColorStatus } from '../../../components/ColorStatus/index.js';
import { ArrowForwardIos } from '@mui/icons-material';

export const trackersColumns = [
    {
        field: 'serialNumber',
        headerName: 'Serial Number',
        width: 145,
        renderCell: ({ value }) => (
            <Typography color={'secondary'} fontSize={13} fontWeight={700}>
                {value}
            </Typography>
        ),
    },
    { field: 'firmware', headerName: 'Firmware', width: 120 },
    { field: 'hwVersion', headerName: 'HW Ver.', width: 100 },
    { field: 'linkedAsset', headerName: 'Linked Asset', width: 160 },
    { field: 'battery', headerName: 'Battery (v)', width: 140 },
    { field: 'lastUpdate', headerName: 'Last Updater', width: 190 },
    {
        field: 'state',
        headerName: 'State',
        width: 130,
        renderCell: ({ value: { name, code } }) => (
            <Stack
                width={'100%'}
                direction={'row'}
                justifyContent={'space-between'}
                alignItems={'center'}
                spacing={1}
                pr={2}
            >
                <Typography fontSize={13}>{name}</Typography>
                <ColorStatus code={code} />
            </Stack>
        ),
    },
    {
        field: 'status',
        headerName: 'Status',
        width: 130,
        renderCell: ({ value: { name, code } }) => (
            <Stack
                width={'100%'}
                direction={'row'}
                justifyContent={'space-between'}
                alignItems={'center'}
                spacing={1}
                pr={2}
            >
                <Typography fontSize={13}>{name}</Typography>
                <ColorStatus code={code} />
            </Stack>
        ),
    },
    {
        field: 'arrowIcon',
        headerName: '',
        flex: 1,
        renderCell: () => (
            <Stack alignItems={'flex-end'} width={'100%'} pr={5}>
                <ArrowForwardIos
                    sx={{
                        width: 18,
                        height: 18,
                    }}
                />
            </Stack>
        ),
        sortable: false,
        disableColumnMenu: true,
    },
];

export const trackersRows = [
    {
        id: 1,
        serialNumber: 704298,
        firmware: 268,
        hwVersion: 1,
        linkedAsset: 'Trailer 202',
        battery: '5.357',
        lastUpdate: '06-10-2023 1:23PM',
        state: {
            name: 'Online',
            code: 1,
        },
        status: {
            name: 'Active',
            code: 1,
        },
    },
    {
        id: 2,
        serialNumber: 704298,
        firmware: 268,
        hwVersion: 1,
        linkedAsset: 'Trailer 203',
        battery: '5.357',
        lastUpdate: '06-10-2023 1:23PM',
        state: {
            name: 'Online',
            code: 1,
        },
        status: {
            name: 'Active',
            code: 1,
        },
    },
    {
        id: 3,
        serialNumber: 704298,
        firmware: 268,
        hwVersion: 1,
        linkedAsset: 'Trailer 783',
        battery: '5.357',
        lastUpdate: '06-10-2023 1:23PM',
        state: {
            name: 'Online',
            code: 1,
        },
        status: {
            name: 'Active',
            code: 1,
        },
    },
    {
        id: 4,
        serialNumber: 704298,
        firmware: 268,
        hwVersion: 1,
        linkedAsset: 'Catepillar 232',
        battery: '5.357',
        lastUpdate: '06-10-2023 1:23PM',
        state: {
            name: 'No Data',
            code: 3,
        },
        status: {
            name: 'Deactivated',
            code: 3,
        },
    },
    {
        id: 5,
        serialNumber: 704298,
        firmware: 268,
        hwVersion: 1,
        linkedAsset: 'Boat 2334432',
        battery: '5.357',
        lastUpdate: '06-10-2023 1:23PM',
        state: {
            name: 'Online',
            code: 1,
        },
        status: {
            name: 'Active',
            code: 1,
        },
    },
    {
        id: 6,
        serialNumber: 704298,
        firmware: 268,
        hwVersion: 1,
        linkedAsset: 'Truck F-150 09',
        battery: '5.357',
        lastUpdate: '06-10-2023 1:23PM',
        state: {
            name: 'Online',
            code: 1,
        },
        status: {
            name: 'Active',
            code: 1,
        },
    },
];
