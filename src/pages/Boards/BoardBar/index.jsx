import Box from "@mui/material/Box";
function BoardBar() {
  return (
    <>
      <Box
        sx={{
          width: "100vw",
          height: (theme) => theme.trelloCustom.boardBarHeight,
          backgroundColor: "primary.dark",
          display: "flex",
          alignItems: "center",
        }}
      >
        Board Bar
      </Box>
    </>
  );
}

export default BoardBar;
