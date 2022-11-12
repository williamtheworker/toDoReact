
// MUI Components
import Box from '@mui/material/Box';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Grid from '@mui/material/Grid';
// Additional Scripts

const CustomPagination = (props) => {
    const { filters, updateFilters, count } = props;

    return (
        <Box 
            sx={{
                margin: '5px',
                position: 'relative',
                width: '100%'
            }}
        >
            <Stack
                spacing={2}
                sx={{
                    display: 'block',
                    float: 'right',
                    marginTop: '8px',
                    marginRight: '8px'
                }}
            >
                <Pagination 
                    count={count}
                    size="large"
                    variant="outlined"
                    shape="rounded"
                    onChange={(e, value) => {
                        updateFilters('pagintation', value);
                    }}
                />
            </Stack>
            <FormControl sx={{ m: 1, minWidth: 120, float: 'right' }} size="small">
                <InputLabel id="row_page-select-small">Rows</InputLabel>
                <Select
                    labelId="row_page-select-small"
                    id="row_page-select-small"
                    value={filters.rowPage}
                    label="row_page"
                    autoWidth
                    onChange={(e) => {
                        updateFilters('row_page', e.target.value);
                    }}
                >
                    <MenuItem value={10}>10</MenuItem>
                    <MenuItem value={20}>20</MenuItem>
                    <MenuItem value={30}>30</MenuItem>
                    <MenuItem value={50}>50</MenuItem>
                    <MenuItem value={100}>100</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
}

export default CustomPagination;