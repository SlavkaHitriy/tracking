import { Box, Stack, Typography } from '@mui/material';
import { notifications } from './staticData/notifications.js';
import { getStatusColor } from '../../core/functions/statusHelpers.js';
import React, { useRef } from 'react';
import { Title } from '../Title/index.js';
import { DefaultButton } from '../DefaultButton/index.js';

export const Notifications = () => {
    const priorityItems = useRef([0, 0, 0, 0, 0]);

    return (
        <Stack
            spacing={3}
            sx={{
                width: '370px',
                p: 1,
                backgroundColor: '#F5F7FB',
                boxShadow: '0 3px 6px rgba(0 0 0 / 16%)',
                position: 'relative',
                pb: 7,
            }}
        >
            <Stack spacing={1}>
                {notifications.map((item) => (
                    <Box
                        key={item.id}
                        sx={{
                            position: 'relative',
                            backgroundColor: 'common.white',
                            borderRadius: '5px',
                            cursor: 'pointer',
                            px: 2,
                            py: 1,
                            '*': {
                                fontSize: 13,
                            },
                        }}
                    >
                        <Box
                            sx={{
                                position: 'absolute',
                                width: 4,
                                height: 50,
                                top: '50%',
                                left: 0,
                                transform: 'translateY(-50%)',
                                backgroundColor: getStatusColor(item.color),
                                m: 0,
                            }}
                        />
                        <Stack
                            direction={'row'}
                            spacing={2}
                            justifyContent={'space-between'}
                            alignItems={'center'}
                            mb={2}
                        >
                            <Title
                                sx={{
                                    fontSize: 20,
                                }}
                            >
                                {item.title}
                            </Title>
                            <Stack direction={'row'} spacing={1}>
                                {priorityItems.current.map(
                                    (priorityItem, idx) => (
                                        <Box
                                            key={idx}
                                            sx={{
                                                width: 6,
                                                height: 6,
                                                borderRadius: '50%',
                                                backgroundColor:
                                                    item.priority > idx
                                                        ? 'primary.main'
                                                        : 'grey.light',
                                            }}
                                        />
                                    )
                                )}
                            </Stack>
                            <Typography>{item.datetime}</Typography>
                        </Stack>
                        <Stack
                            direction={'row'}
                            spacing={2}
                            justifyContent={'space-between'}
                            alignItems={'center'}
                        >
                            <Typography>{item.name}</Typography>
                            <Typography
                                sx={{
                                    span: {
                                        fontWeight: 700,
                                    },
                                }}
                            >
                                {item.infoText}: <span>{item.infoValue}</span>
                            </Typography>
                        </Stack>
                    </Box>
                ))}
            </Stack>
            <DefaultButton
                sx={{
                    position: 'absolute',
                    bottom: 6,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    fontWeight: 700,
                    fontSize: 13,
                    '&::after': {
                        content: "''",
                        position: 'absolute',
                        bottom: 3,
                        width: 80,
                        height: 2,
                        display: 'block',
                        backgroundColor: 'secondary.main',
                        left: '50%',
                        transform: 'translateX(-50%)',
                    },
                }}
            >
                Load More
            </DefaultButton>
            <DefaultButton
                sx={{
                    position: 'absolute',
                    bottom: 6,
                    right: 0,
                    fontSize: 13,
                }}
            >
                Clear List
            </DefaultButton>
        </Stack>
    );
};
