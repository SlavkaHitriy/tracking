import React from 'react';

// Styles
import styles from './index.module.scss';
import cn from 'classnames';
import { SvgSprite } from '../SvgSprite/SvgSprite.jsx';

export const Status = ({ code }) => {
    return (
        <div
            className={cn(styles.status, {
                [styles.statusRoute]: code === 2,
                [styles.statusComplete]: code === 3,
            })}
        >
            {code === 1 && 'Ready'}
            {code === 2 && (
                <>
                    In route
                    <span />
                    <span />
                    <span />
                </>
            )}
            {code === 3 && (
                <>
                    Complete
                    <SvgSprite className={'ml-2'} spriteID={'triangle'} />
                </>
            )}
            {code === 4 && 'Documentation'}
        </div>
    );
};
