import styles from './index.module.scss';
import { Box, Stack } from '@mui/material';
import { Title } from '../../components/common/Title/index.js';
import { DefaultInput } from '../../components/common/DefaultInput/index.js';
import { ScrollContent } from '../../components/common/ScrollContent/index.js';
import { DefaultButton } from '../../components/common/DefaultButton/index.js';
import { DefaultSelect } from '../../components/common/DefaultSelect/index.js';

export const SettingsTypeDetails = ({ closeDetails }) => {
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
                    <Title>Type Details</Title>
                    <Stack
                        spacing={4}
                        sx={{
                            maxWidth: '300px',
                        }}
                    >
                        <Box>
                            <Title type={'small'} sx={{ mb: 3 }}>
                                Category
                            </Title>
                            <Box sx={{ maxWidth: '200px' }}>
                                <DefaultSelect />
                            </Box>
                        </Box>
                        <DefaultInput
                            label={'Asset Type Name'}
                            placeholder={'E.g. Generator 150kv'}
                        />
                        <DefaultInput
                            label={'Description'}
                            placeholder={'E.g. Generator 150kv'}
                        />
                        <Box>
                            <Title type={'small'} sx={{ mb: 3 }}>
                                Status
                            </Title>
                            <Box sx={{ maxWidth: '200px' }}>
                                <DefaultSelect />
                            </Box>
                        </Box>
                    </Stack>
                </Stack>
                <Stack
                    p={'35px 50px'}
                    direction={'row'}
                    justifyContent={'space-between'}
                    mt={'auto'}
                >
                    <DefaultButton onClick={closeDetails}>Delete</DefaultButton>
                    <Stack direction={'row'} spacing={2}>
                        <DefaultButton
                            sx={{ color: 'secondary.main' }}
                            onClick={closeDetails}
                        >
                            Cancel
                        </DefaultButton>
                        <DefaultButton
                            variant={'contained'}
                            onClick={closeDetails}
                        >
                            Update
                        </DefaultButton>
                    </Stack>
                </Stack>
            </ScrollContent>
        </Box>
    );
};
