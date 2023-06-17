import { Stack, Typography } from '@mui/material';
import { Progress } from '../../components/Progress/index.js';
import { briefInfoProgressData } from '../../data/briefInfoProgress.js';

export const TrackerData = () => {
    return (
        <Stack direction={'row'} spacing={8}>
            <Stack
                spacing={2}
                sx={{
                    maxWidth: '200px',
                }}
            >
                <Typography fontWeight={700}>Associated Device</Typography>
                <Typography>Serial Number</Typography>
                <Typography
                    fontSize={17}
                    fontWeight={700}
                    color={'secondary'}
                    py={'8px'}
                    sx={{
                        borderBottom: '1px solid black',
                        borderColor: 'grey.light',
                    }}
                >
                    704298
                </Typography>
                <Typography>Select and choose a tracker.</Typography>
            </Stack>
            <Stack spacing={2}>
                <Typography fontWeight={700}>Status</Typography>
                <Typography>Status and Asset Association</Typography>
                <Progress staticData data={briefInfoProgressData} />
            </Stack>
        </Stack>
    );
};
