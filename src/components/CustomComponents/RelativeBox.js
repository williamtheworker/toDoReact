// MUI Components
import Box from '@mui/material/Box';

const RelativeBox = (props) => {
    return (
        <Box
            sx={{
                position: 'relative'
            }}
            {...props}
        >
            { props.children }
        </Box>
    );
};

export default RelativeBox;