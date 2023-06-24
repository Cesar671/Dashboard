import React from 'react'
import { Typography, Box, useTheme } from '@mui/material'
import { tokens } from '../scenes/theme'

interface HeaderProps{
    title:string
    subtitle:string
}


const Header:React.FC<HeaderProps> = ({title, subtitle }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode)
  return (
    <Box>
        <Typography 
            variant='h2' 
            color={ colors.grey[100] } 
            fontWeight="weight"
            sx={{ 
                mb: "5px"
             }}
        >
            { title }
        </Typography>
        <Typography
            variant='h5'
            color={colors.greenAccent[400]}
             
             >
            { subtitle }
        </Typography>
    </Box>
  )
}

export default Header