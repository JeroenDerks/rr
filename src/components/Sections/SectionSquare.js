import React from 'react';
import { Grid } from '@material-ui/core/';
import { gridStyle } from 'styles/global';
import { AppContext } from 'App';
import 'styles/global.css';

export default function SectionSquare({ images }) {
  const {
    state: { minHeight },
  } = React.useContext(AppContext);

  const [imageArr, setImages] = React.useState(images);
  const style = gridStyle();

  const setImg = (i) => {
    let imgs = imageArr;
    imgs.forEach((img, _i) => {
      i === _i ? (img.expanded = !img.expanded) : (img.expanded = false);
    });
    setImages([...imgs]);
  };

  return (
    <Grid
      container
      spacing={0}
      className={style.grid}
      alignItems={'center'}
      style={{ minHeight: minHeight }}
    >
      {images.map(({ image, expanded }, i) => (
        <Grid
          item
          xs={!expanded ? 1 : 6}
          key={i}
          className={style.gridItem}
          style={{ padding: '1%' }}
        >
          <img
            src={image}
            alt={image}
            className={style.image}
            onClick={() => setImg(i)}
          />
        </Grid>
      ))}
    </Grid>
  );
}
