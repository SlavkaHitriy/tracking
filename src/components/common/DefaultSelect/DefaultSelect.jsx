import { FormControl, MenuItem, Select } from '@mui/material';
import React from 'react';

export const DefaultSelect = ({ sx }) => {
    return (
        <FormControl variant='standard' sx={{ minWidth: '100%', ...sx }}>
            <Select
                sx={{
                    '&::before': {
                        borderColor: 'grey.light',
                    },
                    '.MuiSelect-select': {
                        py: '10px',
                        fontSize: 15,
                        fontWeight: 700,
                    },
                }}
                defaultValue={'active'}
            >
                <MenuItem value={'active'}>Active</MenuItem>
                <MenuItem value={'deactivated'}>Deactivated</MenuItem>
                <MenuItem value={'done'}>Done</MenuItem>
            </Select>
        </FormControl>
    );
};
