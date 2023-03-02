import React from 'react'
import cn from 'classnames'

// Styles
import styles from './index.module.scss'

export const CountItem = ({className, tracker}) => {
    return (
        <div
            className={cn(styles.item, {
                [className]: className,
            })}
        >
            <div
                className={cn(
                    styles.itemCount,
                    'mb-1'
                )}
            >
                {tracker.count > 9
                    ? tracker.count
                    : '0' + tracker.count}
            </div>
            <span
                className={cn(
                    styles.itemSeparator,
                    'mb-3'
                )}
                style={{ backgroundColor: tracker.color }}
            />
            <div className={styles.itemName}>
                {tracker.name}
            </div>
        </div>
    )
}
