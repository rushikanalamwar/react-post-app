import React, { useState } from 'react';
import { TreeItem } from '@material-ui/lab';
import { Chat, Edit, Delete, Send, Sms } from '@material-ui/icons';
import { Typography, makeStyles, Button, InputBase, IconButton, Collapse } from '@material-ui/core';
import CommentReply from 'components/CreateDialog';
import EditDialog from 'components/EditDialog';
import { deleteComment } from 'actions'
import { useDispatch } from 'react-redux';

const useStyles = makeStyles(theme=>({
  root: {
    display: '-webkit-flex',
    width: '100%',
    padding: 8,
    WebkitJustifyContent: 'space-between',
    
  },
  label: {
    marginRight: 12
  }
}))

function Test(props) {
    const classes = useStyles()
    const { label, child, data } = props;
    const dispatch = useDispatch()
    const [showEdit, setShowEdit] = useState(false);
    const [showReply, setShwoReply] = useState(false)

    const toggleShowEdit = () => setShowEdit(!showEdit);
    const toggleSetShowReply = () => setShwoReply(!showReply);
    return (
        <>
        <CommentReply open={showReply} onClose={toggleSetShowReply} data={data} />
        <EditDialog data={data} open={showEdit} onClose={toggleShowEdit} />
        <TreeItem style={{ marginBottom: 8}} nodeId={Math.random()} label={(
          <>
            <div className={classes.root}>
                <div style={{ display: '-webkit-flex'}}>
                  <Chat style={{ marginRight: 8 }} />
                  <Typography variant="subtitle1" className={classes.label}>{label}</Typography>
                </div>
                <div style={{ paddingRight: 12 }}>
                  <IconButton onClick={toggleShowEdit}><Edit fontSize="small" /></IconButton>
                  <IconButton onClick={() => dispatch(deleteComment(data._id))}><Delete fontSize="small" style={{ color: 'red'}} /></IconButton>
                  <IconButton onClick={toggleSetShowReply}><Sms fontSize="small" /></IconButton>
                </div>
            </div>
            </>
        )}>
            {child && child.map((item, i) => (
              <Test data={item} label={item.comment} key={i} child={item.comments}  />
            ))}
        </TreeItem>
        </>
    )
}

export default Test
