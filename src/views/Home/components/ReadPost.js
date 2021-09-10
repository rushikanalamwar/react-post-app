import React, { useEffect } from 'react'
import { Divider, makeStyles, Typography } from '@material-ui/core';
import { PostCard } from 'components';
import { useDispatch, useSelector } from 'react-redux';
import { getPost } from 'actions';

const useStyles = makeStyles(theme => ({
    root: {
        width: '95%',
        background: 'white',
        borderRadius: 8,
        padding: 12,
        margin: 'auto',
        marginTop: 12,
        height: 'calc(100vh - 110px)',
        overflowY: 'auto',
        [theme.breakpoints.down('xs')]: {
            width: 'calc(100% - 12px)',
            padding: 4,
            height: 'calc(100vh - 90px)',
            marginTop: 8
        }
    }
}))

function ReadPost() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const { post } = useSelector(state => state.post)
    useEffect(() => {
        dispatch(getPost())
    }, []);
    return (
        <div className={classes.root}>
            <Typography variant="h5">Available Posts</Typography>
            <Divider style={{ marginBottom: 8 }} />
            {
                post && post.map((item, i) => <PostCard {...item} key={i} />)
            }
        </div>
    )
}

export default ReadPost
