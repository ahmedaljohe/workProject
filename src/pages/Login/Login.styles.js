import { makeStyles } from '@material-ui/core/styles'

export const useStyle = makeStyles({
  root:{
    backgroundColor: "#f5f6fa",
    minHeight:'100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: "center",
    borderRadius:0,
  },
  h2:{
    color: '#01a3ff',
    fontFamily:'Courier New',
    textAlign:'center',
    height: 60
  },
  button:{
    marginTop:8,
    textTransform: 'capitalize',
    minWidth: 140,
    borderRadius: 10,
    backgroundColor: '#01a3ff',
    marginInlineStart:8,
  },
  span:{
    color: '#01a3ff',
    fontFamily:'Courier New',
    fontSize:16,
    cursor:'pointer',
    marginInlineStart:10
  }
})
