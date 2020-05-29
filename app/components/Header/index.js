import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ListItemText from '@material-ui/core/ListItemText';
import useStyles from './style';

function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Toolbar>
        <IconButton 
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
        >
          <div className={classes.rootImg}>
            <img
              alt="Gerardo Huizar"
              src="https://img2.freepng.es/20180603/rth/kisspng-reddit-computer-icons-youtube-give-me-5b13f72a0d5eb9.5486290715280351140548.jpg"
              className={classes.large}
            />
          </div>
        </IconButton>
        <ListItemText
          primary={
            <Typography variant="h6" gutterBottom>
              Eng. Gerardo G'Huizar
            </Typography>
          }
          secondary="Software Developer"
        />
      </Toolbar>
    </div>
  );
}

export default Header;
