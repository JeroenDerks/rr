import React from 'react';
import { Grid } from '@material-ui/core/';
import logo from 'assets/images/header_logo.png';
import { gridStyle } from 'styles/global';

require('assets/fonts/stylesheet.css');

const logoStyle = {
  width: '100%',
  padding: '0px 80px',
  boxSizing: 'border-box',
};

export default function Logo({ showCategory, setCategory }) {
  const classes = gridStyle();

  return (
    <Grid
      container
      spacing={0}
      className={classes.grid}
      onMouseEnter={() => showCategory(null)}
      onClick={() => setCategory()}
    >
      <Grid item xs={4}></Grid>
      <Grid item xs={4}>
        <img src={logo} alt={'header logo'} style={logoStyle} />
        <p
          style={{
            textAlign: 'center',
            fontFamily: 'd-dinregular',
            letterSpacing: 4,
            color: '#333',
            lineHeight: 0,
            fontSize: 12,
          }}
        >
          The allegorical minimalist
        </p>
      </Grid>
      <Grid item xs={4}></Grid>
    </Grid>
  );
}
