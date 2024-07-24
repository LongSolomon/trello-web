import Box from "@mui/material/Box";

import ListColumns from "./ListColumns/ListColumns";

function BoardContent() {
  return (
    <Box
      sx={{
        bgcolor: (theme) => {
          return theme.palette.mode === "dark" ? "#34495e" : "#1976d2";
        },
        width: "100vw",
        height: (theme) => {
          return theme.trelloCustom.boardContentHeight;
        },
      }}
    >
      <ListColumns />
    </Box>
  );
}

export default BoardContent;
