import { AppBar, Toolbar, Typography, Grid, Button } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();

  return (
    <AppBar position="relative">
      <Toolbar sx={{ backgroundColor: "#515151" }}>
        <Grid container justifyContent={"space-between"}>
          <Grid item container xs={4}>
            <GitHubIcon sx={{ mr: 2, fill: "black" }} />
            <Typography variant="h6" color="black" noWrap>
              My GitHub Search
            </Typography>
          </Grid>

          <Link to={location.pathname === "/" ? "/search" : "/"} style={{textDecoration: 'none'}}>
            <Button
              variant="contained"
              color="primary"
              //className={classes.button}
            >
              <Typography fontSize={"15px"}>
                {location.pathname === "/" ? "Search" : "Home"}
              </Typography>
            </Button>
          </Link>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
