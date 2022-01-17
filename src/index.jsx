/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'theme-ui'
import theme from './theme'
import App from './app'
import './styles.css'

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <div sx={{ variant: 'styles.root' }}>
      <App />
    </div>
  </ThemeProvider>,
  document.getElementById('app')
)
