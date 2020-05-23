import React from 'react';
import { Grid, makeStyles } from '@material-ui/core/';
import { gridStyle } from 'styles/global';
import { AppContext } from 'App';
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

export default function Menu() {
  const {
    actions: { highligtCategory, resetHighlighting, selectCategory },
  } = React.useContext(AppContext);

  const classes = gridStyle();
  const styles = useStyles();

  return (
    <Grid
      container
      spacing={0}
      className={classes.grid}
      onMouseLeave={() => resetHighlighting()}
    >
      <Grid item xs={12} sm={2} lg={4}></Grid>
      {menuItems.map(({ title, subtitle }, i) => (
        <Grid
          item
          sm={2}
          lg={1}
          xs={6}
          key={i}
          className={styles.menu}
          onClick={() => selectCategory(i)}
          onMouseEnter={() => highligtCategory(i)}
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
      <Grid item xs={12} sm={2} lg={4}></Grid>
    </Grid>
  );
}
