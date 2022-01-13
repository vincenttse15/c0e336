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
    padding: '30px 42px',
  },
  topRightContainer: {
    height: '10%',
    flexDirection: 'row',
  },
  bottomRightContainer: {
    height: '90%',
  },
  label: {
    color: '#B0B0B0',
    fontSize: '14px',
    alignSelf: 'center',
  },
  createAccountBtn: {
    boxShadow: '0px 2px 12px rgba(74, 106, 149, 0.2)',
    borderRadius: '5px',
    color: '#3A8DFF',
    height: '54px',
    width: '170px',
    marginLeft: '30px',
  },
  welcome: {
    color: '#000000',
    fontWeight: '600',
    fontSize: '26px',
  },
  formContainer: {
    padding: '5vw 5vw',
  },
  loginBtn: {
    backgroundColor: '#3A8DFF',
    borderRadius: '3px',
    width: '160px',
    height: '56px',
    color: '#FFFFFF',
    textAlign: 'center',
    marginTop: '50px',
  },
  '@media (max-width: 900px)': {
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
    createAccountBtn: {
      marginLeft: '0px',
      marginTop: '30px',
    },
    formContainer: {
      padding: '8vw 2vw',
    },
    welcomeContainer: {
      alignSelf: 'center',
    },
  }
}));

export function InputTextField(props) {
  return <TextField
    InputLabelProps={{
      style: {
        color: '#B0B0B0',
      }
    }}
    {...props} />;
}
