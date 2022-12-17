import React from 'react'
import { Link } from 'react-router-dom'

// Styles
import styles from './index.module.scss'

// Images
import logo from '../../../assets/images/logo.svg'

// Components
import { HeaderMenu } from './HeaderMenu'

export const Header = () => {
    return (
        <header className={styles.header}>
            <Link className={styles.headerLogo} to={'/'}>
                <img src={logo} alt='logo'/>
            </Link>
            <HeaderMenu />
            <button className={styles.headerBtn} type={'button'}>
                <span/>
                <span/>
                <span/>
            </button>
        </header>
    )
}
