import { Box, Grid, LinearProgress, Stack, Typography } from '@mui/material';
import styles from '../../modules/Assets/Assets.module.scss';
import trackProgress from '../../assets/images/trackProgress.png';
import { ColorStatus } from '../ColorStatus/index.js';
import React from 'react';
import { Filters } from '../Filters/index.js';
import { columns, rows } from './staticData/tableData.jsx';
import { DefaultDataGrid } from '../DefaultDataGrid/index.js';
import { Datepicker } from '../Datepicker/index.js';
import { Title } from '../Title/index.js';
import { Link } from 'react-router-dom';

export const OverviewData = ({ isFullscreen }) => {
    return (
        <Stack spacing={3}>
            <Stack direction={'row'} spacing={6} alignItems={'flex-start'}>
                <Stack
                    sx={{
                        minWidth: '225px',
                    }}
                    spacing={3}
                >
                    <Title
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                        }}
                    >
                        Trailer 4485-0254
                    </Title>
                    <Box>
                        <img
                            className={styles.trackProgress}
                            src={trackProgress}
                            alt='track progress'
                        />
                    </Box>
                    <Stack
                        direction={'row'}
                        spacing={2}
                        justifyContent={'space-between'}
                    >
                        <Typography>Location Duration</Typography>
                        <Typography fontWeight={700}>8:56 hrs</Typography>
                    </Stack>
                    <Stack spacing={2}>
                        <Stack
                            direction={'row'}
                            spacing={2}
                            justifyContent={'space-between'}
                        >
                            <Typography>Asset Utilization</Typography>
                            <Typography fontWeight={700}>95%</Typography>
                        </Stack>
                        <LinearProgress
                            variant='determinate'
                            value={95}
                            sx={{
                                height: 10,
                                backgroundColor: 'grey.light',
                                borderRadius: '10px',
                                boxShadow: 'inset 0 3px 6px rgba(0 0 0 / 16%)',
                                '.MuiLinearProgress-bar': {
                                    backgroundColor: 'secondary.main',
                                    borderRadius: '10px',
                                },
                            }}
                        />
                    </Stack>
                </Stack>
                <Stack>
                    <Box
                        pb={3}
                        mb={3}
                        sx={{
                            borderBottom: '1px solid black',
                            borderColor: 'grey.light',
                        }}
                        flexGrow={1}
                    >
                        <Grid container spacing={3}>
                            <Grid item xs={4}>
                                <Stack spacing={2}>
                                    <Typography>Status</Typography>
                                    <Stack
                                        direction={'row'}
                                        alignItems={'center'}
                                        spacing={4}
                                    >
                                        <Typography fontWeight={700}>
                                            Active
                                        </Typography>
                                        <ColorStatus code={1} />
                                    </Stack>
                                </Stack>
                            </Grid>
                            <Grid item xs={4}>
                                <Stack spacing={2}>
                                    <Typography>Last Update</Typography>
                                    <Typography
                                        color={'secondary'}
                                        fontWeight={700}
                                    >
                                        12-01-22 1:34PM
                                    </Typography>
                                </Stack>
                            </Grid>
                            <Grid item xs={4}>
                                <Stack
                                    spacing={2}
                                    sx={{
                                        a: {
                                            textDecoration: 'underline',
                                        },
                                    }}
                                >
                                    <Box position={'relative'}>
                                        <Stack
                                            alignItems={'center'}
                                            justifyContent={'center'}
                                            sx={{
                                                width: 30,
                                                height: 30,
                                                borderRadius: '50%',
                                                backgroundColor: 'green.main',
                                                position: 'absolute',
                                                left: 'calc(100% + 10px)',
                                                top: '50%',
                                                transform: 'translateY(-50%)',
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
                                        <Typography>
                                            Pay-as-You-Track
                                        </Typography>
                                    </Box>
                                    <Link to={'/tracking'}>Configure</Link>
                                </Stack>
                            </Grid>
                        </Grid>
                    </Box>
                    <Box>
                        <Grid container spacing={3}>
                            <Grid item xs={6}>
                                <Stack spacing={2}>
                                    <Typography>Category</Typography>
                                    <Typography fontWeight={700}>
                                        Food Trailers
                                    </Typography>
                                </Stack>
                            </Grid>
                            <Grid item xs={6}>
                                <Stack spacing={2}>
                                    <Typography>Type</Typography>
                                    <Typography fontWeight={700}>
                                        22 Feet Trailer
                                    </Typography>
                                </Stack>
                            </Grid>
                            <Grid item xs={6}>
                                <Stack spacing={2}>
                                    <Typography>Customer ID</Typography>
                                    <Typography fontWeight={700}>
                                        TN-4598A
                                    </Typography>
                                </Stack>
                            </Grid>
                            <Grid item xs={6}>
                                <Stack spacing={2}>
                                    <Typography>Device SN</Typography>
                                    <Typography
                                        color={'secondary'}
                                        fontWeight={700}
                                    >
                                        704321
                                    </Typography>
                                </Stack>
                            </Grid>
                        </Grid>
                    </Box>
                </Stack>
            </Stack>
            {isFullscreen && (
                <Stack spacing={2}>
                    <Typography fontWeight={700}>History</Typography>
                    <Stack
                        direction={'row'}
                        spacing={2}
                        justifyContent={'space-between'}
                    >
                        <Datepicker />
                        <Filters />
                    </Stack>
                    <DefaultDataGrid
                        columns={columns}
                        rows={rows}
                        onRowClick={() => {}}
                    />
                </Stack>
            )}
        </Stack>
    );
};
