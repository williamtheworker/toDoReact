import React, { useEffect } from 'react';
// MUI Components
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Slide from '@mui/material/Slide';
// MUI Icons
import CloseIcon from '@mui/icons-material/Close';
// Additional Scripts
import { debounce } from 'lodash';

const CustomNotification = (props) => {
    const { show, message, hide } = props;

    const hideNotifAtSomePoint = debounce(() => {
        if(show == true) {
            hide();
        }
    }, 4000);

    useEffect(() => {
        if(show == true) {
            hideNotifAtSomePoint();
        }
    }, [show]);

    return (
        <Slide direction="right" in={show}>
            <Box
                sx={{
                    boxShadow: 3,
                    minWidth: '280px',
                    maxWidth: '350px',
                    minHeight: '50px',
                    backgroundColor: '#313131',
                    position: 'absolute',
                    zIndex: '1200',
                    left: '6px',
                    bottom: '10px',
                    borderRadius: '4px',
                    display: 'flex',
                    alignItems: 'center',
                    // justifyContent: 'center'
                }}
                m={2}
            >
                <Box
                    sx={{
                        width: '85%',
                        marginTop: '10px',
                        marginBottom: '10px'
                    }}
                >
                    <Typography
                        variant='subtitle2'
                        sx={{
                            color: '#ffffff',
                            marginLeft: '12px'
                        }}
                    >
                        {message}
                    </Typography>
                </Box>
                <Box
                    sx={{
                        position: 'absolute',
                        right: '2px'
                    }}
                >
                    <IconButton
                        aria-label='close'
                        sx={{
                            color: '#dbdbdb'
                        }}
                        onClick={() => hide()}
                    >
                        <CloseIcon></CloseIcon>
                    </IconButton>
                </Box>
            </Box>
        </Slide>
    );
}

export default CustomNotification;