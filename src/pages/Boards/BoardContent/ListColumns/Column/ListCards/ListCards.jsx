import Box from "@mui/material/Box";

import Card from "./Card/Card";

const COLUMN_HEADER_HEIGHT = "50px";
const COLUMN_FOOTER_HEIGHT = "56px";

function ListCards({ cards }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        p: 2,
        gap: 1,
        overflowX: "hidden",
        overflowY: "auto",
        // flexShrink: 0,
        maxHeight: (theme) => {
          return `calc(${
            theme.trelloCustom.boardContentHeight
          } - ${COLUMN_HEADER_HEIGHT} - ${COLUMN_FOOTER_HEIGHT} - ${theme.spacing(
            5
          )})`;
        },
        // overflow: "unset",
      }}
    >
      {cards?.map((card) => {
        return <Card key={card._id} card={card} />;
      })}
      <Card />
    </Box>
  );
}

export default ListCards;
