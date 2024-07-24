import DashboardIcon from "@mui/icons-material/Dashboard";
import AddToDriveIcon from "@mui/icons-material/AddToDrive";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import Tooltip from "@mui/material/Tooltip";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";

const CHIP_STYLE = {
  color: "white",
  paddingX: "5px",
  borderRadius: "5px",
  backgroundColor: "transparent",
  ".MuiSvgIcon-root": {
    color: "white",
  },
  "&:hover": {
    backgroundColor: "primary.50",
  },
};

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
          overflowX: "auto",
          borderBottom: "2px solid white",
          bgcolor: (theme) => {
            return theme.palette.mode === "dark" ? "#34495e" : "#1976d2";
          },
          px: 2,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Chip
            icon={<DashboardIcon />}
            label="DashBoard"
            clickable
            onclick={() => {}}
            sx={CHIP_STYLE}
          />
          <Chip
            icon={<AddToDriveIcon />}
            label="Add to drive"
            clickable
            onclick={() => {}}
            sx={CHIP_STYLE}
          />
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Button
            variant="outlined"
            startIcon={<AddIcon />}
            sx={{
              color: "white",
              borderColor: "white",
              "&:hover": { borderColor: "white" },
            }}
          >
            Invite
          </Button>
          <AvatarGroup
            max={6}
            total={24}
            sx={{
              gap: "10px",
              "& .MuiAvatar-root": {
                height: 34,
                width: 34,
                fontSize: 16,
                color: "primary.main",
                cursor: "pointer",
                "&:first-of-type": {
                  bgcolor: "primary.light",
                },
                border: "none",
              },
            }}
          >
            <Tooltip title="Remy Sharp">
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </Tooltip>
            <Tooltip title="Remy Sharp">
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </Tooltip>
            <Tooltip title="Remy Sharp">
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </Tooltip>
            <Tooltip title="Remy Sharp">
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </Tooltip>
          </AvatarGroup>
        </Box>
      </Box>
    </>
  );
}

export default BoardBar;
