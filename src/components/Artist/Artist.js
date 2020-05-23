import React from 'react';
import RellaxNoMaterialUI from 'components/Sections/RellaxNoMaterialUI';

import NRD_Ritzenstein_11 from 'assets/images/compr_artist/NRD_Ritzenstein_11.jpg';
import NRD_Ritzenstein_12 from 'assets/images/compr_artist/NRD_Ritzenstein_12.jpg';
import NRD_Ritzenstein_13 from 'assets/images/compr_artist/NRD_Ritzenstein_13.jpg';
import NRD_Ritzenstein_14 from 'assets/images/compr_artist/NRD_Ritzenstein_14.jpg';

import { getMargin } from 'utils/Helperfunctions';
import { getY } from 'utils/Helperfunctions';

const projectDetails = [
  {
    title: 'The Artist',
    firstColumn: 1,
    textOffset: 4,
    images: [
      { image: NRD_Ritzenstein_11, margin: getMargin(), y: getY(), width: 7 },
      { image: NRD_Ritzenstein_12, margin: getMargin(), y: getY(), width: 7 },
      { image: NRD_Ritzenstein_13, margin: getMargin(), y: getY(), width: 7 },
      {
        image: NRD_Ritzenstein_14,
        margin: getMargin(),
        y: getY(),
        width: 7,
        expanded: true,
      },
    ],
  },
];

export default function Artist() {
  return (
    <>
      {projectDetails.map(({ firstColumn, images, textOffset, title }, i) => (
        <RellaxNoMaterialUI
          key={i}
          title={title}
          firstColumn={firstColumn}
          images={images}
          textOffset={textOffset}
        />
      ))}
    </>
  );
}
