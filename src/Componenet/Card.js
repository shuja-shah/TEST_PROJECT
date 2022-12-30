import { Box, Grid } from "@mui/material";
import "./card.css";
import image1 from "../Assets/Image1.jpg";
import { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";

const CountDown = () => {
  const [days, setDays] = useState(78);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          if (hours === 0) {
            if (days === 0) {
              clearInterval(interval);
            } else {
              setDays(days - 1);
              setHours(23);
              setMinutes(59);
              setSeconds(59);
            }
          } else {
            setHours(hours - 1);
            setMinutes(59);
            setSeconds(59);
          }
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [seconds, minutes, hours, days]);

  return (
    <Grid container justifyContent="space-around" alignItems="center">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "0.5rem",
        }}
      >
        <Typography variant="h4" sx={{ color: "#fff", fontFamily: "Lato" }}>
          {days < 10 ? "0" + days : days}:{" "}
        </Typography>
        DAYS
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "0.5rem",
        }}
      >
        <Typography variant="h4" sx={{ color: "#fff", fontFamily: "Lato" }}>
          {hours < 10 ? "0" + hours : hours} :
        </Typography>
        HOURS
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "0.5rem",
        }}
      >
        <Typography variant="h4" sx={{ color: "#fff", fontFamily: "Lato" }}>
          {minutes < 10 ? "0" + minutes : minutes} :
        </Typography>
        MINUTES
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "0.5rem",
        }}
      >
        <Typography variant="h4" sx={{ color: "#fff", fontFamily: "Lato" }}>
          {seconds}
        </Typography>
        SECONDS
      </Box>
    </Grid>
  );
};

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
        background: "linear-gradient(90deg, #000000 0%, #434343 100%)",
      }}
    >
      {/* <img
        alt="cardImg"
        src={image1}
        style={{
          height: "auto",
          width: "100%",
          objectFit: "contain",
          objectPosition: "center",
          borderRadius: 4,
          boxShadow: "0 0 10px #000",
        }}
      /> */}
      <CountDown />
    </Grid>
  </Grid>
);
export default Card;
