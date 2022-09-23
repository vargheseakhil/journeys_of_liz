import { Box, Typography } from "@mui/material";
import Copyright from "./Copyright";
import InstagramIcon from "@mui/icons-material/Instagram";

export default function Footer() {
    return (
        <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Thank you for visiting our blog
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Follow us on instagram to see more stories and reels
        </Typography>
        <Typography variant="h6" align="center" gutterBottom>
          <a href="https://www.instagram.com/varghesetheodore/" target="_blank">
            <InstagramIcon />
          </a>
        </Typography>
        <Copyright />
      </Box>
    )
}
