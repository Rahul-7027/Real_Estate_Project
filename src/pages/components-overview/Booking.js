import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Typography } from '@mui/material';
export default function BasicSelect() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  console.log(1111,age)

  return (
    <React.Fragment>
      <Typography variant="h4" component="h2">
        Booking Status
      </Typography>
      <Box sx={{ minWidth: 120, maxWidth: 100, m: 2 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Booking Status</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Booking Status"
            onChange={handleChange}
          >
            <MenuItem value={1}>Live</MenuItem>
            <MenuItem value={2}>Underprocess</MenuItem>
            <MenuItem value={3}>Client Cancel</MenuItem>
            <MenuItem value={4}>Builder Cancel</MenuItem>
            <MenuItem value={5}>Transfer Property</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </React.Fragment>
  );
}