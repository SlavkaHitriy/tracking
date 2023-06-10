import cn from 'classnames'
import React, { useRef } from 'react'
import { Link, NavLink } from 'react-router-dom'

// Images
import logo from '../../assets/images/logo.svg'
// Styles
import styles from './index.module.scss'

export const Header = () => {
    const menuItems = useRef([
        {
            id: 1,
            title: 'Global tracking',
            link: '/global-tracking',
            color: '#51A2F7',
        },
        {
            id: 2,
            title: 'Indoor tracking',
            link: '/indoor-tracking',
            color: '#51A2F7',
        },
        {
            id: 3,
            title: 'Reporting',
            link: '/reporting',
            color: '#E83880',
        },
        {
            id: 4,
            title: 'System settings',
            link: '/settings',
            color: '#51A2F7',
        },
    ])

    return (
        <header className={styles.header}>
            <Link className={styles.headerLogo} to={'/'}>
                <img src={logo} alt="logo" />
            </Link>
            <nav className={styles.headerNav}>
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
                                <span style={{ backgroundColor: item.color }} />
                                {item.title}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
            <button className={styles.headerBtn} type={'button'}>
                <span />
                <span />
                <span />
            </button>
        </header>
    )
}
