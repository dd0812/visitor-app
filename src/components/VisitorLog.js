import React, {useState} from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import 'date-fns';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function VisitorLog() {
  //React hooks
  const classes = useStyles();
  const [typeofvisit, setTOV] = useState('');
  const [timeOfEntry, setTimeOfEntry] = useState('');
  const [timeOfExit, setTimeOfExit] = useState('');
  const currDate = new Date().toLocaleDateString();
  const [name, setName] = useState(''); 
  const [email, setEmail] = useState('');
  const [personToVisit, setPersonToVisit] = useState('');
  // const [selectedDate, setSelectedDate] = useState(new Date('2014-08-18T21:11:54'));
  const [open, setOpen] = React.useState(false);
  const [show, setShow] = React.useState(false);
  const [fieldName, setFieldName] = React.useState('');

    function Alert(props) {
      return <MuiAlert elevation={6} variant="filled" {...props} />;
    }  

    function validateFields() {
      let fieldName = '';
      if(name.length === 0){
        fieldName = 'Name';
      }else if(email.length === 0){
        fieldName = 'Email';
      }else if(typeofvisit.length === 0){
        fieldName = 'Type of visit';
      }else if(personToVisit.length === 0){
        fieldName = 'Person to visit';
      }else if(timeOfEntry.length === 0){
        fieldName = 'Time of entry';
      }else if(timeOfExit.length === 0){
        fieldName = 'Time of exit';
      }

      if(fieldName) {
        setFieldName(fieldName);
        setShow(true);
        return false;
      }
      return true;
    }

    function handleSubmit(event) {
      event.preventDefault();
      if(!validateFields()){
        return;
      }
      const formData = {
        id: new Date().getTime(),
        name,
        email,
        typeofvisit,
        personToVisit,
        currDate,
        timeOfEntry,
        timeOfExit
      };
      // console.log(formData);
      const data = localStorage.getItem('formData');
      let visitorData = [];
      if(data) {
        visitorData = JSON.parse(data);
      }
      visitorData.push(formData);
      localStorage.setItem('formData', JSON.stringify(visitorData));
      clearFields();
      setOpen(true);
  }

  const handleChange = (event) => {
    setTOV(event.target.value);
  };

  const handleEntryTimeChange = (event) => {
    setTimeOfEntry(event.target.value);
  };
  const handleExitTimeChange = (event) => {
    setTimeOfExit(event.target.value);
  };

  const handlePersonToVisitChange = (event) => {
    setPersonToVisit(event.target.value);
  };

  const clearFields = () =>{
    setName('');
    setEmail('');
    setTOV('');
    setTimeOfEntry('');
    setTimeOfExit('');
    setPersonToVisit('');
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  const handleErrorClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setShow(false);
  };

  return (
    <div>
      <h3 className='visitor-form'>Welcome to visitor log</h3>
    <div className='visitor-form'> 
    <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit} >
        <TextField id="outlined-basic" label="Name" variant="outlined" value={name}
                        onInput={ e=>setName(e.target.value)} required />
        <br/>
        <TextField id="outlined-basic" label="Email" variant="outlined" value={email}
                        onInput={ e=>setEmail(e.target.value)} required/>
      <br/>
      <FormControl variant="outlined" className={classes.formControl} required>
        <InputLabel id="demo-simple-select-outlined-label">Type of Visit</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={typeofvisit}
          onChange={handleChange}
          label="Type of Visit"
        >
          <MenuItem value={"Meeting"}>Meeting</MenuItem>
          <MenuItem value={"Delivery"}>Delivery</MenuItem>
          <MenuItem value={"Personal"}>Personal</MenuItem>
        </Select>
      </FormControl>
      <br/>
      <TextField id="outlined-basic" label="Person to visit" variant="outlined" value={personToVisit} 
      onChange={handlePersonToVisitChange} required/>
      <br/>
        <TextField id="outlined-basic" label="Date of entry" variant="outlined" value={currDate} disabled={true} />
      <br/>
      <TextField
        id="time"
        label="Time of entry"
        type="time"
        required
        value={timeOfEntry}
        // defaultValue="07:30"
        onChange={handleEntryTimeChange}
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
        inputProps={{
          step: 300, // 5 min
        }}
      />
      <br/>
      <TextField
        id="time"
        label="Time of exit"
        type="time"
        required
        value={timeOfExit}
        // defaultValue="07:30"        
        onChange={handleExitTimeChange}
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
        inputProps={{
          step: 300, // 5 min
        }}
      />
      <br/>
      <Button variant="contained" type="submit">
        Submit
      </Button>
      <Button variant="contained" onClick={clearFields}>
        Clear
      </Button>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          Visitor info logged successfully!
        </Alert>
      </Snackbar>
      <Snackbar open={show} autoHideDuration={6000} onClose={handleErrorClose}>
        <Alert onClose={handleErrorClose} severity="error">
          {`${fieldName} cannot be empty`}
        </Alert>
      </Snackbar>
    </form>
    </div>
    </div>
  );
}
