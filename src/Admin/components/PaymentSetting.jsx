import { Box, useMediaQuery, useTheme, Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import {tokens} from '../../theme';
import {mockPaymentData} from '../data/mockData';

import  Header from '../components/Header';
import { AddOutlined } from "@mui/icons-material";
import StatusSwitch from "./StatusSwitch";


const PaymentSetting = ({showAddPayment,setShowAddPayment}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode)
  const smScreen = useMediaQuery( theme.breakpoints.up('sm'))

  const columns = [
    {field:"id",headerName:"ID",flex:1},
    {
      field:"PaymentTypeName",
      headerName:"Payment Type Name",
      flex:1,
      cellClassName: "name-column--cell"
    },
    {
      field:"status",
      headerName:"Status",
      renderCell: (cellValues) => {
        return (
          <StatusSwitch/>
        )
      }
    }
  ]

  return (
    <Box>
        <Box
            display='flex'
            flexDirection={smScreen?'row':'column'}
            justifyContent={smScreen ? "space-between" : "center"}
            alignItems={smScreen ? "center" : "center"}
            m="10px 0"
        >
            <Header title='Payment Setting' subtitle='Manage Payment Setting'/>

            <Box>
                <Button
                    sx={{
                        backgroundColor: colors.blueAccent[700],
                        color:colors.grey[100],
                        fontSize: "14px",
                        fontWeight: "bold",
                        padding: "10px 20px",
                    }}
                    onClick={()=>setShowAddPayment(!showAddPayment)}
                >
                    <AddOutlined sx={{mr :'10px'}}/>
                    Add Payment
                </Button>
            </Box>
        </Box>
      <Box m='40px 0 0 0'
        height='85vh'
        sx={{
          "& .MuiDataGrid-root":{
            border: "none"
          },
          "& .MuiDataGrid-cell":{
            borderBottom: 'none'
          },
          "& .name-column--cell":{
            color: colors.greenAccent[300]
          },
          "& .MuiDataGrid-columnHeaders":{
            backgroundColor: colors.blueAccent[700]
          },
          "& .MuiDataGrid-virtualScroller":{
            backgroundColor: colors.primary[400]
          },
          "& .MuiDataGrid-footerContainer":{
            backgroundColor: colors.blueAccent[700]
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text":{
            color: `${colors.grey[100]} !important`
          }
        }}
      >
        <DataGrid
          rows={mockPaymentData}
          columns={columns}
        />
      </Box>
    </Box>
  )
}

export default PaymentSetting