// import React from 'react'
// import { MuiThemeProvider } from '@material-ui/core/styles'
// import { lightTheme, darkTheme } from '../../helpers/theme';

// export const ThemeContext = React.createContext();

// export const ThemeProvider = ({ children }) => {
//   const [theme, setTheme] = React.useState('light');
//   return (
//     <MuiThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
//       <ThemeContext.Provider
//         value={{
//           theme,
//           themeToggler: () => setTheme(theme === 'light' ? 'dark' : 'light'),
//         }}
//       >
//       {children}
//       </ThemeContext.Provider>
//     </MuiThemeProvider>
//   )
// }

// export const useTheme = () => React.useContext(ThemeContext);