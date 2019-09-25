import { makeStyles } from '@material-ui/core/styles';

const useModalStyles = makeStyles(theme => ({
  paper: {
    position: 'absolute',
    width: '100%',
    maxWidth: 580,
    height: '100%',
    maxHeight: 600,
    outline: 0,
    backgroundColor: theme.palette.background.paper,
    // border: '1px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  button: { margin: '1rem 0 0 1rem', float: 'right' },
  inputField: {
    marginTop: '1rem',
    width: '100%',
  },
  label: { color: `${theme.teal500} !important` },
  error: { color: 'red', margin: '0.5rem 0', display: 'inline-block' },
  closeIcon: {
    position: 'absolute',
    top: 10,
    right: 15,
    cursor: 'pointer',
    // borderRadius: '50%',
    // boxShadow: '0px 0px 5px grey',
    // border: '2px solid #a7a7a7',
  }
}));

export default useModalStyles;