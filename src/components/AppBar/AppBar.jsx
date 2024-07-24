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
import ModeSelect from "../ModeSelect/ModeSelect";
import Profile from "./Menus/Profile";
import Recent from "./Menus/Recent";
import Started from "./Menus/Started";
import Template from "./Menus/Template";
import Workspaces from "./Menus/Workspaces";
import AddBoxIcon from "@mui/icons-material/AddBox";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";

function AppBar() {
  const [searchValue, setSearchValue] = useState("");
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
          overflowX: "auto",
          overflowY: "hidden",
          bgcolor: (theme) => {
            return theme.palette.mode === "dark" ? "#2c3e50" : "#1565c0";
          },
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <AppsIcon sx={{ color: "white" }} />
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <SvgIcon
              component={TrelloIcon}
              inheritViewBox
              sx={{ color: "white" }}
            />
            <Typography
              variant="span"
              sx={{
                color: "white",
                fontWeight: "bold",
                fontSize: "1.2rem",
              }}
            >
              TrelloApp
            </Typography>
          </Box>
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 1 }}>
            <Workspaces />
            <Recent />
            <Started />
            <Template />
            <Button
              startIcon={<AddBoxIcon />}
              sx={{
                color: "white",
                border: "none",
                "&:hover": { border: "none" },
              }}
              variant="outlined"
            >
              Create
            </Button>
          </Box>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <TextField
            id="outlined-search"
            label="Search field"
            type="text"
            size="small"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{ color: "white" }} />
                </InputAdornment>
              ),
              endAdornment: (
                <CloseIcon
                  fontSize="small"
                  sx={{
                    color: searchValue ? "white" : "transparent",
                    cursor: "pointer",
                  }}
                  onClick={() => setSearchValue("")}
                />
              ),
            }}
            sx={{
              minWidth: "120px",
              maxWidth: "180px",
              "& input": {
                color: "white",
              },
              "& label, & label.Mui-focused": {
                color: "white",
              },
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "white",
                },
                "&:hover fieldset": {
                  borderColor: "white",
                },
                // "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                //   borderColor: "black",
                // },
                "&.Mui-focused fieldset": {
                  borderColor: "white",
                },
              },
            }}
          />
          <ModeSelect />
          <Tooltip title="Notifications">
            <Badge color="secondary" variant="dot" sx={{ cursor: "pointer" }}>
              <NotificationsNoneIcon sx={{ color: "white" }} />
            </Badge>
          </Tooltip>
          <Tooltip title="Help">
            <HelpOutlineIcon sx={{ color: "white" }} />
          </Tooltip>
          <Profile />
        </Box>
      </Box>
    </>
  );
}
export default AppBar;
