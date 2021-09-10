import React from 'react'
import { Typography, makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    root: {
        width: '100%',
        height: 'calc(100vh - 80px)',
        display: '-webkit-flex',
        WebkitFlexDirection: 'column',
        WebkitJustifyContent: 'center'
    },
    title: {
        fontWeight: 600,
        textAlign: 'center',
        color: 'lightgray'
    },
    subtitle: {
        textAlign: 'center'
    }
})

function Component404() {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <Typography variant="h1" className={classes.title}>404 Not found</Typography>
            <Typography variant="h6" className={classes.subtitle}>Are you lost? <Link to='/'>Return to Home page</Link></Typography>
        </div>
    )
}

export default Component404
