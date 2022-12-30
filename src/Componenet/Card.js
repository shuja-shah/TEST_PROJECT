import { Grid } from "@mui/material";
import "./card.css";
import image1 from "../Assets/Image1.jpg";

const Card = () => (
  <Grid
    container
    justifyContent="center"
    alignItems="center"
    direction="column"
    sx={{ height: "100%", width: "100%" }}
  >
    <Grid
      item
      xs={12}
      sx={{
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4,
        height: "100%",
        width: "100%",
        boxShadow: "0 0 10px #000",
        maxWidth: 800,
      }}
    >
      <img
        alt="cardImg"
        src={image1}
        style={{
          height: "auto",
          width: "100%",
          objectFit: "contain",
          objectPosition: "center",
          borderRadius: 4,
          // border: "1px solid #000",
          boxShadow: "0 0 10px #000",
        }}
      />
    </Grid>
  </Grid>
);
export default Card;
