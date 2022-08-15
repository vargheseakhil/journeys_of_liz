import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import CameraIcon from "@mui/icons-material/PhotoCamera";
import ChildFriendlyIcon from "@mui/icons-material/ChildFriendly";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { cards } from "../src/constants";
import Flag from "react-world-flags";
import Footer from "../src/components/Footer";
import Router from "next/router";
import FavoriteIcon from '@mui/icons-material/Favorite';

// const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const theme = createTheme();

export default function Album() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <CameraIcon sx={{ mr: 2 }} />
          <Typography variant="h6" color="inherit" noWrap>
            Liz's travel blog
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <Box sx={{ bgcolor: "background.paper", pt: 8, pb: 6 }}>
          <Container maxWidth="sm">
            <Box sx={{ display: "flex" }}>
              <Typography
                component="h1"
                variant="h2"
                align="center"
                color="text.primary"
                gutterBottom
              >
                Journeys of Liz!!
                {/* <CardMedia
                component="img"
                sx={{
                  // 16:9
                  // pt: '56.25%'
                  maxHeight: 200,
                }}
                image="https://ik.imagekit.io/c0nso4w1lm/lizTravelDP_b7xxPSpy0?ik-sdk-version=javascript-1.4.3&updatedAt=1660315040190"
                alt="liz baby"
              /> */}
              </Typography>
              <ChildFriendlyIcon sx={{ ml: 2, width: 75, height: 75 }} />
            </Box>

            <Typography
              variant="h5"
              align="center"
              color="text.secondary"
              paragraph
            >
              Here is the highlights of our journeys so far. The countries
              visited, beatiful moments of joy. Foods tried and the main
              attractions of cities. Most useful for families with Kids.
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained">List of places</Button>
              <Button variant="outlined">Social media posts</Button>
            </Stack>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map(({ country, city, coverPic, travelDate, code }) => (
              <Grid item key={city} xs={12} sm={6} md={4}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      // pt: '56.25%',
                      minHeight: 350,
                    }}
                    image={coverPic}
                    alt={city}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {city}, {country} <Flag code={code} height="16" />
                    </Typography>
                    <Typography>Travel Date: {travelDate}</Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      size="small"
                      onClick={() => {
                        Router.push(`/city/${city}`);
                      }}
                    >
                      View
                    </Button>
                    <Button size="small">Like</Button>
                    {/* <FavoriteIcon /> */}
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      <Footer />
    </ThemeProvider>
  );
}
