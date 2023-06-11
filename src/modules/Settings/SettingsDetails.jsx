import styles from './index.module.scss';
import {
    Box,
    FormControlLabel,
    Grid,
    Radio,
    RadioGroup,
    Stack,
} from '@mui/material';
import { Title } from '../../components/common/Title/index.js';
import { DefaultAvatar } from '../../components/common/DefaultAvatar/index.js';
import { DefaultInput } from '../../components/common/DefaultInput/index.js';
import { ScrollContent } from '../../components/common/ScrollContent/index.js';
import { DefaultSelect } from '../../components/common/DefaultSelect/index.js';
import { Button } from '../../components/common/Button/index.js';

export const SettingsDetails = ({ closeDetails }) => {
    return (
        <Box
            sx={{
                borderLeft: '1px solid black',
                borderColor: 'grey.light',
                backgroundColor: 'common.white',
            }}
            className={styles.settingsDetails}
        >
            <ScrollContent>
                <Stack p={'35px 50px'} spacing={4}>
                    <Title>Details</Title>
                    <Box>
                        <Title type={'small'} sx={{ mb: 3 }}>
                            Personal
                        </Title>
                        <Stack direction={'row'} spacing={4}>
                            <DefaultAvatar size={150} sx={{ fontSize: 23 }}>
                                AB
                            </DefaultAvatar>
                            <Grid container spacing={6}>
                                <Grid item xs={6}>
                                    <DefaultInput
                                        label={'First Name'}
                                        placeholder={'E.g. Bob'}
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <DefaultInput
                                        label={'Last Name'}
                                        placeholder={'E.g. Parker'}
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <DefaultInput
                                        label={'Company'}
                                        placeholder={'E.g. ACME Company'}
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <DefaultInput
                                        label={'Password'}
                                        placeholder={'Password'}
                                        type={'password'}
                                    />
                                </Grid>
                            </Grid>
                        </Stack>
                    </Box>
                    <Box>
                        <Title type={'small'} sx={{ mb: 3 }}>
                            Contact
                        </Title>
                        <Stack direction={'row'} spacing={6}>
                            <DefaultInput
                                label={'Email'}
                                placeholder={'E.g. bob@email.com'}
                            />
                            <DefaultInput
                                label={'Cellular'}
                                placeholder={'000-000-0000'}
                            />
                        </Stack>
                    </Box>
                    <Box>
                        <Title type={'small'} sx={{ mb: 3 }}>
                            Role
                        </Title>
                        <RadioGroup defaultValue='admin'>
                            <Stack
                                direction={'row'}
                                spacing={4}
                                sx={{
                                    '.MuiButtonBase-root': {
                                        mr: 2,
                                        fontSize: 24,
                                    },
                                    '.MuiTypography-root': {
                                        fontSize: 15,
                                        fontWeight: 700,
                                    },
                                    '.Mui-checked': {
                                        '.MuiSvgIcon-root': {
                                            '&:last-of-type': {
                                                transform: 'scale(1.1)',
                                            },
                                        },
                                    },
                                    '.MuiSvgIcon-root': {
                                        '&:first-of-type': {
                                            fill: '#D5D5D5',
                                        },
                                        '&:last-of-type': {
                                            fill: '#0061FF',
                                        },
                                    },
                                }}
                            >
                                <FormControlLabel
                                    value='admin'
                                    control={<Radio />}
                                    label='Admin'
                                />
                                <FormControlLabel
                                    value='manager'
                                    control={<Radio />}
                                    label='Manager'
                                />
                                <FormControlLabel
                                    value='basic'
                                    control={<Radio />}
                                    label='Basic'
                                />
                            </Stack>
                        </RadioGroup>
                    </Box>
                    <Box>
                        <Title type={'small'} sx={{ mb: 3 }}>
                            STATUS
                        </Title>
                        <Box sx={{ maxWidth: '200px' }}>
                            <DefaultSelect />
                        </Box>
                    </Box>
                </Stack>
            </ScrollContent>
            <Stack
                direction={'row'}
                justifyContent={'space-between'}
                className={styles.settingsActions}
            >
                <Button standard dark onClick={closeDetails}>
                    Delete
                </Button>
                <Stack direction={'row'} spacing={2}>
                    <Button standard dark onClick={closeDetails}>
                        Cancel
                    </Button>
                    <Button standard onClick={closeDetails}>
                        Save
                    </Button>
                </Stack>
            </Stack>
        </Box>
    );
};
