import React, { useState } from 'react'
import { ReadPost, CreatePost } from './components';
import { Container, Grid, Hidden, Fab, makeStyles, Zoom, Slide, Backdrop, useTheme, useMediaQuery } from '@material-ui/core';
import { Add, Close } from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
    fab: {
        position: 'fixed',
        bottom: 20,
        right: 20,
        zIndex: 11
    },
    root: {
        height: '90vh',
        overflow: 'hidden',
        [theme.breakpoints.down('xs')]: {
            height: '93vh',
            width: '100%',
            paddingLeft: 6,
            paddingRight: 6
        },
    },
    postContainer: {
        position: 'fixed',
        bottom: 100,
        right: 20,
        width: 'calc(100% - 40px)',
        [theme.breakpoints.down('sm')]: { width: 400, marginRight: 'auto'},
        [theme.breakpoints.down('xs')]: { width: 'calc(100% - 20px)', marginRight: 'auto'},
    }
}))

function Home() {
    const theme = useTheme();
    const xs = useMediaQuery(theme.breakpoints.down('xs'))
    const classes = useStyles();
    const [showCreate, setShowCreate] = useState(false);
    const toggleShowCreate = () => setShowCreate(!showCreate)
    return (
        <Container className={classes.root} maxWidth='lg'>
            <Grid container spacing={xs?0:3} justifyContent="center">
                <Hidden smDown>
                    <Grid item md={4} sm={6} xs={1}>
                        <CreatePost />
                    </Grid>
                </Hidden>
                <Grid item md={8} sm={10} xs={12}>
                    <ReadPost />
                </Grid>
            </Grid>
            <Hidden mdUp>
                <Slide direction="right" in={showCreate}>
                    <Backdrop open style={{ zIndex: 10 }}>
                    <div className={classes.postContainer}>
                        <CreatePost />
                    </div>
                    </Backdrop>
                </Slide>
            </Hidden>
            <Hidden mdUp>
                <Zoom in>
                    <Fab onClick={toggleShowCreate} color="primary" className={classes.fab}>
                        {
                            !showCreate ?
                            <Zoom in>
                                <Add />
                            </Zoom>:
                            
                            <Zoom in>
                                <Close />
                            </Zoom>
                        }
                    </Fab>
                </Zoom>
            </Hidden>
        </Container>
    )
}

export default Home
