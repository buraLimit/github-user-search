import React, { useState, useEffect } from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { searchUsers } from "../users/state/usersActions";
import { useDispatch, connect } from "react-redux";
import {
  Typography,
  Grid,
  Button,
} from "@mui/material";

import { Avatar as MUIAvatar } from "@mui/material";
import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  avatar: {
    width: "60px",
    height: "60px",
    border: "2px dashed black",
    display: "block",
    marginRight: "8px",
  },
});

function SearchBar(props) {
  const classes = useStyles();
  const [searchQuery, setSearchQuery] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (searchQuery) {
        searchUsers(dispatch, searchQuery);
      }
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [searchQuery, dispatch]);

  return (
    <div>
      <Paper
        component="form"
        sx={{
          p: "2px 5px",
          display: "flex",
          alignItems: "center",
          mx: 10,
          my: 3,
          borderRadius: "30px",
          boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
          "&:hover": {
            opacity: "0.75",
          },
          backgroundColor: '#515151'
        }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search Images"
          onChange={(e) => setSearchQuery(e.target.value)}
          value={searchQuery}
        />
        <IconButton
          type="submit"
          sx={{ p: "10px" }}
          aria-label="search"
          onClick={() => searchUsers(searchQuery)}
        >
          <SearchIcon />
        </IconButton>
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      </Paper>

      <Grid container spacing={3} sx={{ px: 5 }}>
        {searchQuery &&
          props.props.users.search.map((u) => (
            <Grid item xs={6} md={4} key={u.id}>
              <Grid
                container
                justifyContent={"space-between"}
                alignItems={"center"}
                sx={{
                  backgroundColor: "#515151",
                  borderRadius: "5px",
                  padding: "10px",
                  flexDirection: { xs: "column", md: "row" },
                }}
              >
                <Grid
                  item
                  container
                  xs={12}
                  md={8}
                  flexWrap="nowrap"
                  justifyContent={"flex-start"}
                  alignItems={"center"}
                  sx={{ flexDirection: { xs: "column", md: "row" } }}
                >
                  <MUIAvatar
                    src={u.avatar_url}
                    alt={"cao"}
                    color={"blue"}
                    className={classes.avatar}
                  ></MUIAvatar>
                  <Typography variant="h6" component="div">
                    {u.login}
                  </Typography>
                </Grid>
                <Grid
                  item
                  container
                  xs={12}
                  md={4}
                  sx={{ justifyContent: { xs: "center", md: "flex-end" } }}
                >
                  <Link
                    to={`/search/${u.login}`}
                    style={{ textDecoration: "none" }}
                  >
                    <Button variant="contained" color="primary">
                      View
                    </Button>
                  </Link>
                </Grid>
              </Grid>
            </Grid>
          ))}
      </Grid>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    props: state,
  };
};

export default connect(mapStateToProps)(SearchBar);
