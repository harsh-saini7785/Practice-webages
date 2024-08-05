import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Avatar, Box, Button, Typography } from '@mui/material';
import { styles } from './CustomTableStyle';

function createData(name, orderNo, amount, status) {
    return { name, orderNo, amount, status };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 'Delevered'),
    createData('Ice cream sandwich', 237, 9.0, 'Delevered'),
    createData('Eclair', 262, 16.0, 'Delevered'),
    createData('Cupcake', 305, 3.7, 'Completed'),
    createData('Harish', 305, 3.7, 'Completed'),
    createData('Rouf', 305, 3.7, 'Delevered'),
];

const CustomTable = () => {
    return (
        <TableContainer sx={styles.tableContainer} component={Paper}>
            <Box sx={styles.header}>Recent Orders</Box>
            <Table aria-label="simple table" width='100%' sx={{ backgroundColor: '#1F2029' }}>
                <TableHead sx={{ backgroundColor: '#1F2029' }}>
                    <TableRow>
                        <TableCell sx={{ color: 'white' }}>Customer</TableCell>
                        <TableCell sx={{ color: 'white' }} >Order No.</TableCell>
                        <TableCell sx={{ color: 'white' }}>Amount</TableCell>
                        <TableCell sx={{ color: 'white' }} >Status</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell sx={{ color: 'white' }} component="th" scope="row">
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                    <Avatar sx={styles.avatar} alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                                    <Typography sx={{ fontSize: '14px' }}>{row.name}</Typography>
                                </Box>
                            </TableCell>
                            <TableCell sx={{ color: 'white' }} >{row.orderNo}</TableCell>
                            <TableCell sx={{ color: 'white' }} >{row.amount}</TableCell>
                            <TableCell sx={{ color: 'white' }} ><Button sx={row.status === 'Delevered' ? styles.Button : styles.compelete}>{row.status}</Button></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default CustomTable;
