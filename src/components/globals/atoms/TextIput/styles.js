import { makeStyles } from '@material-ui/core/styles'

export const useStyle=makeStyles({
    root: {
  '& input-internal-autofill-selected ':{
   
    transition: 'background-color 5000s ease-in-out 0s',
    backgroundColor:'unset',
  },
    '& .MuiFilledInput-underline': {
        "&:before": {
          borderBottom: "none"
        },
        "&:after": {
          borderBottom: "none"
        }
      },
		'& label.Mui-focused': {
			color: '#c0c0c0',
		},
		'& .MuiFormLabel-root': {
			color: '#c0c0c0',
			fontSize: '16px'
    },
    '&MuiInputBase-formControl':{
      '&.Mui-focused': {
        transition:'background-color 5000s ease-in-out 0s',
        backgroundColor: '#fff',
      },
    },
		'& .MuiInputBase-input': {
            // Field Input Text,
			color: 'black',
			fontSize: '16px',
      textTransform: 'capitalize',
      backgroundColor: '#fff',
      borderRadius:4,
    },
        // Field Box Attributes
		'& .MuiFilledInput-root': {
      transition: 'background-color 200ms cubic-bezier(#ffff) 0ms',
			'& fieldset': {
                borderColor: '#FE6F27',
                background: '#fff',
			},
			'&:hover fieldset': {
        borderColor: '#ffffff',
			},
			'&.Mui-focused': {
        transition: 'unset',
        backgroundColor: '#fff',
      },
        },
        
  }
})