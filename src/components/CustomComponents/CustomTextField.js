// MUI Components
import TextField from '@mui/material/TextField';
// Additional Scripts
import { useField } from 'formik';

const CustomTextField = (props) => {
    const {placeholder, type, label} = props;
    const [field, meta] = useField(props);
    const errorText = meta.error && meta.touched ? meta.error: '';

    return (
        <TextField placeholder={placeholder} label={label} type={type} {...field} helperText={errorText} error={!!errorText} size='small' fullWidth={true} variant="outlined" />
    );
};

export default CustomTextField;