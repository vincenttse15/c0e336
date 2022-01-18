import React from "react";
import { senderUseStyles } from "./SenderStyles";
import { otherUserUseStyles } from "./OtherUserStyles";
import { Box, Typography } from "@material-ui/core";

export const MessageTypes = (props) => {
  const { text, attachments, sender } = props;
  const classes = sender ? senderUseStyles() : otherUserUseStyles();

  // only attachments
  if (attachments && text.length === 0) {
    return (
      <Box className={classes.imageContainer}>
        {attachments &&
          attachments.map((image) => {
            return (
              <img src={image} alt="attachment" key={image} className={`${classes.image} ${classes.singleBorder}`} />
            )
          })}
      </Box>
    );
  // attachments with text
  } else if (attachments && text.length > 0) {
    return (
      <>
        <Box className={classes.imageContainer}>
          {attachments &&
            attachments.map((image) => {
              return (
                <img src={image} alt="attachment" key={image} className={`${classes.image} ${classes.imageAccompanyBorder}`} />
              )
            })}
        </Box>
        <Box className={`${classes.bubble} ${classes.textAccompanyBorder}`}>
          <Typography className={classes.text}>{text}</Typography>
        </Box>
      </>
    )
  // only text
  } else {
    return (
      <Box className={`${classes.bubble} ${classes.singleBorder}`}>
        <Typography className={classes.text}>{text}</Typography>
      </Box>
    );
  }
}

export default MessageTypes;