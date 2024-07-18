import { useState } from "react";

import Button from "@mui/material/Button";
import AdbIcon from "@mui/icons-material/Adb";
import Typography from "@mui/material/Typography";

function App() {
  return (
    <>
      <div>Long</div>
      <Typography variant="body1" color="text.secondary">
        TEST TYPO
      </Typography>
      <Button style={{ backgroundColor: "black" }}>Text</Button>
      <AdbIcon></AdbIcon>
    </>
  );
}

export default App;
