import React from 'react';
import { Box } from '@material-ui/core/';
import { gridStyle } from 'styles/global';
import { AppContext } from 'App';

import 'styles/global.css';

export default function SectionStroke({ images }) {
  const {
    state: { columnWidth },
  } = React.useContext(AppContext);

  const [imageArr, setImages] = React.useState(images);
  const style = gridStyle();

  const setImg = (i) => {
    let imgs = imageArr;
    imgs[i].expanded = !imgs[i].expanded;
    setImages([...imgs]);
  };

  return (
    <Box className={style.grid} pt={20} style={{ boxSizing: 'border-box' }}>
      {imageArr.map(({ image, expanded }, i) => (
        <Box
          key={i}
          className={style.gridItem}
          width={expanded === true ? '100%' : columnWidth * 8}
          style={{ margin: '60px auto' }}
          onClick={() => setImg(i)}
        >
          <img src={image} alt={image} className={style.image} />
        </Box>
      ))}
    </Box>
  );
}
