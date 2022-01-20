import { makeStyles } from "@material-ui/styles";
import { TextField } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  container: {
    height: '100vh',
    maxHeight: '100vh',
  },
  leftContainer: {
    width: '100%',
    height: '100%',
    position: 'relative',
    '&::after': {
      position: 'absolute',
      left: '0%',
      top: '0%',
      width: '100%',
      height: '100%',
      background: 'linear-gradient(180deg, #3A8DFF 0%, #86B9FF 100%)',
      content: '""',
      opacity: 0.85,
      zIndex: 1,
    },
    zIndex: 100,
  },
  backgroundImage: {
    objectFit: 'cover',
    height: '100%',
    width: '100%',
    objectPosition: '50% 2%',
  },
  iconTextContainer: {
    position: 'absolute',
    top: '30%',
    zIndex: 2,
    color: '#FFFFFF',
    textAlign: 'center',
  },
  bubbleIcon: {
    width: '66px',
    alignSelf: 'center',
  },
  description: {
    fontSize: '26px',
    lineHeight: '40px',
    width: '300px',
  },
  rightContainer: {
    width: '100%',
    height: '100%',
    padding: theme.spacing(3, 5),
  },
  topRightContainer: {
    height: '10%',
    flexDirection: 'row',
  },
  bottomRightContainer: {
    height: '90%',
  },
  label: {
    fontSize: '14px',
    alignSelf: 'center',
  },
  topRightBtn: {
    boxShadow: '0px 2px 12px rgba(74, 106, 149, 0.2)',
    borderRadius: '5px',
    height: '54px',
    width: '170px',
    marginLeft: theme.spacing(3),
    color: theme.palette.primary.main,
  },
  signupFormContainer: {
    padding: '5vh 5vw',
  },
  loginFormContainer : {
    padding: '10vh 5vw',
  },
  submitBtn: {
    borderRadius: '3px',
    width: '160px',
    height: '56px',
    textAlign: 'center',
    marginTop: theme.spacing(6),
  },
  textFieldContainer: {
    width: '100%',
    marginLeft: theme.spacing(0.5),
  },
  error: {
    color: 'red',
    marginLeft: theme.spacing(0.5), 
  },
  '@media (max-width: 899px)': {
    leftContainer: {
      display: 'none',
    },
  },
  '@media (max-width: 600px)': {
    topRightContainer: {
      justifyContent: 'flex-start',
      flexDirection: 'column',
      height: '20%',
    },
    bottomRightContainer: {
      height: '80%',
    },
    topRightBtn: {
      marginLeft: '0px',
      marginTop: theme.spacing(3),
    },
    signupFormContainer: {
      padding: '5vh 2vw',
    },
    loginFormContainer: {
      padding: '8vh 2vw',
    },
    welcomeContainer: {
      alignSelf: 'center',
    },
  },
  '@media (max-width: 320px)' : {
    rightContainer: {
      padding: theme.spacing(4, 2),
    },
  },
}));

export function InputTextField(props) {
  return <TextField
    InputLabelProps={{
      color: 'secondary',
    }}
    {...props} />;
}
