import { Box } from '@mui/system';
import React, { useState } from 'react';

// MUI Components
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

// External
import {cloneDeep} from 'lodash';

// Custom Components
import Base from './Layouts/Base';
import CustomDialogBox from './CustomComponents/CustomDialogBox';

// mock data
import tasksList from '../mock-data/tasks';


const Tasks = () => {
    // using use state to bind the json array into a variable
    const [ tasks, setTasks ] = useState(tasksList.tasks);

    const [ dialog, setDialog ] = useState(false);
    const [ deleteDialog, setDeleteDialog ] = useState(false);
    const [ selectedTitle, setSelectedTitle ] = useState('');
    const [ selectedStatus, setSelectedStatus ] = useState('');

    // this is for setting the 'selectedTitle' and 'selectedStatus' to default;
    const clearSelected = () => {
        setSelectedTitle('');
        setSelectedStatus('');
    }

    const updateList = (title, status) => {
        // using clone deep here to create an exact copy of the current state of the 'tasks' variable
        let tasksClone = cloneDeep(tasks);

        // the clone's values are updated and are set to the original
        tasksClone.forEach((taskClone) => {
            if(taskClone.title == title) {
                taskClone.status = ((status == 'done') ? 'pending' : 'done');
            }
        });
        setTasks(tasksClone);
    }

    const removeItemFromList = (title) => {
        // code is used for removing an object from the 'task' array by key
        let arr = tasks.filter( obj => obj.title !== title);
        setTasks(arr);
    }

    // Custom List Component
    const CustomList = (props) => {
        const { title, details, status } = props;

        return (
            <ListItem
                key={Math.random()}
                secondaryAction={
                <IconButton edge="end" aria-label="comments" onClick={
                    () => {
                        setDeleteDialog(true);
                        setSelectedTitle(title);
                    }
                }>
                    <DeleteIcon />
                </IconButton>
                }
                disablePadding
                divider={true}
            >
                <ListItemButton role={undefined} 
                    onClick={
                        () => {
                            setDialog(true);
                            setSelectedTitle(title);
                            setSelectedStatus(status);
                        }
                    } 
                dense>
                    <ListItemIcon>
                        <Checkbox
                            edge="start"
                            checked={(status == 'done') ? true : false}
                            tabIndex={-1}
                            disableRipple
                        />
                    </ListItemIcon>
                    <ListItemText id={'labelId'} primary={title} secondary={details} />
                </ListItemButton>
            </ListItem>
        );
    }

    return (
        <Base>
            <Box p={2} pl={3} pr={3}>
                <Paper>
                    <Box
                        pt={1}
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        sx={{ 
                            borderBottom: 1,
                            borderColor: '#e0e0e0'
                        }}
                    >
                        <Typography 
                            variant="h4" 
                            gutterBottom
                            sx={{
                                fontWeight: 'bold'
                            }}
                        >
                            My Tasks
                        </Typography>
                    </Box>
                    <Box p={2}>
                        <Divider>
                            <Chip label="ONGOING" />
                        </Divider>
                        <List>
                            {/* This will return all pending tasks. .map is used to loop the array into elements */}
                            {
                                tasks.map((task) => {
                                    if(task.status == 'pending') {
                                        return (<CustomList
                                            key={Math.random()}
                                            title={task.title}
                                            details={task.details}
                                            status={task.status}
                                        />);
                                    }
                                })
                            }
                            
                        </List>
                        <Divider>
                            <Chip label="DONE" />
                        </Divider>
                        <List>
                            {/* This will return all done tasks */}
                            {
                                tasks.map((task) => {
                                    if(task.status == 'done') {
                                        return (<CustomList
                                            key={Math.random()}
                                            title={task.title}
                                            details={task.details}
                                            status={task.status}
                                        />);
                                    }
                                })
                            }
                            
                        </List>
                    </Box>
                </Paper>
                {/* Dialog Box for Moving from 'Ongoing' to 'Done' */}
                <CustomDialogBox
                    open={dialog}
                    onClose={() => setDialog(false)}
                    content={
                        "Move '" + selectedTitle + "' to "+ ((selectedStatus == 'done') ? 'Ongoing' : 'Done') +"?"
                    }
                    actions={
                        <Box>
                            <Button
                                variant="contained"
                                color="success"
                                sx={{
                                    marginRight: '5px'
                                }}
                                onClick={
                                    () => {
                                        updateList(selectedTitle, selectedStatus);
                                        clearSelected();
                                        setDialog(false)
                                    }
                                }
                            >
                                Confirm
                            </Button>
                            <Button
                                variant="contained"
                                color="error"
                                onClick={
                                    () => {
                                        setDialog(false)
                                        clearSelected();
                                    }
                                }
                            >
                                Cancel
                            </Button>
                        </Box>
                    }
                />

                {/* Dialog Box for Removing from the list */}
                <CustomDialogBox
                    open={deleteDialog}
                    onClose={() => setDialog(false)}
                    content={
                        "Remove the task '" + selectedTitle + "'?"
                    }
                    actions={
                        <Box>
                            <Button
                                variant="contained"
                                color="success"
                                sx={{
                                    marginRight: '5px'
                                }}
                                onClick={
                                    () => {
                                        removeItemFromList(selectedTitle);
                                        clearSelected();
                                        setDeleteDialog(false)
                                    }
                                }
                            >
                                Confim
                            </Button>
                            <Button
                                variant="contained"
                                color="error"
                                onClick={
                                    () => {
                                        setDeleteDialog(false)
                                        clearSelected();
                                    }
                                }
                            >
                                Cancel
                            </Button>
                        </Box>
                    }
                />
            </Box>
        </Base>
    );
}

export default Tasks;