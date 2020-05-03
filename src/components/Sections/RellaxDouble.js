import React from 'react';
import { Box } from '@material-ui/core/';
import { gridStyle } from 'styles/global';
import { AppContext } from 'App';
import 'styles/global.css';

export default function RellaxDouble({ rows, title }) {
  const {
    state: { minHeight },
  } = React.useContext(AppContext);

  const [imageRow, setRows] = React.useState(rows);
  const style = gridStyle();

  const setImg = (i, j) => {
    let arr = imageRow;
    console.log(i, j);
    console.log(arr[i].images[j].expanded);
    console.log(!arr[i].images[j].expanded);

    arr.forEach((row) => row.images.forEach((ob) => (ob.expanded = false)));
    arr[i].images[j].expanded = !arr[i].images[j].expanded;
    setRows([...arr]);
  };

  const columnWidth =
    (window.innerWidth < 1200 ? window.innerWidth : 1200) / 12;

  return (
    <Box p={15}>
      <Box
        display="flex"
        alignItems="flex-end"
        style={{ minHeight: minHeight * 0.5 }}
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
              onClick={() => setImg(0, i)}
              key={i}
            >
              <img src={image} alt={image} className={style.image} />
            </Box>
          ))}
      </Box>
      <Box
        position={'absolute'}
        style={{ maxHeight: 0, marginTop: -200 }}
        zIndex={'model'}
        width={columnWidth * 1}
      >
        <p
          style={{
            fontFamily: 'd-dindin-bold , Ariel, Helvetica, sans-serif',
            fontSize: window.innerWidth / 8,
            lineHeight: 0.8,
            color: 'rgb(230, 221, 209)',
            opacity: 0.5,
            margin: 0,
          }}
        >
          {title}
        </p>
      </Box>
      <Box
        position={'absolute'}
        style={{ maxHeight: 0, marginLeft: columnWidth * 2 }}
        zIndex={'tooltip'}
        width={columnWidth * 4}
      >
        <p
          style={{
            fontFamily: 'd-dinregular, Ariel, Helvetica, sans-serif',
            letterSpacing: 4,
            textTransform: 'uppercase',
            fontSize: 12,
            pointerEvents: 'none',
          }}
        >
          Location, year
        </p>
        <p
          style={{
            fontFamily: 'd-dinregular, Ariel, Helvetica, sans-serif',
            letterSpacing: 4,
            fontSize: 12,
            pointerEvents: 'none',
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </Box>
      <Box
        display="flex"
        alignItems="flex-start"
        zIndex={'tooltip'}
        style={{ minHeight: minHeight * 0.5 }}
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
              onClick={() => setImg(1, i)}
              key={i}
            >
              <img src={image} alt={image} className={style.image} />
            </Box>
          ))}
      </Box>
    </Box>
  );
}
