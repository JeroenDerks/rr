import React from 'react';
import { RellaxWrapper } from 'react-rellax-wrapper';
import { Box } from '@material-ui/core/';
import { gridStyle } from 'styles/global';
import { AppContext } from 'App';
import 'styles/global.css';

export default function RellaxNoMaterialUI({
  firstColumn,
  images,
  title,
  i,
  textOffset,
}) {
  const {
    state: { minHeight },
  } = React.useContext(AppContext);

  const [imageArr, setImages] = React.useState(images);
  const [rows, setRows] = React.useState(new Array(10).fill('null'));
  const [columns, setColumns] = React.useState(new Array(10).fill(null));

  console.log('nomateiral ui');
  return (
    <>
      {rows.map((i) => (
        <div
          key={i}
          style={{
            display: 'flex',
            flexDirection: 'row',
            height: '75vh',
            width: '100%',
            justifyContent: 'space-between',
            border: '1px solid grey',
            paddingTop: '15%',
          }}
          className={'wrapper' + i}
        >
          {columns &&
            columns.map((j) => (
              <RellaxWrapper
                speed={(Math.random() - 0.5) * 10}
                center={true}
                key={j}
              >
                <div
                  style={{
                    width: '100px',
                    height: '400px',
                    border: '1px solid coral',
                  }}
                ></div>
              </RellaxWrapper>
            ))}
        </div>
      ))}
    </>
  );
}
