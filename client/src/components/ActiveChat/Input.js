import React, { useState } from "react";
import { FormControl, FilledInput, IconButton, useTheme } from "@material-ui/core";
import FileCopyOutlinedIcon from '@mui/icons-material/FileCopyOutlined';
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { postMessage } from "../../store/utils/thunkCreators";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    justifySelf: "flex-end",
    marginTop: 15,
    position: 'relative',
  },
  input: {
    height: 70,
    backgroundColor: "#F4F6FA",
    borderRadius: 8,
    marginBottom: 20,
    paddingRight: theme.spacing(7),
  },
  uploadBtn: {
    position: 'absolute',
    right: '1%',
    top: '13%',
  },
}));

const Input = (props) => {
  const theme = useTheme();
  const classes = useStyles(theme);
  const [text, setText] = useState("");
  const [files, setFiles] = useState([]);
  const [isUploading, setIsUploading] = useState(false);
  const { postMessage, otherUser, conversationId, user } = props;

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const urlArray = [];

    if (files.length > 0) {
      setIsUploading(true);
      await uploadToCloudinary(urlArray);
      setIsUploading(false);
    }
    // add sender user info if posting to a brand new convo, so that the other user will have access to username, profile pic, etc.
    const reqBody = {
      text: event.target.text.value,
      recipientId: otherUser.id,
      conversationId,
      sender: conversationId ? null : user,
      attachments: urlArray.length > 0 ? urlArray : null,
    };
    await postMessage(reqBody);
    setText("");
  };

  const handleFileChange = (event) => {
    setFiles(event.target.files);
  }

  const uploadToCloudinary = async (urlArray) => {
    for (const file of files) {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "hatchways");

      try {
        const { data } = await axios.post("https://api.cloudinary.com/v1_1/drlylnzt8/image/upload", formData);
        urlArray.push(data.secure_url);
      } catch (error) {
        console.log(error);
        return;
      }
    }
  };

  return (
    <form className={classes.root} onSubmit={handleSubmit}>
      <FormControl fullWidth hiddenLabel>
        <FilledInput
          classes={{ root: classes.input }}
          disableUnderline
          placeholder="Type something..."
          value={text}
          name="text"
          onChange={handleTextChange}
          disabled={isUploading}
        />
      </FormControl>
      <IconButton color="secondary" className={classes.uploadBtn} component="label">
        <FileCopyOutlinedIcon />
        <input
          type="file"
          hidden
          accept="image/*"
          multiple
          onChange={handleFileChange}
          disabled={isUploading}
        />
      </IconButton>
    </form>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    postMessage: (message) => {
      dispatch(postMessage(message));
    },
  };
};

export default connect(null, mapDispatchToProps)(Input);
