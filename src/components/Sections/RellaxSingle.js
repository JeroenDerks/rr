import React from 'react';
// import RellaxWrapper from 'react-rellax-wrapper';
import { Box } from '@material-ui/core/';
import { gridStyle } from 'styles/global';
import { AppContext } from 'App';
import 'styles/global.css';

export default function RellaxSingle({
  firstColumn,
  images,
  textOffset,
  title,
}) {
  const {
    state: { columnWidth, minHeight },
  } = React.useContext(AppContext);

  const [imageArr, setImages] = React.useState(images);
  const [heightMulitplier, setHeightMulitplier] = React.useState();

  React.useEffect(() => {
    imageArr.forEach((img) => {
      img.expanded && setHeightMulitplier(img.width > 6 ? 0 : 20);
    }); // eslint-disable-next-line
  }, []);

  const style = gridStyle();

  const setImg = (i) => {
    let imgs = imageArr;
    imgs.forEach((img, _i) => {
      i === _i ? (img.expanded = true) : (img.expanded = false);
    });
    console.log(imgs[i].width);
    setHeightMulitplier(imgs[i].width > 6 ? 0 : 20);
    setImages([...imgs]);
  };

  return (
    <Box mt={20} pb={heightMulitplier} className={style.wrapper}>
      <Box
        className={style.grid}
        style={{
          minHeight: minHeight,
          display: 'flex',
          alignItems: 'flex-start',
          padding: '120px 0px 0px',
        }}
      >
        {firstColumn > 0 && <Box width={firstColumn * columnWidth}></Box>}
        {images &&
          images.map(({ expanded, image, width }, i) => (
            <Box
              width={!expanded ? columnWidth : columnWidth * width}
              style={{
                padding: width === 5 ? '1% 2% 2%' : '1%',
                boxSizing: 'border-box',
                display: 'inline-block',
              }}
              zIndex={'model'}
              className={style.gridItem}
              onClick={() => setImg(i)}
              key={i}
            >
              <img src={image} alt={image} className={style.image} />
            </Box>
          ))}
      </Box>
      <Box>
        <Box
          style={{
            marginTop: -minHeight * 0.35,
            marginLeft: columnWidth * textOffset,
            padding: '1%',
          }}
          zIndex={'tooltip'}
          height={100}
          width={columnWidth * 3}
        >
          <p
            style={{
              fontFamily: 'd-dinregular, Ariel, Helvetica, sans-serif',
              letterSpacing: 4,
              fontSize: 12,
            }}
          >
            <span style={{ textTransform: 'uppercase' }}>{title}, year</span>
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </Box>
      </Box>
    </Box>
  );
}
