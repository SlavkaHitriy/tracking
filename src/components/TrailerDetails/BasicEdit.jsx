import React from 'react';

import { Grid, Stack, Typography } from '@mui/material';
import { DefaultInput } from '../DefaultInput/index.js';
import { DefaultSelect } from '../DefaultSelect/index.js';
import { Progress } from '../Progress/index.js';
import { briefInfoProgressData } from '../../data/briefInfoProgress.js';

export const BasicEdit = () => {
    return (
        <Grid container spacing={6}>
            <Grid item xs={6}>
                <Stack spacing={2}>
                    <Typography fontWeight={700}>Asset Name</Typography>
                    <DefaultInput placeholder={'E.g. Storage Yard'} />
                </Stack>
            </Grid>
            <Grid item xs={6}>
                <Stack spacing={2}>
                    <Typography fontWeight={700}>Customer ID</Typography>
                    <DefaultInput placeholder={'E.g. ACME Company'} />
                </Stack>
            </Grid>
            <Grid item xs={6}>
                <Stack spacing={2}>
                    <Typography fontWeight={700}>Category</Typography>
                    <DefaultInput placeholder={'E.g. ACME Company'} />
                </Stack>
            </Grid>
            <Grid item xs={6}>
                <Stack spacing={2}>
                    <Typography fontWeight={700}>Type</Typography>
                    <DefaultSelect />
                </Stack>
            </Grid>
            <Grid item xs={12}>
                <Stack direction={'row'} spacing={6}>
                    <Stack width={'50%'} spacing={2}>
                        <Typography fontWeight={700}>
                            Associated Device
                        </Typography>
                        <Typography>Serial Number</Typography>
                        <Typography
                            fontSize={17}
                            fontWeight={700}
                            color={'secondary'}
                            py={'8px'}
                            sx={{
                                borderBottom: '1px solid black',
                                borderColor: 'grey.light',
                            }}
                        >
                            704298
                        </Typography>
                        <Typography>Select and choose a tracker.</Typography>
                    </Stack>
                    <Stack width={'50%'} spacing={2}>
                        <Typography fontWeight={700}>Status</Typography>
                        <Typography>Status and Asset Association</Typography>
                        <Progress staticData data={briefInfoProgressData} />
                    </Stack>
                </Stack>
            </Grid>
        </Grid>
    );
};
