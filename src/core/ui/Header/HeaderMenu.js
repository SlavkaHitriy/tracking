import React, { useRef, useState } from 'react'
import cn from 'classnames'
import { NavLink } from 'react-router-dom'

// Styles
import styles from './index.module.scss'

// Images
import arrow from '../../../assets/images/arrow.svg'
import icon1 from '../../../assets/images/icon1.svg'
import icon2 from '../../../assets/images/icon2.svg'
import icon3 from '../../../assets/images/icon3.svg'
import icon4 from '../../../assets/images/icon4.svg'
import icon5 from '../../../assets/images/icon5.svg'
import icon6 from '../../../assets/images/icon6.svg'

export const HeaderMenu = () => {
    const [openedMenu, setOpenedMenu] = useState(false)
    const toggleMenu = () => setOpenedMenu(!openedMenu)

    const menuItems = useRef([
        {
            id: 1,
            title: 'Modules',
            items: [
                {
                    id: 1,
                    name: 'Global Tracking',
                    link: '/global-tracking',
                    icon: icon1,
                },
                {
                    id: 2,
                    name: 'Indoor Tracking',
                    link: '/indoor-tracking',
                    icon: icon2,
                },
                {
                    id: 3,
                    name: 'Reporting',
                    link: '/reporting',
                    icon: icon3,
                },
            ]
        },
        {
            id: 2,
            title: 'Configuration',
            items: [
                {
                    id: 1,
                    name: 'Trackers',
                    link: '/trackers',
                    icon: icon4,
                },
                {
                    id: 2,
                    name: 'Notifications',
                    link: '/notifications',
                    icon: icon5,
                },
                {
                    id: 3,
                    name: 'System Configuration',
                    link: '/configuration',
                    icon: icon6,
                },
            ]
        },
    ])

    return (
        <div className={styles.headerMenu}>
            <button className={cn(styles.headerMenuBtn, {
                [styles.headerMenuBtnActive]: openedMenu,
            })} type={'button'} onClick={toggleMenu}>
                App Menu <img src={arrow} alt='arrow'/>
            </button>
            {
                openedMenu && (
                    <div className={styles.headerMenuContent}>
                        {
                            menuItems.current.map(submenu => (
                                <div className={styles.headerMenuSubmenu} key={submenu.id}>
                                    <div className={styles.headerMenuTitle}>
                                        {submenu.title}
                                    </div>
                                    <ul className={styles.headerMenuList}>
                                        {
                                            submenu.items.map(item => (
                                                <li className={styles.headerMenuItem} key={item.id}>
                                                    <NavLink className={({ isActive }) =>
                                                        cn(styles.headerMenuLink, {
                                                            [styles.headerMenuLinkActive]: isActive,
                                                        })
                                                    } to={item.link}>
                                                        <img src={item.icon} alt='menu item'/>
                                                        {item.name}
                                                    </NavLink>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            ))
                        }
                    </div>
                )
            }
        </div>
    )
}
