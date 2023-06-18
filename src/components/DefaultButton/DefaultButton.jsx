import React from 'react';

import { Button } from '@mui/material';

export const DefaultButton = ({
    type,
    sx,
    children,
    variant = 'text',
    ...otherProps
}) => {
    return (
        <Button
            type={type || 'button'}
            variant={variant}
            sx={{
                textTransform: 'unset',
                fontWeight: variant === 'contained' ? 700 : 400,
                p: '10px 26px',
                lineHeight: 1.3,
                backgroundColor: '#F6F8FA',
                '&.MuiButton-contained': {
                    backgroundColor: 'secondary.main',
                },
                '&:hover': {
                    backgroundColor:
                        variant === 'text' ? 'grey.light' : 'secondary.dark',
                },
                ...sx,
            }}
            {...otherProps}
        >
            {children}
        </Button>
    );
};
