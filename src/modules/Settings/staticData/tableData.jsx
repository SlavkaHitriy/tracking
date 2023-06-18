import { Stack, Typography } from '@mui/material';
import { DefaultAvatar } from '../../../components/DefaultAvatar/index.js';
import React from 'react';
import { ColorStatus } from '../../../components/ColorStatus/index.js';
import { ArrowForwardIos } from '@mui/icons-material';

export const columns = [
    {
        field: 'fullname',
        headerName: 'Full Name',
        width: 175,
        renderCell: ({ value: { name, initials } }) => (
            <Stack
                width={'100%'}
                direction={'row'}
                justifyContent={'space-between'}
                alignItems={'center'}
                spacing={1}
                py={1}
            >
                <Typography color={'secondary'} fontSize={13} fontWeight={700}>
                    {name}
                </Typography>
                <DefaultAvatar>{initials}</DefaultAvatar>
            </Stack>
        ),
    },
    { field: 'role', headerName: 'Role', width: 160 },
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
        field: 'company',
        headerName: 'Company',
        width: 190,
    },
    {
        field: 'cellular',
        headerName: 'Cellular',
        width: 190,
    },
    { field: 'email', headerName: 'Email', width: 210 },
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
        fullname: {
            name: 'Anton Bersh',
            initials: 'AB',
        },
        role: 'Admin',
        status: {
            name: 'Active',
            code: 1,
        },
        company: 'Houston',
        cellular: '713-555-8989',
        email: 'bob@me.com',
    },
    {
        id: 2,
        fullname: {
            name: 'Harry Harison',
            initials: 'HH',
        },
        role: 'Admin',
        status: {
            name: 'Deactivated',
            code: 3,
        },
        company: 'Houston',
        cellular: '713-555-8989',
        email: 'harry@me.com',
    },
    {
        id: 3,
        fullname: {
            name: 'Jessie Harvey',
            initials: 'JH',
        },
        role: 'Admin',
        status: {
            name: 'Active',
            code: 1,
        },
        company: 'Houston',
        cellular: '713-555-8989',
        email: 'test@test.test',
    },
    {
        id: 4,
        fullname: {
            name: 'Matthew Brown',
            initials: 'MB',
        },
        role: 'Admin',
        status: {
            name: 'Active',
            code: 1,
        },
        company: 'Houston',
        cellular: '713-555-8989',
        email: 'test@test.test',
    },
    {
        id: 5,
        fullname: {
            name: 'Steve Quinn',
            initials: 'SQ',
        },
        role: 'Admin',
        status: {
            name: 'Active',
            code: 1,
        },
        company: 'Houston',
        cellular: '713-555-8989',
        email: 'test@test.test',
    },
    {
        id: 6,
        fullname: {
            name: 'Loretta Parker',
            initials: 'LR',
        },
        role: 'Admin',
        status: {
            name: 'Deactivated',
            code: 3,
        },
        company: 'Houston',
        cellular: '713-555-8989',
        email: 'test@test.test',
    },
];
