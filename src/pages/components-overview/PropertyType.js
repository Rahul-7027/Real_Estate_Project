import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Typography } from '@mui/material';

export default function GroupedSelect() {
  const [type, setType] = React.useState("");

  const handleChange = (event) => {
    setType(event.target.value)
  }
  console.log(2222, type)
  return (
    <div>
      <Typography variant="h4" component="h2">
        Property Type
      </Typography>
      <FormControl sx={{ m: 1, minWidth: 120 }} >
        <InputLabel htmlFor="grouped-native-select">Grouping</InputLabel>
        <Select native defaultValue="" id="grouped-native-select" label="Grouping" onChange={handleChange}>
          <option aria-label="None" value="" />
          <option value={1}>Cineplex</option>
          <option value={2}>Land</option>
          <option value={3}>Reatil</option>
          <option value={4}>Residentail</option>
          <option value={5}>Villa</option>
          <option value={6}>Studio</option>
          <option value={7}>Office Space</option>
          <option value={8}>Virtual Space</option>
        </Select>
      </FormControl>
    </div>
  );
}