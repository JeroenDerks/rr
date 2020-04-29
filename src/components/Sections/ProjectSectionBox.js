import React from 'react';
import classnames from 'classnames';
import { Box } from '@material-ui/core/';
import { gridStyle } from 'styles/global';
import { Parallax } from 'react-scroll-parallax';
import 'styles/global.css';
import { useController } from 'react-scroll-parallax';

export default function ProjectSectionBox({
  firstColumn,
  images,
  minHeight,
  title,
}) {
  const id = title.replace(/\W/g, '');
  const [imageArr, setImages] = React.useState(images);
  const style = gridStyle();
  const { parallaxController } = useController();

  console.log(parallaxController);
  const setImg = (i) => {
    let imgs = imageArr;
    imgs.forEach((img, _i) => {
      i === _i ? (img.expanded = !img.expanded) : (img.expanded = false);
    });
    setImages([...imageArr, imgs]);
  };

  const Rellax = require('rellax');
  var rellax = new Rellax('.rellax', {
    speed: -2,
    center: true,
    wrapper: '#' + id,
    round: true,
    vertical: true,
    horizontal: false,
  });

  const columnWidth =
    (window.innerWidth < 1200 ? window.innerWidth : 1200) / 12;

  return (
    <div
      id={id}
      className={style.grid}
      style={{
        minHeight: minHeight,
        display: 'flex',
        alignItems: 'center',
        border: '1px solid grey',
      }}
    >
      {firstColumn > 0 && <div style={{ width: columnWidth * firstColumn }} />}

      {images.map(({ image, width, expanded, yOffset }, i) => (
        <div
          key={i}
          className={i === 1 ? 'rellax' : ''}
          style={{
            padding: width === 5 ? '1% 2% 2%' : '1%',
            boxSizing: 'border-box',
            width: !expanded ? columnWidth : columnWidth * width,
            display: 'inline-block',
          }}
        >
          <img
            src={image}
            alt={image}
            className={classnames({
              [style.image]: true,
              [style.greyScale]: !expanded,
            })}
            onClick={() => setImg(i)}
          />
        </div>
      ))}
    </div>
  );
}
