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
    <FormControl sx={{ m: 1 }} style={{ minWidth: "120px" }} size="small">
      <InputLabel
        id="demo-select-small-label"
        sx={{ color: "white", "&.Mui-focused": { color: "white" } }}
      >
        Mode
      </InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={mode}
        label="Mode"
        onChange={handleChange}
        sx={{
          color: "white",
          ".MuiOutlinedInput-notchedOutline": { borderColor: "white" },
          "&:hover .MuiOutlinedInput-notchedOutline": { borderColor: "white" },
          // "& fieldset": { borderColor: "white" },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "white",
          },
          ".MuiSelect-icon": { color: "white" },
          // "& .MuiSelect-select": { color: "white" },
          // "& .MuiSelect-selectMenu": { color: "white" },
        }}
      >
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
