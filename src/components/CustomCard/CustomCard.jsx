import React from 'react'
import { Box, Typography } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import { styles } from './CustomCardStyles';

const CustomCard = ({ img, text, number, percentage, isUp, customImageStyle, customStatusStyle }) => {
    return (
        <Box sx={styles.cardContainer}>
            <Box sx={[styles.imageContainer, customImageStyle]}>
                <img style={{ width: '25px' }} src={img} alt="basket" />
            </Box>
            <Typography sx={styles.orders}>{text}</Typography>
            <Box sx={styles.bottom}>
                <Typography sx={styles.number}>{number}</Typography>
                <Box sx={[styles.statusContainer, customStatusStyle]}>
                    {!isUp ? <ArrowDropDownIcon /> : <ArrowDropUpIcon />}
                    <Typography sx={styles.percentage}>{percentage}</Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default CustomCard