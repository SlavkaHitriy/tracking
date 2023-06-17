import React, { useRef } from 'react';
import { Box } from '@mui/material';

export const ColorStatus = ({ code, size = 10 }) => {
    const colors = useRef({
        1: '#76C278',
        2: '#51A2F7',
        3: '#E83880',
    });

    return (
        <Box
            sx={{
                width: size,
                height: size,
                borderRadius: '50%',
                backgroundColor: colors.current[code] || '#76C278',
            }}
        />
    );
};
