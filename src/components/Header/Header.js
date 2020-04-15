import React from "react";
import { Grid, Typography, makeStyles } from "@material-ui/core/";
import logo from "assets/images/header_logo.png";
import { gridStyle } from "styles/global";

const menuItems = [
  {
    title: "Lokoj",
    subtitle: "places",
  },
  {
    title: "Aferoj",
    subtitle: "things",
  },
  {
    title: "Bildoj",
    subtitle: "images",
  },
  {
    title: "The Artist",
    subtitle: "la artisto",
  },
];

const logoStyle= {
  width: "100%",
  padding: "0px 80px",
  boxSizing: "border-box"
}

const useStyles = makeStyles((theme) => ({
  menu: {
    textAlign: "center",
    color: theme.palette.text.primary,
    cursor: "pointer",
  },
}));

export default function Header({ showCategory, setCategory }) {
  const classes = gridStyle();
  const styles = useStyles();

  return (
    <>
      <Grid
        container
        spacing={0}
        className={classes.grid}
        onMouseEnter={() => showCategory(null)}
        onClick={() => setCategory()}
      >
        <Grid item xs={4}></Grid>
        <Grid item xs={4}>
          <img src={logo} alt={"header logo"} style={logoStyle} />
        </Grid>
        <Grid item xs={4}></Grid>
      </Grid>
      <Grid container spacing={0} className={classes.grid}>
        <Grid item xs={4}></Grid>
        {menuItems.map(({ title, subtitle }, i) => (
          <Grid
            item
            xs={1}
            key={i}
            className={styles.menu}
            onClick={() => setCategory(i)}
            onMouseEnter={() => showCategory(i)}
          >
            <Typography variant="subtitle1">{title}</Typography>
            <Typography variant="subtitle2">{subtitle}</Typography>
          </Grid>
        ))}
        <Grid item xs={4}></Grid>
      </Grid>
    </>
  );
}
