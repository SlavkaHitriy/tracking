import React, { useState } from 'react';

import styles from './Assets.module.scss';
import { Box, ButtonGroup, Stack } from '@mui/material';
import { Title } from '../../components/Title/index.js';
import { Add, GridView, Reorder } from '@mui/icons-material';
import { DefaultIconButton } from '../../components/DefaultIconButton/index.js';
import { DefaultDataGrid } from '../../components/DefaultDataGrid/index.js';
import { columns, rows } from './staticData/tableData.jsx';
import { ScrollContent } from '../../components/ScrollContent/index.js';
import { Details } from '../../components/TrailerDetails/Details.jsx';
import { GridItems } from './GridItems';
import { StatusFilters } from '../../components/StatusFilters/StatusFilters';
import { SearchInput } from "../../components/SearchInput";

export const Assets = () => {
    const [isActiveDetails, setIsActiveDetails] = useState(false);
    const [activeView, setActiveView] = useState('table');

    return (
        <Stack className={styles.assets}>
            <Title type={'header'}>Assets</Title>
            <Stack flexGrow={1} spacing={4}>
                <Stack spacing={3}>
                    <Stack
                        direction={'row'}
                        alignItems={'center'}
                        justifyContent={'space-between'}
                        px={3}
                        pt={3}
                    >
                        <StatusFilters />
                        <DefaultIconButton icon={<Add />} />
                    </Stack>
                    <Stack direction={'row'} spacing={3} px={3}>
                        <SearchInput />
                        <ButtonGroup
                            sx={{ overflow: 'hidden' }}
                            variant='contained'
                        >
                            <DefaultIconButton
                                sx={{
                                    backgroundColor:
                                        activeView === 'table' &&
                                        'secondary.main',
                                    color:
                                        activeView === 'table' &&
                                        'common.white',
                                    pointerEvents:
                                        activeView === 'table' && 'none',
                                    borderRadius: 0,
                                }}
                                onClick={() => setActiveView('table')}
                                icon={<Reorder />}
                            />
                            <DefaultIconButton
                                sx={{
                                    backgroundColor:
                                        activeView === 'grid' &&
                                        'secondary.main',
                                    color:
                                        activeView === 'grid' && 'common.white',
                                    pointerEvents:
                                        activeView === 'grid' && 'none',
                                    borderRadius: 0,
                                }}
                                onClick={() => setActiveView('grid')}
                                icon={<GridView />}
                            />
                        </ButtonGroup>
                    </Stack>
                </Stack>
                <Box flexGrow={1}>
                    {activeView === 'table' && (
                        <ScrollContent>
                            <Box px={3} pb={3} height={600}>
                                <DefaultDataGrid
                                    columns={columns}
                                    rows={rows}
                                    onRowClick={() => setIsActiveDetails(true)}
                                />
                            </Box>
                        </ScrollContent>
                    )}
                    {activeView === 'grid' && (
                        <ScrollContent>
                            <Box px={3} pb={3}>
                                <GridItems
                                    openDetails={() => setIsActiveDetails(true)}
                                />
                            </Box>
                        </ScrollContent>
                    )}
                </Box>
            </Stack>
            {isActiveDetails && (
                <Details closeDetails={() => setIsActiveDetails(false)} />
            )}
        </Stack>
    );
};
