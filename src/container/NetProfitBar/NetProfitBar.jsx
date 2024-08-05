import { Box, Typography } from '@mui/material'
import React from 'react'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import CircularProgress from '@mui/material/CircularProgress';

import { styles } from './NetProfitBarStyle'
import CircularProgressWithLabel from '../../components/CircularProgressWithLabel/CircularProgressWithLabel';

const NetProfitBar = () => {
    return (
        <Box sx={styles.cardContainer }>
            <Box>
                <Typography sx={styles.text}>Net Profit</Typography>
                <Typography sx={styles.number}>$6759.25</Typography>
                <Box sx={styles.statusContainer}>
                    <ArrowDropDownIcon />
                    <Typography sx={styles.percentage}>3%</Typography>
                </Box>
            </Box>
            <Box>
                <CircularProgressWithLabel value={70} />
                <Typography sx={styles.note}>The value here has been rounded off</Typography>
            </Box>

        </Box>
    )
}

export default NetProfitBar