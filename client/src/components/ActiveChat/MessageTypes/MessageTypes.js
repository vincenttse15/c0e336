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
  bubbleMargin: {
    marginBottom: 8,
  },
}));

export const MessageTypes = (props) => {
  const { text, attachments, sender } = props;
  const specificClasses = sender ? senderUseStyles() : otherUserUseStyles();
  const sharedClasses = sharedUseStyles();

  const Image = () =>
    <Box className={`${sharedClasses.imageContainer} ${specificClasses.imageContainer}`}>
      {attachments &&
        attachments.map((image) => {
          return (
            <a href={image} target="_blank" rel="noreferrer">
              <img
                src={image}
                alt="attachment" key={image}
                className={`${sharedClasses.image} 
                            ${(attachments.length > 1 && text.length >= 0) || (attachments.length === 1 && text.length === 0) ? `${specificClasses.singleBorder}` : ""}
                            ${attachments.length === 1 && text.length > 0 ? `${specificClasses.imageAccompanyBorder}` : ""}
                          `}
              />
            </a>
          )
        })}
    </Box>

  const Text = () =>
    <Box className={`${specificClasses.bubble} 
                     ${attachments && attachments.length === 1 ? `${specificClasses.textAccompanyBorder}` : `${specificClasses.singleBorder}`} 
                     ${attachments && attachments.length > 1 ? `${sharedClasses.bubbleMargin}` : ""}`}>
      <Typography className={`${sharedClasses.text} ${specificClasses.text}`}>{text}</Typography>
    </Box>

  // only attachments
  if (attachments && text.length === 0) {
    return (
      <Image />
    );
    // attachments with text
  } else if (attachments && text.length > 0) {
    return (
      <>
        {attachments.length > 1 ? (
          <>
            <Text />
            <Image />
          </>
        ) : (
          <>
            <Image />
            <Text />
          </>
        )}
      </>
    )
    // only text
  } else {
    return (
      <Text />
    );
  }
}

export default MessageTypes;