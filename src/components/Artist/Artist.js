import React from 'react';
// import ProjectSection from 'components/ProjectSection';
// import ProjectSectionBox from 'components/ProjectSectionBox';
// import ProjectSectionRellax from 'components/ProjectSectionRellax';
// import ProjectSectionDouble from 'components/ProjectSectionDouble';

import RellaxSingle from 'components/Sections/RellaxSingle';
import RellaxNoMaterialUI from 'components/Sections/RellaxNoMaterialUI';

import NRD_Ritzenstein_11 from 'assets/images/compr_artist/NRD_Ritzenstein_11.jpg';
import NRD_Ritzenstein_12 from 'assets/images/compr_artist/NRD_Ritzenstein_12.jpg';
import NRD_Ritzenstein_13 from 'assets/images/compr_artist/NRD_Ritzenstein_13.jpg';
import NRD_Ritzenstein_14 from 'assets/images/compr_artist/NRD_Ritzenstein_14.jpg';

const getMargin = () => {
  const size = 300;
  return (
    parseInt(Math.random() * size) +
    'px ' +
    parseInt(Math.random() * size) +
    'px ' +
    parseInt(Math.random() * size) +
    'px ' +
    parseInt(Math.random() * size) +
    'px '
  );
};

const projectDetails = [
  {
    title: 'The Artist',
    firstColumn: 1,
    textOffset: 4,
    images: [
      { image: NRD_Ritzenstein_11, margin: getMargin(), width: 7 },
      { image: NRD_Ritzenstein_12, margin: getMargin(), width: 7 },
      { image: NRD_Ritzenstein_13, margin: getMargin(), width: 7 },
      {
        image: NRD_Ritzenstein_14,
        margin: getMargin(),
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
