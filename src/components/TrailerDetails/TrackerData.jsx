import { Box, Grid, Stack, Typography } from '@mui/material';
import { Progress } from '../Progress/Progress.jsx';
import { briefInfoProgressData } from '../../data/briefInfoProgress.js';
import { columns, rows } from './staticData/trackersData.jsx';
import { DefaultDataGrid } from '../DefaultDataGrid/index.js';
import React from 'react';

export const TrackerData = ({ isFullscreen }) => {
    return (
        <Stack spacing={3}>
            <Stack direction={'row'} spacing={8}>
                <Stack
                    spacing={2}
                    sx={{
                        maxWidth: '200px',
                    }}
                >
                    <Typography fontWeight={700}>Associated Device</Typography>
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
                <Stack spacing={2}>
                    <Typography fontWeight={700}>Status</Typography>
                    <Typography>Status and Asset Association</Typography>
                    <Progress staticData data={briefInfoProgressData} />
                </Stack>
            </Stack>
            {isFullscreen && (
                <Stack spacing={2}>
                    <Typography fontWeight={700}>Sensor Thresholds</Typography>
                    <Typography>
                        Configure custom sensor thresholds for alerts and data
                        logging reporting.
                    </Typography>
                    <Typography>
                        Move Min/Max sliders to the desired range.
                    </Typography>
                    <DefaultDataGrid
                        columns={columns}
                        rows={rows}
                        onRowClick={() => {}}
                        disablePagination
                    />
                    <Typography fontWeight={700}>Details</Typography>
                    <Box>
                        <Grid
                            sx={{
                                width: '70%',
                            }}
                            container
                            spacing={4}
                        >
                            <Grid item xs={3}>
                                <Stack spacing={2}>
                                    <Typography>Battery (V)</Typography>
                                    <Typography fontWeight={700}>
                                        4.32
                                    </Typography>
                                </Stack>
                            </Grid>
                            <Grid item xs={3}>
                                <Stack spacing={2}>
                                    <Typography>Firmware</Typography>
                                    <Typography fontWeight={700}>
                                        1160536
                                    </Typography>
                                </Stack>
                            </Grid>
                            <Grid item xs={3}>
                                <Stack spacing={2}>
                                    <Typography>HW Ver.</Typography>
                                    <Typography fontWeight={700}>
                                        False
                                    </Typography>
                                </Stack>
                            </Grid>
                            <Grid item xs={3}>
                                <Stack spacing={2}>
                                    <Typography>Identifier</Typography>
                                    <Typography fontWeight={700}>
                                        908980808080
                                    </Typography>
                                </Stack>
                            </Grid>
                        </Grid>
                    </Box>
                </Stack>
            )}
        </Stack>
    );
};
