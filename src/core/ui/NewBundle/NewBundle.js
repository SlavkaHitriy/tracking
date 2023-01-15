import React, { useRef } from 'react'
import cn from 'classnames'

// Styles
import styles from './index.module.scss'

// Data
import { assetTypesData } from '../../../data/assetTypes'
import { serviceProvidersData } from '../../../data/serviceProviders'
import { trackersSelectData } from '../../../data/trackersSelect'

// Components
import { Title } from '../Title'
import { Select } from '../Select'
import { Button } from '../Button'

export const NewBundle = ({ setActivePopup }) => {
    const trackers = useRef(trackersSelectData)
    const assetTypes = useRef(assetTypesData)
    const serviceProviders = useRef(serviceProvidersData)

    const closeNewEntry = () => setActivePopup('info')

    return (
        <div className={styles.entry}>
            <Title className={'mb-6'}>New Bundle</Title>
            <div className={cn(styles.entryInfo, 'mb-7')}>
                <div className={cn(styles.entryItem, styles.entryItemHighlighted)}>
                    <div className={styles.entryItemName}>
                        Bundle #
                    </div>
                    <div className={styles.entryItemValue}>05</div>
                </div>
                <div className={styles.entryItem}>
                    <div className={styles.entryItemName}>Tracker</div>
                    <div className={styles.entryItemValue}>
                        <Select
                            className={styles.entryItemSelect}
                            values={trackers.current}
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
                        QTY
                    </div>
                    <div className={styles.entryItemValue}>30</div>
                </div>
                <div className={styles.entryItem}>
                    <div className={styles.entryItemName}>
                       Rig Code
                    </div>
                    <div className={styles.entryItemValue}>V-117</div>
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
                <div className={styles.entryItem}>
                    <div className={styles.entryItemName}>
                        Truck/Vessel
                    </div>
                    <div className={styles.entryItemValue}>TR-2056</div>
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
