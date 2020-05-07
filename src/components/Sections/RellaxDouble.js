import React from 'react';
import { Box } from '@material-ui/core/';
import { gridStyle } from 'styles/global';
import { AppContext } from 'App';

import 'styles/global.css';

export default function RellaxDouble({ rows, title, textOffset }) {
  const {
    state: { columnWidth, minHeight },
  } = React.useContext(AppContext);

  const [imageRow, setRows] = React.useState(rows);
  const [topOrBottom, setTopBottom] = React.useState('bottom');
  const [orientation, setOrientation] = React.useState('portrait');

  const style = gridStyle();

  const setImg = (i, j) => {
    let arr = imageRow;
    arr.forEach((row) => row.images.forEach((ob) => (ob.expanded = false)));
    arr[j].images[i].expanded = !arr[j].images[i].expanded;
    setRows([...arr]);
    setTopBottom(j === 0 ? 'top' : 'bottom');
    setOrientation(arr[j].images[i].width > 6 ? 'landscape' : 'portrait');
  };

  return (
    <Box
      mt={30}
      pb={topOrBottom === 'top' ? 10 : 0}
      style={{ paddingLeft: columnWidth }}
    >
      <Box
        display="flex"
        alignItems="flex-end"
        className={style.transition}
        style={{
          minHeight:
            topOrBottom === 'top' && orientation === 'portrait'
              ? minHeight
              : topOrBottom === 'top' && orientation === 'landscape'
              ? minHeight * 0.7
              : 0,
        }}
      >
        {imageRow &&
          imageRow[0].images.map(({ image, width, expanded }, i) => (
            <Box
              width={!expanded ? columnWidth : columnWidth * width}
              style={{
                padding: width === 5 ? '1% 2% 2%' : '1%',
                boxSizing: 'border-box',
                display: 'inline-block',
                zIndex: 100,
              }}
              className={style.gridItem}
              onClick={() => setImg(i, 0)}
              key={i}
            >
              <img src={image} alt={image} className={style.image} />
            </Box>
          ))}
      </Box>
      <Box
        position={'absolute'}
        className={style.transition}
        style={{
          maxHeight: 0,
          marginLeft: columnWidth * textOffset,
          marginTop: topOrBottom === 'bottom' && -100,
        }}
        zIndex={'tooltip'}
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
      <Box
        display="flex"
        alignItems="flex-start"
        zIndex={'tooltip'}
        style={{ minHeight: topOrBottom === 'bottom' ? minHeight : 120 }}
      >
        {imageRow &&
          imageRow[1].images.map(({ image, width, expanded }, i) => (
            <Box
              width={!expanded ? columnWidth : columnWidth * width}
              style={{
                padding: width === 5 ? '1% 2% 2%' : '1%',
                boxSizing: 'border-box',
                display: 'inline-block',
                zIndex: 100,
              }}
              className={style.gridItem}
              onClick={() => setImg(i, 1)}
              key={i}
            >
              <img src={image} alt={image} className={style.image} />
            </Box>
          ))}
      </Box>
    </Box>
  );
}
