import {
    Box,
    Grid,
    LinearProgress,
    Stack,
    Switch,
    Typography,
} from '@mui/material';
import styles from '../../modules/Assets/Assets.module.scss';
import trackProgress from '../../assets/images/trackProgress.png';
import { ColorStatus } from '../ColorStatus/index.js';
import React, { useState } from 'react';
import { Filters } from '../Filters/index.js';
import { columns, rows } from './staticData/tableData.jsx';
import { DefaultDataGrid } from '../DefaultDataGrid/index.js';
import { Datepicker } from '../Datepicker/index.js';
import { Title } from '../Title/index.js';
import { DefaultButton } from '../DefaultButton/index.js';
import { ScrollContent } from '../ScrollContent/index.js';
import {
    payAsTrackColumns,
    payAsTrackRows,
} from './staticData/payAsTrackData.jsx';
import { Close } from '@mui/icons-material';
import { DefaultIconButton } from '../DefaultIconButton/index.js';

export const OverviewData = ({ isFullscreen }) => {
    const [isPayAsTrack, setIsPayAsTrack] = useState(false);

    const togglePayAsTrack = () => {
        setIsPayAsTrack((prevState) => !prevState);
    };

    return (
        <Stack spacing={3}>
            {isPayAsTrack && (
                <Box
                    sx={{
                        left: 0,
                        top: 0,
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        zIndex: 5,
                        backgroundColor: 'common.white',
                    }}
                >
                    <ScrollContent>
                        <Stack px={3} py={4} spacing={3} position={'relative'}>
                            <DefaultIconButton
                                onClick={togglePayAsTrack}
                                sx={{
                                    position: 'absolute',
                                    right: 18,
                                    top: 18,
                                    zIndex: 3,
                                    backgroundColor: 'primary.main',
                                    color: 'common.white',
                                    '&:hover': {
                                        backgroundColor: 'red.main',
                                    },
                                }}
                                icon={<Close />}
                            />
                            <Stack
                                direction={'row'}
                                spacing={2}
                                alignItems={'center'}
                            >
                                <Box
                                    sx={{
                                        position: 'relative',
                                        display: 'inline-flex',
                                        alignItems: 'flex-start',
                                    }}
                                >
                                    <Title>Pay-As-You-Track</Title>
                                    <Typography
                                        fontSize={10}
                                        sx={{
                                            width: 15,
                                            height: 15,
                                            borderRadius: '50%',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            border: '1px solid black',
                                            borderColor: 'primary.main',
                                        }}
                                    >
                                        R
                                    </Typography>
                                </Box>
                                <Stack
                                    alignItems={'center'}
                                    justifyContent={'center'}
                                    sx={{
                                        width: 30,
                                        height: 30,
                                        borderRadius: '50%',
                                        backgroundColor: 'green.main',
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
                            </Stack>
                            <Stack
                                direction={'row'}
                                alignItems={'center'}
                                spacing={3}
                                justifyContent={'space-between'}
                            >
                                <Typography>
                                    Pay-As-You-Track is a powerful feature
                                    allows users the ability to activate the
                                    location tracking of an asset during a
                                    specific period of time to control costs.
                                </Typography>
                                <DefaultButton
                                    sx={{
                                        whiteSpace: 'nowrap',
                                        p: '7px 21px',
                                        backgroundColor: 'primary.main',
                                        color: 'common.white',
                                        flexShrink: 0,
                                        '&:hover': {
                                            backgroundColor: 'grey.light',
                                            color: 'primary.main',
                                        },
                                    }}
                                >
                                    Learn more
                                </DefaultButton>
                            </Stack>
                            <Box>
                                <Grid container spacing={3}>
                                    <Grid xs={4} item>
                                        <Stack
                                            direction={'row'}
                                            spacing={1}
                                            alignItems={'baseline'}
                                        >
                                            <Typography>Service:</Typography>
                                            <Typography fontWeight={700}>
                                                Activated
                                            </Typography>
                                            <ColorStatus code={1} />
                                        </Stack>
                                    </Grid>
                                    <Grid xs={4} item>
                                        <Stack
                                            direction={'row'}
                                            spacing={1}
                                            alignItems={'baseline'}
                                        >
                                            <Typography>Session:</Typography>
                                            <Typography fontWeight={700}>
                                                1201
                                            </Typography>
                                        </Stack>
                                    </Grid>
                                    <Grid xs={4} item>
                                        <Stack
                                            direction={'row'}
                                            spacing={1}
                                            alignItems={'baseline'}
                                        >
                                            <Typography>Duration:</Typography>
                                            <Typography fontWeight={700}>
                                                5 Days 2 Hrs
                                            </Typography>
                                        </Stack>
                                    </Grid>
                                </Grid>
                            </Box>
                            <Stack direction={'row'} spacing={3}>
                                <Stack spacing={2}>
                                    <Datepicker />
                                    <Typography>Start Date/Time</Typography>
                                </Stack>
                                <Stack spacing={2}>
                                    <Datepicker />
                                    <Typography>End Date/Time</Typography>
                                </Stack>
                                <Stack spacing={2}>
                                    <Stack
                                        alignItems={'center'}
                                        justifyContent={'center'}
                                    >
                                        <Switch
                                            sx={{
                                                '.MuiSwitch-thumb': {
                                                    backgroundColor:
                                                        'green.main',
                                                },
                                                '& .Mui-checked+.MuiSwitch-track':
                                                    {
                                                        backgroundColor:
                                                            'grey.blue',
                                                    },
                                            }}
                                            defaultChecked
                                        />
                                    </Stack>
                                    <Typography>Off/On</Typography>
                                </Stack>
                            </Stack>
                            <Stack
                                spacing={2}
                                sx={{
                                    ol: {
                                        paddingLeft: '15px',
                                    },
                                }}
                            >
                                <Typography fontWeight={700}>
                                    Instructions
                                </Typography>
                                <ol>
                                    <li>
                                        <Typography>
                                            Select a start and end date/time
                                            that the asset will start being
                                            tracked.
                                        </Typography>
                                    </li>
                                    <li>
                                        <Typography>
                                            Swipe slider to On to activate
                                            session. The Pay-As-You-Track
                                            service will deactivate
                                            automatically after the end date and
                                            time is expired.
                                        </Typography>
                                    </li>
                                </ol>
                            </Stack>
                            <DefaultDataGrid
                                columns={payAsTrackColumns}
                                rows={payAsTrackRows}
                                onRowClick={() => {}}
                            />
                        </Stack>
                    </ScrollContent>
                </Box>
            )}
            <Stack direction={'row'} spacing={5} alignItems={'flex-start'}>
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
                                <Stack spacing={2} alignItems={'flex-start'}>
                                    <Typography>Pay-as-You-Track</Typography>
                                    <DefaultButton
                                        variant={'text'}
                                        sx={{
                                            textDecoration: 'underline',
                                            p: 0,
                                            background: 'unset',
                                            minWidth: 'unset',
                                            display: 'inline-block',
                                            textAlign: 'left',
                                            '&:hover': {
                                                background: 'unset',
                                            },
                                        }}
                                        onClick={togglePayAsTrack}
                                    >
                                        Configure
                                    </DefaultButton>
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
