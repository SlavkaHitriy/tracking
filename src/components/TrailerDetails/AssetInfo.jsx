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

export const AssetInfo = ({ sx, isFullscreen }) => {
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
                borderRadius: isFullscreen ? 'none' : '10px',
                overflow: 'hidden',
                backgroundColor: 'common.white',
                height: isFullscreen ? '100%' : 500,
                ...sx,
            }}
        >
            <Stack
                px={4}
                direction={'row'}
                spacing={3}
                height={isFullscreen ? 50 : 65}
                justifyContent={isFullscreen && 'space-between'}
                sx={{
                    borderBottom: '1px solid black',
                    borderColor: 'grey.light',
                    backgroundColor: isFullscreen ? 'primary.main' : 'unset',
                }}
            >
                <Title
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        color: isFullscreen && 'common.white',
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
                                [styles.assetTabItemLight]: isFullscreen,
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
                <ScrollContent resizeDependency={isFullscreen}>
                    <Box p={'24px 30px'}>
                        {activeTab === 'overview' && (
                            <OverviewData isFullscreen={isFullscreen} />
                        )}
                        {activeTab === 'details' && <DetailsData />}
                        {activeTab === 'contact' && <ContactData />}
                        {activeTab === 'tracker' && (
                            <TrackerData isFullscreen={isFullscreen} />
                        )}
                    </Box>
                </ScrollContent>
            </Box>
            {!isFullscreen && (
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
            )}
        </Stack>
    );
};
