import React from 'react';

import styles from './index.module.scss';
import { Box, Grid, Stack, Typography } from '@mui/material';
import { Title } from '../../components/Title/index.js';
import { DefaultInput } from '../../components/DefaultInput/index.js';
import { ScrollContent } from '../../components/ScrollContent/index.js';
import { DefaultButton } from '../../components/DefaultButton';
import { EditNote } from '@mui/icons-material';
import { useState } from 'react';

export const SettingsCompany = () => {
    const [isEditView, setIsEditView] = useState(false);

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
                                    disabled={!isEditView}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <DefaultInput
                                    label={'Division'}
                                    placeholder={'E.g. ACME Company'}
                                    disabled={!isEditView}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <DefaultInput
                                    label={'Address 1'}
                                    placeholder={'E.g. ACME Company'}
                                    disabled={!isEditView}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <DefaultInput
                                    label={'Address 2'}
                                    placeholder={'E.g. ACME Company'}
                                    disabled={!isEditView}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <DefaultInput
                                    label={'City'}
                                    placeholder={'E.g. Storage Yard'}
                                    disabled={!isEditView}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <DefaultInput
                                    label={'State'}
                                    placeholder={'E.g. ACME Company'}
                                    disabled={!isEditView}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <DefaultInput
                                    label={'Zip Code'}
                                    placeholder={'E.g. 77078'}
                                    disabled={!isEditView}
                                />
                            </Grid>
                            <Grid item xs={6} />
                            <Grid item xs={6}>
                                <DefaultInput
                                    label={'Contact Name'}
                                    placeholder={'E.g. bob@email.com'}
                                    disabled={!isEditView}
                                />
                            </Grid>
                            <Grid item xs={6} />
                            <Grid item xs={6}>
                                <DefaultInput
                                    label={'Email'}
                                    placeholder={'E.g. bob@email.com'}
                                    disabled={!isEditView}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <DefaultInput
                                    label={'Cellular'}
                                    placeholder={'000-000-0000'}
                                    disabled={!isEditView}
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
                        <Stack
                            direction={'row'}
                            justifyContent={'space-between'}
                            alignItems={'center'}
                            spacing={2}
                            mb={5}
                        >
                            <Title>Accounts Payable</Title>
                            {!isEditView && (
                                <DefaultButton
                                    startIcon={<EditNote />}
                                    sx={{
                                        border: '1px solid black',
                                        borderColor: 'grey.light',
                                        p: '13px 40px 13px 20px',
                                        fontWeight: 700,
                                        '.MuiButton-startIcon': {
                                            mr: 2,
                                            pr: 2,
                                            borderRight: '1px solid black',
                                            borderColor: 'grey.light',
                                            transition:
                                                'padding .15s, border-color .15s',
                                        },

                                        '&:hover': {
                                            backgroundColor: 'grey.light',
                                            '.MuiButton-startIcon': {
                                                pr: 0,
                                            },
                                        },
                                    }}
                                    onClick={() => setIsEditView(true)}
                                >
                                    Edit Asset
                                </DefaultButton>
                            )}
                        </Stack>

                        <Grid container spacing={4}>
                            <Grid item xs={6}>
                                <DefaultInput
                                    label={'First Name'}
                                    placeholder={'E.g. Bob'}
                                    disabled={!isEditView}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <DefaultInput
                                    label={'Last Name'}
                                    placeholder={'E.g. Parker'}
                                    disabled={!isEditView}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <DefaultInput
                                    label={'Email'}
                                    placeholder={'E.g. bob@email.com'}
                                    disabled={!isEditView}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <DefaultInput
                                    label={'Cellular'}
                                    placeholder={'000-000-0000'}
                                    disabled={!isEditView}
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
                                    <DefaultInput placeholder={'10.99'} disabled={!isEditView} />
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
                                    <DefaultInput placeholder={'100.00'} disabled={!isEditView} />
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
                    {isEditView && (
                        <Stack
                            p={'35px 50px'}
                            direction={'row'}
                            justifyContent={'flex-end'}
                            mt={'auto'}
                        >
                            <Stack direction={'row'} spacing={2}>
                                <DefaultButton onClick={() => setIsEditView(false)} sx={{ color: 'secondary.main' }}>
                                    Cancel
                                </DefaultButton>
                                <DefaultButton onClick={() => setIsEditView(false)} variant={'contained'}>
                                    Update
                                </DefaultButton>
                            </Stack>
                        </Stack>
                    )}
                </ScrollContent>
            </Box>
        </Stack>
    );
};
