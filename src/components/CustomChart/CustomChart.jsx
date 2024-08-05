import * as React from 'react';
import Stack from '@mui/material/Stack';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import { BarChart } from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts/ChartsAxis';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Box, Button, Typography } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

import { styles } from './CustomChartStyle';

const theme = createTheme({
    components: {
        MuiBarChart: {
            styleOverrides: {
                root: {
                    // Customize the bar color
                    '& .MuiBarChart-bar': {
                        fill: 'blue', // Change this to your desired color
                    },
                },
            },
        },
    },
});
// import { dataset } from '../dataset/weather';

export const dataset = [
    {
        london: 59,
        paris: 57,
        newYork: 86,
        seoul: 21,
        month: 'Jan',
    },
    {
        london: 50,
        paris: 52,
        newYork: 78,
        seoul: 28,
        month: 'Feb',
    },
    {
        london: 47,
        paris: 53,
        newYork: 106,
        seoul: 41,
        month: 'Mar',
    },
    {
        london: 54,
        paris: 56,
        newYork: 92,
        seoul: 73,
        month: 'Apr',
    },
    {
        london: 57,
        paris: 69,
        newYork: 92,
        seoul: 99,
        month: 'May',
    },
    {
        london: 60,
        paris: 63,
        newYork: 103,
        seoul: 144,
        month: 'June',
    },
    {
        london: 59,
        paris: 60,
        newYork: 105,
        seoul: 319,
        month: 'July',
    },
    {
        london: 65,
        paris: 60,
        newYork: 106,
        seoul: 249,
        month: 'Aug',
    },
    {
        london: 51,
        paris: 51,
        newYork: 95,
        seoul: 131,
        month: 'Sept',
    },
    {
        london: 60,
        paris: 65,
        newYork: 97,
        seoul: 55,
        month: 'Oct',
    },
    {
        london: 67,
        paris: 64,
        newYork: 76,
        seoul: 48,
        month: 'Nov',
    },
    {
        london: 61,
        paris: 70,
        newYork: 103,
        seoul: 25,
        month: 'Dec',
    },
];

const valueFormatter = (value) => `${value}mm`;

const chartSetting = {
    yAxis: [
        {
            // label: 'rainfall (mm)',
        },
    ],
    // width: 500,
    height: 200,
};


export default function CustomChart() {
    return (
        <div style={{ width: '100%', backgroundColor: '#1F2029', borderRadius: '4px', }}>
            <Box sx={styles.chartHeader}>
                <Typography sx={styles.header}>Activly</Typography>
                <Button sx={styles.Button}>
                    <Typography sx={styles.buttonText}>Weekly</Typography>
                    <ArrowDropDownIcon />
                </Button>
            </Box>
            <BarChart
                dataset={dataset}
                yAxis={[{ scaleType: 'band', dataKey: 'month' }]}
                series={[{ dataKey: 'seoul', valueFormatter, color: '#7694F9' }]}
                layout="vertical"
                grid={{ vertical: true }}
                {...chartSetting}
            />
        </div>
    );
}
