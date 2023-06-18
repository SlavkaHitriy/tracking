import React from 'react';
import { Box, Typography } from '@mui/material';
import {
    getStatusColor,
    getStatusText,
} from '../../core/functions/statusHelpers.js';

export const Status = ({ code }) => {
    return (
        <Box
            p={'6px 20px'}
            sx={{
                borderRadius: '5px',
                backgroundColor: getStatusColor(code),
            }}
        >
            <Typography fontSize={13} color={'common.white'} fontWeight={700}>
                {getStatusText(code)}
            </Typography>
        </Box>
    );
};
