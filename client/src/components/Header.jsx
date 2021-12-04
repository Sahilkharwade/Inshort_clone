import React from 'react';
import { AppBar, Toolbar, makeStyles, Box } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles({
  header: {
    background: '#fff',
    height: 70,
  },
  logo: {
    height: 55,
    margin: 'auto',
    paddingRight: '70px',
  },
  menu: {
    color: '#000',
  },
});

export default function Header() {
  const classes = useStyles();
  const url =
    'https://assets.inshorts.com/website_assets/images/logo_inshorts.png';
  return (
    <AppBar className={classes.header}>
      <Toolbar>
        <MenuIcon className={classes.menu} />
        <img src={url} alt='logo' className={classes.logo} />
      </Toolbar>
    </AppBar>
  );
}
