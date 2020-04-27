import React from 'react';
import classnames from 'classnames';
import { Box } from '@material-ui/core/';
import { gridStyle } from 'styles/global';
import { Parallax } from 'react-scroll-parallax';
import 'styles/global.css';

export default function ProjectSectionBox({ firstColumn, images, minHeight }) {
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
    <Box
      className={style.grid}
      style={{ minHeight: minHeight }}
      display="flex"
      alignItems="center"
    >
      {firstColumn > 0 && <Box width={0.08333 * firstColumn} />}

      {images.map(({ image, width, expanded, yOffset }, i) => (
        <Box
          key={i}
          width={!expanded ? 0.08333 : 0.08333 * width}
          className={style.gridItem}
          style={{
            padding: width === 5 ? '1% 2% 2%' : '1%',
            boxSizing: 'border-box',
          }}
        >
          <Parallax key={i} y={yOffset}>
            <img
              src={image}
              alt={image}
              className={classnames({
                [style.image]: true,
                [style.greyScale]: !expanded,
              })}
              onClick={() => setImg(i)}
            />
          </Parallax>
        </Box>
      ))}
    </Box>
  );
}
