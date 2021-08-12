import React from 'react'
import { Field } from 'react-final-form'
import { TextField } from '@material-ui/core'
function TextInput({ name, validate, ...props}) {
  return (
    <Field name={name} validate={validate} >
      {({input,meta})=>(
        <TextField
          {...props}
          {...input}
          error={meta.error && meta.touched}
          errorMessage={meta.error}
        />
      )}
    </Field>
  )
}

export default TextInput
