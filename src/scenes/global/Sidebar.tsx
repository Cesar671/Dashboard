import React from 'react'
import { useState, Dispatch, SetStateAction } from 'react'
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar"
import { Box, IconButton, Typography, useTheme } from '@mui/material'
import { Link } from 'react-router-dom'
import { tokens } from '../theme'
import HomeOutlined from '@mui/icons-material/HomeOutlined'
import PeopleOutlined from '@mui/icons-material/PeopleOutlined'
import ContactsOutlined from '@mui/icons-material/ContactsOutlined'
import ReceiptOutlined from '@mui/icons-material/ReceiptOutlined'
import PersonOutlined from '@mui/icons-material/PersonOutlined'
import CalendarTodayOutlined from '@mui/icons-material/CalendarTodayOutlined'
import HelpOutlined from '@mui/icons-material/HelpOutlined'
import BarChartOutlined from '@mui/icons-material/BarChartOutlined'
import PieChartOutlined from '@mui/icons-material/PieChartOutlined'
import TimelineOutLined from '@mui/icons-material/TimelineOutlined'
import MenuOutlined from '@mui/icons-material/MenuOutlined'
import MapOutlined from '@mui/icons-material/MapOutlined'

import "react-pro-sidebar/dist/css/styles.css";

interface PropsItem{
  title: string
  to: string
  selected: string
  setSelected: Dispatch<SetStateAction<string>>
  icon: React.ReactElement
}

const Item:React.FC<PropsItem> = ({ title, to, icon, selected, setSelected }) => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)

    return (
      <MenuItem 
        active= { title === selected }
        style={ { color: colors.grey[100] } }
        onClick={ () => setSelected(title) }
        icon = { icon }
      >
        <Typography>{ title }</Typography>
        <Link to= { to } />
    </MenuItem>)
}

const Sidebar:React.FC = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode)
  const [ isCollapsed, setIsCollapsed ] = useState<boolean>(false)
  const [selected, setSelected] = useState<string>("Dashboard")

  return (
    <Box 
      sx={{
        "& .pro-sidebar-inner": {
          background: `${colors.primary[400]} !important`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#868dfb !important",
        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important",
        },
      }}

    >
      <ProSidebar collapsed={ isCollapsed }>
        <Menu iconShape='square'>
        <MenuItem
          onClick={ () => setIsCollapsed(!isCollapsed) }
          icon={ isCollapsed ? <MenuOutlined />: undefined }
          style={{
            margin: "10px 0 20px 0",
            color: colors.grey[100]
          }}
        >
        { !isCollapsed && (
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            ml="15px"
          >
            <Typography variant='h3' color={ colors.grey[100] }>
              ADMINS
            </Typography>
            <IconButton onClick={ () => setIsCollapsed(!isCollapsed) }>
              <MenuOutlined />
            </IconButton>
          </Box>)}
        </MenuItem>
        { !isCollapsed && (
          <Box mb= "25px">
            <Box display="flex" justifyContent= "center" alignItems="center">
              <img 
                alt="profileUser"
                width="100px"
                height="100px"
                src={"../../assets/cesar.jpg"}
                style={{ cursor: "pointer", borderRadius: "50%" }}
              />
            </Box>
            <Box textAlign="center">
              <Typography variant="h2" color={ colors.grey[100]} fontWeight="bold"
                sx={{ m:"10px 0 0 0" }}
              > 
                ED ROH
              </Typography>
              <Typography variant="h5" color={ colors.greenAccent[500] }>
                VP Fancy Admin
              </Typography>
            </Box>
          </Box>

        ) }

        {/* Menu Items */}
          <Box paddingLeft={ isCollapsed ? undefined : "10%" }>
            <Item 
              title='Dashboard'
              to="/"
              icon= { <HomeOutlined /> }
              selected={ selected }
              setSelected={ setSelected }
            />
            <Item 
              title='Manage Team'
              to="/team"
              icon= { <PeopleOutlined /> }
              selected={ selected }
              setSelected={ setSelected }
            />
            <Item 
              title='Contacts'
              to="/contacts"
              icon= { <ContactsOutlined /> }
              selected={ selected }
              setSelected={ setSelected }
            />
            <Item 
              title='Invoice'
              to="/invoices"
              icon= { <ReceiptOutlined /> }
              selected={ selected }
              setSelected={ setSelected }
            />
            <Item 
              title='Profile form'
              to="/form"
              icon= { <PersonOutlined /> }
              selected={ selected }
              setSelected={ setSelected }
            />
            <Item 
              title='Calendar'
              to="/calendar"
              icon= { <CalendarTodayOutlined /> }
              selected={ selected }
              setSelected={ setSelected }
            />
            <Item 
              title='FAQ PAge'
              to="/faq"
              icon= { <HelpOutlined /> }
              selected={ selected }
              setSelected={ setSelected }
            />
            <Item 
              title='Bar Chart'
              to="/bar"
              icon= { <BarChartOutlined /> }
              selected={ selected }
              setSelected={ setSelected }
            />
            <Item 
              title='Pie Chart'
              to="/pie"
              icon= { <PieChartOutlined /> }
              selected={ selected }
              setSelected={ setSelected }
            />
            <Item 
              title='Line Chart'
              to="/line"
              icon= { <TimelineOutLined /> }
              selected={ selected }
              setSelected={ setSelected }
            />
            <Item 
              title='Geography Chart'
              to="/geography"
              icon= { <MapOutlined /> }
              selected={ selected }
              setSelected={ setSelected }
            />
          </Box>

      </Menu>
      </ProSidebar>
      
    </Box>
      
  )
}

export default Sidebar