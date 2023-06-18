import { Stack, Typography } from '@mui/material';
import React from 'react';
import { ColorStatus } from '../../../components/ColorStatus/index.js';
import { ArrowForwardIos } from '@mui/icons-material';

export const columns = [
    {
        field: 'assetName',
        headerName: 'Asset Name',
        width: 160,
        renderCell: ({ value }) => (
            <Typography color={'secondary'} fontSize={13} fontWeight={700}>
                {value}
            </Typography>
        ),
    },
    { field: 'category', headerName: 'Category', width: 140 },
    { field: 'type', headerName: 'Type', width: 150 },
    { field: 'vin', headerName: 'VIN', width: 150 },
    { field: 'customerId', headerName: 'Customer ID', width: 150 },
    { field: 'deviceSn', headerName: 'Device SN', width: 150 },
    { field: 'lastUpdate', headerName: 'Last Update', width: 180 },
    {
        field: 'state',
        headerName: 'State',
        width: 170,
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
        width: 170,
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

export const rows = [
    {
        id: 1,
        assetName: 'Anton Bersh',
        category: 'Trailers',
        type: '22 Ft Trailers',
        vin: '239049309439394',
        customerId: 'TTN4802',
        deviceSn: '704298',
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
        assetName: 'Anton Bersh',
        category: 'Trailers',
        type: '22 Ft Trailers',
        vin: '239049309439394',
        customerId: 'TTN4802',
        deviceSn: '704298',
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
        assetName: 'Anton Bersh',
        category: 'Trailers',
        type: '22 Ft Trailers',
        vin: '239049309439394',
        customerId: 'TTN4802',
        deviceSn: '704298',
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
        assetName: 'Anton Bersh',
        category: 'Trailers',
        type: '22 Ft Trailers',
        vin: '239049309439394',
        customerId: 'TTN4802',
        deviceSn: '704298',
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
        id: 5,
        assetName: 'Anton Bersh',
        category: 'Trailers',
        type: '22 Ft Trailers',
        vin: '239049309439394',
        customerId: 'TTN4802',
        deviceSn: '704298',
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
