import { Stack, Typography } from '@mui/material';
import React from 'react';
import { ColorStatus } from '../../../components/ColorStatus/index.js';
import { ArrowForwardIos } from '@mui/icons-material';

export const typesColumns = [
    {
        field: 'category',
        headerName: 'Category',
        width: 220,
    },
    {
        field: 'types',
        headerName: 'Types',
        width: 230,
        renderCell: ({ value }) => (
            <Typography color={'secondary'} fontSize={13} fontWeight={700}>
                {value}
            </Typography>
        ),
    },
    { field: 'description', headerName: 'Description', flex: 1 },
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

export const typesRows = [
    {
        id: 1,
        category: 'Trailers',
        types: '22” ft Trailer',
        description: '22” ft Trailer',
        status: {
            name: 'Active',
            code: 1,
        },
    },
    {
        id: 2,
        category: 'Trucks',
        types: 'Ford F150',
        description: 'Ford F150',
        status: {
            name: 'Active',
            code: 1,
        },
    },
    {
        id: 3,
        category: 'Cars',
        types: 'Tesla Model 3',
        description: 'Tesla Model 3',
        status: {
            name: 'Active',
            code: 1,
        },
    },
    {
        id: 4,
        category: 'Heavy Machinery',
        types: 'Caterpillar Mover',
        description: 'Caterpillar Mover',
        status: {
            name: 'Active',
            code: 1,
        },
    },
    {
        id: 5,
        category: 'Boats',
        types: 'Navel Sea 1',
        description: 'Navel Sea 1',
        status: {
            name: 'Active',
            code: 1,
        },
    },
    {
        id: 6,
        category: 'Field Equipment',
        types: 'Generator',
        description: 'Generator',
        status: {
            name: 'Deactivated',
            code: 3,
        },
    },
];
