import React, { useState } from 'react';
import { Collapse, Grid, IconButton, InputBase, makeStyles, Typography } from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { Chat, ArrowRight, ArrowDropDown, Send } from '@material-ui/icons';
import clsx from 'clsx';
import Comments from 'components/Comments';
import {TreeView} from '@material-ui/lab'
import { useDispatch } from 'react-redux';
import { createComment } from 'actions';

const useStyles = makeStyles(theme => ({
    root: {
        width: '97%',
        padding: 12,
        borderRadius: 8,
        margin: 'auto',
        '&:hover': { boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px'},
        display: '-webkit-flex',
        marginBottom: 12,
        transition: '0.3s',
        [theme.breakpoints.down('sm')]: { width: '100%', padding: 6 }
    },
    smallPadding: {
        padding: 8,
        [theme.breakpoints.down('xs')]: { padding: 3 }
    },
    textContainer: {
        textAlign: 'justify'
    }
}))

function PostCard(props) {
    const { comment } = props
    const classes = useStyles();
    const [collapse, setCollpase] = useState(false);
    const [value, setValue] = useState('');
    const dispatch = useDispatch()

    const handleChange = e => setValue(e.target.value);
    const toggleCollapse = () => setCollpase(!collapse);
    const handleSubmit = () => {
        dispatch(createComment({ comment: value }, {...props}))
        setValue('')
        setCollpase(false)
    }
    return (
        <Grid container className={classes.root}>
            <Grid item md={1} xs={1} sm={1} className={classes.smallPadding}><AccountCircle fontSize="medium" /></Grid>
            <Grid item md={9} sm={9} xs={9} className={clsx(classes.smallPadding, classes.textContainer)}>
                <Typography variant="subtitle1">{props.postTitle}</Typography>
            </Grid>
            <Grid item md={2} sm={2} xs={2} style={{ textAlign: 'right'}}>
                <IconButton onClick={toggleCollapse}>
                    <Chat />
                </IconButton>
            </Grid>
            <Collapse in={collapse} style={{ width: '100%'}}>
                <TreeView
                    defaultCollapseIcon={<ArrowDropDown />}
                    defaultExpandIcon={<ArrowRight />}
                    defaultEndIcon={<div style={{ width: 24 }} />}
                    >
                        {comment && comment.map((item, i) => (
                        <Comments key={i} data={item} label={item.comment} child={item.comments}  />))}
                </TreeView>
                <div style={{ display: '-webkit-flex', width: '100%', border: '1px solid lightgray', WebkitJustifyContent: 'space-between'}}>
                    <InputBase value={value} style={{ width: '90%', paddingLeft: 12 }} onChange={handleChange} placeholder="type comment..." />
                    <IconButton style={{ width: '10%', maxWidth: 40, maxHeight: 40 }} onClick={handleSubmit}><Send /></IconButton>
                </div>
            </Collapse>
        </Grid>
    )
}

export default PostCard
