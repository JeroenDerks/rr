import React from 'react';
import { Box } from '@material-ui/core/';
import { gridStyle } from 'styles/global';
import 'styles/global.css';

export default function RellaxDouble({ rows, minHeight, title }) {
  const [imageRow, setRows] = React.useState(rows);
  const style = gridStyle();

  const setImg = (i, j) => {
    let arr = imageRow;
    arr.forEach((row) => row.images.forEach((ob) => (ob.expanded = false)));
    arr[i].images[j].expanded = !arr[i].images[j].expanded;
    console.log(i, j);
    setRows([...arr]);
  };

  console.log(imageRow);

  const columnWidth =
    (window.innerWidth < 1200 ? window.innerWidth : 1200) / 12;

  return (
    <Box p={15}>
      <Box alignItems="flex-end">
        {imageRow &&
          imageRow[0].images.map(({ image, width, expanded }, i) => (
            <Box
              width={!expanded ? columnWidth : columnWidth * width}
              style={{
                padding: width === 5 ? '1% 2% 2%' : '1%',
                boxSizing: 'border-box',
                display: 'inline-block',
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
        style={{ maxHeight: 0 }}
        zIndex={'model'}
        width={columnWidth * 1}
      >
        <p
          style={{
            fontFamily: 'd-dindin-bold , Ariel, Helvetica, sans-serif',
            fontSize: 200,
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
          }}
        >
          Location, year
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

      <Box alignItems={'flex-start'} zIndex={100}>
        {imageRow &&
          imageRow[1].images.map(({ image, width, expanded }, i) => (
            <Box
              width={!expanded ? columnWidth : columnWidth * width}
              alignSelf="flex-start"
              style={{
                padding: width === 5 ? '1% 2% 2%' : '1%',
                boxSizing: 'border-box',
                display: 'inline-block',
              }}
              className={style.gridItem}
              onClick={() => setImg(1, i)}
              key={i}
            >
              <img src={image} alt={image} className={style.image} />
            </Box>
          ))}
      </Box>

      {/* {imageRow &&
        imageRow.map((row, i) => (
          <Box
            className={style.grid}
            key={i}
            id={title.replace(/\W+/g, '') + i}
            style={{
              display: 'flex',
              alignItems: i === 0 ? 'flex-end' : 'flex-start',
            }}
          >
            {row.firstColumn > 0 && (
              <Box width={row.firstColumn * columnWidth}>
                <p
                  style={{
                    fontFamily: 'd-dindin-bold , Ariel, Helvetica, sans-serif',
                    fontSize: 200,
                    lineHeight: 0.8,
                    color: 'rgb(230, 221, 209)',
                    opacity: 0.5,
                    margin: 0,
                  }}
                >
                  {title}
                </p>
              </Box>
            )}
            {row.images.map(({ image, width, expanded }, j) => (
              <Box
                width={!expanded ? columnWidth : columnWidth * width}
                style={{
                  padding: width === 5 ? '1% 2% 2%' : '1%',
                  boxSizing: 'border-box',
                  display: 'inline-block',
                }}
                className={style.gridItem}
                onClick={() => setImg(i, j)}
                key={j}
              >
                <img src={image} alt={image} className={style.image} />
              </Box>
            ))}
          </Box>
        ))}
      <Box
        position={'absolute'}
        style={{
          marginBottom: minHeight,
          marginLeft: columnWidth * 2,
        }}
        zIndex={'tooltip'}
        height={100}
        width={columnWidth * 4}
      >
        <p
          style={{
            fontFamily: 'd-dinregular, Ariel, Helvetica, sans-serif',
            letterSpacing: 4,
            textTransform: 'uppercase',
            fontSize: 12,
          }}
        >
          Location, year
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
      </Box> */}
    </Box>
  );
}
