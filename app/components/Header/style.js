import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  rootImg: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  large: {
    width: theme.spacing(9),
    height: theme.spacing(9),
  },
  shape: {
    width: 40,
    height: 40,
  },
}));

export default useStyles;
