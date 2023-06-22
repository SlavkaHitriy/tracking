import React, { useState } from 'react';

import styles from './Assets.module.scss';
import { Box, Stack } from '@mui/material';
import { Title } from '../../components/Title/index.js';
import { DefaultDataGrid } from '../../components/DefaultDataGrid/index.js';
import { columns, rows } from './staticData/tableData.jsx';
import { ScrollContent } from '../../components/ScrollContent/index.js';
import { StatusFilters } from '../../components/StatusFilters/StatusFilters';
import { SearchInput } from '../../components/SearchInput';
import { Filters } from '../../components/Filters/Filters';
import { InvoiceDetails } from './InvoiceDetails';

export const Reporting = () => {
    const [isActiveDetails, setIsActiveDetails] = useState(false);

    return (
        <Stack className={styles.assets}>
            <Title type={'header'}>Reporting</Title>
            <Stack flexGrow={1} spacing={4}>
                <Stack
                    direction={'row'}
                    alignItems={'center'}
                    justifyContent={'space-between'}
                    spacing={5}
                    px={3}
                    pt={3}
                >
                    <StatusFilters />
                    <Box flexGrow={1}>
                        <SearchInput />
                    </Box>
                    <Filters />
                </Stack>
                <Box flexGrow={1}>
                    <ScrollContent>
                        <Box px={3} pb={3} height={600}>
                            <DefaultDataGrid
                                columns={columns}
                                rows={rows}
                                onRowClick={() => setIsActiveDetails(true)}
                            />
                        </Box>
                    </ScrollContent>
                </Box>
            </Stack>
            {isActiveDetails && (
                <InvoiceDetails closeDetails={() => setIsActiveDetails(false)} />
            )}
        </Stack>
    );
};
