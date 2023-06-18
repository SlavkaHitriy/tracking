import { createTheme } from '@mui/material';

export const theme = createTheme({
    palette: {
        primary: {
            main: '#262B40',
        },
        secondary: {
            main: '#0061FF',
            dark: '#0049c0',
        },
        common: {
            black: '#121212',
            white: '#fff',
        },
        grey: {
            main: '#9E9E9E',
            light: '#d5d5d5',
            blue: '#8F98AB',
        },
        red: {
            main: '#f47979',
        },
        blue: {
            light: '#F6F8FA',
        },
        green: {
            main: '#19A872',
        },
        orange: {
            main: '#FFAA50',
        },
    },
    typography: {
        allVariants: {
            fontSize: 15,
        },
    },
});
