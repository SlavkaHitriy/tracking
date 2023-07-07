import { Box, Grid, Stack, Typography } from '@mui/material';
import logo from '../../assets/images/logo.svg';
import authBg from '../../assets/images/auth-bg.jpg';
import { DefaultButton } from '../../components/DefaultButton/index.js';
import { ScrollContent } from '../../components/ScrollContent/index.js';
import tracker from '../../assets/images/trackerMap.svg';
import { useNavigate } from 'react-router-dom';

export const Success = () => {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/auth/login');
    };

    return (
        <Grid container>
            <Grid item xs={6}>
                <Stack
                    height={'100vh'}
                    alignItems={'center'}
                    justifyContent={'center'}
                >
                    <Stack
                        py={4}
                        width={'100%'}
                        height={'100%'}
                        maxWidth={'300px'}
                    >
                        <Box
                            pt={20}
                            mb={10}
                            sx={{
                                img: {
                                    maxWidth: '190px',
                                    maxHeight: '35px',
                                },
                            }}
                        >
                            <img src={logo} alt='logo' />
                        </Box>
                        <Stack
                            direction={'row'}
                            spacing={2}
                            alignItems={'center'}
                            mb={10}
                        >
                            <img src={tracker} alt='tracker' />
                            <Typography fontWeight={700} fontSize={30}>
                                Success!
                            </Typography>
                        </Stack>
                        <ScrollContent>
                            <Stack spacing={3}>
                                <Stack
                                    spacing={3}
                                    onSubmit={handleSubmit}
                                    component={'form'}
                                >
                                    <Typography fontWeight={700}>
                                        You have successfully created your
                                        account.
                                    </Typography>
                                    <Typography color={'grey.blue'}>
                                        You will receive an email verification
                                        link. Please check your spam inbox in
                                        the event you do not see your
                                        verification email.
                                    </Typography>
                                    <Typography color={'grey.blue'}>
                                        Once you verify your email your account
                                        will be activated.
                                    </Typography>
                                    <DefaultButton
                                        sx={{
                                            flexGrow: 1,
                                            backgroundColor: 'green.main',
                                            '&.MuiButton-contained': {
                                                backgroundColor: 'green.main',
                                            },
                                        }}
                                        variant={'contained'}
                                        type={'submit'}
                                    >
                                        Sign In
                                    </DefaultButton>
                                </Stack>
                            </Stack>
                        </ScrollContent>
                        <Typography
                            fontWeight={700}
                            href={'https://google.com'}
                            component={'a'}
                            target={'_blank'}
                            mt={4}
                        >
                            signaltracks.com
                        </Typography>
                    </Stack>
                </Stack>
            </Grid>
            <Grid item xs={6}>
                <Stack
                    height={'100%'}
                    sx={{
                        boxShadow: '0 3px 6px rgba(0 0 0 / 16%)',
                        img: {
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                        },
                    }}
                >
                    <img src={authBg} alt='auth bg' />
                </Stack>
            </Grid>
        </Grid>
    );
};
