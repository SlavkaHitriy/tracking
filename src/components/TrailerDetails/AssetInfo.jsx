import { Box, Stack, Typography } from '@mui/material';
import { ScrollContent } from '../ScrollContent/index.js';
import React, { useEffect } from 'react';
import styles from '../../modules/Assets/Assets.module.scss';
import cn from 'classnames';
import { OverviewData } from './OverviewData.jsx';
import { DetailsData } from './DetailsData.jsx';
import { ContactData } from './ContactData.jsx';
import { TrackerData } from './TrackerData.jsx';
import { Notifications } from './Notifications.jsx';
import { SensorData } from './SensorData.jsx';

export const AssetInfo = ({
    sx,
    tabsData,
    isFullscreen,
    setIsFullscreen,
    activeTab,
    setActiveTab,
}) => {
    useEffect(() => {
        if (
            tabsData.find((tab) => tab.value === activeTab)?.isFullviewOnly &&
            setIsFullscreen
        ) {
            setIsFullscreen(true);
        }
    }, [activeTab]);

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
                <Stack
                    direction={'row'}
                    spacing={3}
                    component={'ul'}
                    width={'100%'}
                >
                    {tabsData.map((item) => (
                        <Box
                            component={'li'}
                            sx={{ flexGrow: 1 }}
                            className={cn(styles.assetTabItem, {
                                [styles.assetTabItemActive]:
                                    activeTab === item.value,
                                [styles.assetTabItemLight]: isFullscreen,
                            })}
                            key={item.id}
                            onClick={() => setActiveTab(item.value)}
                        >
                            {item.title}
                        </Box>
                    ))}
                </Stack>
            </Stack>
            <Box flexGrow={1}>
                <ScrollContent resizeDependency={isFullscreen}>
                    <Box p={'24px 30px'} flexGrow={1}>
                        {activeTab === 'overview' && (
                            <OverviewData isFullscreen={isFullscreen} />
                        )}
                        {activeTab === 'details' && <DetailsData />}
                        {activeTab === 'contact' && <ContactData />}
                        {activeTab === 'sensorData' && <SensorData />}
                        {activeTab === 'notifications' && <Notifications />}
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
