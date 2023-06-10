import React from 'react'
import cn from 'classnames'

// Styles
import styles from './index.module.scss'

// Components
import { Title } from '../common/Title'

export const Progress = ({ title, subtitle, data }) => {
    return (
        <div className={styles.progress}>
            <Title className={'mb-1'}>{title}</Title>
            <div className={'mb-5'}>{subtitle}</div>
            <div className={styles.progressContent}>
                {data.map((item) => (
                    <div key={item.id} className={styles.progressItem}>
                        <div className={cn(styles.progressStatus, 'mr-2', {
                            [styles.progressStatusCurrent]: item.status === 1,
                            [styles.progressStatusComplete]: item.status === 2,
                        })} />
                        <div className={styles.progressDate}>
                            <div>{item.date}</div>
                            <div>{item.time}</div>
                        </div>
                        <div>
                            <div>{item.name}</div>
                            <div className={styles.progressValue}>
                                {item.value}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
