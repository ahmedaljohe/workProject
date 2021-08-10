import React from 'react'
import {Form, Field} from 'react-final-form'
import {Container,TextField, Grid} from '@material-ui/core'
function Login() {
    const onSubmit = async (values) => {
        const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
        await sleep(300);
        window.alert(JSON.stringify(values, 0, 2));
      };
    return (
        <Container className="login-container">
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
                  <Field
                    fullWidth
                    name="user name"
                    component={TextField}
                    type="text"
                    label="Username"
                    variant="filled"
                  />
                  </Grid>
                  <Grid item xs={12}>
                  <Field 
                    fullWidth
                    name="user name"
                    component={TextField}
                    type="password"
                    label="password"
                    variant="filled"
                  />
                  </Grid>
                  </Grid>
                    </form>
              )}
            />
          </div>
        </Container>
    )
}

export default Login
