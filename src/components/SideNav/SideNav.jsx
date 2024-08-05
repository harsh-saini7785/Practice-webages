import * as React from 'react';
import Box from '@mui/material/Box';
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
import { CssBaseline, Drawer, Toolbar } from '@mui/material';
import NavBar from '../NavBar/NavBar';
import { Outlet } from 'react-router-dom';
import Home from '../../container/Home/Home';

const drawerWidth = 70;

function SideNav(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [isClosing, setIsClosing] = React.useState(false);
    const [activeIndex, setActiveIndex] = React.useState(0)


    const handleDrawerClose = () => {
        setIsClosing(true);
        setMobileOpen(false);
    };

    const handleDrawerTransitionEnd = () => {
        setIsClosing(false);
    };

    const handleDrawerToggle = () => {
        console.log('hii');
        if (!isClosing) {
            setMobileOpen(!mobileOpen);
        }
    };

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


    const drawer = (
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
    );

    // const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <NavBar handleDrawerToggle={handleDrawerToggle} />
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 }, backgroundColor: 'black' }}
                aria-label="mailbox folders"
            >
                <Drawer
                    // container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onTransitionEnd={handleDrawerTransitionEnd}
                    onClose={handleDrawerClose}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, backgroundColor: '#1F2029' },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{

                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, backgroundColor: '#1F2029', },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 0, width: '100%' }}
            >
                <Toolbar />
                <Outlet />
            </Box>
        </Box>
    );
}


export default SideNav;
