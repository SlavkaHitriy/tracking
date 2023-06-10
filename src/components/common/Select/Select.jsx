import cn from 'classnames';
import React, { useEffect, useRef, useState } from 'react';

// Hooks
import { useToggle } from '../../../core/hooks/useToggle.jsx';
// Components
import { SvgSprite } from '../SvgSprite/SvgSprite.jsx';
// Styles
import styles from './index.module.scss';

export const Select = ({
    className,
    initValue,
    setNewValue,
    setNewName,
    values,
    staticValue,
    bottomSelect,
}) => {
    const select = useRef();
    const { isOpened, toggleIsOpened } = useToggle();
    const [selectData, setSelectData] = useState([]);
    const [activeValue, setActiveValue] = useState('');
    const [setInitValue, setSetInitValue] = useState(false);

    const changeValue = (select) => {
        setActiveValue(select);
        toggleIsOpened();
    };

    useEffect(() => {
        if (!setInitValue) {
            if (values) {
                setSelectData(values);
                if (initValue) {
                    setActiveValue(
                        values.find((item) => item.value === initValue)
                    );
                    setSetInitValue(true);
                } else setActiveValue(values[0]);
            }
        }
    }, [values, initValue]);

    useEffect(() => {
        if (activeValue) {
            setNewValue &&
                setNewValue(
                    selectData.find(
                        (filter) => filter.name === activeValue.name
                    ).value
                );
            if (setNewName)
                setNewName(
                    selectData.find(
                        (filter) => filter.name === activeValue.name
                    ).name
                );
        }
    }, [activeValue]);

    const handleClick = (e) => {
        if (isOpened && !select.current.contains(e.target)) {
            toggleIsOpened();
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClick);
        return () => document.removeEventListener('click', handleClick);
    }, [isOpened]);

    return (
        <div
            ref={select}
            className={cn(styles.select, {
                [styles.selectContent]: staticValue,
                [styles.selectOpened]: isOpened,
                [className]: className,
            })}
        >
            <div className={styles.selectActive} onClick={toggleIsOpened}>
                {staticValue && (
                    <div className={styles.selectText}>{staticValue}:</div>
                )}
                {activeValue.name}
                <SvgSprite spriteID={'arrow'} />
            </div>
            {isOpened && (
                <div
                    className={cn(styles.selectDrop, {
                        [styles.selectDropBottom]: bottomSelect,
                    })}
                >
                    {selectData.map((select) => (
                        <div
                            className={cn(styles.selectItem, {
                                [styles.selectItemActive]:
                                    select.name === activeValue.name,
                            })}
                            key={select.id}
                            onClick={() => changeValue(select)}
                        >
                            {select.name}
                            {select.name === activeValue.name && (
                                <div className={styles.selectItemCheck}>
                                    <SvgSprite spriteID={'check'} />
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};
