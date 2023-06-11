import React from 'react';

import styles from './index.module.scss';
import { Box, Grid, Stack, Typography } from '@mui/material';
import { Title } from '../../components/common/Title/index.js';
import { DefaultInput } from '../../components/common/DefaultInput/index.js';
import { ScrollContent } from '../../components/common/ScrollContent/index.js';

export const SettingsCompany = () => {
    return (
        <Stack direction={'row'} className={styles.settingsWrap}>
            <Box
                sx={{
                    width: '50%',
                    borderRight: '1px solid black',
                    borderColor: 'grey.light',
                }}
            >
                <ScrollContent>
                    <Box p={'30px 40px'}>
                        <Title sx={{ mb: 5 }}>Company</Title>
                        <Grid container spacing={4}>
                            <Grid item xs={6}>
                                <DefaultInput
                                    label={'Company Name'}
                                    placeholder={'E.g. Storage Yard'}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <DefaultInput
                                    label={'Division'}
                                    placeholder={'E.g. ACME Company'}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <DefaultInput
                                    label={'Address 1'}
                                    placeholder={'E.g. ACME Company'}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <DefaultInput
                                    label={'Address 2'}
                                    placeholder={'E.g. ACME Company'}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <DefaultInput
                                    label={'City'}
                                    placeholder={'E.g. Storage Yard'}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <DefaultInput
                                    label={'State'}
                                    placeholder={'E.g. ACME Company'}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <DefaultInput
                                    label={'Zip Code'}
                                    placeholder={'E.g. 77078'}
                                />
                            </Grid>
                            <Grid item xs={6} />
                            <Grid item xs={6}>
                                <DefaultInput
                                    label={'Contact Name'}
                                    placeholder={'E.g. bob@email.com'}
                                />
                            </Grid>
                            <Grid item xs={6} />
                            <Grid item xs={6}>
                                <DefaultInput
                                    label={'Email'}
                                    placeholder={'E.g. bob@email.com'}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <DefaultInput
                                    label={'Cellular'}
                                    placeholder={'000-000-0000'}
                                />
                            </Grid>
                        </Grid>
                    </Box>
                </ScrollContent>
            </Box>
            <Box
                sx={{
                    width: '50%',
                }}
            >
                <ScrollContent>
                    <Box p={'30px 40px'}>
                        <Title sx={{ mb: 5 }}>Accounts Payable</Title>
                        <Grid container spacing={4}>
                            <Grid item xs={6}>
                                <DefaultInput
                                    label={'First Name'}
                                    placeholder={'E.g. Bob'}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <DefaultInput
                                    label={'Last Name'}
                                    placeholder={'E.g. Parker'}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <DefaultInput
                                    label={'Email'}
                                    placeholder={'E.g. bob@email.com'}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <DefaultInput
                                    label={'Cellular'}
                                    placeholder={'000-000-0000'}
                                />
                            </Grid>
                        </Grid>
                        <Title
                            type={'small'}
                            sx={{
                                color: 'secondary.main',
                                mt: 4,
                                mb: 1,
                            }}
                        >
                            Pricing configuration
                        </Title>
                        <Stack direction={'row'} spacing={4}>
                            <Box width={'100%'}>
                                <Stack direction={'row'} alignItems={'center'}>
                                    <DefaultInput placeholder={'10.99'} />
                                    <Title type={'small'}>usd</Title>
                                </Stack>
                                <Stack direction={'row'} spacing={1} mt={2}>
                                    <Typography fontWeight={700}>
                                        Monthly Recurring
                                    </Typography>
                                    <Typography>/ per device</Typography>
                                </Stack>
                            </Box>
                            <Box width={'100%'}>
                                <Stack direction={'row'} alignItems={'center'}>
                                    <DefaultInput placeholder={'100.00'} />
                                    <Title type={'small'}>usd</Title>
                                </Stack>
                                <Stack direction={'row'} spacing={1} mt={2}>
                                    <Typography fontWeight={700}>
                                        Device Cost
                                    </Typography>
                                    <Typography>/ per device</Typography>
                                </Stack>
                            </Box>
                        </Stack>
                    </Box>
                </ScrollContent>
            </Box>
        </Stack>
    );
};
