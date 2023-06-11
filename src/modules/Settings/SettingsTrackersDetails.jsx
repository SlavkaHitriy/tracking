import styles from './index.module.scss';
import { Box, Grid, Stack, Typography } from '@mui/material';
import { Title } from '../../components/common/Title/index.js';
import { ScrollContent } from '../../components/common/ScrollContent/index.js';
import { DefaultButton } from '../../components/common/DefaultButton/index.js';
import { Progress } from '../../components/Progress/index.js';
import { briefInfoProgressData } from '../../data/briefInfoProgress.js';
import { ColorStatus } from '../../components/common/ColorStatus/index.js';

export const SettingsTrackersDetails = ({ closeDetails }) => {
    return (
        <Box
            sx={{
                borderLeft: '1px solid black',
                borderColor: 'grey.light',
                backgroundColor: 'common.white',
            }}
            className={styles.settingsDetails}
        >
            <ScrollContent>
                <Stack p={'35px 50px'} spacing={5}>
                    <Stack direction={'row'} spacing={8}>
                        <Stack
                            spacing={2}
                            sx={{
                                maxWidth: '200px',
                            }}
                        >
                            <Title>Device</Title>
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
                            <Typography>Enter device serial number.</Typography>
                        </Stack>
                        <Stack spacing={2}>
                            <Title>Status</Title>
                            <Typography>
                                Status and Asset Association
                            </Typography>
                            <Progress data={briefInfoProgressData} />
                        </Stack>
                    </Stack>
                    <Box
                        p={3}
                        sx={{
                            backgroundColor: '#F5F7FB',
                            border: '1px solid black',
                            borderColor: 'grey.light',
                        }}
                    >
                        <Grid container spacing={4}>
                            <Grid item xs={3}>
                                <Typography mb={2} fontWeight={700}>
                                    State
                                </Typography>
                                <Stack
                                    direction={'row'}
                                    alignItems={'center'}
                                    spacing={2}
                                >
                                    <Typography>Online</Typography>
                                    <ColorStatus code={1} />
                                </Stack>
                            </Grid>
                            <Grid item xs={3}>
                                <Typography mb={2} fontWeight={700}>
                                    Latitude
                                </Typography>
                                <Typography>30.0235</Typography>
                            </Grid>
                            <Grid item xs={3}>
                                <Typography mb={2} fontWeight={700}>
                                    Longitude
                                </Typography>
                                <Typography>-95.1025</Typography>
                            </Grid>
                            <Grid item xs={3}>
                                <Typography mb={2} fontWeight={700}>
                                    Altitude (m)
                                </Typography>
                                <Typography>130</Typography>
                            </Grid>
                            <Grid item xs={3}>
                                <Typography mb={2} fontWeight={700}>
                                    Battery (V)
                                </Typography>
                                <Typography>4.32</Typography>
                            </Grid>
                            <Grid item xs={3}>
                                <Typography mb={2} fontWeight={700}>
                                    Device Temp
                                </Typography>
                                <Typography>120 °F</Typography>
                            </Grid>
                            <Grid item xs={3}>
                                <Typography mb={2} fontWeight={700}>
                                    Speed (m/s)
                                </Typography>
                                <Typography>23.1</Typography>
                            </Grid>
                            <Grid item xs={3}>
                                <Typography mb={2} fontWeight={700}>
                                    Heading
                                </Typography>
                                <Typography>-88.23</Typography>
                            </Grid>
                        </Grid>
                        <Box
                            m={'32px auto'}
                            sx={{
                                height: '1px',
                                width: '50%',
                                backgroundColor: 'grey.light',
                            }}
                        />
                        <Grid container spacing={4}>
                            <Grid item xs={3}>
                                <Typography mb={2} fontWeight={700}>
                                    Channel ID
                                </Typography>
                                <Typography>1160536</Typography>
                            </Grid>
                            <Grid item xs={3}>
                                <Typography mb={2} fontWeight={700}>
                                    External Power
                                </Typography>
                                <Typography>False</Typography>
                            </Grid>
                            <Grid item xs={3}>
                                <Typography mb={2} fontWeight={700}>
                                    GSM Signal
                                </Typography>
                                <Typography>15</Typography>
                            </Grid>
                            <Grid item xs={3}>
                                <Typography mb={2} fontWeight={700}>
                                    Timestamp
                                </Typography>
                                <Typography color={'secondary'}>
                                    12-01-22 1:34PM
                                </Typography>
                            </Grid>
                            <Grid item xs={3}>
                                <Typography mb={2} fontWeight={700}>
                                    Firmware
                                </Typography>
                                <Typography>1160536</Typography>
                            </Grid>
                            <Grid item xs={3}>
                                <Typography mb={2} fontWeight={700}>
                                    HW Ver.
                                </Typography>
                                <Typography>False</Typography>
                            </Grid>
                            <Grid item xs={3}>
                                <Typography mb={2} fontWeight={700}>
                                    Identifier
                                </Typography>
                                <Typography>908980808080</Typography>
                            </Grid>
                            <Grid item xs={3}>
                                <Typography mb={2} fontWeight={700}>
                                    ICCID
                                </Typography>
                                <Typography>35100980989080808</Typography>
                            </Grid>
                        </Grid>
                    </Box>
                </Stack>
                <Stack
                    p={'35px 50px'}
                    direction={'row'}
                    justifyContent={'space-between'}
                    mt={'auto'}
                >
                    <DefaultButton onClick={closeDetails}>Delete</DefaultButton>
                    <Stack direction={'row'} spacing={2}>
                        <DefaultButton
                            sx={{ color: 'secondary.main' }}
                            onClick={closeDetails}
                        >
                            Cancel
                        </DefaultButton>
                        <DefaultButton
                            variant={'contained'}
                            onClick={closeDetails}
                        >
                            Update
                        </DefaultButton>
                    </Stack>
                </Stack>
            </ScrollContent>
        </Box>
    );
};
