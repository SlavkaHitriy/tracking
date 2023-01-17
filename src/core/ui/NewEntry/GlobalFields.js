import React, { useRef } from 'react'

// Styles
import styles from './index.module.scss'

// Data
import { rigNamesData } from '../../../data/rigNames'
import { assetTypesData } from '../../../data/assetTypes'
import { serviceProvidersData } from '../../../data/serviceProviders'

// Components
import { Select } from '../Select'

export const GlobalFields = () => {
    const rigNames = useRef(rigNamesData)
    const assetTypes = useRef(assetTypesData)
    const serviceProviders = useRef(serviceProvidersData)

    return (
        <>
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
        </>
    )
}
