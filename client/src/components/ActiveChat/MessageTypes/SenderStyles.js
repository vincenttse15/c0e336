import { makeStyles } from "@material-ui/core/styles";

export const senderUseStyles = makeStyles(() => ({
  imageContainer: {
    display: "flex",
    flexDirection: "row",
    gap: "5px",
    flexWrap: "wrap",
  },
  text: {
    fontSize: 14,
    color: "#91A3C0",
    letterSpacing: -0.2,
    padding: 8,
    fontWeight: "bold",
  },
  bubble: {
    background: "#F4F6FA",
  },
  image: {
    objectFit: "cover",
    width: "100px",
    height: "100px",
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