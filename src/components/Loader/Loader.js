import React from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

export default function SimpleBackdrop() {
  const classes = useStyles();
  const {loading, msg } = useSelector(state => state.loading)
  console.log(loading)
  return (
      <Backdrop className={classes.backdrop} open={loading}>
        <div>
          <CircularProgress color="inherit" />
          <Typography variant="h6">{msg}</Typography>
        </div>
      </Backdrop>
  );
}
