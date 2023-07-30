import React from 'react';
import { DataGrid } from '@mui/x-data-grid';

export const DefaultDataGrid = ({
    columns,
    rows,
    sx,
    disablePagination,
    pageItems,
    pageSizeOptions = [5, 10, 25],
    ...otherProps
}) => {
    return (
        <DataGrid
            initialState={{
                pagination: { paginationModel: { pageSize: pageItems || 5 } },
            }}
            pageSizeOptions={pageSizeOptions}
            sx={{
                border: 'none',
                fontSize: 13,
                '.MuiDataGrid-columnHeader': {
                    '&:last-of-type': {
                        overflow: 'hidden',
                    },
                    '&:last-of-type .MuiDataGrid-columnSeparator': {
                        display: 'none',
                    },
                },
                '.MuiDataGrid-columnHeaders': {
                    border: 'none',
                    borderRadius: '5px',
                    fontSize: 15,
                    overflow: 'visible',
                },
                '.MuiDataGrid-columnHeaderTitle': {
                    fontWeight: 700,
                },
                '.MuiDataGrid-footerContainer': {
                    border: 'none',
                    display: disablePagination && 'none',
                },
                '.MuiDataGrid-cell': {
                    border: 'none',
                    '&:focus': {
                        outline: 'none',
                    },
                },
                '.MuiDataGrid-row': {
                    cursor: 'pointer',
                },
                '.MuiDataGrid-row:nth-of-type(even)': {
                    backgroundColor: '#F5F7FB',

                    '.MuiAvatar-root': {
                        backgroundColor: 'secondary.main',
                        color: 'common.white',
                    },
                },
                '.MuiTablePagination-root': {
                    width: '100%',
                    mr: 'auto',
                },
                '.MuiToolbar-gutters': {
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between',
                },
                '.MuiTablePagination-displayedRows': {
                    mr: 'auto',
                },
                '.MuiTablePagination-spacer': {
                    display: 'none',
                },
                '.MuiDataGrid-selectedRowCount': {
                    flexShrink: 0,
                },
                '.MuiDataGrid-virtualScroller': {
                    overflow: 'visible',
                },
                '.MuiDataGrid-main': {
                    overflowX: 'auto',
                },
                '.MuiDataGrid-columnHeadersInner': {
                    backgroundColor: '#F5F7FB',
                },
                '.MuiDataGrid-columnHeaderTitleContainerContent': {
                    flexGrow: 1,
                    maxWidth: '200px',
                },
                ...sx,
            }}
            columns={columns}
            rows={rows}
            {...otherProps}
        />
    );
};
