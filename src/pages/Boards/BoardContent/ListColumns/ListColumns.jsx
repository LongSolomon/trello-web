import { Box } from "@mui/material";
import Column from "./Column/Column";
import Button from "@mui/material/Button";
import NoteAddIcon from "@mui/icons-material/NoteAdd";

function ListColumns({ columns }) {
  return (
    <Box sx={{ display: "flex" }}>
      <Box
        sx={{ display: "flex", overflowX: "auto", overflowY: "hidden", gap: 6 }}
      >
        {columns?.map((column) => (
          <Column key={column._id} column={column} />
        ))}

        {/* <Column /> */}
      </Box>

      {/* Add new column */}
      <Box
        sx={{
          minWidth: "200px",
          maxWidth: "200px",
          mx: 2,
          borderRadius: "6px",
          height: "fit-content",
          bgcolor: "#ffffff3d",
        }}
      >
        <Button
          sx={{
            color: "black",
            width: "100%",
            justifyContent: "flex-start",
            pl: 2.5,
            py: 1,
          }}
          startIcon={<NoteAddIcon />}
        >
          Add new column
        </Button>
      </Box>
    </Box>
  );
}

export default ListColumns;
