import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/images/logo.svg';
// Styles
import styles from './index.module.scss';
import { Stack, Typography } from '@mui/material';

export const Footer = () => {
    return (
        <Stack
            component={'footer'}
            direction={'row'}
            justifyContent={'space-between'}
            className={styles.footer}
        >
            <Stack
                direction={'row'}
                alignItems={'center'}
                className={styles.footerItem}
            >
                <Link className={styles.footerLogo} to={'/'}>
                    <img src={logo} alt='logo' />
                </Link>
                <Typography fontSize={13}>
                    @2023 Signal Tracks, LLC | IoT Asset Tracking Intelligence
                    Platform
                </Typography>
            </Stack>
            <Stack
                direction={'row'}
                alignItems={'center'}
                className={styles.footerItem}
            >
                <nav>
                    <ul className={styles.footerList}>
                        <li className={styles.footerListItem}>
                            <Link to={'/'}>Terms & Conditions</Link>
                        </li>
                        <li className={styles.footerListItem}>
                            <Link to={'/'}>Privacy</Link>
                        </li>
                        <li className={styles.footerListItem}>
                            <Link to={'/'}>Help</Link>
                        </li>
                    </ul>
                </nav>
            </Stack>
        </Stack>
    );
};
