import { createTheme } from "@mui/material/styles";


export const theme = createTheme({
    palette: {
        primary: {
          main: '#0a1929 ',
          dark: '#040c14 '
        },
        secondary: {
            main: '#515151 ',
          },
      },
    components:{
        MuiCard:{
            styleOverrides:{
                root:{
                    backgroundColor: "#515151",
                },
            }
        },
        MuiTab:{
            styleOverrides:{
                root:{
                    color: "040c14",
                }
            }
        }
    }
})