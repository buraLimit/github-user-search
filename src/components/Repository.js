import React from "react";
import {
  Card,
  Typography,
  CardContent,
  CardActions,
  Grid,
  Chip,
  Stack,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(theme=> ({
  scroll: {
    "&::-webkit-scrollbar": {
      width: "0.4em",
    },
    "&::-webkit-scrollbar-track": {
      boxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
      webkitBoxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: theme.palette.primary.dark,
      borderRadius: "5px",
  }
}
}));

function Repository({ repos }) {
  const classes = useStyles();
  return (
    <Grid container spacing={3}>
      {repos.map((rep) => (

        

        <Grid item xs={6} key={rep.id}>
          <Card
            sx={{ minWidth: 275, height: 220, overflowY: "auto" }}
            className={classes.scroll}
          >
            <CardContent>
            <a target="_blank" href={rep.html_url} rel="noreferrer" style={{color:"black", textDecoration: 'none' }} >
              <Typography variant="h4" component="div" >
              
                {rep.name}
               
              </Typography>
              </a>
              <Stack direction="row" justifyContent="space-between">
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  {rep.language ? rep.language : "Empty rep"}
                </Typography>
                <Chip label={!rep.private && "Public"} variant="outlined" color='primary'/>
              </Stack>
              <Typography variant="body2">
                <br />
                {rep.description}
              </Typography>
            </CardContent>
            <CardActions></CardActions>
          </Card>
        </Grid>
       
      ))}
    </Grid>
  );
}

export default Repository;
