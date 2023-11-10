import { Box, Tab } from "@mui/material";
import { TabContext, TabPanel, TabList } from "@mui/lab";
import { useState } from "react";

import DataSaverOnIcon from '@mui/icons-material/DataSaverOn';
import GeneralInformation from "./GeneralInformation";
import EmailSetting from "./EmailSetting";
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import PaidIcon from '@mui/icons-material/Paid';
import PaymentSetting from "./PaymentSetting";

const Tabs = ({showAddPayment,setShowAddPayment}) => {

    const [value,setValue] = useState("1")
    const handleChange = (event, newValue) => {
        setValue(newValue)
    }
  return (
    <Box>
        <TabContext value={value}>
            <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
                <TabList 
                aria-label="Tabs Setting" 
                onChange={handleChange}
                textColor='inherit'
                indicatorColor='secondary'
                variant="scrollable"
                scrollButtons='auto'
                >
                    <Tab label='General Information' icon={<DataSaverOnIcon/>} iconPosition="start" value='1'/>
                    <Tab label='Email Setting' icon={<AdminPanelSettingsIcon/>} iconPosition="start" value='2'/>
                    <Tab label='Payment Setting' icon={<PaidIcon/>} iconPosition="start" value='3'/>
                </TabList>
            </Box>  
            <Box>
                <TabPanel value="1"><GeneralInformation/></TabPanel>
                <TabPanel value="2"><EmailSetting/></TabPanel>
                <TabPanel value="3"><PaymentSetting showAddPayment={showAddPayment} setShowAddPayment={setShowAddPayment}/></TabPanel>
            </Box>
        </TabContext>
    </Box>
  )
}

export default Tabs