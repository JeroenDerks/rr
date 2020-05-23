import React from 'react';
import _ from 'lodash';
import DialogWindow from './Dialog';
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
    console.log(handler);
    window.addEventListener('load', handler);
    return () => window.removeEventListener('load', handler);
  }, [parallaxController]);

  const [fullScreenImg, setFullScreenImg] = React.useState();
  const [imageArr, setImages] = React.useState(images);
  const [open, setOpen] = React.useState(false);
  const style = gridStyle();

  const setImg = (i) => {
    let imgs = _.cloneDeep(imageArr);
    imgs.forEach((img, _i) => {
      i === _i ? (img.expanded = !img.expanded) : (img.expanded = false);
    });
    setImages([...imgs]);
  };

  const imageToFullscreen = (e, i) => {
    // const { x, y, width, height } = e.target.parentNode.getBoundingClientRect();

    // const distX = x - window.innerWidth * 0.5;
    // const distY = y - window.innerHeight * 0.5;

    // const offsetX = parseInt((distX / width) * 100) + '% ';
    // const offsetY = parseInt((distY / height) * 100) + '% ';

    // console.log(offsetX, offsetY);

    // let imgs = _.cloneDeep(imageArr);
    // imgs.forEach((img, _i) => {
    //   if (i === _i) {
    //     img.huge = true;
    //     img.offset = offsetX + offsetY;
    //   } else img.expanded = false;
    // });
    // setImages([...imgs]);
    // setFullScreenImg({
    //   image: imageArr[i].image,
    //   offset: offsetX + offsetY + ' 1',
    // });

    setFullScreenImg(imageArr[i]);

    e.stopPropagation();
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setFullScreenImg();
  };

  return (
    <div className={style.categoryWrapper}>
      <DialogWindow
        fullScreenImg={fullScreenImg && fullScreenImg.image}
        handleClose={handleClose}
        open={open}
      />
      {imageArr &&
        imageArr.map(
          ({ expanded, huge, image, margin, offset, width, y }, i) => (
            <div
              style={{
                height: '100%',
                position: 'absolute',
                transition: 'z-index .5s',
                zIndex:
                  expanded === false ? 0 : expanded === undefined ? 100 : 50,
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
                    transformOrigin: huge === true ? offset : 'center',
                    transform:
                      huge === true
                        ? 'scale3d(2,2,1)'
                        : expanded !== true
                        ? 'scale3d(0.3,0.3,1)'
                        : 'scale3d(1,1,1)',
                    width: width * columnWidth,
                    pointerEvents: 'all',
                  }}
                  className={style.transition}
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

                  {expanded === true && (
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
