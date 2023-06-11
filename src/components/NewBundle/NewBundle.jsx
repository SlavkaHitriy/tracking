import cn from 'classnames';
import React, { useRef } from 'react';

import { assetTypesData } from '../../data/assetTypes';
import { serviceProvidersData } from '../../data/serviceProviders';
import { trackersSelectData } from '../../data/trackersSelect';
import { DefaultButton } from '../common/DefaultButton';
import { InfoItem } from '../common/InfoItem';
import { Title } from '../common/Title';
import styles from './index.module.scss';

export const NewBundle = ({ setActivePopup }) => {
    const trackers = useRef(trackersSelectData);
    const assetTypes = useRef(assetTypesData);
    const serviceProviders = useRef(serviceProvidersData);

    const closeNewEntry = () => setActivePopup('info');

    return (
        <div className={styles.entry}>
            <Title className={'mb-6'}>New Bundle</Title>
            <div className={cn(styles.entryInfo, 'mb-7')}>
                <InfoItem
                    className={styles.entryItem}
                    name={'Bundle #'}
                    value={'05'}
                    highlight
                />
                <InfoItem
                    className={styles.entryItem}
                    name={'Tracker'}
                    selectValues={trackers.current}
                />
                <InfoItem
                    className={styles.entryItem}
                    name={'Asset Type'}
                    selectValues={assetTypes.current}
                />
                <InfoItem
                    className={styles.entryItem}
                    name={'QTY'}
                    value={'30'}
                />
                <InfoItem
                    className={styles.entryItem}
                    name={'Rig Code'}
                    value={'V-117'}
                />
                <InfoItem
                    className={styles.entryItem}
                    name={'Service Provider'}
                    selectValues={serviceProviders.current}
                />
                <InfoItem
                    className={styles.entryItem}
                    name={'Truck/Vessel'}
                    value={'TR-2056'}
                />
            </div>
            <div className={styles.entryActions}>
                <DefaultButton
                    text={'Delete'}
                    className={styles.entryActionsBtn}
                    standard
                    dark
                    onClick={closeNewEntry}
                />
                <div className={styles.entryActionsBox}>
                    <DefaultButton
                        text={'Cancel'}
                        className={styles.entryActionsBtn}
                        standard
                        secondary
                        onClick={closeNewEntry}
                    />
                    <DefaultButton
                        text={'Save'}
                        className={styles.entryActionsBtn}
                        standard
                        onClick={closeNewEntry}
                    />
                </div>
            </div>
        </div>
    );
};
