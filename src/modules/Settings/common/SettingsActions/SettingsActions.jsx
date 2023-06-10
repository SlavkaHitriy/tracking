import cn from 'classnames';
import React from 'react';

// Components
import { Button } from '../../../../components/common/Button/index.js';
// Styles
import styles from './index.module.scss';

export const SettingsActions = ({ onSubmit, onCancel, onDelete }) => {
    return (
        <div className={styles.actions}>
            {onDelete && (
                <Button
                    className={styles.actionsBtn}
                    onClick={onDelete}
                    standard
                    dark
                >
                    Delete
                </Button>
            )}
            <Button
                className={cn(styles.actionsBtn, styles.actionsBtnMarginLeft)}
                onClick={onCancel}
                secondary
                standard
            >
                Cancel
            </Button>
            <Button className={styles.actionsBtn} onClick={onSubmit} standard>
                Save
            </Button>
        </div>
    );
};
