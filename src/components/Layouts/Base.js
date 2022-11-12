import React from 'react';
// MUI Components
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
// Custom Components
import SidePanel from './SidePanel';
import RelativeBox from '../CustomComponents/RelativeBox';

const Base = (props) => {
    const { children } = props;

    return (
        <Box>
            <RelativeBox>
                <CssBaseline />
                <AppBar
                    position='relative'
                    sx={{
                        height: '56px',
                        maxHeight: '56px'
                    }}
                >
                    <Toolbar/>
                </AppBar>
            </RelativeBox>
            <SidePanel/>
            <RelativeBox>
                <main
                    id="hot-body"
                    style={{
                        height: 'calc(100vh - 72px)',
                        marginLeft: '230px',
                        backgroundColor: '#f6f7ff'
                    }}
                >
                    { children }
                </main>
            </RelativeBox>
        </Box>
    );
};

export default Base;