import { Stack, Typography } from '@mui/material';
import React from 'react';
import { ColorStatus } from '../../../components/ColorStatus/index.js';
import { Status } from '../../../components/Status/index.js';

export const columns = [
    {
        field: 'assetName',
        headerName: 'Asset Name',
        width: 135,
        renderCell: ({ value }) => (
            <Typography fontWeight={700}>{value}</Typography>
        ),
    },
    {
        field: 'deviceId',
        headerName: 'Device ID',
        width: 100,
        renderCell: ({ value: { text, code } }) => (
            <Stack direction={'row'} alignItems={'center'} spacing={2}>
                <Typography>{text}</Typography>
                <ColorStatus code={code} />
            </Stack>
        ),
    },
    { field: 'speed', headerName: 'Speed', width: 80 },
    {
        field: 'lastUpdate',
        headerName: 'Last Update',
        flex: 1,
        renderCell: ({ value: { text, isPremium } }) => (
            <Stack direction={'row'} alignItems={'center'} spacing={2}>
                <Typography>{text}</Typography>
                {isPremium && (
                    <Stack
                        alignItems={'center'}
                        justifyContent={'center'}
                        sx={{
                            width: 30,
                            height: 30,
                            borderRadius: '50%',
                            backgroundColor: 'green.main',
                        }}
                    >
                        <Typography
                            fontWeight={700}
                            fontSize={17}
                            color={'common.white'}
                            lineHeight={1}
                        >
                            P
                        </Typography>
                    </Stack>
                )}
            </Stack>
        ),
    },
    {
        field: 'status',
        headerName: 'Status',
        width: 110,
        renderCell: ({ value }) => (
            <Stack
                width={'100%'}
                direction={'row'}
                justifyContent={'space-between'}
                alignItems={'center'}
                spacing={1}
                pr={2}
            >
                <Status code={value} />
            </Stack>
        ),
    },
];

export const rows = [
    {
        id: 1,
        assetName: 'Trailer 3340',
        deviceId: {
            text: '704238',
            code: 1,
        },
        speed: 24.5,
        lastUpdate: {
            text: '07-25-2023 06:45pm',
            isPremium: true,
        },
        status: 1,
    },
    {
        id: 2,
        assetName: 'Trailer 3340',
        deviceId: {
            text: '704238',
            code: 1,
        },
        speed: 24.5,
        lastUpdate: {
            text: '07-25-2023 06:45pm',
            isPremium: false,
        },
        status: 1,
    },
    {
        id: 3,
        assetName: 'Trailer 3340',
        deviceId: {
            text: '704238',
            code: 1,
        },
        speed: 24.5,
        lastUpdate: {
            text: '07-25-2023 06:45pm',
            isPremium: true,
        },
        status: 1,
    },
    {
        id: 4,
        assetName: 'Trailer 3340',
        deviceId: {
            text: '704238',
            code: 1,
        },
        speed: 24.5,
        lastUpdate: {
            text: '07-25-2023 06:45pm',
            isPremium: false,
        },
        status: 1,
    },
    {
        id: 5,
        assetName: 'Trailer 3340',
        deviceId: {
            text: '704238',
            code: 1,
        },
        speed: 24.5,
        lastUpdate: {
            text: '07-25-2023 06:45pm',
            isPremium: false,
        },
        status: 1,
    },
    {
        id: 6,
        assetName: 'Trailer 3340',
        deviceId: {
            text: '704238',
            code: 1,
        },
        speed: 24.5,
        lastUpdate: {
            text: '07-25-2023 06:45pm',
            isPremium: false,
        },
        status: 1,
    },
    {
        id: 7,
        assetName: 'Trailer 3340',
        deviceId: {
            text: '704238',
            code: 1,
        },
        speed: 24.5,
        lastUpdate: {
            text: '07-25-2023 06:45pm',
            isPremium: false,
        },
        status: 1,
    },
    {
        id: 8,
        assetName: 'Trailer 3340',
        deviceId: {
            text: '704238',
            code: 1,
        },
        speed: 24.5,
        lastUpdate: {
            text: '07-25-2023 06:45pm',
            isPremium: false,
        },
        status: 1,
    },
    {
        id: 9,
        assetName: 'Trailer 3340',
        deviceId: {
            text: '704238',
            code: 1,
        },
        speed: 24.5,
        lastUpdate: {
            text: '07-25-2023 06:45pm',
            isPremium: false,
        },
        status: 1,
    },
];
