import { Avatar, Box, Rating, Typography } from '@mui/material'
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import Divider from '@mui/material/Divider';
import React from 'react'
import { styles } from './ReviewsStyles'

const Reviews = () => {
    return (
        <Box>
            <Box sx={styles.avatarContainer}>
                <Avatar sx={styles.avatar} alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                <Typography sx={styles.name}>Harsh</Typography>
            </Box>
            <Box sx={styles.rating}>
                <Rating
                    defaultValue={2.5}
                    size='small'
                    readOnly
                    precision={0.5}
                    icon={<StarIcon style={{ color: 'yellow', fontSize: '16px' }} />}
                    emptyIcon={<StarBorderIcon style={{ color: 'white', fontSize: '16px' }} />}
                /></Box>
            <Typography sx={styles.text}>hh h gjlsdjs poejofdij fiuuuuuu rdfffffffffffffdkh hgyfu dfjddjfdi gflyutd fluyf fy ufuyputfouygf ufo uygfou foygp</Typography>
            <Divider sx={{ borderColor: 'white', margin: '10px 0px 10px 0px' }} />
        </Box>
    )
}

export default Reviews