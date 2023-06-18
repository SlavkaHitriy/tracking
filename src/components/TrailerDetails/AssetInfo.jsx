import { Box, Stack, Typography } from '@mui/material';
import { Title } from '../Title/index.js';
import { ScrollContent } from '../ScrollContent/index.js';
import React, { useRef, useState } from 'react';
import styles from '../../modules/Assets/Assets.module.scss';
import cn from 'classnames';
import { OverviewData } from './OverviewData.jsx';
import { DetailsData } from './DetailsData.jsx';
import { ContactData } from './ContactData.jsx';
import { TrackerData } from './TrackerData.jsx';

export const AssetInfo = ({ sx }) => {
    const tabsData = useRef([
        {
            id: 1,
            title: 'Overview',
            value: 'overview',
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
        {
            id: 4,
            title: 'Tracker',
            value: 'tracker',
        },
    ]);

    const [activeTab, setActiveTab] = useState(tabsData.current[0].value);

    return (
        <Stack
            sx={{
                borderRadius: '10px',
                overflow: 'hidden',
                backgroundColor: 'common.white',
                height: 500,
                ...sx,
            }}
        >
            <Stack
                px={4}
                direction={'row'}
                spacing={3}
                height={65}
                sx={{
                    borderBottom: '1px solid black',
                    borderColor: 'grey.light',
                }}
            >
                <Title
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                    }}
                >
                    Trailer 4485-0254
                </Title>
                <Stack direction={'row'} spacing={3} component={'ul'}>
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
            </Stack>
            <Box flexGrow={1}>
                <ScrollContent>
                    <Box p={'24px 30px'}>
                        {activeTab === 'overview' && <OverviewData />}
                        {activeTab === 'details' && <DetailsData />}
                        {activeTab === 'contact' && <ContactData />}
                        {activeTab === 'tracker' && <TrackerData />}
                    </Box>
                </ScrollContent>
            </Box>
            <Stack
                direction={'row'}
                spacing={2}
                justifyContent={'space-between'}
                p={'22px 50px'}
                sx={{
                    color: 'common.white',
                    backgroundColor: 'primary.main',
                }}
            >
                <Stack alignItems={'center'}>
                    <Typography>Temp</Typography>
                    <Typography fontSize={20} fontWeight={700}>
                        99.33
                    </Typography>
                </Stack>
                <Stack alignItems={'center'}>
                    <Typography>Speed (mph)</Typography>
                    <Typography fontSize={20} fontWeight={700}>
                        24.5
                    </Typography>
                </Stack>
                <Stack alignItems={'center'}>
                    <Typography>Heading</Typography>
                    <Typography fontSize={20} fontWeight={700}>
                        84.3
                    </Typography>
                </Stack>
                <Stack alignItems={'center'}>
                    <Typography>Altitude (m)</Typography>
                    <Typography fontSize={20} fontWeight={700}>
                        35.2
                    </Typography>
                </Stack>
            </Stack>
        </Stack>
    );
};
