import Box from "@mui/material/Box";

import ListColumns from "./ListColumns/ListColumns";
import { mapOrder } from "~/utils/sorts";

function BoardContent({ board }) {
  const orderedColumn = mapOrder(board?.columns, board?.columnOrderIds, "_id");

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
      <ListColumns columns={orderedColumn} />
    </Box>
  );
}

export default BoardContent;
