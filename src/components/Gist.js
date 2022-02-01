import React from "react";
import { Grid, Card, CardContent, Typography } from "@mui/material";

function Gist({ gists }) {
  return (
    
    <Grid container spacing={3}>
      {gists.map((gist) => (
        <Grid item xs={12} key={gist.id}>
          <Card>
            <CardContent>
            <a target="_blank" href={gist.git_pull_url} rel="noreferrer" style={{color:"black", textDecoration: 'none' }} >
              <Typography>{gist.id}</Typography>
              </a>
              {Object.keys(gist?.files).map((key, index) => (
                <p key={index}>{gist.files[key].filename}</p>
              ))}

              <Typography></Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default Gist;
