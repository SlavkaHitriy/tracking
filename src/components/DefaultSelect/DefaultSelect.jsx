import { FormControl, MenuItem, Select } from '@mui/material';
import React from 'react';

const defaultCustomData = [
    {
        title: 'Active',
        value: 'active',
    },
    {
        title: 'Deactivated',
        value: 'deactivated',
    },
    {
        title: 'Done',
        value: 'done',
    },
];

export const DefaultSelect = ({
    sx,
    customData = defaultCustomData,
    defaultValue = 'active',
}) => {
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
                defaultValue={defaultValue}
            >
                {customData.map((item, idx) => (
                    <MenuItem key={idx} value={item.value}>
                        {item.title}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
};
