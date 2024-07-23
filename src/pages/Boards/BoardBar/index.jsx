import DashboardIcon from "@mui/icons-material/Dashboard";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
function BoardBar() {
  return (
    <>
      <Box
        sx={{
          width: "100vw",
          height: (theme) => theme.trelloCustom.boardBarHeight,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 2,
          overflow: "auto",
          borderTop: "1px solid #00bfa5",
          px: 2,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Chip
            icon={<DashboardIcon />}
            label="DashBoard"
            clickable
            onclick={() => {}}
          />
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}></Box>
      </Box>
    </>
  );
}

export default BoardBar;
