import styles from '../../modules/Assets/Assets.module.scss';
import { Box } from '@mui/material';
import { DefaultButton } from '../DefaultButton/index.js';
import { Close, EditNote } from '@mui/icons-material';
import { DefaultIconButton } from '../DefaultIconButton/index.js';
import { Map } from '../Map/Map.jsx';
import { AssetInfo } from './AssetInfo.jsx';
import { useState } from 'react';
import { EditDetails } from './EditDetails.jsx';

export const Details = ({ closeDetails }) => {
    const [isEditDetails, setIsEditDetails] = useState(false);

    return (
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
            <DefaultIconButton
                onClick={closeDetails}
                sx={{
                    position: 'absolute',
                    right: 18,
                    top: 18,
                    zIndex: 3,
                    backgroundColor: 'primary.main',
                    color: 'common.white',
                    '&:hover': {
                        backgroundColor: 'red.main',
                    },
                }}
                icon={<Close />}
            />
            <Map />
            <AssetInfo
                sx={{
                    position: 'absolute',
                    zIndex: 3,
                    left: 18,
                    right: 18,
                    bottom: 18,
                }}
            />
            {isEditDetails && (
                <EditDetails closeDetails={() => setIsEditDetails(false)} />
            )}
        </Box>
    );
};
