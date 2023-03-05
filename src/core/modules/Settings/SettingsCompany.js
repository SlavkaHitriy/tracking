import cn from 'classnames'
import React, { useRef } from 'react'

import { testValuesData } from '../../../data/testValues'
import { InfoItem } from '../../ui/common/InfoItem'
import { ScrollContent } from '../../ui/common/ScrollContent'
import { Title } from '../../ui/common/Title'
import { SettingsActions } from './common/SettingsActions/'
// Styles
import styles from './index.module.scss'

export const SettingsCompany = () => {
    const testValues = useRef(testValuesData)

    return (
        <div className={cn(styles.settingsWrap)}>
            <ScrollContent className={styles.settingCompany}>
                <Title className={'mb-6'}>Company Details</Title>
                <div className={styles.settingsCompanyWrap}>
                    <InfoItem name={'Primary Contact'} value={'Bob Parker'} />
                    <InfoItem name={'Address 1'} value={'4201 Main St.'} />
                    <InfoItem name={'Phone'} value={'713-540-3765'} />
                    <InfoItem name={'Address 2'} value={'Suite 1000'} />
                    <InfoItem name={'Email'} value={'info@gmail.com'} />
                    <InfoItem name={'City'} value={'Houston'} />
                    <InfoItem name={'Tracker License'} value={'50'} />
                    <InfoItem name={'State'} value={'TX'} />
                    <InfoItem name={'User Licenses'} value={'20'} />
                    <InfoItem name={'Zip Code'} value={'77002-3112'} />
                    <InfoItem
                        name={'Timezone'}
                        selectValues={testValues.current}
                        bottomSelect
                    />
                    <InfoItem
                        name={'Region'}
                        selectValues={testValues.current}
                        bottomSelect
                    />
                </div>
            </ScrollContent>
            <SettingsActions onSubmit={() => {}} onCancel={() => {}} />
        </div>
    )
}
