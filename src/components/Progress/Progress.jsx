import React from 'react';
import cn from 'classnames';

import styles from './index.module.scss';

import { Title } from '../common/Title';
import { Box, Stack, Switch } from '@mui/material';
import { ColorStatus } from '../common/ColorStatus/index.js';

export const Progress = ({ title, subtitle, data, staticData }) => {
    return (
        <div className={styles.progress}>
            {title && <Title mb={1}>{title}</Title>}
            {subtitle && (
                <Title type={'small'} mb={2}>
                    {subtitle}
                </Title>
            )}
            <Box className={styles.progressContent}>
                {data.map((item) => (
                    <Stack
                        direction={'row'}
                        key={item.id}
                        className={styles.progressItem}
                    >
                        <div
                            className={cn(styles.progressStatus, 'mr-2', {
                                [styles.progressStatusCurrent]:
                                    item.status === 1,
                                [styles.progressStatusComplete]:
                                    item.status === 2,
                            })}
                        />
                        <div className={styles.progressDate}>
                            <div>{item.date}</div>
                            <div>{item.time}</div>
                        </div>
                        <div>
                            <div>{item.name}</div>
                            <div className={styles.progressValue}>
                                {item.value}
                            </div>
                        </div>
                        {item.toggle && (
                            <>
                                {staticData ? (
                                    <Box
                                        ml={2}
                                        mb={'3px'}
                                        alignSelf={'flex-end'}
                                    >
                                        <ColorStatus code={1} size={15} />
                                    </Box>
                                ) : (
                                    <Switch
                                        sx={{
                                            ml: 2,
                                            '.MuiSwitch-thumb': {
                                                backgroundColor: 'green.main',
                                            },
                                            '.Mui-checked+.MuiSwitch-track': {
                                                backgroundColor: 'grey.light',
                                            },
                                        }}
                                        defaultChecked
                                    />
                                )}
                            </>
                        )}
                    </Stack>
                ))}
            </Box>
        </div>
    );
};
