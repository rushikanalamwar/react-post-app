import React, { useState } from 'react';
import { Button, InputBase, makeStyles, Typography } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { createPost } from 'actions';

const useStyles = makeStyles(theme => ({
    root: {
        width: '95%',
        background: 'white',
        borderRadius: 8,
        padding: 12,
        margin: 'auto',
        marginTop: 12,
        [theme.breakpoints.down('sm')]: { width: 'calc(400px - 12px)' },
        [theme.breakpoints.down('xs')]: { width: 'calc(100% - 12px)'},
    }
}))

function CreatePost() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [value, setValue] = useState();
    const handleChange = e => setValue(e.target.value);
    const handleSubmit = () => {
        setValue('')
        dispatch(createPost({ postTitle: value, description: '' }))
    }
    return (
        <div className={classes.root}>
            <Typography variant="h5">Create Post</Typography>
            <InputBase
                fullWidth
                placeholder="Start typing..."
                multiline
                value={value}
                onChange={handleChange}
                style={{
                    border: '1px solid rgb(231, 231, 231)',
                    padding: 6,
                    marginBottom: 8,
                    borderRadius: 4,
                    marginTop: 8
                }}
                rows={4}
            />
            <Button fullWidth onClick={handleSubmit} variant="contained" color="primary">Post</Button>
        </div>
    )
}

export default CreatePost
