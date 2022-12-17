import React, { useEffect, useState } from 'react'

// Styles
import styles from './index.module.scss'

export const PageWrapper = ({children}) => {
    const [content, setContent] = useState(false)

    useEffect(() => {
        setContent(true)
    }, [])

    return (
        <div className={styles.pageWrapper}>
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
