import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const outcomeStatus = {
  won: 'Won',
  lost: 'Lost',
  negotiating: 'Negotiating',
  noAnswer: 'No Answer/VM',
}
const enableFeelingStatus = ['won', 'lost', 'negotiating'];

const outcomeFeeling = {
  negative: 'Negative',
  positive: 'Positive',
  neutral: 'Neutral',
}

const useStyles = makeStyles(theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(3, 6, 3),
  },
  textField: {
    margin: theme.spacing(0, 0, 1),
  },
  label: {
    padding: theme.spacing(1, 0, 1),
  }
}));

export default function SimpleModal({ open, handleClose, onSubmit }) {
  const classes = useStyles();
  const [outcome, setOutcome] = React.useState(null);
  const [comment, setComment] = React.useState('');
  const [feeling, setFeeling] = React.useState(null);
  const handleChange = (event, setType) => {
    setType(event.target.value);
  };
  const handleSubmit = () => {
    if (outcome && comment) {
      onSubmit({
        outcome,
        comment,
        feeling
      })
      handleClose()
    }
  }

  const renderRadioOptions = (optionObj) => {
    return Object.keys(optionObj).map((item, i) =>
      <FormControlLabel
        key={item}
        value={item}
        control={<Radio />}
        label={optionObj[item]} />
    )
  }

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.modal}
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <div className={classes.paper}>
          <FormControl>
            <FormLabel className={classes.label} component="legend">Outcome</FormLabel>
            <RadioGroup
              required aria-label="outcome"
              name="outcome"
              value={outcome || ''}
              onChange={(e) => handleChange(e, setOutcome)}
            >
              {renderRadioOptions(outcomeStatus)}
            </RadioGroup>
            {enableFeelingStatus.includes(outcome) &&
              <>
                <FormLabel className={classes.label} component="legend">Feeling</FormLabel>
                <RadioGroup
                  aria-label="feeling"
                  name="feeling"
                  value={feeling || ''}
                  onChange={(e) => handleChange(e, setFeeling)}
                >
                  {renderRadioOptions(outcomeFeeling)}
                </RadioGroup>
              </>
            }
            <TextField
              required
              value={comment}
              onChange={(e) => handleChange(e, setComment)}
              id="outlined-multiline-static"
              label="Comment"
              multiline
              rows="4"
              className={classes.textField}
              margin="normal"
              variant="outlined"
            />
            <Button
              variant="contained"
              color="primary"
              disabled={!outcome || !comment}
              onClick={handleSubmit}
            >
              Submit
              </Button>
          </FormControl>
        </div>
      </Fade>
    </Modal>
  );
}