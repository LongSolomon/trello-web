import Typography from "@mui/material/Typography";

import Button from "@mui/material/Button";

import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Card as MuiCard } from "@mui/material";
import { Attachment, Comment } from "@mui/icons-material";
import GroupIcon from "@mui/icons-material/Group";
function Card() {
  return (
    <MuiCard
      sx={{
        cursor: "pointer",
        boxShadow: "0 1px 1px rgba(0,0,0,0.2)",
        flexShrink: 0,
      }}
    >
      <CardMedia
        sx={{ height: 140 }}
        image="https://www.australiangeographic.com.au/wp-content/uploads/2021/09/blue-crested-lizard-1.jpg"
        title="green iguana"
      />
      <CardContent sx={{ p: 1.5, "&:last-child": { p: 1.5 } }}>
        <Typography>Lizard</Typography>
      </CardContent>
      <CardActions sx={{ p: "0 4px 8px 4px" }}>
        <Button size="small" startIcon={<GroupIcon />}>
          20
        </Button>
        <Button size="small" startIcon={<Comment />}>
          15
        </Button>
        <Button size="small" startIcon={<Attachment />}>
          10
        </Button>
      </CardActions>
    </MuiCard>
  );
}

export default Card;
