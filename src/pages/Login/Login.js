import React from 'react'
import {Form} from 'react-final-form'
import TextInput from '../../components/globals/atoms/TextInput'
import {Paper,Grid,InputAdornment,Button } from '@material-ui/core'
// import { Icon } from 'react-icons-kit'
// import { user } from 'react-icons-kit/icomoon/user'
// import { paste } from 'react-icons-kit/icomoon/paste'
import { MuiThemeProvider } from '@material-ui/core/styles'
import {shared} from '../../helpers/theme'
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
      <MuiThemeProvider theme={shared}>
        <Paper >
          <div className="login-content">
            <h1>hello user</h1>
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
                  <Button type='submit'>ghfghfgh</Button>
                </form>
              )}
            />
          </div>
        </Paper>
        </MuiThemeProvider>
    )
}

export default Login
