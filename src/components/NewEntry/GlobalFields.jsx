import React, { useRef } from 'react'

import { assetTypesData } from '../../data/assetTypes'
// Data
import { rigNamesData } from '../../data/rigNames'
import { serviceProvidersData } from '../../data/serviceProviders'
import { InfoItem } from '../common/InfoItem'
// Styles
import styles from './index.module.scss'

export const GlobalFields = () => {
    const rigNames = useRef(rigNamesData)
    const assetTypes = useRef(assetTypesData)
    const serviceProviders = useRef(serviceProvidersData)

    return (
        <>
            <InfoItem
                className={styles.entryItem}
                name={'Commercial Invoice'}
                value={'23423244'}
            />
            <InfoItem
                className={styles.entryItem}
                name={'Pedimento #'}
                value={'10287870'}
            />
            <InfoItem
                className={styles.entryItem}
                name={'Rig Name'}
                selectValues={rigNames.current}
            />
            <InfoItem
                className={styles.entryItem}
                name={'Asset Type'}
                selectValues={assetTypes.current}
            />
            <InfoItem
                className={styles.entryItem}
                name={'Service Provider'}
                selectValues={serviceProviders.current}
            />
        </>
    )
}
