import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import AppBar from "../../components/AppBar";

function Board() {
  return (
    <Container disableGutters maxWidth={false} sx={{ height: "100vh" }}>
      <AppBar />
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
      <Box
        sx={{
          backgroundColor: "primary.main",
          width: "100vw",
          height: (theme) => {
            return `calc(100vh - ${theme.trelloCustom.appBarHeight} - ${theme.trelloCustom.boardBarHeight})`;
          },
        }}
      >
        Board Content
      </Box>
    </Container>
  );
}
export default Board;
