// import { createMuiTheme } from '@material-ui/core/styles';

// const shared = {

// }

// export const lightTheme = createMuiTheme({
//   palette: {
//     type: 'light',
//     colors: {
//       text: 'red',
//     }
//   }
// });

// export const darkTheme = createMuiTheme({
//   palette: {
//     type: 'dark',
//     colors: {
//       text: 'blue',
//     }
//   },
//   ...shared,
//   overrides: {
//     MuiPaper: {
//       root: {
//         backgroundColor: '#ddd',
//         borderRadius: 0,
//       }
//     }

//   }
// });

import {createMuiTheme} from '@material-ui/core/styles'

export const loginTheme = createMuiTheme({
overrides:{
    MuiPaper:{
      root:{
        backgroundColor: "#f5f6fa",
        minHeight:'100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: "center",
      }
    },
}
})

// export const lightTheme=createMuiTheme({
//   ...shared,
//   palette:{
//     type:'light',
//     primary: {
//       main: '#fff',
//     },
//   }
// })