import AppsIcon from "@mui/icons-material/Apps";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import Badge from "@mui/material/Badge";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import SvgIcon from "@mui/material/SvgIcon";
import TextField from "@mui/material/TextField";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import { ReactComponent as TrelloIcon } from "../../assets/trello.svg";
import ModeSelect from "../ModeSelect";
import Profile from "./Menus/Profile";
import Recent from "./Menus/Recent";
import Started from "./Menus/Started";
import Template from "./Menus/Template";
import Workspaces from "./Menus/Workspaces";

function AppBar() {
  return (
    <>
      <Box
        px={2}
        sx={{
          width: "100vw",
          height: (theme) => {
            return theme.trelloCustom.appBarHeight;
          },
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 2,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <AppsIcon sx={{ color: "primary.main" }} />
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <SvgIcon
              component={TrelloIcon}
              inheritViewBox
              sx={{ color: "primary.main" }}
            />
            <Typography
              variant="span"
              sx={{
                color: "primary.main",
                fontWeight: "bold",
                fontSize: "1.2rem",
              }}
            >
              TrelloApp
            </Typography>
          </Box>
          <Workspaces />
          <Recent />
          <Started />
          <Template />
          <Button variant="outlined">Create</Button>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <TextField
            id="outlined-search"
            label="Search field"
            type="search"
            size="small"
          />
          <ModeSelect />
          <Tooltip title="Notifications">
            <Badge color="secondary" variant="dot" sx={{ cursor: "pointer" }}>
              <NotificationsNoneIcon />
            </Badge>
          </Tooltip>
          <Tooltip title="Help">
            <HelpOutlineIcon />
          </Tooltip>
          <Profile />
        </Box>
      </Box>
    </>
  );
}
export default AppBar;
