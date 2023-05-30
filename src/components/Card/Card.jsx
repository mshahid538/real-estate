import { useState } from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { AiFillStar } from "react-icons/all";
import { Data } from "../../constants/Data";
import { Grid } from "@mui/material";
import ModelBox from "../CardModel";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Cards() {
  const [expanded, setExpanded] = useState(false);
  const [model, setModel] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <Grid container spacing={2}>
        {Data.map((data) => {
          return (
            <Grid item lg={3} md={4} sm={6} xs={12} key={data.id}>
              <Card
                sx={{
                  maxWidth: 345,
                  minHeight: 345,
                  borderRadius: 6,
                  cursor: "pointer",
                }}
                key={data.id}
                onClick={() => setModel(!model)}
              >
                <CardMedia
                  component="img"
                  height="194"
                  image={data.img}
                  alt="Paella dish"
                />
                <CardContent>
                  <Typography variant="body2" fontWeight={10}>
                    {data.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {data.location}
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                  <IconButton>{data.price}/ night</IconButton>
                  <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                  >
                    <AiFillStar />
                    {data.price}
                  </ExpandMore>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>
      {model && <ModelBox />}
    </>
  );
}
