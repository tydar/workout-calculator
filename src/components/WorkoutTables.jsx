import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    width: '95%',
    margin: theme.spacing.unit,
  },
  table: {
    padding: theme.spacing.unit,
    margin: theme.spacing.unit,
  },
});

function WorkoutTable(props) {
  const { classes, day } = props;
  return (
    <Table>
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
  );
}

class WorkoutTables extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tab: 0,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event, value) {
    event.preventDefault();
    this.setState({
      tab: value,
    });
  }

  render() {
    const { days, classes } = this.props;
    const { tab } = this.state;
    return (
      <div className={classes.root}>
        <Paper>
          <Tabs value={tab} onChange={this.handleChange}>
            {
              days.map((day, dindex) => {
                const label = `Day ${dindex + 1}`;
                return (<Tab label={label} />);
              })
            }
          </Tabs>
        </Paper>
        { days.map((day, dindex) => {
          return (
            <React.Fragment>
              { tab === dindex && <WorkoutTable day={day} /> }
            </React.Fragment>
          );
        })}
      </div>
    );
  }
}

export default withStyles(styles)(WorkoutTables);
