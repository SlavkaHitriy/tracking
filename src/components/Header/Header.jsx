import cn from 'classnames';
import React, { useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';

import logo from '../../assets/images/logo.svg';
import styles from './index.module.scss';
import { Box, Stack, Typography } from '@mui/material';
import { Dropdown } from '../Dropdown/index.js';
import { DefaultAvatar } from '../DefaultAvatar/index.js';

export const Header = () => {
    const menuItems = useRef([
        {
            id: 1,
            title: 'Tracking',
            link: '/tracking',
        },
        {
            id: 2,
            title: 'Assets',
            link: '/assets',
        },
        {
            id: 3,
            title: 'Reporting',
            link: '/reporting',
        },
        {
            id: 4,
            title: 'Settings',
            link: '/settings',
        },
    ]);

    return (
        <Stack
            direction={'row'}
            alignItems={'center'}
            component={'header'}
            className={styles.header}
        >
            <Link className={styles.headerLogo} to={'/'}>
                <img src={logo} alt='logo' />
            </Link>
            <Box className={styles.headerCompany}>
                <Dropdown>
                    <Stack>
                        <Typography fontSize={15} fontWeight={700}>
                            Titan Trailers
                        </Typography>
                        <Typography color={'#8F98AB'} fontSize={13}>
                            Company
                        </Typography>
                    </Stack>
                </Dropdown>
            </Box>
            <Box component={'nav'} ml={6} className={styles.headerNav}>
                <ul className={styles.headerMenu}>
                    {menuItems.current.map((item) => (
                        <li className={styles.headerMenuItem} key={item.id}>
                            <NavLink
                                className={({ isActive }) =>
                                    cn(styles.headerMenuLink, {
                                        [styles.headerMenuLinkActive]: isActive,
                                    })
                                }
                                to={item.link}
                            >
                                {item.title}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </Box>
            <Box className={styles.headerUser}>
                <Stack direction={'row'} alignItems={'center'} spacing={2}>
                    <DefaultAvatar>AB</DefaultAvatar>
                    <Dropdown>
                        <Stack
                            alignItems={'center'}
                            justifyContent={'center'}
                            color={'#8F98AB'}
                            fontSize={13}
                            fontWeight={700}
                        >
                            Anton
                        </Stack>
                    </Dropdown>
                </Stack>
            </Box>
        </Stack>
    );
};
