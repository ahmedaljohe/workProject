import React from 'react';
import {Form} from 'react-final-form';
import TextInput from '../../components/globals/atoms/TextIput';
import {Paper,Grid,Button } from '@material-ui/core';
import { Link } from "react-router-dom";
// import { Icon } from 'react-icons-kit'
// import { user } from 'react-icons-kit/icomoon/user'
// import { paste } from 'react-icons-kit/icomoon/paste'
// import { MuiThemeProvider } from '@material-ui/core/styles'
// import {loginTheme} from '../../helpers/theme'
// import { useTheme } from '../../components/hooks/useTheme';
import { useStyle } from './Login.styles';

function Login() {
  // const { themeToggler } = useTheme();
  const classes = useStyle()

    const onSubmit = async (values) => {
        const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
        await sleep(300);
        window.alert(JSON.stringify(values, 0, 2));
      };
    return (
        <Paper className={classes.root} >
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
                  <Grid 
                   container
                   item xs={12}
                   direction="row"
                   justifyContent="flex-end"
                  >
                    <Link to='/Signin'>sign in</Link>
                  <Button style={{marginTop:8}} variant="contained" color="primary">
                    Login
                  </Button>
                  </Grid>
                </form>
              )}
            />
          </div>
        </Paper>
    )
}

export default Login
