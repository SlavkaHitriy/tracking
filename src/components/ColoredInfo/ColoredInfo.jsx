import { Box, Stack, Typography } from '@mui/material';

export const ColoredInfo = ({ title, value, color }) => {
    return (
        <Stack spacing={2} alignItems={'flex-start'}>
            <Typography>{title}</Typography>
            <Box>
                <Typography fontSize={20} fontWeight={700}>
                    {value}
                </Typography>
                <Box
                    sx={{
                        backgroundColor: color || 'common.white',
                        height: 3,
                        width: '100%',
                    }}
                />
            </Box>
        </Stack>
    );
};
