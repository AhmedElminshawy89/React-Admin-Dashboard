import { Box, Button, useMediaQuery, useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import {tokens} from '../../../theme';

import Header from "../../components/Header";
import { AddOutlined } from "@mui/icons-material";
import { mockDataInvoices } from "../../data/mockData";


const Brand = ({showAddBrand,setShowAddBrand}) => {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const smScreen = useMediaQuery( theme.breakpoints.up('sm'))

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
        <Box
            display='flex'
            flexDirection={smScreen?'row':'column'}
            justifyContent={smScreen ? "space-between" : "center"}
            alignItems={smScreen ? "center" : "center"}
            m="10px 0"
        >
            <Header title='Brand' subtitle='All of Brand'/>

            <Box>
                <Button
                    sx={{
                        backgroundColor: colors.blueAccent[700],
                        color:colors.grey[100],
                        fontSize: "14px",
                        fontWeight: "bold",
                        padding: "10px 20px",
                    }}
                    onClick={()=>setShowAddBrand(!showAddBrand)}
                >
                    <AddOutlined sx={{mr :'10px'}}/>
                    Add Brand
                </Button>
            </Box>
        </Box>

        <Box
            height='85vh'
            sx={{
                "& .MuiDataGrid-root":{
                    border: "none"
                  },
                  "& .MuiDataGrid-cell":{
                    borderBottom: 'none'
                  },
                  "& .name-column--cell":{
                    color: `${colors.greenAccent[300]} !important`
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
                  "& .MuiCheckbox-root":{
                    color: `${colors.greenAccent[200]} !important`
                  },
                  "& .MuiDataGrid-toolbarContainer .MuiButton-text":{
                    color: `${colors.grey[100]} !important`
                  }
            }}
        >
            <DataGrid
            columns={columns}
             rows={mockDataInvoices}
             components={{toolbar:GridToolbar}}
             checkboxSelection
            />
        </Box>
    </Box>
  )
}

export default Brand