import { Stack } from '@mui/material';
import { DefaultInput } from '../DefaultInput';
import { DefaultIconButton } from '../DefaultIconButton';
import { Search } from '@mui/icons-material';

export const SearchInput = ({ placeholder }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <Stack
            direction={'row'}
            sx={{
                backgroundColor: '#F5F7FB',
                borderRadius: '5px',
                maxWidth: '710px',
                width: '100%',
                overflow: 'hidden',
                boxShadow: '0 3px 6px rgba(0 0 0 / 16%)',
            }}
            component={'form'}
            onSubmit={handleSubmit}
        >
            <DefaultIconButton
                icon={<Search />}
                type='submit'
                size={'100%'}
                sx={{
                    width: '65px',
                    borderRadius: 0,
                    position: 'relative',
                    backgroundColor: '#f8f8fa',
                    color: 'grey.blue',

                    '&::after': {
                        content: "''",
                        position: 'absolute',
                        height: 25,
                        width: '1px',
                        backgroundColor: 'grey.light',
                        right: 0,
                    },

                    '&:hover': {
                        backgroundColor: '#f8f8fa',
                    },
                }}
            />
            <DefaultInput
                placeholder={
                    placeholder ||
                    'Search for tracker ID, asset name, contact or other details…'
                }
                sx={{
                    width: '100%',
                    '.MuiInputBase-root::before': {
                        display: 'none',
                    },
                    '.MuiInputBase-root': {
                        height: '45px',
                        px: '20px',
                    },
                    '.MuiInputBase-input': {
                        '&::placeholder': {
                            fontWeight: 700,
                        },
                    },
                }}
            />
        </Stack>
    );
};
