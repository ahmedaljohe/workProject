import React from 'react'
import {Form} from 'react-final-form'
import TextInput from '../../components/globals/atoms/TextInput'
import {Paper,Grid,Button } from '@material-ui/core'
// import { Icon } from 'react-icons-kit'
// import { user } from 'react-icons-kit/icomoon/user'
// import { paste } from 'react-icons-kit/icomoon/paste'
import { MuiThemeProvider } from '@material-ui/core/styles'
import {loginTheme} from '../../helpers/theme'
// import { useTheme } from '../../components/hooks/useTheme';
// import { useStyle } from './Login.styles';

function Login() {
  // const { themeToggler } = useTheme();
  // const classes = useStyle()

    const onSubmit = async (values) => {
        const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
        await sleep(300);
        window.alert(JSON.stringify(values, 0, 2));
      };
    return (
      <MuiThemeProvider theme={loginTheme}>
        <Paper >
          <div className="login-content">
            <h2>login</h2>
            <Form
              onSubmit={onSubmit}
              render={({handleSubmit})=>(
                <form onSubmit={handleSubmit}>
                  <Grid
                    container
                    direction="column"
                    spacing={2}
                  >
                  <Grid item xs={12}>
                  <TextInput
                    fullWidth
                    className="MuiFilledInput-input"
                    name="name"
                    // InputProps={{
                    //   startAdornment:<InputAdornment position="end"><Icon icon={user} /></InputAdornment>
                    // }}
                    type="text"
                    label="Username"
                    variant="filled"
                  />
                  </Grid>
                  <Grid item xs={12}>
                  <TextInput
                    fullWidth
                    name="password"
                    type="password"
                    label="password"
                    // InputProps={{
                    //   endAdornment:<InputAdornment position="end"><Icon icon={paste} /></InputAdornment>
                    // }}  
                    variant="filled"
                  />
                  </Grid>
                  </Grid>
                  <Grid item xs={12}>
                  <Button style={{marginTop:8}} variant="contained" color="primary">
                    Login
                  </Button>
                  <span style={{marginInlineStart:8}}>sighin</span>
                  </Grid>
                </form>
              )}
            />
          </div>
        </Paper>
        </MuiThemeProvider>
    )
}

export default Login
