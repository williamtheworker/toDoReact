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
import Tooltip from '@mui/material/Tooltip';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';

// MUI Icons
import DeleteIcon from '@mui/icons-material/Delete';
import AddCircleIcon from '@mui/icons-material/AddCircle';

// External
import { cloneDeep } from 'lodash';

// Custom Components
import Base from './Layouts/Base';
import CustomDialogBox from './CustomComponents/CustomDialogBox';

// mock data
import tasksList from '../mock-data/tasks';

const Tasks = () => {
  // using use state to bind the json array into a variable
  const [tasks, setTasks] = useState(tasksList.tasks);

  const [dialog, setDialog] = useState(false);
  const [addDialog, setAddDialog] = useState(false);
  const [addTitle, setAddTitle] = useState('');
  const [addDetails, setAddDetails] = useState('');
  const [deleteDialog, setDeleteDialog] = useState(false);
  const [selectedTitle, setSelectedTitle] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('');

  // this is for setting the 'selectedTitle' and 'selectedStatus' to default;
  const clearSelected = () => {
    setSelectedTitle('');
    setSelectedStatus('');
  };

  const updateList = (title, status) => {
    // using clone deep here to create an exact copy of the current state of the 'tasks' variable
    let tasksClone = cloneDeep(tasks);

    // the clone's values are updated and are set to the original
    tasksClone.forEach((taskClone) => {
      if (taskClone.title == title) {
        taskClone.status = status == 'done' ? 'pending' : 'done';
      }
    });
    setTasks(tasksClone);
  };

  const addToList = () => {
    // code for adding new object to the 'task' array
    let tasksClone = cloneDeep(tasks);

    tasksClone.push({
      title: addTitle,
      details: addDetails,
      status: 'pending',
    });

    setTasks(tasksClone);
  };

  const removeItemFromList = (title) => {
    // code is used for removing an object from the 'task' array by key
    let arr = tasks.filter((obj) => obj.title !== title);
    setTasks(arr);
  };

  // Custom List Component
  const CustomList = (props) => {
    const { title, details, status } = props;

    /* The initial count is 7, the total number of task item  */
    console.count('component render');

     /* Try to complete or mark item completed to open */

    return (
      <ListItem
        key={Math.random()}
        secondaryAction={
          <Tooltip title={'Remove Task'}>
            <IconButton
              edge="end"
              aria-label="comments"
              onClick={() => {
                setDeleteDialog(true);
                setSelectedTitle(title);
              }}
            >
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        }
        disablePadding
        divider={true}
      >
        <ListItemButton
          role={undefined}
          onClick={() => {
            setDialog(true);
            setSelectedTitle(title);
            setSelectedStatus(status);
          }}
          dense
        >
          <ListItemIcon>
            <Checkbox
              edge="start"
              checked={status == 'done' ? true : false}
              tabIndex={-1}
              disableRipple
            />
          </ListItemIcon>
          <ListItemText id={'labelId'} primary={title} secondary={details} />
        </ListItemButton>
      </ListItem>
    );
  };

  return (
    <Base>
      <Box p={2} pl={3} pr={3}>
        <Paper>
          <Box
            pt={1}
            pb={1}
            display="flex"
            justifyContent="center"
            alignItems="center"
            sx={{
              borderBottom: 1,
              borderColor: '#e0e0e0',
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontWeight: 'bold',
              }}
            >
              My Tasks
            </Typography>
            <Tooltip title="Add Task">
              <IconButton
                onClick={() => {
                  setAddDialog(true);
                }}
              >
                <AddCircleIcon />
              </IconButton>
            </Tooltip>
          </Box>
          <Box p={2}>
            <Divider>
              <Chip label="ONGOING" />
            </Divider>
            <List>
              {/* This will return all pending tasks. .map is used to loop the array into elements */}
              {/* 
                  1. What makes you decide to go with Math.random() for CustomList key
                  2. Is ramdom key have an advantage
                  3. Or is random key is a disadvantage. Yes why? No why?

                  4. How will you able to optimize the rendering of the component?
                      - If there is possible solution
                      - If you think this is already the best solution, why?
                  */}
              {tasks.map((task) => {
                if (task.status == 'pending') {
                  return (
                    <CustomList
                      key={Math.random()}
                      title={task.title}
                      details={task.details}
                      status={task.status}
                    />
                  );
                }
              })}
            </List>
            <Divider>
              <Chip label="DONE" />
            </Divider>
            <List>
              {/* This will return all done tasks */}
              {tasks.map((task) => {
                if (task.status == 'done') {
                  return (
                    <CustomList
                      key={Math.random()}
                      title={task.title}
                      details={task.details}
                      status={task.status}
                    />
                  );
                }
              })}
            </List>
          </Box>
        </Paper>

        {/* Dialog Box for Moving from 'Ongoing' to 'Done' */}
        <CustomDialogBox
          open={dialog}
          onClose={() => setDialog(false)}
          content={
            "Move '" +
            selectedTitle +
            "' to " +
            (selectedStatus == 'done' ? 'Ongoing' : 'Done') +
            '?'
          }
          actions={
            <Box>
              <Button
                variant="contained"
                color="success"
                sx={{
                  marginRight: '5px',
                }}
                onClick={() => {
                  updateList(selectedTitle, selectedStatus);
                  clearSelected();
                  setDialog(false);
                }}
              >
                Confirm
              </Button>
              <Button
                variant="contained"
                color="error"
                onClick={() => {
                  setDialog(false);
                  clearSelected();
                }}
              >
                Cancel
              </Button>
            </Box>
          }
        />

        {/* Dialog Box for Adding Tasks */}
        <CustomDialogBox
          open={addDialog}
          onClose={() => setAddDialog(false)}
          content={
            <Box p={2}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    id="Title-outlined-basic"
                    label="Title"
                    variant="outlined"
                    onChange={(e) => {
                      setAddTitle(e.target.value);
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id="Details-outlined-basic"
                    label="Details"
                    variant="outlined"
                    fullWidth
                    onChange={(e) => {
                      setAddDetails(e.target.value);
                    }}
                  />
                </Grid>
              </Grid>
            </Box>
          }
          actions={
            <Box>
              <Button
                variant="contained"
                color="success"
                sx={{
                  marginRight: '5px',
                }}
                onClick={() => {
                  addToList();
                  setAddDialog(false);
                }}
              >
                Add
              </Button>
              <Button
                variant="contained"
                color="error"
                onClick={() => {
                  setAddDialog(false);
                }}
              >
                Cancel
              </Button>
            </Box>
          }
        />

        {/* Dialog Box for Removing from the list */}
        <CustomDialogBox
          open={deleteDialog}
          onClose={() => setDeleteDialog(false)}
          content={"Remove the task '" + selectedTitle + "'?"}
          actions={
            <Box>
              <Button
                variant="contained"
                color="success"
                sx={{
                  marginRight: '5px',
                }}
                onClick={() => {
                  removeItemFromList(selectedTitle);
                  clearSelected();
                  setDeleteDialog(false);
                }}
              >
                Confim
              </Button>
              <Button
                variant="contained"
                color="error"
                onClick={() => {
                  setDeleteDialog(false);
                  clearSelected();
                }}
              >
                Cancel
              </Button>
            </Box>
          }
        />
      </Box>
    </Base>
  );
};

export default Tasks;
