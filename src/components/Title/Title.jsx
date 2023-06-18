import React from 'react';

import { Typography } from '@mui/material';

export const Title = ({ sx, type, children }) => {
    return (
        <>
            {type === 'header' ? (
                <Typography
                    fontWeight={700}
                    sx={{
                        fontSize: '23px',
                        p: '10px 50px',
                        color: 'common.white',
                        backgroundColor: 'primary.main',
                        width: '100%',
                        ...sx,
                    }}
                >
                    {children}
                </Typography>
            ) : (
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
            )}
        </>
    );
};
