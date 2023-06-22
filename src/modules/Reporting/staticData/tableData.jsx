import { Stack, Typography } from '@mui/material';
import React from 'react';
import { ColorStatus } from '../../../components/ColorStatus/index.js';
import { ArrowForwardIos } from '@mui/icons-material';

export const columns = [
    {
        field: 'invoice',
        headerName: 'Invoice',
        width: 150,
        renderCell: ({ value }) => (
            <Typography color={'secondary'} fontSize={13} fontWeight={700}>
                {value}
            </Typography>
        ),
    },
    { field: 'invoiceDate', headerName: 'Invoice Date', width: 175 },
    { field: 'amount', headerName: 'Amount', width: 150 },
    { field: 'devices', headerName: 'Devices', width: 150 },
    { field: 'billingCycle', headerName: 'Billing Cycle', width: 190 },
    { field: 'dueDate', headerName: 'Due Date', width: 210 },
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
        invoice: '1002',
        invoiceDate: '06/01/2023',
        amount: '$150.00',
        devices: '25',
        billingCycle: 'Monthly',
        dueDate: '06-10-2023 1:23PM',
        status: {
            name: 'Paid',
            code: 1,
        },
    },
    {
        id: 2,
        invoice: '1002',
        invoiceDate: '06/01/2023',
        amount: '$150.00',
        devices: '25',
        billingCycle: 'Monthly',
        dueDate: '06-10-2023 1:23PM',
        status: {
            name: 'Paid',
            code: 1,
        },
    },
    {
        id: 3,
        invoice: '1002',
        invoiceDate: '06/01/2023',
        amount: '$150.00',
        devices: '25',
        billingCycle: 'Monthly',
        dueDate: '06-10-2023 1:23PM',
        status: {
            name: 'Paid',
            code: 1,
        },
    },
    {
        id: 4,
        invoice: '1002',
        invoiceDate: '06/01/2023',
        amount: '$150.00',
        devices: '25',
        billingCycle: 'Monthly',
        dueDate: '06-10-2023 1:23PM',
        status: {
            name: 'Paid',
            code: 1,
        },
    },
    {
        id: 5,
        invoice: '1002',
        invoiceDate: '06/01/2023',
        amount: '$150.00',
        devices: '25',
        billingCycle: 'Monthly',
        dueDate: '06-10-2023 1:23PM',
        status: {
            name: 'Past Due',
            code: 3,
        },
    },
];

export const invoiceColumns = [
    {
        field: 'deviceSn',
        headerName: 'Device SN',
        width: 210,
        flex: 1,
        renderCell: ({ value }) => (
          <Typography color={'secondary'} fontSize={13} fontWeight={700}>
              {value}
          </Typography>
        ),
    },
    { field: 'linkedAsset', flex: 1, headerName: 'Linked Asset', width: 200 },
    { field: 'hardware', flex: 1, headerName: 'Hardware', width: 135 },
    { field: 'firmware', flex: 1, headerName: 'Firmware', width: 135 },
    { field: 'hwVersion', flex: 1, headerName: 'HW Ver.', width: 135 },
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
    { field: 'cost', headerName: 'Cost', width: 110 },
];

export const invoiceRows = [
    {
        id: 1,
        deviceSn: '704298',
        linkedAsset: 'Trailer 202',
        hardware: 'Oyster 3',
        firmware: '268',
        hwVersion: '1',
        status: {
            name: 'Active',
            code: 1,
        },
        cost: '$9.99',
    },
    {
        id: 2,
        deviceSn: '704298',
        linkedAsset: 'Trailer 202',
        hardware: 'Oyster 3',
        firmware: '268',
        hwVersion: '1',
        status: {
            name: 'Active',
            code: 1,
        },
        cost: '$9.99',
    },
    {
        id: 3,
        deviceSn: '704298',
        linkedAsset: 'Trailer 202',
        hardware: 'Oyster 3',
        firmware: '268',
        hwVersion: '1',
        status: {
            name: 'Active',
            code: 1,
        },
        cost: '$9.99',
    },
    {
        id: 4,
        deviceSn: '704298',
        linkedAsset: 'Trailer 202',
        hardware: 'Oyster 3',
        firmware: '268',
        hwVersion: '1',
        status: {
            name: 'Active',
            code: 1,
        },
        cost: '$9.99',
    },
    {
        id: 5,
        deviceSn: '704298',
        linkedAsset: 'Trailer 202',
        hardware: 'Oyster 3',
        firmware: '268',
        hwVersion: '1',
        status: {
            name: 'Deactivated',
            code: 3,
        },
        cost: '$0.00',
    },
]
