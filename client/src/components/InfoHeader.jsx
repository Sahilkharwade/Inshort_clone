import React from 'react'
import {Box,Typography,makeStyles} from '@material-ui/core'

const useStyles =makeStyles({
  container: {
    background: '#f44336',
    color: '#FFFFFF',
    height: 48,
    display: 'flex',
    alignItems: 'center'
  },
  text: {
    fontSize:14,
    marginLeft: 50,
    fontWeight:300
    
  },
  logo: {
    height: 34,
    '&:last-child': {
        margin: '0 60px  0 20px'
    }
},
})

export default function InfoHeader() {
  const classess = useStyles()
  const appleStore = 'https://assets.inshorts.com/website_assets/images/appstore.png';
  const googleStore = 'https://assets.inshorts.com/website_assets/images/playstore.png';

  return (
    <Box className={classess.container} >
      <Typography className={classess.text}>
      For the best experience use <b>inshorts</b> app on your smartphone
      </Typography>
      <Box style={{marginLeft: 'auto'}}>
                <img src={appleStore} alt="apple store"  className={classess.logo} />
                <img src={googleStore} alt="google store"  className={classess.logo}  />
            </Box>
    </Box>
  )
}
