import React from 'react';
import { Grid, makeStyles } from '@material-ui/core/';
import { gridStyle } from 'styles/global';
require('assets/fonts/stylesheet.css');

const menuItems = [
  {
    title: 'Lokoj',
    subtitle: 'places',
  },
  {
    title: 'Aferoj',
    subtitle: 'things',
  },
  {
    title: 'Bildoj',
    subtitle: 'images',
  },
  {
    title: 'The Artist',
    subtitle: 'la artisto',
  },
];

const useStyles = makeStyles((theme) => ({
  menu: {
    textAlign: 'center',
    color: theme.palette.text.primary,
    cursor: 'pointer',
  },
}));

export default function Menu({ showCategory, setCategory }) {
  const classes = gridStyle();
  const styles = useStyles();

  return (
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
          <p
            style={{
              fontFamily: 'd-dinregular, Ariel, Helvetica, sans-serif',
              letterSpacing: 4,
              textTransform: 'uppercase',
              fontSize: 12,
            }}
          >
            {title}
          </p>
          <p
            style={{
              fontFamily: 'd-dinregular, Ariel, Helvetica, sans-serif',
              letterSpacing: 4,
              fontSize: 12,
            }}
          >
            {subtitle}
          </p>
        </Grid>
      ))}
      <Grid item xs={4}></Grid>
    </Grid>
  );
}
