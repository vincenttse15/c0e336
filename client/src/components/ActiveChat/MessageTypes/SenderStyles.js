import { makeStyles } from "@material-ui/core/styles";

export const senderUseStyles = makeStyles(() => ({
  imageContainer: {
    justifyContent: "flex-end",
  },
  text: {
    color: "#91A3C0",
  },
  bubble: {
    background: "#F4F6FA",
  },
  singleBorder: {
    borderRadius: "10px 10px 0 10px",
  },
  textAccompanyBorder: {
    borderRadius: "0px 0px 0px 10px",
  },
  imageAccompanyBorder: {
    borderRadius: "10px 10px 0px 0px",
  },
})); 