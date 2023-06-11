import { Stack, Typography } from '@mui/material';
import React from 'react';
import { ArrowForwardIos } from '@mui/icons-material';

export const categoryColumns = [
    {
        field: 'category',
        headerName: 'Category',
        width: 260,
        renderCell: ({ value }) => (
            <Typography color={'secondary'} fontSize={13} fontWeight={700}>
                {value}
            </Typography>
        ),
    },
    { field: 'description', headerName: 'Description', flex: 1 },
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

export const categoryRows = [
    {
        id: 1,
        category: 'Trailers',
        description: '22” ft Trailer',
    },
    {
        id: 2,
        category: 'Trucks',
        description: 'Ford F150',
    },
    {
        id: 3,
        category: 'Cars',
        description: 'Tesla Model 3',
    },
    {
        id: 4,
        category: 'Heavy Machinery',
        description: 'Caterpillar Mover',
    },
    {
        id: 5,
        category: 'Boats',
        description: 'Navel Sea 1',
    },
    {
        id: 6,
        category: 'Field Equipment',
        description: 'Generator',
    },
];
