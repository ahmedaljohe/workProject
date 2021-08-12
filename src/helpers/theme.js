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

 export const shared = createMuiTheme({
   palette:{
    colors:
   },
  overrides:{
    MuiPaper:{
      root:{
        backgroundColor:'#0f0',
        minHeight:'100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: "center",
      }
    }
  }
})

// export const lightTheme=createMuiTheme({
//   palette:{
//     type:'light',
//   }

// })