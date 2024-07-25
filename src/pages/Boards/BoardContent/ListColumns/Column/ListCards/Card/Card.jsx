import Typography from "@mui/material/Typography";

import Button from "@mui/material/Button";

import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Card as MuiCard } from "@mui/material";
import { Attachment, Comment } from "@mui/icons-material";
import GroupIcon from "@mui/icons-material/Group";
function Card({ card }) {
  return (
    <MuiCard
      sx={{
        cursor: "pointer",
        boxShadow: "0 1px 1px rgba(0,0,0,0.2)",
        flexShrink: 0,
      }}
    >
      {card?.cover && <CardMedia sx={{ height: 140 }} image={card.cover} />}

      <CardContent sx={{ p: 1.5, "&:last-child": { p: 1.5 } }}>
        <Typography variant="body">{card?.title}</Typography>
        <Typography variant="body2" color="gray">
          The content of the card
        </Typography>
      </CardContent>
      <CardActions sx={{ p: "0 4px 8px 4px" }}>
        {/* {0 && 6} */}
        {!!card?.memberIds?.length && (
          <Button size="small" startIcon={<GroupIcon />}>
            {card?.memberIds?.length}
          </Button>
        )}

        {!!card?.comments?.length && (
          <Button size="small" startIcon={<Comment />}>
            {card?.comments?.length}
          </Button>
        )}

        {!!card?.attachments?.length && (
          <Button size="small" startIcon={<Attachment />}>
            {card?.attachments?.length}
          </Button>
        )}
      </CardActions>
    </MuiCard>
  );
}

export default Card;
