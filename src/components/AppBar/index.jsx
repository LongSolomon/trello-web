import Box from "@mui/material/Box";
import ModeSelect from "../ModeSelect";
function AppBar() {
  return (
    <>
      <Box
        sx={{
          width: "100vw",
          height: (theme) => {
            return theme.trelloCustom.appBarHeight;
          },
          backgroundColor: "primary.light",
          display: "flex",
          alignItems: "center",
        }}
      >
        <ModeSelect />
      </Box>
    </>
  );
}
export default AppBar;