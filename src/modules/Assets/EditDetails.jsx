import { Box, Stack } from '@mui/material';
import { Title } from '../../components/common/Title/index.js';
import cn from 'classnames';
import styles from './Assets.module.scss';
import { useRef, useState } from 'react';
import { ScrollContent } from '../../components/common/ScrollContent';
import { BasicEdit } from './BasicEdit';
import { DetailsTabEdit } from './DetailsTabEdit';
import { ContactEdit } from './ContactEdit';
import { DefaultButton } from '../../components/common/DefaultButton/index.js';

export const EditDetails = ({ closeDetails }) => {
    const tabsData = useRef([
        {
            id: 1,
            title: 'Basic',
            value: 'basic',
        },
        {
            id: 2,
            title: 'Details',
            value: 'details',
        },
        {
            id: 3,
            title: 'Contact',
            value: 'contact',
        },
    ]);

    const [activeTab, setActiveTab] = useState(tabsData.current[0].value);

    return (
        <Stack
            sx={{
                position: 'absolute',
                backgroundColor: 'common.white',
                width: '100%',
                height: '100%',
                zIndex: 5,
                top: 0,
                left: 0,
            }}
        >
            <Title
                sx={{
                    p: '25px 35px 0',
                }}
            >
                Asset
            </Title>
            <Stack
                px={'20px'}
                direction={'row'}
                spacing={3}
                component={'ul'}
                height={60}
                sx={{
                    borderBottom: '1px solid black',
                    borderColor: 'grey.light',
                }}
            >
                {tabsData.current.map((item) => (
                    <li
                        className={cn(styles.assetTabItem, {
                            [styles.assetTabItemActive]:
                                activeTab === item.value,
                        })}
                        key={item.id}
                        onClick={() => setActiveTab(item.value)}
                    >
                        {item.title}
                    </li>
                ))}
            </Stack>
            <ScrollContent>
                <Stack height={'100%'}>
                    <Box mb={2} p={4}>
                        {activeTab === 'basic' && <BasicEdit />}
                        {activeTab === 'details' && <DetailsTabEdit />}
                        {activeTab === 'contact' && <ContactEdit />}
                    </Box>
                    <Stack
                        direction={'row'}
                        justifyContent={'space-between'}
                        mt={'auto'}
                        p={4}
                    >
                        <DefaultButton onClick={closeDetails}>
                            Delete
                        </DefaultButton>
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
                </Stack>
            </ScrollContent>
        </Stack>
    );
};
