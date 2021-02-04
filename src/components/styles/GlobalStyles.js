import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
        font-family:'Encode Sans', sans-serif,-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
        Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    }

    body{
        width:100%;
        height:100%;
        overflow-x:hidden;
    }

`

export default GlobalStyle
