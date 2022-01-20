import { makeStyles } from "@material-ui/core/styles";

export const senderUseStyles = makeStyles((props) => ({
  imageContainer: {
    justifyContent: "flex-end",
  },
  text: {
    color: "#91A3C0",
  },
  bubble: {
    background: "#F4F6FA",
    borderRadius: props => (props.attachments && props.attachments.length > 1) ||
      (props.attachments === null) ?
      "10px 10px 0px 10px" : "0px 0px 0px 10px",
  },
  image: {
    borderRadius: props => (props.attachments) && (
      (props.attachments.length > 1 && props.text.length >= 0) ||
      (props.attachments.length === 1 && props.text.length === 0)) ?
      "10px 10px 0px 10px" : "10px 10px 0px 0px",
  }
})); 