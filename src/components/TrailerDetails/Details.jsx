import styles from '../../modules/Assets/Assets.module.scss';
import { Box, Stack, Typography } from '@mui/material';
import { DefaultButton } from '../DefaultButton/index.js';
import {
    Close,
    EditNote,
    Fullscreen,
    FullscreenExit,
} from '@mui/icons-material';
import { DefaultIconButton } from '../DefaultIconButton/index.js';
import { Map } from '../Map/Map.jsx';
import { AssetInfo } from './AssetInfo.jsx';
import React, { useState } from 'react';
import { EditDetails } from './EditDetails.jsx';

export const Details = ({ closeDetails }) => {
    const [isEditDetails, setIsEditDetails] = useState(false);
    const [isFullscreen, setIsFullscreen] = useState(false);

    const toggleFullscreen = () => {
        setIsFullscreen((prevState) => !prevState);
    };

    return (
        <>
            {isFullscreen && (
                <Box
                    sx={{
                        position: 'absolute',
                        maxWidth: {
                            xl: 'unset',
                            xs: '750px',
                        },
                        width: {
                            xl: '50%',
                            xs: '100%',
                        },
                        height: '100%',
                        backgroundColor: 'common.white',
                        zIndex: 4,
                        top: 0,
                        left: 0,
                    }}
                >
                    <AssetInfo isFullscreen={isFullscreen} />
                </Box>
            )}
            <Box className={styles.details}>
                <DefaultButton
                    startIcon={<EditNote />}
                    sx={{
                        position: 'absolute',
                        left: 18,
                        top: 18,
                        border: '1px solid black',
                        borderColor: 'grey.light',
                        p: '13px 40px 13px 20px',
                        fontWeight: 700,
                        zIndex: 3,
                        '.MuiButton-startIcon': {
                            mr: 2,
                            pr: 2,
                            borderRight: '1px solid black',
                            borderColor: 'grey.light',
                            transition: 'padding .15s, border-color .15s',
                        },

                        '&:hover': {
                            backgroundColor: 'grey.light',
                            '.MuiButton-startIcon': {
                                pr: 0,
                            },
                        },
                    }}
                    onClick={() => setIsEditDetails(true)}
                >
                    Edit Asset
                </DefaultButton>
                <Stack
                    direction={'row'}
                    spacing={2}
                    sx={{
                        position: 'absolute',
                        right: 18,
                        top: 18,
                        zIndex: 3,
                    }}
                >
                    <DefaultIconButton
                        onClick={toggleFullscreen}
                        sx={{
                            backgroundColor: 'primary.main',
                            color: 'common.white',
                            '&:hover': {
                                backgroundColor: 'red.main',
                            },
                        }}
                        icon={
                            isFullscreen ? <FullscreenExit /> : <Fullscreen />
                        }
                    />
                    <DefaultIconButton
                        onClick={closeDetails}
                        sx={{
                            backgroundColor: 'primary.main',
                            color: 'common.white',
                            '&:hover': {
                                backgroundColor: 'red.main',
                            },
                        }}
                        icon={<Close />}
                    />
                </Stack>
                <Map />
                <Box
                    sx={{
                        position: 'absolute',
                        zIndex: 3,
                        left: 18,
                        right: 18,
                        bottom: 18,
                    }}
                >
                    {!isFullscreen ? (
                        <AssetInfo />
                    ) : (
                        <Stack
                            direction={'row'}
                            spacing={2}
                            justifyContent={'space-between'}
                            p={'22px 50px'}
                            sx={{
                                color: 'common.white',
                                backgroundColor: 'primary.main',
                                borderRadius: '0 0 10px 10px',
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
                </Box>
                {isEditDetails && (
                    <EditDetails closeDetails={() => setIsEditDetails(false)} />
                )}
            </Box>
        </>
    );
};
