import React from 'react';
import _ from 'lodash';
import PlusIcon from 'assets/images/plus-icon-stroked.svg';
import { gridStyle } from 'styles/global';
import { Parallax } from 'react-scroll-parallax';
import { useController } from 'react-scroll-parallax';
import { AppContext } from 'App';

import 'styles/global.css';

export default function RellaxNoMaterialUI({ images, textOffset }) {
  const {
    state: { columnWidth },
  } = React.useContext(AppContext);

  const { parallaxController } = useController();

  React.useLayoutEffect(() => {
    const handler = () => parallaxController.update();
    window.addEventListener('load', handler);
    return () => window.removeEventListener('load', handler);
  }, [parallaxController]);

  const [imageArr, setImages] = React.useState(images);
  const style = gridStyle();

  const setImg = (i) => {
    let imgs = _.cloneDeep(imageArr);
    imgs.forEach((img, _i) => {
      if (i === _i) {
        img.expanded = !img.expanded;
      } else {
        img.expanded = false;
      }
    });
    setImages([...imgs]);
  };

  const imageToFullscreen = (e, i) => {
    e.stopPropagation();

    const { x, y, width, height } = e.target.parentNode.getBoundingClientRect();

    const offsetX = width + x - window.innerWidth / 2;
    const offsetY = height + y - window.innerHeight / 2;

    let imgs = _.cloneDeep(imageArr);
    imgs.forEach((img, _i) => {
      if (i === _i) {
        img.huge = true;
        img.offset = `${offsetX}px ${offsetY}px`;
        img.storedPos = { x: offsetX, y: offsetY };
        img.zIndex = 100;
      } else {
        img.expanded = false;
        img.zIndex = 50;
      }
    });
    setImages([...imgs]);
  };

  const restFullScreenImage = (e, i) => {
    e.stopPropagation();
    let imgs = _.cloneDeep(imageArr);
    imgs[i].huge = false;
    // imgs[i].expanded = false;
    imgs[i].zIndex = 0;
    imgs[i].offset = `${imgs[i].storedPos.x}px ${imgs[i].storedPos.y}px`;
    setImages([...imgs]);
  };

  return (
    <div className={style.categoryWrapper}>
      {imageArr &&
        imageArr.map(
          (
            {
              expanded,
              huge,
              image,
              margin,
              offset,
              storedPos,
              width,
              y,
              zIndex,
            },
            i
          ) => (
            <div
              style={{
                height: '100%',
                position: 'absolute',
                transition: 'z-index .5s',
                zIndex: zIndex
                  ? zIndex
                  : expanded === false
                  ? 0
                  : expanded === undefined
                  ? 100
                  : 50,
                pointerEvents: 'none',
                boxSizing: 'border-box',
                margin: margin,
                marginLeft: i * 7 + '%',
              }}
              key={i}
            >
              <Parallax y={y}>
                <div
                  onClick={() => setImg(i)}
                  style={{
                    transformOrigin:
                      huge === true
                        ? offset
                        : storedPos !== null
                        ? storedPos
                        : 'center',
                    transform:
                      huge === true
                        ? 'scale3d(2,2,1)'
                        : expanded !== true
                        ? 'scale3d(0.3,0.3,1)'
                        : 'scale3d(1,1,1)',
                    width: width * columnWidth,
                    pointerEvents: 'all',
                    transition: 'transform .8s',
                  }}
                  // className={style.transition}
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
                    onClick={(e) => huge && restFullScreenImage(e, i)}
                  />

                  {expanded && !huge && (
                    <img
                      src={PlusIcon}
                      alt={'plus icon'}
                      className={style.icon}
                      onClick={(e) => imageToFullscreen(e, i)}
                    />
                  )}
                </div>
              </Parallax>
            </div>
          )
        )}
    </div>
  );
}
