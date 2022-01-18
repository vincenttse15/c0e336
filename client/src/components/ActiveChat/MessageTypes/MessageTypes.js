import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { senderUseStyles } from "./SenderStyles";
import { otherUserUseStyles } from "./OtherUserStyles";
import { Box, Typography } from "@material-ui/core";

const sharedUseStyles = makeStyles(() => ({
  imageContainer: {
    display: "flex",
    flexDirection: "row",
    gap: "5px",
    flexWrap: "wrap",
    "& a": {
      display: "inline-block",
      width: "100px",
      height: "100px",
    }
  },
  text: {
    fontSize: 14,
    fontWeight: "bold",
    letterSpacing: -0.2,
    padding: 8
  },
  image: {
    objectFit: "cover",
    width: "100px",
    height: "100px",
  },
}));

export const MessageTypes = (props) => {
  const { text, attachments, sender } = props;
  const specificClasses = sender ? senderUseStyles() : otherUserUseStyles();
  const sharedClasses = sharedUseStyles();

  // only attachments
  if (attachments && text.length === 0) {
    return (
      <Box className={`${sharedClasses.imageContainer} ${specificClasses.imageContainer}`}>
        {attachments &&
          attachments.map((image) => {
            return (
              <a href={image} target="_blank" rel="noreferrer">
                <img src={image} alt="attachment" key={image} className={`${sharedClasses.image} ${specificClasses.singleBorder}`} />
              </a>
            )
          })}
      </Box>
    );
    // attachments with text
  } else if (attachments && text.length > 0) {
    return (
      <>
        <Box className={`${sharedClasses.imageContainer} ${specificClasses.imageContainer}`}>
          {attachments &&
            attachments.map((image) => {
              return (
                <a href={image} target="_blank" rel="noreferrer">
                  <img src={image} alt="attachment" key={image} className={`${sharedClasses.image} ${specificClasses.imageAccompanyBorder}`} />
                </a>
              )
            })}
        </Box>
        <Box className={`${specificClasses.bubble} ${specificClasses.textAccompanyBorder}`}>
          <Typography className={`${sharedClasses.text} ${specificClasses.text}`}>{text}</Typography>
        </Box>
      </>
    )
    // only text
  } else {
    return (
      <Box className={`${specificClasses.bubble} ${specificClasses.singleBorder}`}>
        <Typography className={`${sharedClasses.text} ${specificClasses.text}`}>{text}</Typography>
      </Box>
    );
  }
}

export default MessageTypes;