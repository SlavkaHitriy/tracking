import cn from 'classnames'
import React from 'react'

import { ScrollContent } from '../../ui/common/ScrollContent'
import { Title } from '../../ui/common/Title'
import { SettingsActions } from './common/SettingsActions/'
// Styles
import styles from './index.module.scss'

export const SettingsCompany = () => {
    return (
        <div className={cn(styles.settingsWrap)}>
            <ScrollContent className={styles.settingCompany}>
                <Title className={'mb-6'}>Company Details</Title>
            </ScrollContent>
            <SettingsActions
                onSubmit={() => {}}
                onCancel={() => {}}
                onDelete={() => {}}
            />
        </div>
    )
}
