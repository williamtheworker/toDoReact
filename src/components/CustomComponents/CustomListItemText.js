// MUI Components
import Typography from '@mui/material/Typography';
import ListItemText from '@mui/material/ListItemText';

const CustomListItemText = (props) => {
    return (
        <ListItemText 
            primary={
                <Typography
                    type="body2"
                    style={{
                        fontSize: '14px' 
                    }}
                >
                    { props.children }
                </Typography>
            }
            disableTypography
        />
    );
}

export default CustomListItemText;