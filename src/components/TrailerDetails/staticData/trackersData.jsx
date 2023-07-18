import { Slider } from '@mui/material';
import React from 'react';

export const columns = [
    {
        field: 'sensor',
        headerName: 'Sensor',
        width: 140,
    },
    { field: 'unit', headerName: 'Unit', width: 125 },
    { field: 'minimum', headerName: 'Minimum', width: 100 },
    {
        field: 'slider',
        headerName: '',
        flex: 1,
        renderCell: () => (
            <Slider
                sx={{
                    minWidth: '215px',
                    flexShrink: 0,
                    '& .MuiSlider-thumb': {
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: 25,
                        width: 25,
                        backgroundColor: 'common.white',
                        border: '4px solid black',
                        borderColor: 'secondary.main',
                        boxShadow:
                            '0px 1px 5px rgba(0, 0, 0, 0.12), 0px 2px 2px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.2)',
                        '&:last-of-type': {
                            backgroundColor: 'secondary.main',
                        },
                    },
                    '& .MuiSlider-rail': {
                        backgroundColor: 'secondary.main',
                        opacity: 1,
                        height: 8,
                    },
                    '.MuiSlider-track': {
                        backgroundColor: 'secondary.main',
                        border: 'none',
                        height: 8,
                    },
                }}
                defaultValue={[40, 170]}
                step={1}
                min={25}
                max={200}
            />
        ),
    },
    { field: 'maximum', headerName: 'Maximum', width: 100 },
];

export const rows = [
    {
        id: 1,
        sensor: 'Speed',
        unit: 'MPH',
        minimum: '25',
        maximum: '200',
    },
    {
        id: 2,
        sensor: 'Temperature',
        unit: 'Farenheit',
        minimum: '34.5',
        maximum: '120',
    },
    {
        id: 3,
        sensor: 'Altitude',
        unit: 'Meters',
        minimum: '1',
        maximum: '200',
    },
];
