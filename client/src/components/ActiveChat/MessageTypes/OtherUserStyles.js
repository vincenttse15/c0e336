import { makeStyles } from "@material-ui/core/styles";

export const otherUserUseStyles = makeStyles(() => ({
  imageContainer: {
    justifyContent: "flex-start", 
  },
  text: {
    color: "#FFFFFF",
  },
  bubble: {
    backgroundImage: "linear-gradient(225deg, #6CC1FF 0%, #3A8DFF 100%)",
    display: 'inline-block',
  },
  singleBorder: {
    borderRadius: "0 10px 10px 10px",
  },
  textAccompanyBorder: {
    borderRadius: "0px 0px 10px 0px",
  },
  imageAccompanyBorder: {
    borderRadius: "0px 10px 0px 0px",
  },
})); 