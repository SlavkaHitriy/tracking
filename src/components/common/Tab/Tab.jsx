import React from 'react';
import cn from 'classnames';

// Styles
import styles from './index.module.scss';

export const Tab = ({
    className,
    activeClassName,
    active,
    children,
    onClick,
}) => {
    return (
        <div
            className={cn(styles.tab, {
                [className]: className,
                [styles.tabActive]: active,
                [activeClassName]: active,
            })}
            onClick={onClick}
        >
            {children}
        </div>
    );
};
