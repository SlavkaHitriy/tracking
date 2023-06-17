import React, { useState } from 'react';

import styles from './Assets.module.scss';
import { Box, ButtonGroup, Stack } from '@mui/material';
import { Title } from '../../components/common/Title/index.js';
import { Add, GridView, Reorder } from '@mui/icons-material';
import { DefaultIconButton } from '../../components/common/DefaultIconButton/index.js';
import { DefaultDataGrid } from '../../components/common/DefaultDataGrid/index.js';
import { columns, rows } from './staticData/tableData.jsx';
import { ScrollContent } from '../../components/common/ScrollContent/index.js';
import { Details } from './Details.jsx';
import { GridItems } from './GridItems';

export const Assets = () => {
    const [isActiveDetails, setIsActiveDetails] = useState(false);
    const [activeView, setActiveView] = useState('table');

    return (
        <Stack className={styles.assets}>
            <Title type={'header'}>Assets</Title>
            <Stack flexGrow={1} spacing={4}>
                <Stack
                    direction={'row'}
                    alignItems={'center'}
                    justifyContent={'space-between'}
                    px={3}
                    pt={3}
                >
                    <Stack direction={'row'} spacing={2}>
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
                    <DefaultIconButton icon={<Add />} />
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
