import { makeStyles } from "@material-ui/core/styles";

export const otherUserUseStyles = makeStyles(() => ({
  imageContainer: {
    display: "flex",
    flexDirection: "row",
    gap: "5px",
    flexWrap: "wrap",
  },
  text: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#FFFFFF",
    letterSpacing: -0.2,
    padding: 8
  },
  bubble: {
    backgroundImage: "linear-gradient(225deg, #6CC1FF 0%, #3A8DFF 100%)",
    display: 'inline-block',
  },
  image: {
    objectFit: "cover",
    width: "100px",
    height: "100px",
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