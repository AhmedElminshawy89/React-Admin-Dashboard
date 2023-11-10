import React from 'react'
import LineChart from '../../components/LineChart';
import { Box } from '@mui/material';
import Header from '../../components/Header';
const Line = () => {
  return (
    <Box>
      <Header title='Pie Chart' subtitle='Simple Pie Chart'/>
      <Box height='75vh'>
        <LineChart/>
      </Box>
    </Box>
  )
}

export default Line