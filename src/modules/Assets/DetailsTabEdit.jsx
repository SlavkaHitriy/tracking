import React from 'react';

import { Grid, Stack, Typography } from '@mui/material';
import { DefaultInput } from '../../components/common/DefaultInput/index.js';
import { DefaultSelect } from '../../components/common/DefaultSelect/index.js';

export const DetailsTabEdit = () => {
    return (
        <Grid container spacing={6}>
            <Grid item xs={6}>
                <Stack spacing={2}>
                    <Typography fontWeight={700}>VIN</Typography>
                    <DefaultInput placeholder={'E.g. Storage Yard'} />
                </Stack>
            </Grid>
            <Grid item xs={6}>
                <Stack spacing={2}>
                    <Typography fontWeight={700}>Serial Number</Typography>
                    <DefaultInput placeholder={'E.g. ACME Company'} />
                </Stack>
            </Grid>
            <Grid item xs={6}>
                <Stack spacing={2}>
                    <Typography fontWeight={700}>Manufacturer</Typography>
                    <DefaultInput placeholder={'E.g. ACME Company'} />
                </Stack>
            </Grid>
            <Grid item xs={6}>
                <Stack spacing={2}>
                    <Typography fontWeight={700}>Model</Typography>
                    <DefaultInput placeholder={'E.g. ACME Company'} />
                </Stack>
            </Grid>
            <Grid item xs={6}>
                <Stack spacing={2}>
                    <Typography fontWeight={700}>USDOT</Typography>
                    <DefaultSelect />
                </Stack>
            </Grid>
            <Grid item xs={6}>
                <Stack spacing={2}>
                    <Typography fontWeight={700}>HAZMAT</Typography>
                    <DefaultInput placeholder={'E.g. ACME Company'} />
                </Stack>
            </Grid>
        </Grid>
    );
};
