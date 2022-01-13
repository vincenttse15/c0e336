import React from "react";
import {
  Grid,
  Typography,
  useTheme
} from "@material-ui/core";
import backgroundImage from '../../assets/bg-img.png';
import bubble from '../../assets/bubble.svg';
import { useStyles } from "../SharedStyles/LoginSignupStyles";

const Banner = () => {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <Grid container item md={4} className={classes.leftContainer} justifyContent="center">
      <img src={backgroundImage} alt="" className={classes.backgroundImage} />
      <Grid container item className={classes.iconTextContainer} direction="column" alignContent="center" xs={12} spacing={5}>
        <Grid item>
          <img src={bubble} alt="" className={classes.bubbleIcon} />
        </Grid>
        <Grid item>
          <Typography className={classes.description}>
            Converse with anyone with any language
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Banner;