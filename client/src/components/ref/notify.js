import React, { useRef, useState, useEffect } from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import _ from 'lodash'
import Button from '@material-ui/core/Button';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

export const RefNotify = {
    push: ({ message }) => { }
}

const Alert = (props) => {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
}));

const Notify = ({ }) => {
    const classes = useStyles();
    const [message, setMessage] = useState(undefined)
    RefNotify.push = ({ message }) => {
        setMessage(message)
    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setMessage(undefined);
    };

    // if (listNotify.length === 0) return null
    return <div className={classes.root}>
        <Snackbar open={message !== undefined} autoHideDuration={2000} onClose={handleClose}>
            <Alert severity="info">{message}</Alert>
        </Snackbar>
    </div>
}

export default Notify