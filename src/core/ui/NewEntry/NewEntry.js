import React from 'react'
import cn from 'classnames'

// Styles
import styles from './index.module.scss'

// Data
import { newEntryProgressData } from '../../../data/newEntryProgress'

// Components
import { Title } from '../common/Title'
import { Select } from '../common/Select'
import { useInput } from '../../hooks/useInput'
import { Button } from '../common/Button'
import { Progress } from '../Progress'
import { IndoorFields } from './IndoorFields'
import { GlobalFields } from './GlobalFields'

export const NewEntry = ({ setActivePopup, indoor }) => {
    const textarea = useInput("40' Steel Pipe, P66 Grade")

    const closeNewEntry = () => setActivePopup(null)

    return (
        <div className={styles.entry}>
            <Title className={'mb-6'}>New Entry</Title>
            <div className={styles.entryInner}>
                <div className={cn(styles.entryInfo, 'mr-7')}>
                    {indoor ? <IndoorFields /> : <GlobalFields />}
                    <div className={styles.entryTextareaWrap}>
                        <label
                            className={styles.entryTextareaLabel}
                            htmlFor="notes"
                        >
                            Description/Notes
                        </label>
                        <textarea
                            className={styles.entryTextarea}
                            id="notes"
                            value={textarea.value}
                            onChange={textarea.onChange}
                        />
                    </div>
                </div>
                <div className={styles.entryProgress}>
                    <Progress
                        title={'Progress'}
                        subtitle={'Steps'}
                        data={newEntryProgressData}
                    />
                </div>
            </div>
            <div className={styles.entryActions}>
                <Button
                    text={'Delete'}
                    className={styles.entryActionsBtn}
                    standard
                    dark
                    onClick={closeNewEntry}
                />
                <div className={styles.entryActionsBox}>
                    <Button
                        text={'Cancel'}
                        className={styles.entryActionsBtn}
                        standard
                        secondary
                        onClick={closeNewEntry}
                    />
                    <Button
                        text={'Save'}
                        className={styles.entryActionsBtn}
                        standard
                        onClick={closeNewEntry}
                    />
                </div>
            </div>
        </div>
    )
}
