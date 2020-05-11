import React from 'react';
import { RellaxWrapper } from 'react-rellax-wrapper';
import { gridStyle } from 'styles/global';
import 'styles/global.css';

export default function RellaxNoMaterialUI({ images, rows, textOffset }) {
  let imgArr = [];
  if (rows) {
    rows.forEach((row) => row.images.forEach((img) => imgArr.push(img)));
    console.log(imgArr);
  }
  const [imageArr, setImages] = React.useState(rows ? imgArr : images);
  const style = gridStyle();

  const setImg = (i) => {
    let imgs = imageArr;
    imgs.forEach((img, _i) => {
      i === _i ? (img.expanded = true) : (img.expanded = false);
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
        imageArr.map(({ expanded, image, margin, width }, i) => (
          <div
            style={{
              height: '100%',
              position: 'absolute',
              zIndex: expanded ? 100 : 0,
              pointerEvents: 'none',
              boxSizing: 'border-box',
              padding: margin,
            }}
            key={i}
          >
            <RellaxWrapper
              speed={(Math.random() - 0.5) * 4}
              center={true}
              style={{ pointerEvents: 'none' }}
            >
              <div
                // className={style.transition}
                style={{
                  width: width * 70,
                  pointerEvents: 'all',
                }}
                onClick={() => setImg(i)}
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
            </RellaxWrapper>
          </div>
        ))}
    </div>
  );
}
