import React from 'react'
import  { useTheme, Box, Card, Container, Paper, IconButton, FormControlLabel, Checkbox } from "@mui/material"
import { Delete } from "@mui/icons-material"
import { tokens } from '../scenes/theme'


const Pruebas:React.FC = () => {
    
    const theme = useTheme();
    const colorMode = tokens( theme.palette.mode )

    return (
    <Container>
            <Box display="flex" flexDirection="column" width="fit-content">
                <IconButton>
                    <Delete></Delete>
                </IconButton>
                <IconButton>
                    <Delete></Delete>
                </IconButton>
                <IconButton>
                    <Delete></Delete>
                </IconButton>
                <IconButton>
                    <Delete></Delete>
                </IconButton>
                <IconButton>
                    <Delete></Delete>
                </IconButton>
                <FormControlLabel
                      label="1"
                      color='inherit'
                      control={
                        <Checkbox
                          value=""
                          checked={ true}
                          onChange={ () => {}}
                          color="default"
                        />
                      }
                    />
            </Box>
        
            <Paper
                sx={{ backgroundColor: colorMode.primary[400] }}
            >
                <Box p={2}>
                    <FormControlLabel
                      label="1"
                      control={
                        <Checkbox
                          value=""
                          checked={ true}
                          onChange={ () => {}}
                          color="default"
                        />
                      }
                    />
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum delectus eveniet explicabo quia, dolorem laboriosam reiciendis? Voluptatum ratione vitae, corrupti totam, ab architecto incidunt quam voluptates quo accusamus saepe accusantium!
                </Box>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius enim quia dolorem quidem ratione dolores. Quisquam omnis voluptate cupiditate, debitis aut ab, explicabo perferendis fugit magnam recusandae porro tempora atque.
            </Paper>
        
    </Container>
  )
}

export default Pruebas