import React from 'react';
import cn from 'classnames';

import styles from './index.module.scss';
import { Box } from '@mui/material';

export const Tab = ({
    className,
    activeClassName,
    active,
    children,
    onClick,
}) => {
    return (
        <Box
            className={cn(styles.tab, {
                [className]: className,
                [styles.tabActive]: active,
                [activeClassName]: active,
            })}
            onClick={onClick}
        >
            {children}
        </Box>
    );
};
