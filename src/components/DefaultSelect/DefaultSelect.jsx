import { FormControl, MenuItem, Select } from '@mui/material';
import React from 'react';

export const DefaultSelect = ({ sx, customData, defaultValue }) => {
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
                defaultValue={defaultValue || 'active'}
            >
                {customData ? (
                    customData.map((item, idx) => (
                        <MenuItem key={idx} value={item.value}>
                            {item.title}
                        </MenuItem>
                    ))
                ) : (
                    <>
                        <MenuItem value={'active'}>Active</MenuItem>
                        <MenuItem value={'deactivated'}>Deactivated</MenuItem>
                        <MenuItem value={'done'}>Done</MenuItem>
                    </>
                )}
            </Select>
        </FormControl>
    );
};
