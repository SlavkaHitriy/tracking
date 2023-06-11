import styles from './index.module.scss';
import { Box, Stack } from '@mui/material';
import { Title } from '../../components/common/Title/index.js';
import { DefaultInput } from '../../components/common/DefaultInput/index.js';
import { ScrollContent } from '../../components/common/ScrollContent/index.js';
import { DefaultButton } from '../../components/common/DefaultButton/index.js';

export const SettingsCategoryDetails = ({ closeDetails }) => {
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
                    <Title>Category Details</Title>
                    <Stack
                        spacing={4}
                        sx={{
                            maxWidth: '300px',
                        }}
                    >
                        <DefaultInput
                            label={'Category name'}
                            placeholder={'E.g. Heavy Machinery'}
                        />
                        <DefaultInput
                            label={'Description'}
                            placeholder={'E.g. ACME Company'}
                        />
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
