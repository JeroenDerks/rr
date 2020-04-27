import React from 'react';
import classnames from 'classnames';
import { Grid } from '@material-ui/core/';
import { gridStyle } from 'styles/global';
import 'styles/global.css';

export default function ProjectSectionDouble({ rows, minHeight }) {
  const [imageRow, setRows] = React.useState(rows);
  const style = gridStyle();

  const setImg = (i, j) => {
    let arr = imageRow;
    arr.forEach((row) => row.images.forEach((ob) => (ob.expanded = false)));
    arr[i].images[j].expanded = !arr[i].images[j].expanded;
    setRows([...arr]);
  };

  return (
    <>
      {imageRow &&
        imageRow.map((row, i) => (
          <Grid
            container
            spacing={0}
            className={style.grid}
            style={{ minHeight: minHeight }}
            key={i}
            alignItems={i === 0 ? 'flex-end' : 'flex-start'}
          >
            {row.firstColumn > 0 && <Grid item xs={row.firstColumn}></Grid>}

            {row.images.map(({ image, width, expanded }, j) => (
              <Grid
                item
                xs={!expanded ? 1 : width}
                key={j}
                className={style.gridItem}
              >
                <img
                  src={image}
                  alt={image}
                  className={classnames({
                    [style.image]: true,
                    [style.greyScale]: !expanded,
                  })}
                  onClick={() => setImg(i, j)}
                />
              </Grid>
            ))}
          </Grid>
        ))}
    </>
  );
}
