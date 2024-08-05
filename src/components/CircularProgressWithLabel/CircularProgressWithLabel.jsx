import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function CircularProgressWithLabel(props) {
    return (
        <Box sx={{
            position: 'relative', display: 'inline-flex'
        }}>
            <CircularProgress sx={{color: '#7694F9'}} thickness={7} size={90} variant="determinate" {...props} />
            <Box
                sx={{
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    position: 'absolute',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Box variant="caption" component="div" sx={{ color: 'white' }}>
                    <Typography sx={{fontWeight: 'bold'}}> {`${Math.round(props.value)}%`}</Typography>
                    <Typography style={{fontSize: '5px'}}>Goal Complete</Typography>
                </Box>
            </Box>
        </Box>
    );
}

export default CircularProgressWithLabel;