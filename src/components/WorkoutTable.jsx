import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    width: '100%',
    margin: theme.spacing.unit,
  },
  table: {
    padding: theme.spacing.unit,
    margin: theme.spacing.unit,
  },
});

function WorkoutTable(props) {
  const { classes, days } = props;
  return (
    <div className={classes.root}>
      {days.map((day, dindex) => {
        return (
          <Paper className={classes.table}>
            <Typography color="inherit" variant="subheading">
              Day {dindex + 1}:
            </Typography>
            <Table key={dindex}>
              <TableHead>
                <TableRow>
                  <TableCell>Exercise</TableCell>
                  <TableCell>Sets x Reps</TableCell>
                  <TableCell numeric>Weight</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {day.map((exercise, index) => {
                  return (
                    <TableRow key={index}>
                      <TableCell component="th" scope="row">
                        {exercise.name}
                      </TableCell>
                      <TableCell>
                        {exercise.sets}
                        x
                        {exercise.reps}
                      </TableCell>
                      <TableCell numeric>
                        {exercise.weight}
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </Paper>
        );
      })}
    </div>
  );
}

export default withStyles(styles)(WorkoutTable);
