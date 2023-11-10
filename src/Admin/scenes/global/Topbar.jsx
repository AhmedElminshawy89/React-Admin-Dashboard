import { Box, IconButton, useMediaQuery, useTheme} from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../../theme";
import {InputBase} from "@mui/material";
import  LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import  DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import  NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import  SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import  PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import  SearchIcon from "@mui/icons-material/Search";
import  MenuOutlinedIcon  from "@mui/icons-material/MenuOutlined";
import { Link } from "react-router-dom";

const Topbar = ({isSidebarVisible, setIsSidebarVisible}) => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  const colorMode = useContext(ColorModeContext)
  const smScreen = useMediaQuery(theme.breakpoints.up('sm'))
  const mdScreen = useMediaQuery(theme.breakpoints.up('md'))

  return <Box
         display="flex" 
         justifyContent={smScreen?"space-between":"center"}
         flexDirection={smScreen?"row":"column"} 
         p={2}
         >
          <Box 
            display="flex" 
            alignItems="center"
          >
            <Box
              display={mdScreen?"none":"block"}
            >
                <IconButton type="button" sx={{p:1}}
                  onClick={()=>setIsSidebarVisible(!isSidebarVisible)}
                >
                  <MenuOutlinedIcon/>
                </IconButton>
            </Box>
            <Box display="flex"
              backgroundColor={colors.primary[400]}
              borderRadius="3px"
              width='100%'
              >
                <InputBase sx={{ml: 2, flex:1}} placeholder="Search..."/>
                <IconButton type="button" sx={{p:1}}>
                  <SearchIcon/>
                </IconButton>
            </Box>
          </Box>
     <Box 
        display="flex" 
        justifyContent={smScreen?"space-between":"center"}
        alignItems="center"
      >
      <IconButton type="button" sx={{p:1}} onClick={colorMode.toggleColorMode}>
        {theme.palette.mode==='dark'?
        (
          <LightModeOutlinedIcon/>
        ):(
          <DarkModeOutlinedIcon/>
        )}
      </IconButton>
      <IconButton type="button" sx={{p:1}}>
        <NotificationsOutlinedIcon/>
      </IconButton>
      <Link to='/setting'>
        <IconButton type="button" sx={{p:1}}>
              <SettingsOutlinedIcon/>
        </IconButton>
      </Link>
      <IconButton type="button" sx={{p:1}}>
        <PersonOutlinedIcon/>
      </IconButton>
     </Box>
  </Box> 

}

export default Topbar