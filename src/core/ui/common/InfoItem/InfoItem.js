import cn from 'classnames'
import React from 'react'

import { Select } from '../Select'
import styles from './index.module.scss'

export const InfoItem = ({
    name,
    value,
    selectValues,
    className,
    highlight,
    bottomSelect,
}) => {
    return (
        <div
            className={cn(styles.item, {
                [className]: className,
                [styles.itemHighlighted]: highlight,
            })}
        >
            <div className={styles.itemName}>{name}</div>
            <div className={styles.itemValue}>
                {selectValues ? (
                    <Select
                        className={styles.itemSelect}
                        values={selectValues}
                        bottomSelect={bottomSelect}
                    />
                ) : (
                    value
                )}
            </div>
        </div>
    )
}
