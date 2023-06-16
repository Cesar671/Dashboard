import React from 'react'
import  { Box, IconButton, useTheme, InputBase } from "@mui/material"
import { ColorModeContext, tokens } from '../theme'
import LightModeOutLined  from "@mui/icons-material/LightModeOutlined"
import DarkModeOutLined  from "@mui/icons-material/DarkModeOutlined"
import NotificationsOutKLined  from "@mui/icons-material/NotificationsOutlined"
import SettingsOutLined  from "@mui/icons-material/SettingsOutlined"
import PersonOutLined  from "@mui/icons-material/PersonOutlined"
import SeachIcon  from "@mui/icons-material/Search"

const Topbar:React.FC = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode)
  const colorMode = React.useContext( ColorModeContext )
  return (
    <Box display="flex" justifyContent="space-between" p={ 2 }>
      {/* Search Button */}
        <Box 
          display="flex" 
          bgcolor={ colors.primary[400] } 
          borderRadius="3px"
        >
          <InputBase sx={{ ml:2, flex:1 } } placeholder='Search'/>
          <IconButton type='button' sx={{ p:1}}>
            <SeachIcon />
          </IconButton>
        </Box>

        {/* Icons Secction */}
        <Box display="flex"> 
          <IconButton onClick={ colorMode.toogleColorMode }>
            { theme.palette.mode === 'dark' 
            ?  
            <DarkModeOutLined />
            : 
            <LightModeOutLined/>
          }
            
          </IconButton>
          <IconButton>
            <NotificationsOutKLined></NotificationsOutKLined>
          </IconButton>
          <IconButton>
            <SettingsOutLined></SettingsOutLined>
          </IconButton>
          <IconButton>
            <PersonOutLined></PersonOutLined>
          </IconButton>
        </Box>
    </Box>
  )
}

export default Topbar