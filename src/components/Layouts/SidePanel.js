// MUI Components
import Chip from '@mui/material/Chip';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
// MUI Icons
import AssessmentIcon from '@mui/icons-material/Assessment';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import SettingsIcon from '@mui/icons-material/Settings';
import DashboardIcon from '@mui/icons-material/Dashboard';
// Custom Components
import CustomListItemText from '../CustomComponents/CustomListItemText';
import RelativeBox from '../CustomComponents/RelativeBox';

const SidePanel = (props) => {
    const CustomListItem = (props) => {
        const { itemText, itemIcon } = props;

        return (
            <ListItem button key={Math.random()} disablePadding>
                <ListItemButton>
                    {itemIcon}
                    <CustomListItemText>{itemText}</CustomListItemText>
                </ListItemButton>
            </ListItem>
        );
    }

    return (
        <Drawer
            variant='persistent'
            anchor='left'
            open={true}
            PaperProps={{
                sx: {
                    width: '230px',
                }
            }}
        >
            <RelativeBox
                sx={{
                    height: '56px',
                    maxHeight: '56px'
                }}
            >
                <Grid
                    container
                    spacing={0}
                    direction="column"
                    alignItems="center"
                    justifyContent="center"
                    sx={{
                        height: '100%'
                    }}
                >

                    <Grid
                        item
                        xs={3}
                    >
                        Logo Here
                    </Grid>   
                </Grid> 
            </RelativeBox>
            <Divider />
            <List>
                <Divider 
                    textAlign="left"
                    sx={{
                        margin: '0px 0px 8px'
                    }}
                >
                    <Chip
                        sx={{
                            fontSize: '0.696429rem',
                            height: '24px'
                        }}
                        label="LABEL"
                    />
                </Divider>
                <CustomListItem
                    itemText={'My Tasks'}
                    itemIcon={
                        <DashboardIcon
                            sx={{
                                color: 'rgba(0, 0, 0, 0.54)',
                                flexShrink: 0,
                                display: 'inline-flex',
                                minWidth: '40px'
                            }}
                        />
                    }
                />
                <CustomListItem
                    itemText={'Personal List'}
                    itemIcon={
                        <AssessmentIcon
                            sx={{
                                color: 'rgba(0, 0, 0, 0.54)',
                                flexShrink: 0,
                                display: 'inline-flex',
                                minWidth: '40px'
                            }}
                        />
                    }
                />
            </List>
        </Drawer>
    );
};

export default SidePanel;