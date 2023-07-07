import { Box, Grid, Stack, Typography } from '@mui/material';
import logo from '../../assets/images/logo.svg';
import authBg from '../../assets/images/auth-bg.jpg';
import { DefaultInput } from '../../components/DefaultInput/index.js';
import { DefaultButton } from '../../components/DefaultButton/index.js';
import { ScrollContent } from '../../components/ScrollContent/index.js';
import { Link, useNavigate } from 'react-router-dom';

export const Forgot = () => {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
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
                            mb={12}
                            sx={{
                                img: {
                                    maxWidth: '190px',
                                    maxHeight: '35px',
                                },
                            }}
                        >
                            <img src={logo} alt='logo' />
                        </Box>
                        <ScrollContent>
                            <Stack spacing={3}>
                                <Stack
                                    spacing={3}
                                    onSubmit={handleSubmit}
                                    component={'form'}
                                >
                                    <Typography fontWeight={700}>
                                        Forgot Password?
                                    </Typography>
                                    <Typography color={'grey.blue'}>
                                        Please enter the email address you used
                                        to create your Signal Tracks account.
                                        You will receive a password reset link
                                        that will expire in 30 minutes.
                                    </Typography>
                                    <DefaultInput
                                        placeholder={'Email address'}
                                    />
                                    <Stack direction={'row'} spacing={3}>
                                        <DefaultButton
                                            sx={{
                                                color: 'secondary.main',
                                                flexGrow: 1,
                                            }}
                                            onClick={() =>
                                                navigate('/auth/login')
                                            }
                                        >
                                            Cancel
                                        </DefaultButton>
                                        <DefaultButton
                                            sx={{
                                                flexGrow: 1,
                                            }}
                                            variant={'contained'}
                                            type={'submit'}
                                        >
                                            Send
                                        </DefaultButton>
                                    </Stack>
                                    <Typography
                                        sx={{
                                            a: {
                                                color: 'secondary.main',
                                            },
                                        }}
                                    >
                                        Already a Member?{' '}
                                        <Link to={'/auth/login'}>Sign In</Link>
                                    </Typography>
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
