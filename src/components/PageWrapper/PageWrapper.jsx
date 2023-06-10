import React, { useEffect, useState } from 'react'

import { Footer } from '../Footer'
// Components
import { Header } from '../Header'
// Styles
import styles from './index.module.scss'

export const PageWrapper = ({ children }) => {
    const [content, setContent] = useState(false)

    useEffect(() => {
        setContent(true)
    }, [])

    return (
        <div className={styles.pageWrapper}>
            <Header />
            {content && (
                <main className={styles.pageWrapperContent}>{children}</main>
            )}
            <Footer />
        </div>
    )
}
