import React from 'react'
import { Field } from 'react-final-form'
import { TextField } from '@material-ui/core'
import {useStyle} from './styles'

function TextInput({ name, validate, ...props}) {
  const classes=useStyle();
  return (
    <Field name={name} validate={validate} >
      {({input,meta})=>(
        <TextField
          {...props}
          {...input}
          className={classes.root}
          error={meta.error && meta.touched}
          errorMessage={meta.error}
        />
      )}
    </Field>
  )
}

export default TextInput
