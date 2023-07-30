import { Box, Stack } from '@mui/material';
import { Datepicker } from '../Datepicker/index.js';
import React, { useLayoutEffect } from 'react';
import { Filters } from '../Filters/index.js';
import { columns, rows } from './staticData/sensorData.jsx';
import { DefaultDataGrid } from '../DefaultDataGrid/index.js';
import * as am5 from '@amcharts/amcharts5';
import * as am5xy from '@amcharts/amcharts5/xy';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';

export const SensorData = () => {
    useLayoutEffect(() => {
        let root = am5.Root.new('chartdiv');

        root.dateFormatter.setAll({
            dateFormat: 'yyyy',
            dateFields: ['valueX'],
        });

        // Set themes
        root.setThemes([am5themes_Animated.new(root)]);

        // Create chart
        let chart = root.container.children.push(
            am5xy.XYChart.new(root, {
                panX: true,
                panY: true,
                wheelX: 'panX',
                wheelY: 'zoomX',
                pinchZoomX: true,
            })
        );

        // Add cursor
        let cursor = chart.set(
            'cursor',
            am5xy.XYCursor.new(root, {
                behavior: 'none',
            })
        );
        cursor.lineY.set('visible', false);

        // Data
        let data = [
            { year: '1950', value: -0.307 },
            { year: '1951', value: -0.168 },
            { year: '1952', value: -0.073 },
            { year: '1953', value: -0.027 },
            { year: '1954', value: -0.251 },
            { year: '1955', value: -0.281 },
            { year: '1956', value: -0.348 },
            { year: '1957', value: -0.074 },
            { year: '1958', value: -0.011 },
            { year: '1959', value: -0.074 },
            { year: '1960', value: -0.124 },
            { year: '1961', value: -0.024 },
            { year: '1962', value: -0.022 },
            { year: '1963', value: 0 },
            { year: '1964', value: -0.296 },
            { year: '1965', value: -0.217 },
            { year: '1966', value: -0.147 },
            { year: '1967', value: -0.15 },
            { year: '1968', value: -0.16 },
            { year: '1969', value: -0.011 },
            { year: '1970', value: -0.068 },
            { year: '1971', value: -0.19 },
            { year: '1972', value: -0.056 },
            { year: '1973', value: 0.077 },
            { year: '1974', value: -0.213 },
            { year: '1975', value: -0.17 },
            { year: '1976', value: -0.254 },
            { year: '1977', value: 0.019 },
            { year: '1978', value: -0.063 },
            { year: '1979', value: 0.05 },
            { year: '1980', value: 0.077 },
            { year: '1981', value: 0.12 },
            { year: '1982', value: 0.011 },
            { year: '1983', value: 0.177 },
            { year: '1984', value: -0.021 },
            { year: '1985', value: -0.037 },
            { year: '1986', value: 0.03 },
            { year: '1987', value: 0.179 },
            { year: '1988', value: 0.18 },
            { year: '1989', value: 0.104 },
            { year: '1990', value: 0.255 },
            { year: '1991', value: 0.21 },
            { year: '1992', value: 0.065 },
            { year: '1993', value: 0.11 },
            { year: '1994', value: 0.172 },
            { year: '1995', value: 0.269 },
            { year: '1996', value: 0.141 },
            { year: '1997', value: 0.353 },
            { year: '1998', value: 0.548 },
            { year: '1999', value: 0.298 },
            { year: '2000', value: 0.267 },
            { year: '2001', value: 0.411 },
            { year: '2002', value: 0.462 },
            { year: '2003', value: 0.47 },
            { year: '2004', value: 0.445 },
            { year: '2005', value: 0.47 },
        ];

        // Create axes
        let xAxis = chart.xAxes.push(
            am5xy.DateAxis.new(root, {
                maxDeviation: 0.5,
                baseInterval: { timeUnit: 'year', count: 1 },
                renderer: am5xy.AxisRendererX.new(root, { pan: 'zoom' }),
                tooltip: am5.Tooltip.new(root, {}),
            })
        );

        let yAxis = chart.yAxes.push(
            am5xy.ValueAxis.new(root, {
                maxDeviation: 1,
                renderer: am5xy.AxisRendererY.new(root, { pan: 'zoom' }),
            })
        );

        // Add series
        let series = chart.series.push(
            am5xy.StepLineSeries.new(root, {
                xAxis: xAxis,
                yAxis: yAxis,
                valueYField: 'value',
                valueXField: 'year',
                tooltip: am5.Tooltip.new(root, {
                    labelText: '{valueX}: {valueY}',
                }),
            })
        );

        series.strokes.template.setAll({
            strokeWidth: 3,
        });

        // Set up data processor to parse string dates
        series.data.processor = am5.DataProcessor.new(root, {
            dateFormat: 'yyyy',
            dateFields: ['year'],
        });

        series.data.setAll(data);

        // Add scrollbar
        chart.set(
            'scrollbarX',
            am5.Scrollbar.new(root, {
                orientation: 'horizontal',
            })
        );

        return () => {
            root.dispose();
        };
    }, []);

    return (
        <Stack spacing={2} height={'100%'}>
            <Stack
                direction={'row'}
                spacing={2}
                justifyContent={'space-between'}
                maxWidth={'800px'}
            >
                <Stack direction={'row'} spacing={2}>
                    <Datepicker />
                    <Datepicker />
                </Stack>
                <Filters />
            </Stack>
            <Stack flexGrow={1} direction={'row'} spacing={4}>
                <Box maxWidth={550} width={'100%'}>
                    <DefaultDataGrid
                        pageItems={10}
                        pageSizeOptions={[10, 30, 60]}
                        columns={columns}
                        rows={rows}
                        onRowClick={() => {}}
                    />
                </Box>
                <Box flexGrow={1} id={'chartdiv'}></Box>
            </Stack>
        </Stack>
    );
};
