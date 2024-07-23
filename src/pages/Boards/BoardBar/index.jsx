import DashboardIcon from "@mui/icons-material/Dashboard";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import Tooltip from "@mui/material/Tooltip";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";

const CHIP_STYLE = {
  color: "primary.main",
  paddingX: "5px",
  borderRadius: "5px",
  backgroundColor: "white",
  "& .MuiSvgIcon-root": {
    color: "primary.main",
  },
  "&:hover": {
    backgroundColor: "primary.light",
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
            sx={CHIP_STYLE}
          />
          <Chip
            icon={<DashboardIcon />}
            label="DashBoard"
            clickable
            onclick={() => {}}
            sx={CHIP_STYLE}
          />
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Button variant="outlined" startIcon={<AddIcon></AddIcon>}>
            Invite
          </Button>
          <AvatarGroup
            max={6}
            total={24}
            sx={{
              "& .MuiAvatar-root": {
                height: 34,
                width: 34,
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
