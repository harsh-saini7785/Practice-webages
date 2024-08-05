import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import { Outlet } from 'react-router-dom';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import HomeIcon from '@mui/icons-material/Home';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
import AssessmentIcon from '@mui/icons-material/Assessment';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import AssignmentTurnedInOutlinedIcon from '@mui/icons-material/AssignmentTurnedInOutlined';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import { styles } from './SideNavStyle'


const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);

export default function SideNav() {
    const theme = useTheme();
    const [activeIndex, setActiveIndex] = React.useState(0)

    const items = [
        {
            path: '/',
            key: 'home',
            icon: <HomeOutlinedIcon sx={{ color: 'grey' }} />,
            filledIcon: <HomeIcon sx={{ color: '#7694F9' }} />
        },
        {
            path: '/',
            key: 'home2',
            icon: <AssessmentOutlinedIcon sx={{ color: 'grey' }} />,
            filledIcon: <AssessmentIcon sx={{ color: '#7694F9' }} />
        },
        {
            path: '/',
            key: 'home3',
            icon: <AssignmentTurnedInOutlinedIcon sx={{ color: 'grey' }} />,
            filledIcon: <AssignmentTurnedInIcon sx={{ color: '#7694F9' }} />
        },
        {
            path: '/',
            key: 'home5',
            icon: <AccountBalanceWalletOutlinedIcon sx={{ color: 'grey' }} />,
            filledIcon: <AccountBalanceWalletIcon sx={{ color: '#7694F9' }} />
        },
        {
            path: '/',
            key: 'home4',
            icon: <ShoppingBagOutlinedIcon sx={{ color: 'grey' }} />,
            filledIcon: <ShoppingBagIcon sx={{ color: '#7694F9' }} />
        }
    ]

    return (
        <Box sx={styles.sideBarContainer}>
            <Drawer variant="permanent" open={false}>
                <Box sx={{ height: '100%', display: 'flex', justifyContent: 'space-between', flexDirection: 'column' }}>
                    <List>
                        <Box sx={styles.logoContainer} ><AcUnitIcon sx={styles.logo} /></Box>
                        {items.map((item, index) => (
                            <ListItem key={item.key} onClick={() => setActiveIndex(index)} disablePadding sx={{ display: 'block' }}>
                                <ListItemButton
                                    sx={{
                                        minHeight: 48,
                                        justifyContent: 'initial',
                                        px: 2.5,
                                        marginTop: '14px',
                                        borderLeft: index === activeIndex ? "3px solid #7694F9" : "3px solid transparent",
                                    }}
                                >
                                    <ListItemIcon
                                        sx={{
                                            minWidth: 0,
                                            mr: 'auto',
                                            justifyContent: 'center',
                                        }}
                                    >
                                        {index !== activeIndex ? item.icon : (item.filledIcon || item.icon)}
                                    </ListItemIcon>
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                    <List>
                        <ListItem disablePadding sx={{ display: 'block' }}>
                            <ListItemButton
                                sx={{
                                    minHeight: 48,
                                    justifyContent: 'initial',
                                    px: 2.5,
                                }}
                            >
                                <ListItemIcon
                                    sx={{
                                        minWidth: 0,
                                        mr: 'auto',
                                        justifyContent: 'center',
                                    }}
                                >
                                    <ExitToAppOutlinedIcon sx={{ color: 'grey' }} />
                                </ListItemIcon>
                            </ListItemButton>
                        </ListItem>
                    </List>
                </Box>
            </Drawer>
            <Box component="main" sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1, p: 3, padding: 0 }}>
                <DrawerHeader />
                <Outlet />
            </Box>
        </Box>
    );
}
