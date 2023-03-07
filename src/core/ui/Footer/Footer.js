import React from 'react'
import { Link } from 'react-router-dom'

import logo from '../../../assets/images/logo.svg'
// Styles
import styles from './index.module.scss'

export const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.footerItem}>
                <Link className={styles.footerLogo} to={'/'}>
                    <img src={logo} alt="logo" />
                </Link>
                <div className={styles.footerCopy}>
                    @2023 Flexvertical | Machine Intelligence Platform
                </div>
            </div>
            <div className={styles.footerItem}>
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
            </div>
        </div>
    )
}
