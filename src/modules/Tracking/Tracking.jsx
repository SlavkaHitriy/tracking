import React, { useState } from 'react';

import styles from './Assets.module.scss';
import { Box, Stack, Typography } from '@mui/material';
import { Title } from '../../components/Title/index.js';
import { ScrollContent } from '../../components/ScrollContent/index.js';
import { Map } from '../../components/Map/Map.jsx';
import { trackerItems } from './staticData/trackerItems.js';
import { Status } from '../../components/Status';
import { getStatusColor } from '../../core/functions/statusHelpers.js';
import { Details } from '../../components/TrailerDetails/Details.jsx';
import { StatusFilters } from '../../components/StatusFilters/StatusFilters';
import { SearchInput } from '../../components/SearchInput';
import { Filters } from '../../components/Filters/Filters';

export const Tracking = () => {
    const [isActiveDetails, setIsActiveDetails] = useState(false);

    return (
        <Stack className={styles.assets}>
            <Title type={'header'}>Tracking</Title>
            <Stack flexGrow={1} spacing={4}>
                <Stack
                    direction={{ xl: 'row', xs: 'column' }}
                    alignItems={{ xl: 'center', xs: 'flex-start' }}
                    justifyContent={'space-between'}
                    spacing={{ xl: 5, xs: 2 }}
                    px={3}
                    pt={3}
                    flexWrap={{ xs: 'wrap', xl: 'nowrap' }}
                >
                    <StatusFilters />
                    <Box flexGrow={1} width={{ xl: 'auto', xs: '50%' }}>
                        <SearchInput />
                    </Box>
                    <Filters />
                </Stack>
                <Box flexGrow={1}>
                    <Stack height={'100%'} direction={'row'}>
                        <Box px={2} minWidth={420}>
                            <ScrollContent>
                                <Stack
                                    spacing={2}
                                    p={2}
                                    sx={{
                                        borderRadius: '5px',
                                        backgroundColor: '#F5F7FB',
                                    }}
                                >
                                    {trackerItems.map((tracker) => (
                                        <Box
                                            px={2}
                                            py={1}
                                            key={tracker.id}
                                            sx={{
                                                backgroundColor: 'common.white',
                                                borderRadius: '5px',
                                                position: 'relative',
                                                cursor: 'pointer',
                                            }}
                                            onClick={() =>
                                                setIsActiveDetails(true)
                                            }
                                        >
                                            <Box
                                                sx={{
                                                    position: 'absolute',
                                                    width: 4,
                                                    height: 50,
                                                    top: '50%',
                                                    left: 0,
                                                    transform:
                                                        'translateY(-50%)',
                                                    backgroundColor:
                                                        getStatusColor(
                                                            tracker.status
                                                        ),
                                                    m: 0,
                                                }}
                                            />
                                            <Stack
                                                direction={'row'}
                                                spacing={2}
                                                justifyContent={'space-between'}
                                                alignItems={'center'}
                                                mb={2}
                                            >
                                                <Title
                                                    sx={{
                                                        fontSize: 20,
                                                    }}
                                                >
                                                    Trailer 4482
                                                </Title>
                                                <Typography>
                                                    TN48055655
                                                </Typography>
                                            </Stack>
                                            <Stack
                                                direction={'row'}
                                                spacing={2}
                                                justifyContent={'space-between'}
                                                alignItems={'center'}
                                            >
                                                <Stack
                                                    direction={'row'}
                                                    spacing={1}
                                                    alignItems={'center'}
                                                >
                                                    <Typography>
                                                        June 10
                                                    </Typography>
                                                    <Stack
                                                        direction={'row'}
                                                        alignItems={'center'}
                                                    >
                                                        <Box
                                                            sx={{
                                                                width: 7,
                                                                height: 7,
                                                                backgroundColor:
                                                                    'primary.main',
                                                                borderRadius:
                                                                    '50%',
                                                            }}
                                                        />
                                                        <Box
                                                            sx={{
                                                                width: 25,
                                                                height: '1px',
                                                                backgroundColor:
                                                                    'primary.main',
                                                            }}
                                                        />
                                                        <Box
                                                            sx={{
                                                                width: 7,
                                                                height: 7,
                                                                backgroundColor:
                                                                    'primary.main',
                                                                borderRadius:
                                                                    '50%',
                                                            }}
                                                        />
                                                    </Stack>
                                                    <Typography>
                                                        23 mph
                                                    </Typography>
                                                </Stack>
                                                <Status code={tracker.status} />
                                            </Stack>
                                        </Box>
                                    ))}
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
                            <Map />
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
