import React from 'react';
import Rellax from 'rellax';
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

  const myRef = React.createRef();
  const [imageArr, setImages] = React.useState(new Array(10).fill(null));
  const [ref, setRef] = React.useState();

  const setImg = (i) => {
    let imgs = imageArr;
    imgs.forEach((img, _i) => {
      i === _i ? (img.expanded = true) : (img.expanded = false);
    });
    setImages([...imgs]);
  };

  var rellax;

  React.useEffect(() => {
    imageArr.forEach((img, j) => {
      rellax = new Rellax('.rellax' + i + j, {
        speed: (Math.random() - 0.5) * 13,
        // center: false,
        wrapper: '.wrapper' + i,
        relativeToWrapper: true,
        // round: true,
        vertical: true,
        // horizontal: false,
        // callback: function (positions) {
        //   // callback every position change
        //   console.log(positions);
        // },
      });
    }); // <-- Now my value is back to it's initial
  }, [imageArr]);

  if (rellax) rellax.refresh();
  return (
    <div
      style={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'row',
        height: '100vh',
        width: '100%',
        justifyContent: 'space-between',
        border: '1px solid grey',
      }}
      id={'wrapper' + i}
    >
      {imageArr &&
        imageArr.map((img, j) => (
          <div
            key={i + '' + j}
            className={'rellax' + i + j}
            ref={(ref) => setRef(ref)}
            style={{
              width: '10%',
              height: '400px',
              border: '1px solid coral',
            }}
          ></div>
        ))}
    </div>
  );
}
