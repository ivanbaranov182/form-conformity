import React, { useState, useEffect } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import MuiTextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import SaveAltIcon from '@material-ui/icons/SaveAlt';
import CachedIcon from '@material-ui/icons/Cached';
import MenuItem from '@material-ui/core/MenuItem';
import MuiFormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const styles = theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  }
});

const DialogTitle = withStyles(styles)(props => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles(theme => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles(theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

const TextField = withStyles(theme => ({
  root: {
    width: "70%",
    '& .MuiOutlinedInput-root': {
      borderRadius: "4px 0px 0px 4px",
      marginBottom: 24
    },
  }
}))(MuiTextField);

const FormControl = withStyles(theme => ({
  root: {
    width: "30%",
    '& .MuiOutlinedInput-root': {
      borderRadius: "0px 4px 4px 0",
    },
  }
}))(MuiFormControl);

interface Itype {
	name?: number | string,
	surname?: number | string,
	email?: number | string,
	phone?: number | string
}

const arrayToObj = (arr: Array<prop>) => {
	const ob = {};
	arr.map((el) => ob[el] = "");

	return ob;
};

const getKeyByValue = (obj: {}, value: number) => Object.keys(obj).find(key => obj[key] === value);

interface Iprop {
	values: Array<string>,
	selected: any,
	onPreview: (obj: Itype) => void
}

type prop = "name" | "surname" | "email" | "phone";

export const App = (props: Iprop) => {
	const types: Array<prop> = [
		"name",
		"surname",
		"email",
		"phone"
	];
  const { values, selected, onPreview } = props;
  const [ open, setOpen ] = useState(true);
  const [ data, setData ] = useState(arrayToObj(types) || {});

  useEffect(() => {
  	setData({
		...data,
		...selected
	});
  }, []);

  const handleChange = (e, index: number) => {
	  const type = e.target.value || getKeyByValue(data, index);
	  let newData = {
		  ...data,
		  [type]: e.target.value ? index : ""
	  };
	  getKeyByValue(data, index) && (newData[getKeyByValue(data, index)] = "");
	  setData(newData);
  };

  const handleOpen = () => setOpen(!open);

  const capitalizeFirstLetter = (word) => {
	return word[0].toUpperCase() + word.slice(1);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleOpen}>
        Open dialog
      </Button>
      <Dialog onClose={handleOpen} aria-labelledby="customized-dialog-title" maxWidth="md" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleOpen}>
          <SaveAltIcon /> Import Customeers Base
        </DialogTitle>
        <DialogContent dividers>
          <Typography variant="h6" component="h2" gutterBottom>
            Field from uploaded CSV file
          </Typography>
          <Typography gutterBottom>
            Please chose correct columns and click <b>Show Table Preview</b> to see your imported data.<br />
            <Link href="#" underline="always">
              Send us your base file
            </Link> and we'll import it ourselves if you have any problems with that
          </Typography>
          <form>
            {
              values.map((element, index) => {
                return (
                  <div key={index} className={styles.formRow}>
                    <TextField 
                      label={`Field ${index+1}`} 
                      variant="outlined" 
                      value={element}
                      size="small"
                    />
                    <FormControl variant="outlined" size="small">
                      <Select onChange={(e) => handleChange(e, index)} value={getKeyByValue(data, index) || ""}>
                        <MenuItem value="">None</MenuItem>
                        {types.map((prop, i) => (
                          <MenuItem value={prop} key={i} disabled={!(data[prop] === "")}>{capitalizeFirstLetter(prop)}</MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </div>
                )}
              )
            }
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => onPreview(data)} color="primary" fullWidth={true} variant="outlined">
            <CachedIcon /> Show Table Preview
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default App;
