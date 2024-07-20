import { useColorScheme } from "@mui/material/styles";

import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

import LightModeIcon from "@mui/icons-material/LightMode";

import Box from "@mui/material/Box";

function ModeSelect() {
  const { mode, setMode } = useColorScheme();
  function handleChange(event) {
    const currentMode = event.target.value;
    setMode(currentMode);
  }
  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small-label">Mode</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={mode}
        label="Mode"
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={"light"}>
          <Box sx={{ display: "flex", alignItem: "center", gap: 1 }}>
            <LightModeIcon fontSize={"small"} />
            light
          </Box>
        </MenuItem>
        <MenuItem value={"dark"}>dark</MenuItem>
        <MenuItem value={"system"}>system</MenuItem>
      </Select>
    </FormControl>
  );
}

export default ModeSelect;
