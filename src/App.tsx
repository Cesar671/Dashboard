import React from 'react'
import { ColorModeContext, useMode, UseModeReturnType } from './scenes/theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import Topbar from './scenes/global/Topbar';
import Sidebar from './scenes/global/Sidebar';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './scenes/dashboard/Index';

/*import Dashboard from "./scenes/dashboard"
import Team from "./scenes/team"
import Invoices from "./scenes/invoices"
import Contacts from "./scenes/contacts"
import Bar from "./scenes/bar"
import Line from "./scenes/line"
import Form from "./scenes/form"
import Pie from "./scenes/pie"
import FAQ from "./scenes/faq"
import Geography from "./scenes/geography"
import Calendar from "./scenes/calendar"*/
 
const App:React.FC = () => {
  const [ theme, colorMode ]:UseModeReturnType = useMode();
  return (
    <ColorModeContext.Provider value={ colorMode }>
      <ThemeProvider theme={theme}>
        <CssBaseline />
          <div className='app'>
            <Sidebar></Sidebar>
            <main className='content' >
              <Topbar></Topbar>

              { /* SEARCH BAR */ }
              <Routes>
                <Route path= "/" element= { <Dashboard /> }/>
                {/*<Route path= "/team" element= { <Team /> }/>*/}
                {/*<Route path= "/invoices" element= { <Invoices /> }/>*/}
                {/*<Route path= "/contacts" element= { <Contacts /> }/>*/}
                {/*<Route path= "/bar" element= { <Bar /> }/>*/}
                {/*<Route path= "/line" element= { <Line /> }/>*/}
                {/*<Route path= "/form" element= { <Form /> }/>*/}
                {/*<Route path= "/pie" element= { <Pie /> }/>*/}
                {/*<Route path= "/faq" element= { <FAQ /> }/>*/}
                {/*<Route path= "/geography" element= { <Geography /> }/>*/}
              </Routes>
            </main>
          </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App;