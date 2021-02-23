import React, { useEffect } from 'react';

import Alert, { Color } from '@material-ui/lab/Alert';
import Box from '@material-ui/core/Box';
import CloseIcon from '@material-ui/icons/Close';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';

export interface IToastProps {
    duration: number;
    fullWidth?: boolean;
    handleClose: Function;
    maxWidth?: any;
    message: string;
    open: boolean;
    severity: Color;
    title: string;
}

export function Toast(props: IToastProps) {
    let timer = null;

    useEffect(() => {
        if (props.open) {
            timer = setTimeout(() => handleClose(), props.duration);
            return () => {
                clearTimer();
            }
        }
    }, [props.open]);

    function clearTimer() {
        if (timer != null ) {
            clearTimeout(timer);
            timer = null;
        }
    }

    function handleClose() {
        clearTimer();
        props.handleClose();
    }

    let fullWidth = (props.fullWidth != null) ? props.fullWidth : true;
    let maxWidth = (props.maxWidth != null) ? props.maxWidth : "sm";

    return (
        <div>
            {props.open &&
                <Dialog
                    fullWidth={fullWidth}
                    maxWidth={maxWidth}
                    open={props.open}
                    aria-labelledby="save-dialog-title"
                    aria-describedby="save-dialog-description">
                    <DialogTitle id="save-dialog-title">
                        <Box display="flex" alignItems="center">
                            <Box flexGrow={1} >{props.title}</Box>
                            <Box>
                                <IconButton onClick={handleClose}>
                                    <CloseIcon />
                                </IconButton>
                            </Box>
                        </Box>
                    </DialogTitle>
                    <DialogContent dividers>
                        <Alert severity={props.severity}>{props.message}</Alert>
                    </DialogContent>
                </Dialog>
            }
        </div>
    )
}
