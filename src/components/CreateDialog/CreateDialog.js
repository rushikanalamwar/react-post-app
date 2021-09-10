import React, { useState } from 'react'
import { Button, Dialog, DialogContent, DialogTitle, Divider, InputBase } from '@material-ui/core'
import { useDispatch } from 'react-redux';
import { replyToComment } from 'actions';

function CreateDialog(props) {
    const { open, onClose, data } = props;
    const [value, setValue] = useState('');
    const dispatch = useDispatch()
    const handleChange = e => setValue(e.target.value);
    const handleSubmit = () => {
        dispatch(replyToComment({ comment: value }, data._id));
        setValue('')
        onClose()
    }
    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle style={{ padding: 6, paddingLeft: 12 }}>Reply to comment</DialogTitle>
            <DialogContent>
                <InputBase value={value} fullWidth onChange={handleChange} style={{ marginBottom: 12, border: '1px solid lightgray', paddingLeft: 8 }} placeholder="Start typing..." />
                <Button onClick={handleSubmit} fullWidth variant="contained" color="primary">Post</Button>
            </DialogContent>
        </Dialog>
    )
}

export default CreateDialog
