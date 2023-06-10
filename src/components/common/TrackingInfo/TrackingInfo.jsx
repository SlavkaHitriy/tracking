import cn from 'classnames'
import React from 'react'

import { GridBox } from '../GridBox'
import styles from './index.module.scss'

export const TrackingInfo = ({ columns, children, className }) => {
    return (
        <div
            className={cn(styles.infoWrap, {
                [className]: className,
            })}
        >
            <GridBox columns={columns}>{children}</GridBox>
        </div>
    )
}
