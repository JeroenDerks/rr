import React from "react";
import { Grid } from "@material-ui/core/";
import { gridStyle } from "styles/global";
import img0 from "assets/images/compr_aferoj/Transformer0.jpg";
import img1 from "assets/images/compr_aferoj/Transformer1.jpg";
import img2 from "assets/images/compr_aferoj/Transformer2.jpg";

const defaultImages = [
  { img: img0, alt: "Transformer0" },
  { img: img1, alt: "Transformer1" },
  { img: img2, alt: "Transformer2", expanded: true },
];

export default function Transformer() {
  const [images, setImages] = React.useState(defaultImages);
  const classes = gridStyle();

  const setImg = (i) => {
    console.log(i);
  };
  return (
    <>
      <Grid container spacing={2} className={classes.grid}>
        <Grid item xs={2}></Grid>
        {images.map(({ alt, expanded, img }, i) => (
          <Grid item xs={expanded ? 4 : 1} key={i}>
            <img
              src={img}
              alt={alt}
              style={{ width: "100%" }}
              onClick={() => setImg(i)}
            />
          </Grid>
        ))}
        <Grid item xs={7}></Grid>
      </Grid>
    </>
  );
}
