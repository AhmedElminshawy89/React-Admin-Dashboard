import { Box, Button, IconButton, Typography, useMediaQuery, useTheme } from '@mui/material';
import Header from '../../components/Header';
import { tokens } from '../../../theme';

import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";

import BarChart from '../../components/BarChart';
import PieChart from '../../components/PieChart';
import LineChart from '../../components/LineChart';
import GeographyChart from '../../components/GeographyChart';
import StatBox from '../../components/StatBox';
import ProgressCircle from '../../components/ProgressCircle';
import { mockTransactions } from '../../data/mockData';


const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode)
  const smScreen = useMediaQuery( theme.breakpoints.up('sm'))
  const mdScreen = useMediaQuery( theme.breakpoints.up('md'))
  const lgScreen = useMediaQuery( theme.breakpoints.up('lg'))
  
  return  (
    <Box>
      {/* Top */}
      <Box 
        display='flex'
        flexDirection={smScreen?'row':'column'}
        justifyContent={smScreen ? "space-between" : "center"}
        alignItems={smScreen ? "center" : "center"}
        m="10px 0"
      >
        <Header title='Dashboard' subtitle='Welcome to your dashboard'/>

        <Box>
          <Button
            sx={{
              backgroundColor:colors.blueAccent[700],
              color:colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            <DownloadOutlinedIcon sx={{mr:'10px'}}/>
            Download Reports
          </Button>
        </Box>

      </Box>
    
      {/* {Four Boxes} */}
      <Box
        display='grid'
        gridTemplateColumns={
          lgScreen ? 'repeat(12,1fr)'
          : mdScreen ? 'repeat(6,1fr)'
          : 'repeat(1,1fr)'
        }
        gridAutoRows='140px'
        gap='20px'
      >
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="12,361"
            subtitle="Emails Sent"
            progress="0.75"
            increase="+14%"
            icon={
              <EmailIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="431,225"
            subtitle="Sales Obtained"
            progress="0.50"
            increase="+21%"
            icon={
              <PointOfSaleIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="32,441"
            subtitle="New Clients"
            progress="0.30"
            increase="+5%"
            icon={
              <PersonAddIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="1,325,134"
            subtitle="Traffic Received"
            progress="0.80"
            increase="+43%"
            icon={
              <TrafficIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
      </Box>

      {/* {Transactions and Revenue Generated} */}
      <Box
        display='grid'
        gridTemplateColumns={
          lgScreen ? 'repeat(12,1fr)'
          : mdScreen ? 'repeat(6,1fr)'
          : 'repeat(1,1fr)'
        }
        gridAutoRows='140px'
        gap='20px'
        mt='20px'
      >
      <Box 
          gridColumn={lgScreen?'span 8':'span 12'}
          gridRow='span 3'
          backgroundColor={colors.primary[400]}
          >
          <Box 
            mt='25px'
            p='0 30px'
            display='flex'
            justifyContent='space-between'
            alignItems='center'
          >
            <Box>
              <Typography variant='h5' fontWeight='600' color={colors.grey[100]}>
                Revenue Generated
              </Typography>
              <Typography variant='h3' fontWeight='500' color={colors.greenAccent[500]}>
                $59,342,32
              </Typography>
            </Box>
            <Box>
              <IconButton>
                <DownloadOutlinedIcon
                  sx={{
                    fontSize:'26px',
                    color:colors.greenAccent[500]
                  }}
                />
              </IconButton>
            </Box>
          </Box>

          <Box height='400px' ml='-20px'>
                <LineChart isDashboard={true}/>
          </Box>
      </Box>

      <Box
        gridColumn={lgScreen?'span 4':'span 12'}
        gridRow='span 3'
        backgroundColor={colors.primary[400]}
        overflow='auto'
        width='100%'
      >
        <Box 
          display="flex"
          justifyContent='space-between'
          alignItems='center'
          borderBottom={`4px solid ${colors.primary[400]}`}
          color={colors.grey[100]}
          p='15px'
        >
          <Typography variant='h5' fontWeight='600' color={colors.grey[100]}>
            Recent Transactions
          </Typography>
        </Box>
        {mockTransactions.map((transaction,index)=>(
          <Box
            key={index}
            display="flex"
            justifyContent='space-between'
            alignItems='center'
            borderBottom={`4px solid ${colors.primary[500]}`}
            color={colors.grey[100]}
            p='15px'
          >
            <Box>
              <Typography
                color={colors.greenAccent[500]}
                variant="h5"
                fontWeight='600'
              >
                {transaction.txId}
              </Typography>
              <Typography
                color={colors.greenAccent[500]}
              >
                {transaction.user}
              </Typography>
            </Box>
            <Box color={colors.grey[100]}>{transaction.date}</Box>
            <Box
              backgroundColor={colors.greenAccent[500]}
              p='5px 10px'
              borderRadius='4px'
            >{transaction.cost}</Box>
          </Box>
        ))}
      </Box>

      </Box>
      

      {/* Section 3 */}
      <Box
        display='grid'
        gridTemplateColumns={
          lgScreen ? 'repeat(12,1fr)'
          : mdScreen ? 'repeat(6,1fr)'
          : 'repeat(1,1fr)'
        }
        gridAutoRows='140px'
        gap='20px'
        mt='20px'
      >
        <Box
          gridColumn={lgScreen?'span 4':'span 12'}
          gridRow='span 3'
          backgroundColor={colors.primary[400]}
          p='30px'
        >
          <Typography variant='h5' fontWeight='600'>
              Compaign
          </Typography>
          <Box display='block' m='auto'>
            <Box display='flex' alignItems='center' justifyContent='center' flexDirection='column' mt='25px'>
              <ProgressCircle size='125'/>
              <Typography variant='h5' color={colors.greenAccent[500]} sx={{mt:"15px"}}>
                $48,352 revenue generated
              </Typography>
              <Typography>
                Includes extra misc expenditures and costs
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box
          gridColumn={lgScreen?'span 8':'span 12'}
          gridRow='span 3'
          backgroundColor={colors.primary[400]}
          p='30px'
        >
          <Typography variant='h5' fontWeight='600'>
              Sales Quantity
          </Typography>
          <Box  height='400px' mt='-20px'>
            <BarChart isDashboard={true}/>
          </Box>
        </Box>
      </Box>


    {/* Section 4 geographyy */}
      <Box
        display='grid'
        gridTemplateColumns='repeat(12,1fr)'
        gridAutoRows='140px'
        gap='20px'
        mt='20px'
      >
        <Box
          gridColumn='span 12'
          gridRow='span 4'
          backgroundColor={colors.primary[400]}
          p='30px'
        >
          <Typography variant='h5' fontWeight='600'>
            Geography Based Traffic
          </Typography>
          <Box  height='450px' mt='35px'>
            <GeographyChart/>
          </Box>
        </Box>
      </Box>

    </Box>
  )
}

export default Dashboard