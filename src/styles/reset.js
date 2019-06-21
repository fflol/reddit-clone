import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'
import { mainBackground } from './mixins'


export const GlobalStyle = createGlobalStyle`
  ${reset}
  body {
    background: ${mainBackground};
    line-height: 1;
    font-size: 14px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  }
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace;
  }
`
