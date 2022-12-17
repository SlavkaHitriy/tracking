import React, { useEffect, useState } from 'react'

// Styles
import styles from './index.module.scss'

// Components
import { Header } from '../Header'

export const PageWrapper = ({children}) => {
    const [content, setContent] = useState(false)

    useEffect(() => {
        setContent(true)
    }, [])

    return (
        <div className={styles.pageWrapper}>
            <Header />
            {
                content && (
                    <main className={styles.pageWrapperContent}>
                        {children}
                    </main>
                )
            }
        </div>
    )
}
