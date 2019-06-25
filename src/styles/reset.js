import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'
import * as mixins from './mixins'


export const GlobalStyle = createGlobalStyle`
  ${reset}
  body {
    background: ${mixins.colorMainBackground};
    line-height: 1;
    font-size: ${mixins.fontsizeMedium};
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace;
  }

  .btn:focus,
  .btn-primary:hover, 
  .btn-primary:focus, 
  .btn-primary:active,
  .btn-primary:not(:disabled):not(.disabled):active:focus,
  .btn-outline-primary:not(:disabled):not(.disabled):active:focus {
    outline: 0;
    outline-offset: 0;
    box-shadow: none;
  }

`
