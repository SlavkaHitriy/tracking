import { Box, ButtonGroup, Stack, Typography } from '@mui/material';
import { useState } from 'react';
import { DefaultButton } from '../DefaultButton';

export const StatusFilters = () => {
    const [activeFilter, setActiveFilter] = useState('all');

    return (
        <ButtonGroup
            sx={{
                overflow: 'hidden',
                '.MuiButtonGroup-grouped:not(:last-of-type), .MuiButtonGroup-grouped:not(:first-of-type)':
                    {
                        border: 'none',
                        borderRadius: '5px',
                    },
            }}
            variant='contained'
        >
            <DefaultButton
                onClick={() => setActiveFilter('all')}
                sx={{
                    backgroundColor:
                        activeFilter === 'all' ? 'secondary.main' : '#F5F7FB',
                    '&:hover': {
                        backgroundColor:
                            activeFilter === 'all'
                                ? 'secondary.main'
                                : 'grey.dark',
                    },
                }}
            >
                <Stack direction={'row'} alignItems={'center'} spacing={2}>
                    <Typography
                        sx={{
                            color:
                                activeFilter === 'all'
                                    ? 'common.white'
                                    : 'grey.blue',
                            fontWeight: 700,
                            lineHeight: 1,
                            pt: '2px',
                        }}
                    >
                        All
                    </Typography>
                    <Box
                        sx={{
                            fontSize: 20,
                            fontWeight: 700,
                            px: '12px',
                            backgroundColor:
                                activeFilter === 'all'
                                    ? 'common.white'
                                    : '#E2E5EA',
                            borderRadius: '5px',
                            color: 'primary.main',
                        }}
                    >
                        39
                    </Box>
                </Stack>
            </DefaultButton>
            <DefaultButton
                onClick={() => setActiveFilter('active')}
                sx={{
                    backgroundColor:
                        activeFilter === 'active'
                            ? 'secondary.main'
                            : '#F5F7FB',
                    '&:hover': {
                        backgroundColor:
                            activeFilter === 'active'
                                ? 'secondary.main'
                                : 'grey.dark',
                    },
                }}
            >
                <Stack direction={'row'} alignItems={'center'} spacing={2}>
                    <Typography
                        sx={{
                            color:
                                activeFilter === 'active'
                                    ? 'common.white'
                                    : 'grey.blue',
                            fontWeight: 700,
                            lineHeight: 1,
                            pt: '2px',
                        }}
                    >
                        Active
                    </Typography>
                    <Box
                        sx={{
                            fontSize: 20,
                            fontWeight: 700,
                            px: '12px',
                            backgroundColor:
                                activeFilter === 'active'
                                    ? 'common.white'
                                    : '#E2E5EA',
                            borderRadius: '5px',
                            color: 'primary.main',
                        }}
                    >
                        32
                    </Box>
                </Stack>
            </DefaultButton>
            <DefaultButton
                onClick={() => setActiveFilter('online')}
                sx={{
                    backgroundColor:
                        activeFilter === 'online'
                            ? 'secondary.main'
                            : '#F5F7FB',
                    '&:hover': {
                        backgroundColor:
                            activeFilter === 'online'
                                ? 'secondary.main'
                                : 'grey.dark',
                    },
                }}
            >
                <Stack direction={'row'} alignItems={'center'} spacing={2}>
                    <Typography
                        sx={{
                            color:
                                activeFilter === 'online'
                                    ? 'common.white'
                                    : 'grey.blue',
                            fontWeight: 700,
                            lineHeight: 1,
                            pt: '2px',
                        }}
                    >
                        Online
                    </Typography>
                    <Box
                        sx={{
                            fontSize: 20,
                            fontWeight: 700,
                            px: '12px',
                            backgroundColor:
                                activeFilter === 'online'
                                    ? 'common.white'
                                    : '#E2E5EA',
                            borderRadius: '5px',
                            color: 'primary.main',
                        }}
                    >
                        32
                    </Box>
                </Stack>
            </DefaultButton>
            <DefaultButton
                onClick={() => setActiveFilter('inactive')}
                sx={{
                    backgroundColor:
                        activeFilter === 'inactive'
                            ? 'secondary.main'
                            : '#F5F7FB',
                    '&:hover': {
                        backgroundColor:
                            activeFilter === 'inactive'
                                ? 'secondary.main'
                                : 'grey.dark',
                    },
                }}
            >
                <Stack direction={'row'} alignItems={'center'} spacing={2}>
                    <Typography
                        sx={{
                            color:
                                activeFilter === 'inactive'
                                    ? 'common.white'
                                    : 'grey.blue',
                            fontWeight: 700,
                            lineHeight: 1,
                            pt: '2px',
                        }}
                    >
                        Inactive
                    </Typography>
                    <Box
                        sx={{
                            fontSize: 20,
                            fontWeight: 700,
                            px: '12px',
                            backgroundColor:
                                activeFilter === 'inactive'
                                    ? 'common.white'
                                    : '#E2E5EA',
                            borderRadius: '5px',
                            color: 'primary.main',
                        }}
                    >
                        05
                    </Box>
                </Stack>
            </DefaultButton>
        </ButtonGroup>
    );
};
