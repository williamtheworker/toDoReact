// MUI Components
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

const CustomSpinner = (props) => {
    return (
        <Box
            sx={{
                position: 'absolute',
                zIndex: '110',
                top: '0',
                left: '0',
                width: '100%',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                background: 'rgba(255,255,255,0.8)'
            }}    
        >
            <CircularProgress />
        </Box>
    );
}

export default CustomSpinner;