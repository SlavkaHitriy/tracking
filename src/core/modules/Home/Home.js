import React from 'react'

// Styles
import styles from './index.module.scss'

// Components
import { PageWrapper } from '../../ui/PageWrapper'

export const Home = () => {
    return (
        <PageWrapper>
            <div className={styles.home}>
                Home
            </div>
        </PageWrapper>
    )
}
