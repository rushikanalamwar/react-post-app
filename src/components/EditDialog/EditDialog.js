import React, { useEffect, useState } from 'react'
import { Button, Dialog, DialogContent, DialogTitle, Divider, InputBase } from '@material-ui/core'
import { useDispatch } from 'react-redux';
import { updateComment } from 'actions';

function EditDialog(props) {
    const { open, onClose, data } = props;
    const dispatch = useDispatch();
    const [value, setValue] = useState('');

    const handleChange = e => setValue(e.target.value);
    const handleSubmit = () => {
        dispatch(updateComment({ comment: value, id: data._id }));
        setValue('')
        onClose();
    }

    useEffect(() => {
        setValue(data.comment)
    },[]);
    
    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle style={{ padding: 6, paddingLeft: 12 }}>Edit comment</DialogTitle>
            <DialogContent>
                <InputBase value={value} fullWidth onChange={handleChange} style={{ marginBottom: 12, border: '1px solid lightgray', paddingLeft: 8 }} placeholder="Start typing..." />
                <Button onClick={handleSubmit} fullWidth variant="contained" color="primary">Post</Button>
            </DialogContent>
        </Dialog>
    )
}

export default EditDialog
