import React, { useRef } from 'react'
import cn from 'classnames'

// Styles
import styles from './index.module.scss'

// Data
import { rigNamesData } from '../../../data/rigNames'
import { assetTypesData } from '../../../data/assetTypes'
import { serviceProvidersData } from '../../../data/serviceProviders'
import { newEntryProgressData } from '../../../data/newEntryProgress'

// Components
import { Title } from '../Title'
import { Select } from '../Select'
import { useInput } from '../../hooks/useInput'
import { Button } from '../Button'
import { Progress } from '../Progress'

export const NewEntry = ({ setActivePopup }) => {
    const textarea = useInput("40' Steel Pipe, P66 Grade")
    const rigNames = useRef(rigNamesData)
    const assetTypes = useRef(assetTypesData)
    const serviceProviders = useRef(serviceProvidersData)

    const closeNewEntry = () => setActivePopup(null)

    return (
        <div className={styles.entry}>
            <Title className={'mb-6'}>New Entry</Title>
            <div className={styles.entryInner}>
                <div className={cn(styles.entryInfo, 'mr-7')}>
                    <div className={styles.entryItem}>
                        <div className={styles.entryItemName}>
                            Commercial Invoice
                        </div>
                        <div className={styles.entryItemValue}>23423244</div>
                    </div>
                    <div className={styles.entryItem}>
                        <div className={styles.entryItemName}>Pedimento #</div>
                        <div className={styles.entryItemValue}>10287870</div>
                    </div>
                    <div className={styles.entryItem}>
                        <div className={styles.entryItemName}>Rig Name</div>
                        <div className={styles.entryItemValue}>
                            <Select
                                className={styles.entryItemSelect}
                                values={rigNames.current}
                            />
                        </div>
                    </div>
                    <div className={styles.entryItem}>
                        <div className={styles.entryItemName}>Asset Type</div>
                        <div className={styles.entryItemValue}>
                            <Select
                                className={styles.entryItemSelect}
                                values={assetTypes.current}
                            />
                        </div>
                    </div>
                    <div className={styles.entryItem}>
                        <div className={styles.entryItemName}>
                            Service Provider
                        </div>
                        <div className={styles.entryItemValue}>
                            <Select
                                className={styles.entryItemSelect}
                                values={serviceProviders.current}
                            />
                        </div>
                    </div>
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
