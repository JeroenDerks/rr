import React from "react";
import { Box, Grid,  } from "@material-ui/core/";
import { Parallax } from 'react-scroll-parallax';
import { gridStyle } from "styles/global";
import "styles/global.css";
import img0 from "assets/images/compr_aferoj/Transformer0.jpg";
import img1 from "assets/images/compr_aferoj/Transformer1.jpg";
import img2 from "assets/images/compr_aferoj/Transformer2.jpg";

const defaultImages = [
  { img: img0, alt: "Transformer0", },
  { img: img1, alt: "Transformer1", landscape: true, expanded: true  },
  { img: img2, alt: "Transformer2", },
];

const imageStyle = {
    transition: "all .5s ", 
    transitionTimingFunction: "ease",
    cursor: "pointer",
    padding: 10,
}

export default function Transformer() {
  const [images, setImages] = React.useState(defaultImages);
  const classes = gridStyle();
  const minHeight = window.innerWidth < 1200 ? (window.innerWidth / 4) * 1.5 : 4000;

  const setImg = (i) => {
      let obj = images;
      obj.forEach(ob => ob.expanded = false);
      obj[i].expanded = true;
      setImages([...obj])
  };

  return (
      <Grid container spacing={0} className={classes.grid} style={{minHeight: minHeight}}>
        <Grid item xs={2}></Grid>
        {images.map(({ alt, expanded, img, landscape }, i) => (
        <Grid item xs={!expanded ? 1 : (landscape ? 6 : 4)} key={i} style={imageStyle}>
            <Parallax className="parralax-class" y={[-20, 20]} tagOuter="figure">
                <img
                src={img}
                alt={alt}
                style={{ width: "100%", filter: !expanded && "grayscale(70%)"}}
                onClick={() => setImg(i)}
                />
            </Parallax>
          </Grid>
        ))}
        <Grid item xs={7}></Grid>
      </Grid>
  );
}
