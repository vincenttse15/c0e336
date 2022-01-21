import React, { useState } from "react";
import { FormControl, FilledInput, IconButton, useTheme, Typography, Grid } from "@material-ui/core";
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import FileCopyOutlinedIcon from '@material-ui/icons/FileCopyOutlined';
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { postMessage, cloudinaryUpload } from "../../store/utils/thunkCreators";

const useStyles = makeStyles((theme) => ({
  root: {
    justifySelf: "flex-end",
    marginTop: 15,
    position: "relative",
  },
  input: {
    height: 70,
    backgroundColor: "#F4F6FA",
    borderRadius: 8,
    marginBottom: 20,
    paddingRight: theme.spacing(7),
  },
  uploadBtn: {
    position: "absolute",
    right: "1%",
    top: "13%",
  },
  selectedImagesContainer: {
    overflow: "auto",
    backgroundColor: "#F4F6FA",
    borderRadius: 8,
    padding: theme.spacing(1, 1),
    marginTop: 15,
    "&::-webkit-scrollbar": {
      height: "6px",
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: "gray",
      borderRadius: 8,
    }
  },
  fileName: {
    whiteSpace: "nowrap",
  },
  selectedImageContainer: {
    width: "auto",
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

    // do not let users send messages that contain only whitespace
    if (event.target.text.value.trim().length === 0 && files.length === 0) {
      setText("");
      return;
    }

    if (files.length > 0) {
      setIsUploading(true);
      await uploadToCloudinary(urlArray);
      setFiles([]);
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
    for (const file of event.target.files) {
      setFiles(prevFiles => [...prevFiles, file]);
    }
  }

  const uploadToCloudinary = async (urlArray) => {
    const promises = [];

    for (const file of files) {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET);

      cloudinaryUpload(formData, promises);
    }

    const responseArray = await Promise.all(promises);
    responseArray.forEach((response) => {
      urlArray.push(response.data.secure_url);
    });
  };

  const deleteSelectedFile = (index) => {
    setFiles(prevFiles => prevFiles.filter((file, i) => index !== i));
  };

  return (
    <Grid container direction="column">
      {files.length > 0 && (
        <Grid container item direction="row" className={classes.selectedImagesContainer} wrap="nowrap">
          {files.map((file, index) => (
            <Grid container className={classes.selectedImageContainer} item direction="row" alignItems="center" key={file.name + index} wrap="nowrap">
              <Grid item>
                <Typography className={classes.fileName}>{file.name}</Typography>
              </Grid>
              <Grid item>
                <IconButton color="secondary" onClick={(e) => deleteSelectedFile(index)}>
                  <DeleteOutlineIcon />
                </IconButton>
              </Grid>
            </Grid>
          ))}
        </Grid>
      )}
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
    </Grid>
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
