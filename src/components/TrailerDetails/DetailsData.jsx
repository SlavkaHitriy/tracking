import { Grid, Stack, Typography } from '@mui/material';

export const DetailsData = () => {
    return (
        <Grid
            sx={{
                width: '70%',
            }}
            container
            spacing={4}
        >
            <Grid item xs={6}>
                <Stack spacing={2}>
                    <Typography>VIN</Typography>
                    <Typography fontWeight={700}>TX09009890808089</Typography>
                </Stack>
            </Grid>
            <Grid item xs={6}>
                <Stack spacing={2}>
                    <Typography>Serial Number</Typography>
                    <Typography fontWeight={700}>23009</Typography>
                </Stack>
            </Grid>
            <Grid item xs={6}>
                <Stack spacing={2}>
                    <Typography>Manufacturer</Typography>
                    <Typography fontWeight={700}>Titan Trailers</Typography>
                </Stack>
            </Grid>
            <Grid item xs={6}>
                <Stack spacing={2}>
                    <Typography>Model</Typography>
                    <Typography fontWeight={700}>22 Feet Trailer</Typography>
                </Stack>
            </Grid>
            <Grid item xs={6}>
                <Stack spacing={2}>
                    <Typography>USDOT</Typography>
                    <Typography fontWeight={700}>19392909</Typography>
                </Stack>
            </Grid>
            <Grid item xs={6}>
                <Stack spacing={2}>
                    <Typography>HazMat</Typography>
                    <Typography fontWeight={700}>704321</Typography>
                </Stack>
            </Grid>
        </Grid>
    );
};
