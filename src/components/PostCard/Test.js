import React from 'react';
import { TreeItem } from '@material-ui/lab';
import { Chat } from '@material-ui/icons';
import { Typography } from '@material-ui/core';

function Test(props) {
    const { label, child } = props;
    return (
        <TreeItem nodeId={Math.random()} label={(
            <div style={{ display: '-webkit-flex'}}>
                <Chat style={{ marginRight: 8 }} />
                <Typography variant="subtitle1">{label}</Typography>
            </div>
        )}>
            {child && <Test label={child.label} child={child.child}  />}
        </TreeItem>
    )
}

export default Test
