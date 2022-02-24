import './index.css'
import Routers from 'routers'
import { StrictMode } from 'react'
import { render } from 'react-dom'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter } from 'react-router-dom'
import CssBaseline from '@mui/material/CssBaseline'
import { QueryClient, QueryClientProvider } from 'react-query'
import { createTheme, ThemeProvider } from '@mui/material/styles'

const queryClient = new QueryClient()
const theme = createTheme({ typography: { button: { textTransform: 'none' } } })

render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routers />
        </BrowserRouter>
        <CssBaseline />
      </ThemeProvider>
    </QueryClientProvider>
  </StrictMode>,
  document.getElementById('root'),
)

reportWebVitals()
