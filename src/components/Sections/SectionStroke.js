import React from 'react';
import { Box, Grid } from '@material-ui/core/';
import { gridStyle } from 'styles/global';
import 'styles/global.css';

export default function SectionStroke({ images }) {
  const [imageArr, setImages] = React.useState(images);
  const style = gridStyle();

  const setImg = (i) => {
    let imgs = imageArr;
    imgs[i].expanded = !imgs[i].expanded;
    setImages([...imgs]);
  };

  const columnWidth =
    (window.innerWidth < 1200 ? window.innerWidth : 1200) / 12;

  return (
    <Box className={style.grid}>
      {imageArr.map(({ image, expanded }, i) => (
        <Box
          key={i}
          className={style.gridItem}
          width={expanded === true ? columnWidth * 12 : columnWidth * 8}
          style={{ margin: '60px auto' }}
          onClick={() => setImg(i)}
        >
          <img src={image} alt={image} className={style.image} />
        </Box>
      ))}
    </Box>

    // <Grid container spacing={0} className={style.grid} alignItems={'center'}>
    //   {imageArr.map(({ img, expanded }, i) => (
    //     <Grid
    //       item
    //       xs={expanded ? 12 : 8}
    //       key={i}
    //       className={style.gridItem}
    //       style={{ padding: '1%', border: '1px solid coral' }}
    //     >
    //       <img
    //         src={img}
    //         alt={img}
    //         className={style.image}
    //         onClick={() => setImg(i)}
    //       />
    //     </Grid>
    //   ))}
    // </Grid>
  );
}
