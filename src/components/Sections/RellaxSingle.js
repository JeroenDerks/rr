import React from 'react';
import RellaxWrapper from 'react-rellax-wrapper';
import { Box } from '@material-ui/core/';
import { gridStyle } from 'styles/global';
import { AppContext } from 'App';
import 'styles/global.css';

export default function RellaxSingle({
  firstColumn,
  images,
  title,
  textOffset,
}) {
  const {
    state: { minHeight },
  } = React.useContext(AppContext);

  const [imageArr, setImages] = React.useState(images);
  const style = gridStyle();

  const setImg = (i) => {
    let imgs = imageArr;
    imgs.forEach((img, _i) => {
      i === _i ? (img.expanded = true) : (img.expanded = false);
    });
    setImages([...imgs]);
  };

  const columnWidth =
    (window.innerWidth < 1200 ? window.innerWidth : 1200) / 12;

  return (
    <>
      {/* <Box className={style.grid}>
        <p
          style={{
            fontFamily: 'd-dinregular, Ariel, Helvetica, sans-serif',
            letterSpacing: 4,

            fontSize: 12,
          }}
        >
          <span style={{ textTransform: 'uppercase' }}>Location, year</span> -
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </Box> */}
      <Box p={10}></Box>
      <Box
        className={style.grid}
        id={title.replace(/\W+/g, '')}
        // justifyContent="flex-end"
        style={{
          minHeight: minHeight,
          display: 'flex',
          alignItems: 'flex-start',
          padding: '120px 0px',
          // border: '1px solid coral',
        }}
      >
        {firstColumn > 0 && (
          <Box width={firstColumn * columnWidth}>
            {/* <RellaxWrapper speed={(Math.random() - 0.5) * 6} center={true}>
              <p
                style={{
                  fontFamily: 'd-dindin-bold , Ariel, Helvetica, sans-serif',
                  fontSize: window.innerWidth / 8,
                  lineHeight: 0.8,
                  color: 'rgb(230, 221, 209)',
                  opacity: 0.5,
                }}
              >
                {title}
              </p>
            </RellaxWrapper> */}
          </Box>
        )}
        {images &&
          images.map(({ expanded, image, speed, width }, i) => (
            <Box
              width={!expanded ? columnWidth : columnWidth * width}
              style={{
                padding: width === 5 ? '1% 2% 2%' : '1%',
                boxSizing: 'border-box',
                display: 'inline-block',
                // border: '1px solid grey',
              }}
              zIndex={'model'}
              className={style.gridItem}
              onClick={() => setImg(i)}
              key={i}
            >
              <RellaxWrapper
                speed={speed ? speed : (Math.random() - 0.5) * 3}
                center={true}
              >
                <img src={image} alt={image} className={style.image} />
              </RellaxWrapper>
            </Box>
          ))}
      </Box>
      <Box>
        <Box
          // position={'absolute'}
          style={{
            marginTop: -minHeight * 0.5,
            marginLeft: columnWidth * textOffset,
            padding: '1%',
            // border: '1px solid pink',
          }}
          zIndex={'tooltip'}
          height={100}
          width={columnWidth * 3}
        >
          <p
            style={{
              fontFamily: 'd-dinregular, Ariel, Helvetica, sans-serif',
              letterSpacing: 4,
              textTransform: 'uppercase',
              fontSize: 12,
            }}
          >
            {title}
          </p>
          <p
            style={{
              fontFamily: 'd-dinregular, Ariel, Helvetica, sans-serif',
              letterSpacing: 4,
              fontSize: 12,
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </Box>
      </Box>
      <Box p={10}></Box>
    </>
  );
}
