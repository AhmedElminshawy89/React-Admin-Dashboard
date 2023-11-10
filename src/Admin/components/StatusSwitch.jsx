import { Box, FormControlLabel, Switch } from "@mui/material";
import { useState } from "react";

const StatusSwitch = () => {
    const [checked,setChecked] = useState(true)
    const handleChange =(e) => {
        setChecked(e.target.checked)
    }
  return (
    <Box>
        <FormControlLabel
        control={<Switch checked={checked} onChange={handleChange} color="success"/>}
        />
    </Box>
  )
}

export default StatusSwitch