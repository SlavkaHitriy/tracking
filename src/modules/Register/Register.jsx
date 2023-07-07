import { Box, Grid, Stack, Switch, Typography } from '@mui/material';
import logo from '../../assets/images/logo.svg';
import authBg from '../../assets/images/auth-bg.jpg';
import { DefaultInput } from '../../components/DefaultInput/index.js';
import { DefaultButton } from '../../components/DefaultButton/index.js';
import { ScrollContent } from '../../components/ScrollContent/index.js';
import { Link, useNavigate } from 'react-router-dom';
import React from 'react';

export const Register = () => {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/auth/success');
    };

    return (
        <Grid container>
            <Grid item xs={6}>
                <ScrollContent>
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
                            <Stack mb={4} spacing={3}>
                                <Stack
                                    spacing={3}
                                    onSubmit={handleSubmit}
                                    component={'form'}
                                >
                                    <DefaultInput
                                        label={'Full Name'}
                                        placeholder={
                                            'Enter first and last name'
                                        }
                                    />
                                    <DefaultInput
                                        label={'Email'}
                                        placeholder={'Enter email address'}
                                    />
                                    <DefaultInput
                                        label={'Password'}
                                        placeholder={'************'}
                                        type={'password'}
                                    />
                                    <Stack
                                        direction={'row'}
                                        alignItems={'center'}
                                        spacing={2}
                                    >
                                        <Switch
                                            sx={{
                                                ml: '-12px',
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
                                        />
                                        <Typography
                                            sx={{
                                                whiteSpace: 'nowrap',
                                                a: {
                                                    fontWeight: 700,
                                                    textDecoration: 'underline',
                                                },
                                            }}
                                        >
                                            Swipe to accept our{' '}
                                            <a
                                                href='https://google.com'
                                                target={'_blank'}
                                            >
                                                Terms of Service.
                                            </a>
                                        </Typography>
                                    </Stack>
                                    <DefaultButton
                                        variant={'contained'}
                                        type={'submit'}
                                    >
                                        Sign Up
                                    </DefaultButton>
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
                            <Typography
                                fontWeight={700}
                                href={'https://google.com'}
                                component={'a'}
                                target={'_blank'}
                                mt={'auto'}
                            >
                                signaltracks.com
                            </Typography>
                        </Stack>
                    </Stack>
                </ScrollContent>
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
