import React from 'react'
import { Box, Typography } from '@mui/material'
import MyLocationIcon from '@mui/icons-material/MyLocation';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import RiceBowlOutlinedIcon from '@mui/icons-material/RiceBowlOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import { styles } from './MenuStyle';

const Menu = () => {
    return (
        <Box sx={styles.menuContainer}>
            <Box sx={styles.itemContainer}>
                <Box sx={styles.iconParent}>
                    <Box sx={styles.iconContainer}>
                        <MyLocationIcon sx={{ fontSize: '30px' }} />
                    </Box>
                    <Typography sx={styles.text}>Goals</Typography>
                </Box>
                <Box sx={styles.arrowIconContainer}><ArrowRightIcon sx={{ color: 'white', fontSize: '20px' }} /></Box>
            </Box>
            <Box sx={styles.itemContainer}>
                <Box sx={styles.iconParent}>
                    <Box sx={[styles.iconContainer, styles.dishes]}>
                        <RiceBowlOutlinedIcon sx={{ color: 'black' }} />
                    </Box>
                    <Typography sx={styles.text}>Goals</Typography>
                </Box>
                <Box sx={styles.arrowIconContainer}><ArrowRightIcon sx={{ color: 'white', fontSize: '20px' }} /></Box>
            </Box>
            <Box sx={styles.itemContainer}>
                <Box sx={styles.iconParent}>
                    <Box sx={[styles.iconContainer, styles.menu]}>
                        <ChatBubbleOutlineOutlinedIcon sx={{ color: 'black' }} />
                    </Box>
                    <Typography sx={styles.text}>Goals</Typography>
                </Box>
                <Box sx={styles.arrowIconContainer}><ArrowRightIcon sx={{ color: 'white', fontSize: '20px' }} /></Box>
            </Box>
        </Box>
    )
}

export default Menu