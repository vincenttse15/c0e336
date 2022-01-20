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
    borderRadius: props => (props.attachments && props.attachments.length > 1) ||
      (props.attachments === null) ?
      "0 10px 10px 10px" : "0px 0px 10px 0px",
  },
  image: {
    borderRadius: props => (props.attachments) && (
      (props.attachments.length > 1 && props.text.length >= 0) ||
      (props.attachments.length === 1 && props.text.length === 0)) ?
      "0 10px 10px 10px" : "0px 10px 0px 0px",
  },
})); 