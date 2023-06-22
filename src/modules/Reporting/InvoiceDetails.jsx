import { Box, Grid, LinearProgress, Stack, Typography } from '@mui/material';
import styles from './Assets.module.scss';
import { Close } from '@mui/icons-material';
import { DefaultIconButton } from '../../components/DefaultIconButton';
import { Title } from '../../components/Title';
import { Filters } from '../../components/Filters/Filters';
import { ScrollContent } from '../../components/ScrollContent';
import { DefaultDataGrid } from '../../components/DefaultDataGrid';
import { columns, rows } from './staticData/tableData';

export const InvoiceDetails = ({ closeDetails }) => {
    return (
        <Stack spacing={3} className={styles.details}>
            <Stack direction={'row'} spacing={1}>
                <Title>Invoice:</Title>
                <Typography fontSize={23}>10023</Typography>
                <DefaultIconButton
                    onClick={closeDetails}
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
            </Stack>
            <Stack
                direction={'row'}
                spacing={5}
                justifyContent={'space-between'}
            >
                <Stack
                    spacing={3}
                    sx={{
                        maxWidth: '600px',
                    }}
                >
                    <Stack
                        direction={'row'}
                        spacing={3}
                        justifyContent={'space-between'}
                    >
                        <Stack spacing={2}>
                            <Typography fontWeight={700} color={'grey.blue'}>
                                Invoice #
                            </Typography>
                            <Typography>10023</Typography>
                            <Typography fontWeight={700} color={'grey.blue'}>
                                Invoice Date
                            </Typography>
                            <Typography>03/23/2023</Typography>
                        </Stack>
                        <Stack spacing={2}>
                            <Typography fontWeight={700} color={'grey.blue'}>
                                Status
                            </Typography>
                            <Typography>Open</Typography>
                            <Typography fontWeight={700} color={'grey.blue'}>
                                Billing Cycle
                            </Typography>
                            <Typography>Monthly</Typography>
                        </Stack>
                        <Stack spacing={2}>
                            <Title
                                sx={{
                                    mt: '-10px',
                                }}
                            >
                                Signal Tracks
                            </Title>
                            <Box
                                sx={{
                                    color: 'grey.blue',
                                }}
                            >
                                <Typography>Signal Tracks, LLC</Typography>
                                <Typography>4201 Main St.</Typography>
                                <Typography>Suite A</Typography>
                                <Typography>Houston, Texas 77002</Typography>
                                <Typography>United States</Typography>
                            </Box>
                        </Stack>
                    </Stack>
                    <Box
                        sx={{
                            width: '100%',
                            height: '1px',
                            backgroundColor: 'grey.light',
                        }}
                    />
                    <Stack
                        direction={'row'}
                        spacing={3}
                        justifyContent={'space-between'}
                    >
                        <Stack spacing={2}>
                            <Typography fontWeight={700} color={'grey.blue'}>
                                Customer
                            </Typography>
                            <Box
                                sx={{
                                    color: 'grey.blue',
                                }}
                            >
                                <Typography>Signal Tracks, LLC</Typography>
                                <Typography>4201 Main St.</Typography>
                                <Typography>Suite A</Typography>
                                <Typography>Houston, Texas 77002</Typography>
                                <Typography>United States</Typography>
                            </Box>
                        </Stack>
                        <Stack spacing={2}>
                            <Typography fontWeight={700} color={'grey.blue'}>
                                Amount
                            </Typography>
                            <Typography>$1,005.95</Typography>
                            <Typography fontWeight={700} color={'grey.blue'}>
                                Amount Paid
                            </Typography>
                            <Typography>$0.00</Typography>
                        </Stack>
                        <Stack justifyContent={'space-between'}>
                            <Stack spacing={2}>
                                <Typography
                                    fontWeight={700}
                                    color={'grey.blue'}
                                >
                                    Balance Due
                                </Typography>
                                <Typography fontSize={20}>$1,005.95</Typography>
                            </Stack>
                            <Box
                                sx={{
                                    p: '13px 15px',
                                    backgroundColor: '#F5F7FB',
                                    borderRadius: '5px',
                                }}
                            >
                                <Typography>Due Date: 06/09/23</Typography>
                            </Box>
                        </Stack>
                    </Stack>
                </Stack>
                <Stack spacing={4} justifyContent={'space-between'}>
                    <Stack direction={'row'} spacing={4}>
                        <Stack
                            sx={{
                                p: '16px 25px',
                                borderRadius: '5px',
                                backgroundColor: '#F5F7FB',
                                maxWidth: '200px',
                                width: '100%',
                            }}
                            spacing={2}
                        >
                            <Typography fontWeight={700}>Devices</Typography>
                            <Box>
                                <Grid container spacing={1}>
                                    <Grid item xs={6}>
                                        <Stack spacing={1}>
                                            <Typography
                                                fontSize={20}
                                                fontWeight={700}
                                            >
                                                55
                                            </Typography>
                                            <Typography
                                                color={'grey.blue'}
                                                fontWeight={700}
                                            >
                                                Active
                                            </Typography>
                                        </Stack>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Stack spacing={1}>
                                            <Typography
                                                fontSize={20}
                                                fontWeight={700}
                                            >
                                                05
                                            </Typography>
                                            <Typography
                                                color={'grey.blue'}
                                                fontWeight={700}
                                            >
                                                Inactive
                                            </Typography>
                                        </Stack>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Typography
                                            fontSize={20}
                                            fontWeight={700}
                                        >
                                            85%
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Typography
                                            color={'grey.blue'}
                                            fontWeight={700}
                                            sx={{
                                                lineHeight: '2',
                                            }}
                                        >
                                            Utilization
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <LinearProgress
                                            variant='determinate'
                                            value={85}
                                            sx={{
                                                height: 10,
                                                backgroundColor: 'grey.light',
                                                borderRadius: '10px',
                                                boxShadow:
                                                    'inset 0 3px 6px rgba(0 0 0 / 16%)',
                                                '.MuiLinearProgress-bar': {
                                                    backgroundColor:
                                                        'secondary.main',
                                                    borderRadius: '10px',
                                                },
                                            }}
                                        />
                                    </Grid>
                                </Grid>
                            </Box>
                        </Stack>
                        <Stack
                            sx={{
                                p: '16px 25px',
                                borderRadius: '5px',
                                backgroundColor: '#F5F7FB',
                                maxWidth: '200px',
                                width: '100%',
                            }}
                            spacing={2}
                        >
                            <Typography fontWeight={700}>Assets</Typography>
                            <Box>
                                <Grid container spacing={1}>
                                    <Grid item xs={6}>
                                        <Stack spacing={1}>
                                            <Typography
                                                fontSize={20}
                                                fontWeight={700}
                                            >
                                                45
                                            </Typography>
                                            <Typography
                                                color={'grey.blue'}
                                                fontWeight={700}
                                            >
                                                Active
                                            </Typography>
                                        </Stack>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Stack spacing={1}>
                                            <Typography
                                                fontSize={20}
                                                fontWeight={700}
                                            >
                                                10
                                            </Typography>
                                            <Typography
                                                color={'grey.blue'}
                                                fontWeight={700}
                                            >
                                                Inactive
                                            </Typography>
                                        </Stack>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Typography
                                            fontSize={20}
                                            fontWeight={700}
                                        >
                                            65%
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Typography
                                            color={'grey.blue'}
                                            fontWeight={700}
                                            sx={{
                                                lineHeight: '2',
                                            }}
                                        >
                                            Utilization
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <LinearProgress
                                            variant='determinate'
                                            value={65}
                                            sx={{
                                                height: 10,
                                                backgroundColor: 'grey.light',
                                                borderRadius: '10px',
                                                boxShadow:
                                                    'inset 0 3px 6px rgba(0 0 0 / 16%)',
                                                '.MuiLinearProgress-bar': {
                                                    backgroundColor:
                                                        'green.main',
                                                    borderRadius: '10px',
                                                },
                                            }}
                                        />
                                    </Grid>
                                </Grid>
                            </Box>
                        </Stack>
                    </Stack>
                    <Stack alignItems={'flex-end'}>
                        <Filters />
                    </Stack>
                </Stack>
            </Stack>
            <ScrollContent>
                <Box height={600}>
                    <DefaultDataGrid
                        columns={columns}
                        rows={rows}
                        onRowClick={() => setIsActiveDetails(true)}
                    />
                </Box>
            </ScrollContent>
            <Stack direction={'row'} alignItems={'center'} spacing={4} justifyContent={'flex-end'} sx={{
                p: '12px 22px',
                backgroundColor: '#F5F7FB',
                borderRadius: '5px'
            }}>
                <Title>Total</Title>
                <Typography fontSize={20}>$1,005.95</Typography>
            </Stack>
        </Stack>
    );
};
