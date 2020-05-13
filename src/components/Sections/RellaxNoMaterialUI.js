import React from 'react';
import classnames from 'classnames';
import { RellaxWrapper } from 'react-rellax-wrapper';
import { Parallax } from 'react-scroll-parallax';

import { gridStyle } from 'styles/global';
import { makeStyles } from '@material-ui/core/';
import _ from 'lodash';
import 'styles/global.css';

const sizeStyle = makeStyles({
  width5: {
    width: 200,
    pointerEvents: 'all',
    transition: 'all .5s',
  },
  width5Expanded: {
    width: 400,
  },
  width7: {
    width: 300,
    pointerEvents: 'all',
    transition: 'all .5s',
  },
  width7Expanded: {
    width: 600,
  },
});

export default function RellaxNoMaterialUI({ images, rows, textOffset }) {
  let imgArr = [];
  if (rows) {
    rows.forEach((row) => row.images.forEach((img) => imgArr.push(img)));
    console.log(imgArr);
  }
  const [imageArr, setImages] = React.useState(rows ? imgArr : images);
  const style = gridStyle();
  const classes = sizeStyle();

  const setImg = (i) => {
    let imgs = _.cloneDeep(imageArr);

    imgs.forEach((img, _i) => {
      i === _i ? (img.expanded = !img.expanded) : (img.expanded = false);
    });
    setImages([...imgs]);
  };

  return (
    <div
      style={{
        height: '100vh',
        width: '100%',
        boxSizing: 'border-box',
        position: 'relative',
        pointerEvents: 'none',
        paddingLeft: textOffset * 5 + '%',
      }}
    >
      {imageArr &&
        imageArr.map(({ expanded, image, margin, width, y }, i) => (
          <div
            style={{
              height: '100%',
              position: 'absolute',
              zIndex: expanded ? 0 : 100,
              pointerEvents: 'none',
              boxSizing: 'border-box',
              padding: margin,
            }}
            key={i}
          >
            <Parallax y={y}>
              <div
                className={style.transition}
                onClick={() => setImg(i)}
                style={{
                  width: expanded === true ? width * 80 : width * 40,
                  pointerEvents: 'all',
                }}
                className={classnames({
                  [classes.width5]: width === 5,
                  [classes.width5Expanded]: width === 5 && expanded === true,
                  [classes.width7]: width === 7,
                  [classes.width7Expanded]: width === 7 && expanded === true,
                })}
              >
                <img
                  src={image}
                  alt={image}
                  style={{
                    width: '100%',
                    height: '100%',
                    boxShadow:
                      width !== 6 && '5px 5px 10px 5px rgba(0,0,0,0.27)',
                    cursor: 'pointer',
                  }}
                />
              </div>
            </Parallax>
          </div>
        ))}
    </div>
  );
}
