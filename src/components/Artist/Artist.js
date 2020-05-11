import React from 'react';
// import ProjectSection from 'components/ProjectSection';
// import ProjectSectionBox from 'components/ProjectSectionBox';
// import ProjectSectionRellax from 'components/ProjectSectionRellax';
// import ProjectSectionDouble from 'components/ProjectSectionDouble';

import RellaxSingle from 'components/Sections/RellaxSingle';

import NRD_Ritzenstein_11 from 'assets/images/compr_artist/NRD_Ritzenstein_11.jpg';
import NRD_Ritzenstein_12 from 'assets/images/compr_artist/NRD_Ritzenstein_12.jpg';
import NRD_Ritzenstein_13 from 'assets/images/compr_artist/NRD_Ritzenstein_13.jpg';
import NRD_Ritzenstein_14 from 'assets/images/compr_artist/NRD_Ritzenstein_14.jpg';

const projectDetails = [
  {
    title: 'The Artist',
    firstColumn: 1,
    textOffset: 4,
    images: [
      { image: NRD_Ritzenstein_11, width: 7 },
      { image: NRD_Ritzenstein_12, width: 7 },
      { image: NRD_Ritzenstein_13, width: 7 },
      { image: NRD_Ritzenstein_14, width: 7, expanded: true },
    ],
  },
];

export default function Artist() {
  return (
    <>
      {projectDetails.map(({ firstColumn, images, textOffset, title }, i) => (
        <RellaxSingle
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
