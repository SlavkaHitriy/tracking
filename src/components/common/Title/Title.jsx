import React from 'react';

import { Typography } from '@mui/material';

export const Title = ({ sx, type, children }) => {
    return (
        <Typography
            fontWeight={700}
            sx={{
                fontSize: type === 'small' ? '15px' : '23px',
                textTransform: type === 'small' ? 'uppercase' : 'capitalize',
                ...sx,
            }}
        >
            {children}
        </Typography>
    );
};
