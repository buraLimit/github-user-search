import React from "react";
import { Grid, Card, CardContent, Typography } from "@mui/material";

import AccessibleIcon from "@mui/icons-material/Accessible";
import AccessibleForwardIcon from "@mui/icons-material/AccessibleForward";
import DeveloperModeIcon from "@mui/icons-material/DeveloperMode";
import BookIcon from "@mui/icons-material/Book";
import ApartmentIcon from "@mui/icons-material/Apartment";
import TwitterIcon from "@mui/icons-material/Twitter";
import EmailIcon from "@mui/icons-material/Email";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import FaceIcon from "@mui/icons-material/Face";

function Info({ info }) {
  const firstCard = [
    {
      label: "Name",
      value: info.name,
      icon: <FaceIcon />,
    },
    {
      label: "Bio",
      value: info.bio,
      icon: <ContactPageIcon />,
    },
    {
      label: "Blog",
      value: info.blog,
      icon: <ConnectWithoutContactIcon />,
    },
  ];

  const secondCard = [
    {
      label: "Email",
      value: info.email,
      icon: <EmailIcon />,
    },
    {
      label: "Company",
      value: info.company,
      icon: <ApartmentIcon />,
    },
    {
      label: "Twitter",
      value: info.twitter_username,
      icon: <TwitterIcon />,
    },
  ];

  const thirdCard = [
    {
      label: "Repositories",
      value: info.public_repos,
      icon: <BookIcon />,
    },
    {
      label: "Gists",
      value: info.public_gists,
      icon: <DeveloperModeIcon />,
    },
    {
      label: "Followers",
      value: info.followers,
      icon: <AccessibleIcon />,
    },
    {
      label: "Following",
      value: info.following,
      icon: <AccessibleForwardIcon />,
    },
  ];
  return (
    <Grid container spacing={3}>
      <Grid item xs={8}>
        <Card>
          <CardContent sx={{ svg: { color: "#0a1929" } }}>
            {firstCard.map((item) => (
              <Grid container padding={'10px 5px'} key={item.label}>
                {item.icon}
                <Typography>
                  {item.label}: {item.value}{" "}
                </Typography>
              </Grid>
            ))}
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={4}>
        <Card>
          <CardContent sx={{ svg: { color: "#0a1929" } }}>
            {secondCard.map((item) => (
              <Grid container padding={'10px 5px'} key={item.label}>
                {item.icon}
                <Typography>
                  {item.label}: {item.value}{" "}
                </Typography>
              </Grid>
            ))}
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12}>
        <Card>
          <CardContent sx={{ svg: { color: "#0a1929" } }}>
            {thirdCard.map((item) => (
              <Grid container padding={'10px 5px'} key={item.label}>
                {item.icon}
                <Typography>
                  {item.label}: {item.value}{" "}
                </Typography>
              </Grid>
            ))}
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export default Info;
