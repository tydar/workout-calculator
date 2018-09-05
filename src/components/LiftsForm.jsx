import React from 'react';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Switch from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const styles = theme => ({
  formContainer: {
    padding: theme.spacing.unit,
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.down('sm')]: {
      alignItems: 'center',
    },
  },
  textField: {
    padding: theme.spacing.unit,
    [theme.breakpoints.down('sm')]: {
      width: '95%',
    },
    [theme.breakpoints.up('md')]: {
      width: 200,
    },
  },
  button: {
    margin: theme.spacing.unit,
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
    [theme.breakpoints.up('md')]: {
      width: 200,
    },
  },
});

function LiftsFormView(props) {
  const {
    squatValue,
    deadliftValue,
    pressValue,
    benchValue,
    rowValue,
    amrap1,
    amrap2,
    weekA,
    weightLabel,
    classes,
    handleChange,
  } = props;

  return (
    <form autoComplete="off" className={classes.formContainer}>
      <TextField
        label="Last squat weight"
        id="squat-weight"
        InputProps={{
          endAdornment: <InputAdornment position="end">{ weightLabel }</InputAdornment>,
        }}
        value={squatValue}
        className={classes.textField}
        onChange={handleChange('squatValue')}
      />
      <TextField
        label="Last deadlift weight"
        id="deadlift-weight"
        InputProps={{
          endAdornment: <InputAdornment position="end">{ weightLabel }</InputAdornment>,
        }}
        value={deadliftValue}
        className={classes.textField}
        onChange={handleChange('deadliftValue')}
      />
      <TextField
        label="Last overhead press weight"
        id="press-weight"
        InputProps={{
          endAdornment: <InputAdornment position="end">{ weightLabel }</InputAdornment>,
        }}
        value={pressValue}
        className={classes.textField}
        onChange={handleChange('pressValue')}
      />
      <TextField
        label="Last bench weight"
        id="bench-weight"
        InputProps={{
          endAdornment: <InputAdornment position="end">{ weightLabel }</InputAdornment>,
        }}
        value={benchValue}
        className={classes.textField}
        onChange={handleChange('benchValue')}
      />
      <TextField
        label="Last row weight"
        id="row-weight"
        InputProps={{
          endAdornment: <InputAdornment position="end">{ weightLabel }</InputAdornment>,
        }}
        value={rowValue}
        className={classes.textField}
        onChange={handleChange('rowValue')}
      />
      <FormGroup row>
        <FormControlLabel
          control={(
            <Switch
              checked={weekA}
              value="weekA"
              onChange={handleChange('weekA')}
            />
          )}
          label="Week A?"
        />
        <FormControlLabel
          control={(
            <Switch
              checked={amrap1}
              value="amrap1"
              onChange={handleChange('amrap1')}
            />
          )}
          label={weekA ? 'Bench AMRAP > 8?' : 'Deadlift AMRAP > 8?'}
        />
        <FormControlLabel
          control={(
            <Switch
              checked={amrap2}
              value="amrap2"
              onChange={handleChange('amrap2')}
            />
          )}
          label={weekA ? 'Squat AMRAP > 8?' : 'Press AMRAP > 8?'}
        />
      </FormGroup>
      <Button variant="contained" color="primary" className={classes.button}>
        Calculate
      </Button>
    </form>
  );
}

LiftsFormView.propTypes = {
  squatValue: PropTypes.number.isRequired,
  deadliftValue: PropTypes.number.isRequired,
  pressValue: PropTypes.number.isRequired,
  benchValue: PropTypes.number.isRequired,
  rowValue: PropTypes.number.isRequired,
  amrap1: PropTypes.bool.isRequired,
  amrap2: PropTypes.bool.isRequired,
  weekA: PropTypes.bool.isRequired,
  weightLabel: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
};

class LiftsFormWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squatValue: 0,
      deadliftValue: 0,
      pressValue: 0,
      benchValue: 0,
      rowValue: 0,
      amrap1: false,
      amrap2: false,
      weekA: true,
      weightLabel: 'lbs',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = name => (event) => {
    if (name === 'amrap1' || name === 'amrap2' || name === 'weekA') {
      this.setState({
        [name]: event.target.checked,
      });
    } else {
      this.setState({
        [name]: event.target.value,
      });
    }
  }

  render() {
    const {
      squatValue,
      deadliftValue,
      pressValue,
      benchValue,
      rowValue,
      amrap1,
      amrap2,
      weekA,
      weightLabel,
    } = this.state;
    const { classes } = this.props;

    return (
      <LiftsFormView
        squatValue={squatValue}
        deadliftValue={deadliftValue}
        pressValue={pressValue}
        benchValue={benchValue}
        rowValue={rowValue}
        amrap1={amrap1}
        amrap2={amrap2}
        weekA={weekA}
        weightLabel={weightLabel}
        classes={classes}
        handleChange={this.handleChange}
      />
    );
  }
}

LiftsFormWrapper.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LiftsFormWrapper);
