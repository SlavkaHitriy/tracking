import { Box, Grid, Stack, Typography } from '@mui/material';
import { Title } from '../../components/Title/index.js';
import { ColorStatus } from '../../components/ColorStatus';
import trackProgress from '../../assets/images/trackProgress.png';
import { gridItems } from './staticData/gridItems.js';

export const GridItems = ({ openDetails }) => {
    return (
        <Box>
            <Grid container spacing={2}>
                {gridItems.map((item) => (
                    <Grid key={item.id} item xs={3}>
                        <Stack
                            direction={'row'}
                            spacing={2}
                            justifyContent={'space-between'}
                            p={'8px 8px 24px 24px'}
                            sx={{
                                border: '1px solid black',
                                borderColor: 'grey.light',
                                borderRadius: '10px',
                                transition: 'border-color .15s',
                                cursor: 'pointer',
                                '&:hover': {
                                    borderColor: 'secondary.main',
                                },
                            }}
                            onClick={openDetails}
                        >
                            <Stack spacing={1}>
                                <Title
                                    sx={{
                                        pt: 1,
                                        mb: 1,
                                    }}
                                >
                                    Trailer 4482
                                </Title>
                                <Typography>Category</Typography>
                                <Typography fontWeight={700}>
                                    Food Trailers
                                </Typography>
                                <Typography>Type</Typography>
                                <Typography fontWeight={700}>
                                    22 Feet Trailer
                                </Typography>
                            </Stack>
                            <Stack spacing={1}>
                                <Stack
                                    spacing={2}
                                    pt={2}
                                    pb={1}
                                    px={2}
                                    sx={{
                                        backgroundColor: '#F5F7FB',
                                        borderRadius: '5px',
                                    }}
                                >
                                    <Stack
                                        direction={'row'}
                                        spacing={2}
                                        justifyContent={'space-between'}
                                    >
                                        <ColorStatus code={1} size={20} />
                                        <Typography fontWeight={700}>
                                            Active
                                        </Typography>
                                    </Stack>
                                    <Typography>12-01-22 1:34PM</Typography>
                                </Stack>
                                <Box
                                    sx={{
                                        img: {
                                            width: '100%',
                                            height: '80px',
                                            objectFit: 'contain',
                                        },
                                    }}
                                >
                                    <img
                                        src={trackProgress}
                                        alt='track progress'
                                    />
                                </Box>
                            </Stack>
                        </Stack>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};
