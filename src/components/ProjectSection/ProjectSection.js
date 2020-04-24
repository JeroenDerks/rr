import React from 'react';
import { Grid } from '@material-ui/core/';
import { gridStyle } from 'styles/global';
import 'styles/global.css';

const imageStyle = {
  transition: 'all .5s ',
  transitionTimingFunction: 'ease',
  cursor: 'pointer',
  padding: 10,
};

export default function ProjectSection({ firstColumn, images, minHeight }) {
  const [imageArr, setImages] = React.useState(images);
  const classes = gridStyle();

  const setImg = (i) => {
    let imgs = imageArr;
    imgs.forEach((img, _i) => {
      i === _i ? (img.expanded = true) : (img.expanded = false);
    });
    setImages([...imageArr, imgs]);
  };

  return (
    <Grid
      container
      spacing={0}
      className={classes.grid}
      style={{ minHeight: minHeight }}
    >
      <Grid item xs={firstColumn} />

      {images.map(({ image, width, expanded }, i) => (
        <Grid item xs={!expanded ? 1 : width} key={i} style={imageStyle}>
          <img
            src={image}
            alt={image}
            style={{
              width: '100%',
              filter: !expanded && 'grayscale(70%)',
            }}
            onClick={() => setImg(i)}
          />
        </Grid>
      ))}
    </Grid>
  );
}
