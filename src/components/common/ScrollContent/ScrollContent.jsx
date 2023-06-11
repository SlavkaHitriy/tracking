import cn from 'classnames';
import React, { useRef } from 'react';

import { useCalculateElementHeight } from '../../../core/hooks/useCalculateElementHeight.jsx';
// Styles
import styles from './index.module.scss';
import { Stack } from '@mui/material';

export const ScrollContent = ({ children, className }) => {
    const contentEl = useRef();
    const elementHeight = useCalculateElementHeight(contentEl);

    return (
        <Stack
            ref={contentEl}
            style={{ height: `${elementHeight}px` }}
            className={cn(styles.content, {
                [className]: className,
            })}
        >
            {children}
        </Stack>
    );
};
