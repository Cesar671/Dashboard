import React from 'react'
import { Box, Typography, useTheme} from "@mui/material"
import { DataGrid, GridCellParams, GridColDef } from "@mui/x-data-grid"
import { tokens } from '../theme'
import { mockDataTeam } from '../../data/mockdata'
import AdminPanelSettingsOutlined from '@mui/icons-material/AdminPanelSettingsOutlined'
import LockOpenOutLined from '@mui/icons-material/LockOpenOutlined'
import SecurityOutLined from '@mui/icons-material/SecurityOutlined'
import Header from '../../components/Header'

const Team:React.FC = () => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    const columns:GridColDef[] = [
        {field: "id",headerName:"ID"},
        { 
            field: "name", 
            headerName: "Name", 
            flex: 1, 
            cellClassName: "name-column--cell" 
        }, { 
            field: "age", 
            headerName: "Age", 
            type: "number", 
            headerAlign: "left",
            align: "left", 
        },{ 
            field: "phone", 
            headerName: "Phone Number", 
            flex: 1,
        },{ 
            field: "email", 
            headerName: "Email", 
            flex: 1,
        },{ 
            field: "access", 
            headerName: "Access Level", 
            flex: 1,
            renderCell: ({ row: { access } }:GridCellParams) => {
                return (
                <Box
                    width="60%"
                    m= "0 auto"
                    p= "5px"
                    display = "flex"
                    justifyContent="center"
                    bgcolor={
                        access === "admin" ?
                        colors.greenAccent[600]:
                        colors.greenAccent[700]
                    }
                    borderRadius="4px"
                >
                    { access === "admin"  && <AdminPanelSettingsOutlined />}
                    { access === "manager"  && <SecurityOutLined />}
                    { access === "user"  && <LockOpenOutLined />}
                    <Typography
                        color= { colors.grey[100] }
                        sx={{ ml: "5px" }}
                    >

                    </Typography>
                </Box>)
            }
        },
    ]
  return (
    <Box m= "20px">
        <Header title='TEAM' subtitle='Managing the Team Members'/>
        <Box
            m="40px 0 0 0"
            height="75vh"
        >
            <DataGrid
                rows={ mockDataTeam }
                columns={ columns }
            />
        </Box>
    </Box>
  )
}

export default Team