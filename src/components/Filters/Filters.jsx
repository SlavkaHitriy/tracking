import { Stack } from "@mui/material"
import { DefaultIconButton } from "../DefaultIconButton"
import { Tune } from "@mui/icons-material"
import { DefaultSelect } from "../DefaultSelect"

export const Filters = () => {
    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <Stack direction={'row'} sx={{
            backgroundColor: '#F5F7FB',
            borderRadius: '5px',
            maxWidth: '300px',
            width: '100%',
            overflow: 'hidden',
            boxShadow: '0 3px 6px rgba(0 0 0 / 16%)'
        }}
            component={'form'}
            onSubmit={handleSubmit}
        >
            <DefaultIconButton icon={<Tune />} type='submit' size={'100%'} sx={{
                width: '65px',
                borderRadius: 0,
                position: 'relative',
                backgroundColor: '#f8f8fa',
                color: 'grey.blue',
                pointerEvents: 'none',

                '&::after': {
                    content: "''",
                    position: 'absolute',
                    height: 25,
                    width: '1px',
                    backgroundColor: 'grey.light',
                    right: 0
                },

                '&:hover': {
                    backgroundColor: '#f8f8fa',
                }
            }} />
            <DefaultSelect
                placeholder={'Search for tracker ID, asset name, contact or other details…'}
                sx={{
                    minWidth: 'unset',
                    width: '100%',
                    '.MuiInputBase-root::before': {
                        display: 'none'
                    },
                    '.MuiInputBase-root': {
                        height: '45px',
                    },
                    '.MuiInputBase-input': {
                        px: '20px',
                        '&::placeholder': {
                            fontWeight: 700
                        }
                    }
                }}
            />
        </Stack>
    )
}
