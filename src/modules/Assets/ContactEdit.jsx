import React from 'react';

import { Grid, Stack, Typography } from '@mui/material';
import { DefaultInput } from '../../components/common/DefaultInput/index.js';

export const ContactEdit = () => {
    return (
        <Grid container spacing={6}>
            <Grid item xs={6}>
                <Stack spacing={2}>
                    <Typography fontWeight={700}>First Name</Typography>
                    <DefaultInput placeholder={'E.g. Storage Yard'} />
                </Stack>
            </Grid>
            <Grid item xs={6}>
                <Stack spacing={2}>
                    <Typography fontWeight={700}>Last Name</Typography>
                    <DefaultInput placeholder={'E.g. ACME Company'} />
                </Stack>
            </Grid>
            <Grid item xs={6}>
                <Stack spacing={2}>
                    <Typography fontWeight={700}>Cellular</Typography>
                    <DefaultInput placeholder={'E.g. ACME Company'} />
                </Stack>
            </Grid>
            <Grid item xs={6}>
                <Stack spacing={2}>
                    <Typography fontWeight={700}>Email</Typography>
                    <DefaultInput placeholder={'E.g. ACME Company'} />
                </Stack>
            </Grid>
            <Grid item xs={6}>
                <Stack spacing={2}>
                    <Typography fontWeight={700}>Account Number</Typography>
                    <DefaultInput placeholder={'E.g. ACME Company'} />
                </Stack>
            </Grid>
        </Grid>
    );
};
