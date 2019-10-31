import React from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';

const categoryList = [
  { id: 0, name: 'Celebrating' },
  { id: 1, name: 'Cleaner' },
  { id: 2, name: 'Plumber' }
];

const useStyles = makeStyles(theme => ({
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    width: "90%"
  },
}));

const SelectBox = ({ category, onSelect }) => {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <FormControl className={classes.formControl}>
      <InputLabel id="demo-controlled-open-select-label">Category</InputLabel>
      <Select
        labelId="demo-controlled-open-select-label"
        id="demo-controlled-open-select"
        open={open}
        onClose={handleClose}
        onOpen={handleOpen}
        value={category}
        onChange={(event) => onSelect(event.target.value)}
      >
        {categoryList.map(item =>
          <MenuItem
            key={item.id}
            value={item.id}>
            {item.name}
          </MenuItem>
        )}
      </Select>
    </FormControl>
  );
}

export default SelectBox;