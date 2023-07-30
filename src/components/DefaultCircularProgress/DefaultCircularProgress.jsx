import { Box, CircularProgress, Typography } from '@mui/material';

export const DefaultCircularProgress = ({ title, value, bottomText }) => {
    return (
        <Box>
            {!bottomText && (
                <Typography textAlign={'center'} mb={2}>
                    {title}
                </Typography>
            )}
            <Box
                sx={{ position: 'relative', display: 'inline-flex', zIndex: 3 }}
            >
                <CircularProgress
                    size={75}
                    variant='determinate'
                    value={value}
                    sx={{
                        '*': {
                            strokeWidth: '2.4px',
                        },
                        svg: {
                            '& > *': {
                                color: 'green.main',
                            },
                        },
                    }}
                />
                <Box
                    sx={{
                        width: '72px',
                        height: '72px',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        position: 'absolute',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: '3.5px solid black',
                        borderColor: 'red.main',
                        borderRadius: '50%',
                        zIndex: '-1',
                    }}
                />
                <Box
                    sx={{
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        position: 'absolute',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <Typography
                        fontSize={20}
                        fontWeight={700}
                        variant='caption'
                        component='div'
                    >
                        {`${Math.round(value)}%`}
                    </Typography>
                </Box>
            </Box>
            {bottomText && (
                <Typography textAlign={'center'}>{title}</Typography>
            )}
        </Box>
    );
};
