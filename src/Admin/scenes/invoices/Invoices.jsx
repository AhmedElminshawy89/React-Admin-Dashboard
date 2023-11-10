import { Box, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import {tokens} from '../../../theme';
import {mockDataInvoices} from '../../data/mockData';

import  Header from '../../components/Header';

const Invoices = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode)

  const columns = [
    {field:"id",headerName:"ID",flex:0.5},
    {
      field:"name",
      headerName:"Name",
      flex:1,
      cellClassName: "name-column--cell"
    },
    {
      field:"email",
      headerName:"Email",
      flex:1
    },
    {
      field:"cost",
      headerName:"Cost",
      flex:.5
    },
    {
      field:"phone",
      headerName:"Phone Number",
      flex:1
    },
    {
      field:'date',
      headerName:"Date",
      flex:1
    },
  ]

  return (
    <Box>
      <Header title='Invoices' subtitle='List of Invoices'/>
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
          "& .MuiCheckbox-root":{
            color: `${colors.greenAccent[200]} !important`
          },
          "& .MuiDataGrid-footerContainer":{
            backgroundColor: colors.blueAccent[700]
          }
        }}
      >
        <DataGrid
        checkboxSelection
          rows={mockDataInvoices}
          columns={columns}
        />
      </Box>
    </Box>
  )
}

export default Invoices