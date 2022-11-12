
// MUI Components
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
// MUI Icons
import SearchIcon from '@mui/icons-material/Search';
// Additional Scripts
import { debounce } from 'lodash';

const CustomFilters = (props) => {
    const { filters, updateFilters } = props;

    const search = debounce((filter, value) => {
        updateFilters(filter, value)
    }, 350);

    return (
        <Box
            id="filters-box"
            sx={{
                width: '100%',
            }}
            m={1}
        >
            <Grid container item xs={12}>
                <Grid item xs={2}>
                    <Box m={1}>
                        <TextField
                            label="Start Date"
                            type="date"
                            value={filters.start_date}
                            inputProps={{
                                max: filters.end_date,
                            }}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            fullWidth
                            InputProps={{
                                sx: {
                                    fontSize: '14px'
                                }
                            }}
                            size="small"
                            onChange={(e) => updateFilters('start_date', e.target.value)}
                        />
                    </Box>
                </Grid>
                <Grid item xs={2}>
                    <Box m={1}>
                        <TextField
                            label="End Date"
                            type="date"
                            value={filters.end_date}
                            inputProps={{
                                min: filters.start_date,
                            }}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            fullWidth
                            InputProps={{
                                sx: {
                                    fontSize: '14px'
                                }
                            }}
                            size="small"
                            onChange={(e) => updateFilters('end_date', e.target.value)}
                        />
                    </Box>
                </Grid>
                <Grid item xs={8}>
                    <Box m={1} sx={{textAlign: 'right'}}>
                        <FormControl sx={{ width: '35ch' }} variant="outlined" size="small">
                            <InputLabel>Search</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-search"
                                endAdornment={
                                    <a href='#'>
                                        <InputAdornment position="end">
                                            <SearchIcon />
                                        </InputAdornment>
                                    </a>
                                }
                                label="Search"
                                size="small"
                                onChange={(e) => search('search', e.target.value)}
                            />
                        </FormControl>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}

export default CustomFilters;