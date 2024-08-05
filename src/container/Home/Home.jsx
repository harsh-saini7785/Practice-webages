import React from 'react'
import { Box, Card } from '@mui/material'
import { styles } from './HomeStyle'
import CustomCard from '../../components/CustomCard/CustomCard'
import bag1 from '../../assets/bag1.png';
import bag2 from '../../assets/bag2.png';
import trend from '../../assets/trend.png';
import basket from '../../assets/basket.png';
import NetProfitBar from '../NetProfitBar/NetProfitBar';
import CustomChart from '../../components/CustomChart/CustomChart';
import Menu from '../Menu/Menu';
import Table from '../../components/CustomTable/CustomTable';
import Reviews from '../Reviews/Reviews';


const Home = () => {
  return (
    <Box sx={styles.dashBoardContainer}>
      <Box sx={styles.dashboardHeader}>Dashboard</Box>
      <Box sx={styles.container1}>
        <Box sx={styles.cardContainer}>
          <CustomCard
            img={basket}
            number={70}
            isUp
            percentage='3%'
            text='Total Orders'
          />
          <CustomCard
            img={bag1}
            number={70}
            percentage='3%'
            text='Total Delivered'
            customStatusStyle={{ color: 'red' }}
            customImageStyle={{ backgroundColor: '#1C4F47' }}
          />
          <CustomCard
            img={bag2}
            number={70}
            isUp
            percentage='3%'
            text='Total Cancelled'
            customImageStyle={{ backgroundColor: '#603437' }}
          />
          <CustomCard
            img={trend}
            number={70}
            percentage='3%'
            text='Total Revenues'
            customStatusStyle={{ color: 'red' }}
          />
        </Box>
        <Box sx={styles.netProfitBar}>
          <NetProfitBar />
        </Box>
      </Box>

      <Box sx={styles.container1}>
        <Box sx={styles.cardContainer}>
          <CustomChart />
        </Box>
        <Box sx={styles.netProfitBar}>
          <Menu />
        </Box>
      </Box>

      <Box sx={styles.container3}>
        <Box sx={styles.tableContainer}>
          <Table />
        </Box>
        <Box sx={styles.netProfitBar}>
          <Box sx={styles.reviewcontainer}>
            <Box sx={styles.reviewHeader}>Customer's Feedback</Box>
            <Reviews />
            <Reviews />
            <Reviews />
            <Reviews />
            <Reviews />
            <Reviews />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Home