import { Grid, Stack, Typography } from '@mui/material';

export const ContactData = () => {
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
                    <Typography>First Name</Typography>
                    <Typography fontWeight={700}>Maria</Typography>
                </Stack>
            </Grid>
            <Grid item xs={6}>
                <Stack spacing={2}>
                    <Typography>Last Name</Typography>
                    <Typography fontWeight={700}>Gonzales</Typography>
                </Stack>
            </Grid>
            <Grid item xs={6}>
                <Stack spacing={2}>
                    <Typography>Cellular</Typography>
                    <Typography fontWeight={700}>832-909-3434</Typography>
                </Stack>
            </Grid>
            <Grid item xs={6}>
                <Stack spacing={2}>
                    <Typography>Email</Typography>
                    <Typography fontWeight={700}>Maria@me.com</Typography>
                </Stack>
            </Grid>
            <Grid item xs={6}>
                <Stack spacing={2}>
                    <Typography>Account Number</Typography>
                    <Typography fontWeight={700}>099922333</Typography>
                </Stack>
            </Grid>
            <Stack alignItems={'center'}></Stack>
        </Grid>
    );
};
