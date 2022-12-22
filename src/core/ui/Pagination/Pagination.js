import React from 'react'
import cn from 'classnames'

// Styles
import styles from './index.module.scss'

// Components
import { SvgSprite } from '../SvgSprite/SvgSprite'

export const Pagination = () => {
    return (
        <div className={styles.pagination}>
            <div className={cn(styles.paginationItem, styles.paginationItemPrev)}>
                <SvgSprite spriteID={'arrow'} />
            </div>
            <div className={cn(styles.paginationItem, styles.paginationItemActive)}>
                1
            </div>
            <div className={styles.paginationItem}>
                2
            </div>
            <div className={styles.paginationItem}>
                3
            </div>
            <div className={styles.paginationItem}>
                4
            </div>
            <div className={styles.paginationItem}>
                5
            </div>
            <div className={cn(styles.paginationItem, styles.paginationItemNext)}>
                <SvgSprite spriteID={'arrow'} />
            </div>
        </div>
    )
}
