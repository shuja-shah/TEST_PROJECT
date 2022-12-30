import { Box, Grid } from '@mui/material';
import './card.css';
import { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Rating from '@mui/material/Rating';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import image1 from '../Assets/Image1.jpg';
import image2 from '../Assets/Image2.png';
import PercentageW from '../Assets/PercentageW.png';

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
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '0.5rem',
          color: '#fff',
          fontFamily: 'Lato',
          padding: '1rem 0',

          letterSpacing: 3,
        }}
      >
        <Typography
          variant="h4"
          sx={{ color: '#fff', fontFamily: 'Lato', letterSpacing: 3 }}
        >
          {days < 10 ? `0${days}` : days}
        </Typography>
        DAYS
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '0.5rem',
          color: '#fff',
          fontFamily: 'Lato',
          letterSpacing: 3,
        }}
      >
        <Typography
          variant="h4"
          sx={{ color: '#fff', fontFamily: 'Lato', letterSpacing: 3 }}
        >
          {hours < 10 ? `0${hours}` : hours}
        </Typography>
        HOURS
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '0.5rem',
          color: '#fff',
          fontFamily: 'Lato',
          letterSpacing: 3,
        }}
      >
        <Typography
          variant="h4"
          sx={{ color: '#fff', fontFamily: 'Lato', letterSpacing: 3 }}
        >
          {minutes < 10 ? `0${minutes}` : minutes}
        </Typography>
        MINUTES
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '0.5rem',
          color: '#fff',
          fontFamily: 'Lato',
          letterSpacing: 3,
        }}
      >
        <Typography
          variant="h4"
          sx={{ color: '#fff', fontFamily: 'Lato', letterSpacing: 3 }}
        >
          {seconds}
        </Typography>
        SECONDS
      </Box>
    </Grid>
  );
};

const CardData = () => {
  const [num, setNum] = useState(1);
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      direction="column"
      sx={{
        height: '100%',
        width: '100%',
        position: 'relative',
        background:
          'linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.8) 100%)',
        borderRadius: '1rem',
        gap: '1rem',

        '&::before': {
          content: "''",
          position: 'absolute',
          width: '100%',
          height: '100%',
          top: 0,
          left: 0,
          background:
            num === 1
              ? `url(${image1}) no-repeat center center/cover`
              : `url(${image2}) no-repeat center center/cover`,
          borderRadius: '1rem',
          zIndex: -1,
        },
      }}
    >
      <Grid
        item
        sx={{
          height: '100%',
          width: '100%',
          maxWidth: 800,
        }}
      >
        <CountDown />
      </Grid>
      <Grid
        item
        container
        justifyContent="flex-end"
        alignItems="center"
        sx={{
          padding: '1rem',
        }}
      >
        <Rating
          max={1}
          icon={<FavoriteIcon fontSize="inherit" />}
          emptyIcon={(
            <FavoriteBorderIcon
              fontSize="inherit"
              color="#fff"
              precision={0.5}
            />
          )}
        />
      </Grid>
      <Grid item container justifyContent="space-between" alignItems="center">
        <ChevronLeftIcon
          sx={{
            color: '#fff',
            fontSize: 50,
            cursor: 'pointer',
            '&:hover': {
              color: '#fff',
              transform: 'scale(1.2)',
              transition: 'transform 0.5s',
            },
          }}
          onClick={() => setNum(1)}
        />
        <ChevronRightIcon
          sx={{
            color: '#fff',
            fontSize: 50,
            cursor: 'pointer',
            '&:hover': {
              color: '#fff',
              transform: 'scale(1.2)',
              transition: 'transform 0.5s',
            },
          }}
          onClick={() => setNum(2)}
        />
      </Grid>
      <Grid justifyContent="space-around" alignItems="center" container item>
        <Grid item>
          <img
            src={PercentageW}
            alt="percentage"
            style={{
              width: '150px',
              height: 'auto',
            }}
          />
        </Grid>
        <Grid item>
          <Box
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '1rem',
              width: '250px',
            }}
          >
            <h4
              style={{
                color: '#fff',
                fontFamily: 'Lato',
                fontSize: '0.8rem',
                letterSpacing: '0.5px',
                textTransform: 'uppercase',
                fontWeight: '400',
              }}
            >
              $ 5,000,000
            </h4>

            <h4
              style={{
                color: '#fff',
                fontFamily: 'Lato',
                fontSize: '1rem',
                letterSpacing: '-0.5px',
                fontWeight: '500',
              }}
            >
              Sotheby&apos;s
            </h4>
          </Box>
        </Grid>
      </Grid>
      <Grid
        item
        container
        justifyContent="space-between"
        alignItems="center"
        sx={{
          padding: '1rem',
          width: '100%',
        }}
      >
        <h4 className="typography">Shelton Streen</h4>
        <h4 className="typography">Covenent Garden</h4>
        <h4 className="typography">London</h4>
        <h4 className="typography">Wc2H</h4>
        <h4 className="typography">United Kingdom</h4>
      </Grid>
      <div
        item
        style={{
          width: '100%',
          height: '2rem',
          backgroundColor: '#fff',
        }}
      />
      <Grid
        item
        container
        justifyContent="space-between"
        alignItems="center"
        sx={{
          padding: '1rem',
          width: '100%',
          borderBottomLeftRadius: 4,
          borderBottomRightRadius: 4,
        }}
      >
        <h4 className="typography2">$25.0 USD</h4>
        <h4 className="typography2">BUY Entry now</h4>
      </Grid>
    </Grid>
  );
};

const Card = () => (
  <section
    style={{
      height: '100%',
      width: '600px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '0.5rem',
      color: '#fff',
      padding: '2rem',
      margin: '30px auto',
    }}
  >
    <CardData />
  </section>
);

export default Card;
