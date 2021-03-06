import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import styles from './styles';
import TaskItem from '../TaskItem';

class TaskList extends Component {
  render() {
    const { status, classes, taskFilter } = this.props;
    console.log('classes: ', classes, status);
    return (
      <Grid item md={4} xs={12} key={status.value}>
        <Box mt={1} mb={1}>
          <div className={classes.status}>{status.label}</div>
        </Box>
        <div className={classes.wrapperListTask}>
          {taskFilter.map(task => {
            return <TaskItem task={task} status={status} />;
          })}
        </div>
      </Grid>
    );
  }
}

export default withStyles(styles)(TaskList);
