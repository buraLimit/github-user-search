import React, { useState, useEffect } from "react";
import { Typography, Grid, Card, Tabs, Tab, Container } from "@mui/material";

import { styled } from "@mui/material/styles";
import { Avatar as MUIAvatar } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Repository from "../components/Repository";
import Info from "../components/Info";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import BookIcon from "@mui/icons-material/Book";
import StarIcon from "@mui/icons-material/Star";
import DeveloperModeIcon from "@mui/icons-material/DeveloperMode";

import { useDispatch, connect } from "react-redux";
import Gist from "../components/Gist";
import {
  getUser,
  getUserRepo,
  getUserGists,
  getUserStar,
} from "../users/state/usersActions";
import { useParams } from "react-router-dom";

const useStyles = makeStyles({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  avatar: {
    width: "170px",
    height: "170px",
    border: "2px dashed black",
    display: "block",
    position: "absolute",
    top: "5%",
    left: "50%",
    transform: "translateX(-50%)",
  },
});

const TabsWrapperStyle = styled("div")(({ theme }) => ({
  zIndex: 9,
  bottom: 0,
  width: "80%",
  display: "flex",
  justifyContent: "center",
  position: "absolute",
  backgroundColor: theme.palette.secondary,
  borderTop: `2px solid ${theme.palette.primary.main}`,
}));

function Profile(props) {
  const { userId } = useParams();

  const thisUser = () => {
    if (props.myprofile) {
      return props.myprofile;
    } else if (userId) {
      return userId;
    }
  };

  const [currentTab, setCurrentTab] = useState("info");
  const classes = useStyles();

  const handleChangeTab = (newValue) => {
    setCurrentTab(newValue);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    getUser(dispatch, thisUser());
    getUserRepo(dispatch, thisUser());
    getUserGists(dispatch, thisUser());
    getUserStar(dispatch, thisUser());
  }, [dispatch, userId]);

  const PROFILE_TABS = [
    {
      value: "info",
      icon: <AccountBoxIcon width={20} height={20} />,
      component: <Info info={props.props.users.info} />,
    },
    {
      value: "repositories",
      icon: <BookIcon width={20} height={20} />,
      component: <Repository repos={props.props.users.repos} />,
    },
    {
      value: "starred",
      icon: <StarIcon width={20} height={20} />,
      component: !!props.props.users.starred.length ? (
        <Repository repos={props.props.users.starred} />
      ) : (
        <h1>User haven't starred anything</h1>
      ),
    },
    {
      value: "gists",
      icon: <DeveloperModeIcon width={20} height={20} />,
      component:
        !!Object.keys(props.props.users.gists).length ? (
          <Gist gists={props.props.users.gists} />
        ) : (
          <h1>User doesn't have gists</h1>
        ),
    },
  ];

  return (
    <div>
      <Container>
        <Card
          sx={{
            mt: 3,
            mb: 3,
            height: 300,
            position: "relative",
          }}
          className={classes.container}
        >
          <MUIAvatar
            sx={{}}
            src={props.props.users.info.avatar_url}
            alt={"cao"}
            color={"blue"}
            className={classes.avatar}
          ></MUIAvatar>
          <Typography
            sx={{
              display: "block",
              position: "absolute",
              top: "65%",
              left: "50%",
              transform: "translateX(-50%)",
            }}
            variant="h6"
            color="black"
            noWrap
          >
            {props.props.users.info.login}
          </Typography>
          <TabsWrapperStyle>
            <Tabs
              value={currentTab}
              scrollButtons="auto"
              variant="scrollable"
              allowScrollButtonsMobile
              onChange={(e, value) => handleChangeTab(value)}
            >
              {PROFILE_TABS.map((tab) => (
                <Tab
                  disableRipple
                  key={tab.value}
                  value={tab.value}
                  icon={tab.icon}
                  label={tab.value}
                  sx={{ textTransform: "all-caps", flexDirection: "row" }}
                />
              ))}
            </Tabs>
          </TabsWrapperStyle>
        </Card>

        <Grid container spacing={3} justifyContent={"center"} sx={{ p: 0 }}>
          {PROFILE_TABS.map((tab) => {
            const isMatched = tab.value === currentTab;
            return (
              isMatched && (
                <Grid item key={tab.value} sx={{ width: "100%" }}>
                  {tab.component}
                </Grid>
              )
            );
          })}
        </Grid>
      </Container>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    props: state,
  };
};

export default connect(mapStateToProps)(Profile);
