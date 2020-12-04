import React, { useRef, useState, useEffect } from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
const useStyles = makeStyles((theme) => ({
    backdrop: {

    },
}));

export const RefLoading = {
    show: undefined,
    hide: undefined
}

const Loading = ({ }) => {
    const classes = useStyles();
    const [isLoading, setIsLoading] = useState(false)

    RefLoading.show = () => {
        setIsLoading(true)
    }
    RefLoading.hide = () => {
        setIsLoading(false)
    }

    const handleClose = () => {

    }
    return (
        <Dialog className={classes.backdrop} open={isLoading} onClick={handleClose}>
            <CircularProgress color="#fff" />
        </Dialog>
    );
}

export default Loading