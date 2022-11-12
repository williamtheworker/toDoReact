// MUI Components
import CircularProgress from '@mui/material/CircularProgress';

const CustomButtonSpinner = (props) => {
    const { show } = props; 

    return (
        show ? 
            <CircularProgress size={30} />
        : ''
    );
}

export default CustomButtonSpinner;