import React from 'react';
import { DataGrid } from '@mui/x-data-grid';

export const DefaultDataGrid = ({ columns, rows, ...otherProps }) => {
    return (
        <DataGrid
            initialState={{
                pagination: { paginationModel: { pageSize: 5 } },
            }}
            pageSizeOptions={[5, 10, 25]}
            sx={{
                border: 'none',
                fontSize: 13,
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
            }}
            columns={columns}
            rows={rows}
            {...otherProps}
        />
    );
};
