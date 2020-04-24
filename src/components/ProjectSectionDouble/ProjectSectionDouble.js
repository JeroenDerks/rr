import React from 'react';
import { Grid } from '@material-ui/core/';
import { gridStyle } from 'styles/global';
import 'styles/global.css';

const imageStyle = {
  transition: 'all .6s ',
  transitionTimingFunction: 'ease',
  cursor: 'pointer',
  padding: 10,
};

export default function ProjectSectionDouble({ rows, minHeight }) {
  const [imageRow, setRows] = React.useState(rows);
  const classes = gridStyle();

  const setImg = (i, j) => {
    let arr = imageRow;
    arr.forEach((row) => row.images.forEach((ob) => (ob.expanded = false)));
    arr[i].images[j].expanded = true;
    setRows([...arr]);
  };

  return (
    <>
      {imageRow &&
        imageRow.map((row, i) => (
          <Grid
            container
            spacing={0}
            className={classes.grid}
            style={{ minHeight: minHeight }}
            key={i}
            alignItems={i === 0 ? 'flex-end' : 'flex-start'}
          >
            {row.firstColumn > 0 && <Grid item xs={row.firstColumn}></Grid>}

            {row.images.map(({ image, width, expanded }, j) => (
              <Grid item xs={!expanded ? 1 : width} key={j} style={imageStyle}>
                <img
                  src={image}
                  alt={image}
                  style={{
                    width: '100%',
                    filter: !expanded && 'grayscale(70%)',
                  }}
                  onClick={() => setImg(i, j)}
                />
              </Grid>
            ))}
          </Grid>
        ))}
    </>
  );
}
