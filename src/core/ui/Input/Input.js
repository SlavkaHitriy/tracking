import React from 'react'
import cn from 'classnames'

// Styles
import styles from './index.module.scss'

export const Input = ({className, type, placeholder, error, ...input}) => {
    return (
        <div className={cn(styles.inputWrap, {
            [className]: className,
        })}>
            <input
                className={cn(styles.input, {
                    [styles.inputError]: error,
                })}
                type={type || 'text'}
                placeholder={placeholder}
                value={input.value}
                onChange={input.onChange}
            />
            {error && <span className={styles.inputErrorText}>{error}</span>}
        </div>
    )
}
