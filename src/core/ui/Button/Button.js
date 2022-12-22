import React from 'react'
import cn from 'classnames'

// Styles
import styles from './index.module.scss'

// Components
import { SvgSprite } from '../SvgSprite/SvgSprite'

export const Button = ({type, className, text, plus, onClick, more}) => {
    return (
        <button
            className={cn(styles.btn, {
                [className]: className,
                [styles.btnPlus]: plus,
                [styles.btnMore]: more,
            })}
            type={type || 'button'}
            onClick={onClick}
        >
            {plus && <SvgSprite spriteID={'plus'}/>}
            {text && text}
            {more && (<>
                <span/>
                <span/>
                <span/>
            </>)}
        </button>
    )
}
