import React, { useState } from 'react';

import styles from './Tracking.module.scss';
import { Box, Stack, Typography } from '@mui/material';
import { Title } from '../../components/Title/index.js';
import { ScrollContent } from '../../components/ScrollContent/index.js';
import { Map } from '../../components/Map/Map.jsx';
import { Details } from '../../components/TrailerDetails/Details.jsx';
import { SearchInput } from '../../components/SearchInput';
import { Filters } from '../../components/Filters/Filters';
import { ColoredInfo } from '../../components/ColoredInfo/index.js';
import { DefaultCircularProgress } from '../../components/DefaultCircularProgress/index.js';
import { Stats } from '../../components/Stats/index.js';
import { columns, rows } from './staticData/trackerItems.jsx';
import { DefaultDataGrid } from '../../components/DefaultDataGrid/index.js';

export const Tracking = () => {
    const [isActiveDetails, setIsActiveDetails] = useState(false);

    return (
        <Stack className={styles.assets}>
            <Title type={'header'}>Tracking</Title>
            <Stack flexGrow={1} spacing={1}>
                <Stack px={2} mt={1}>
                    <Stack
                        direction={'row'}
                        spacing={3}
                        justifyContent={'space-between'}
                        p={3}
                        sx={{
                            backgroundColor: 'primary.main',
                            borderRadius: '10px',
                            '*': {
                                color: 'common.white',
                            },
                        }}
                    >
                        <Stack spacing={2}>
                            <Stack direction={'row'} spacing={4}>
                                <ColoredInfo
                                    color={'common.white'}
                                    title={'Total Assets'}
                                    value={'1000'}
                                />
                                <ColoredInfo
                                    color={'green.main'}
                                    title={'Active Assets'}
                                    value={'1200'}
                                />
                                <ColoredInfo
                                    color={'secondary.main'}
                                    title={'Inactive Assets'}
                                    value={'234'}
                                />
                            </Stack>
                            <Typography fontSize={12}>
                                July 23, 2023 1:23PM
                            </Typography>
                        </Stack>
                        <Stack
                            direction={'row'}
                            spacing={6}
                            alignItems={'flex-start'}
                        >
                            <DefaultCircularProgress
                                title={'Utilization'}
                                value={78}
                            />
                            <DefaultCircularProgress
                                title={'Online Devices'}
                                value={95}
                            />
                            <DefaultCircularProgress
                                title={'Offline Devices'}
                                value={95}
                            />
                        </Stack>
                        <Stack direction={'row'} spacing={3}>
                            <Stack spacing={2}>
                                <Typography>Asset Utilization</Typography>
                                <Typography fontSize={20} fontWeight={700}>
                                    +3.03%
                                </Typography>
                                <Typography fontSize={12}>
                                    Compared to last 60 days
                                </Typography>
                            </Stack>
                            <Stats />
                        </Stack>
                    </Stack>
                </Stack>
                <Box flexGrow={1}>
                    <Stack height={'100%'} direction={'row'}>
                        <Box minWidth={700}>
                            <ScrollContent>
                                <Stack px={2} spacing={2}>
                                    <Stack direction={'row'} spacing={2}>
                                        <SearchInput
                                            placeholder={'Search for asset…'}
                                        />
                                        <Filters />
                                    </Stack>
                                    <DefaultDataGrid
                                        columns={columns}
                                        rows={rows}
                                        onRowClick={() =>
                                            setIsActiveDetails(true)
                                        }
                                    />
                                </Stack>
                            </ScrollContent>
                        </Box>
                        <Box
                            flexGrow={1}
                            sx={{
                                overflow: 'hidden',
                                borderTopLeftRadius: '5px',
                                boxShadow: '0 3px 6px rgba(0 0 0 / 16%)',
                            }}
                        >
                            <Map fullview />
                        </Box>
                    </Stack>
                </Box>
            </Stack>
            {isActiveDetails && (
                <Details closeDetails={() => setIsActiveDetails(false)} />
            )}
        </Stack>
    );
};
