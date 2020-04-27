import React from 'react';
import classnames from 'classnames';
import { Grid } from '@material-ui/core/';
import { gridStyle } from 'styles/global';
import 'styles/global.css';

export default function ProjectSection({ firstColumn, images, minHeight }) {
  const [imageArr, setImages] = React.useState(images);
  const style = gridStyle();

  const setImg = (i) => {
    let imgs = imageArr;
    imgs.forEach((img, _i) => {
      i === _i ? (img.expanded = !img.expanded) : (img.expanded = false);
    });
    setImages([...imageArr, imgs]);
  };

  return (
    <Grid
      container
      spacing={0}
      className={style.grid}
      style={{ minHeight: minHeight }}
      alignItems={'center'}
    >
      {firstColumn > 0 && <Grid item xs={firstColumn} />}

      {images.map(({ image, width, expanded }, i) => (
        <Grid
          item
          xs={!expanded ? 1 : width}
          key={i}
          className={style.gridItem}
          style={{ padding: width === 5 ? '2%' : '1%' }}
        >
          {console.log(width)}
          <img
            src={image}
            alt={image}
            className={classnames({
              [style.image]: true,
              [style.greyScale]: !expanded,
            })}
            onClick={() => setImg(i)}
          />
        </Grid>
      ))}
    </Grid>
  );
}
