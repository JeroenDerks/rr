import React from 'react';
// import ProjectSection from 'components/ProjectSection';
// import ProjectSectionDouble from 'components/ProjectSectionDouble';

// import RellaxSingle from 'components/Sections/RellaxSingle';
// import RellaxVanilla from 'components/Sections/RellaxVanilla';

// import RellaxDouble from 'components/Sections/RellaxDouble';
import RellaxNoMaterialUI from 'components/Sections/RellaxNoMaterialUI';

import Transformer0 from 'assets/images/compr_aferoj/Transformer0.jpg';
import Transformer1 from 'assets/images/compr_aferoj/Transformer1.jpg';
import Transformer2 from 'assets/images/compr_aferoj/Transformer2.jpg';

import CrossCut0 from 'assets/images/compr_aferoj/Crosscut_0.jpg';
import CrossCut1 from 'assets/images/compr_aferoj/Crosscut_1.jpg';

import DefenseDefiance0 from 'assets/images/compr_aferoj/Defense_Defiance0.jpg';
import DefenseDefiance1 from 'assets/images/compr_aferoj/Defense_Defiance1.jpg';
import DefenseDefiance2 from 'assets/images/compr_aferoj/Defense_Defiance2.jpg';

import LostWood0 from 'assets/images/compr_aferoj/lostwood_0.jpg';
import LostWood1 from 'assets/images/compr_aferoj/lostwood_1_cropped.jpg';
import LostWood2 from 'assets/images/compr_aferoj/lostwood_2_cropped.jpg';
import LostWood3 from 'assets/images/compr_aferoj/lostwood_3.jpg';
import LostWood4 from 'assets/images/compr_aferoj/lostwood_4.jpg';
import LostWood5 from 'assets/images/compr_aferoj/lostwood_5_cropped.jpg';
import LostWood6 from 'assets/images/compr_aferoj/lostwood_6_cropped.jpg';
import LostWood7 from 'assets/images/compr_aferoj/lostwood_7_cropped.jpg';
import LostWood8 from 'assets/images/compr_aferoj/lostwood_8_cropped.jpg';
import LostWood9 from 'assets/images/compr_aferoj/lostwood_9_cropped.jpg';

import MemoryPhantom0 from 'assets/images/compr_aferoj/MemoryPhantom0.jpg';
import MemoryPhantom1 from 'assets/images/compr_aferoj/MemoryPhantom1.jpg';
import MemoryPhantom2 from 'assets/images/compr_aferoj/MemoryPhantom2.jpg';

import MemoryVessel0 from 'assets/images/compr_aferoj/MemoryVessel0.jpg';
import MemoryVessel1 from 'assets/images/compr_aferoj/MemoryVessel1.jpg';
import MemoryVessel2 from 'assets/images/compr_aferoj/MemoryVessel2.jpg';

import NRD_Reitzenstein0 from 'assets/images/compr_aferoj/NRD_Ritzenstein_01.jpg';
import NRD_Reitzenstein1 from 'assets/images/compr_aferoj/NRD_Ritzenstein_03.jpg';
import NRD_Reitzenstein2 from 'assets/images/compr_aferoj/NRD_Ritzenstein_09.jpg';
import NRD_Reitzenstein3 from 'assets/images/compr_aferoj/NRD_Ritzenstein_10.jpg';
import NRD_Reitzenstein4 from 'assets/images/compr_aferoj/NRD_Ritzenstein_15.jpg';

import Palendrome0 from 'assets/images/compr_aferoj/Palendrome0.jpg';
import Palendrome1 from 'assets/images/compr_aferoj/Palendrome1.jpg';

import Remenicent0 from 'assets/images/compr_aferoj/Remenicent_0.jpg';
import Remenicent1 from 'assets/images/compr_aferoj/Remenicent_1.jpg';
import Remenicent2 from 'assets/images/compr_aferoj/Remenicent_2.jpg';

import Viriditas0 from 'assets/images/compr_aferoj/Viriditas0.jpg';
import Viriditas1 from 'assets/images/compr_aferoj/Viriditas1.jpg';
import Viriditas2 from 'assets/images/compr_aferoj/Viriditas2.jpg';

import { getMargin } from 'utils/Helperfunctions';
import { getY } from 'utils/Helperfunctions';

const projectDetails = [
  {
    title: 'Transformer',
    firstColumn: 1,
    textOffset: 8,
    images: [
      {
        image: Transformer0,
        margin: getMargin(),
        // y: getY(),
        width: 5,
        expanded: true,
      },
      { image: Transformer1, margin: getMargin(), y: getY(), width: 7 },
      { image: Transformer2, margin: getMargin(), y: getY(), width: 5 },
    ],
  },
  {
    title: 'NRD Reitzenstein',
    firstColumn: 0,
    textOffset: 2,
    images: [
      { image: NRD_Reitzenstein0, margin: getMargin(), y: getY(), width: 7 },
      { image: NRD_Reitzenstein1, margin: getMargin(), y: getY(), width: 7 },
      { image: NRD_Reitzenstein2, margin: getMargin(), y: getY(), width: 7 },
      {
        image: NRD_Reitzenstein3,
        margin: getMargin(),
        // y: getY(),
        width: 7,
        expanded: true,
      },
      { image: NRD_Reitzenstein4, margin: getMargin(), y: getY(), width: 7 },
    ],
  },
  {
    title: 'Crosscut',
    firstColumn: 1,
    textOffset: 7,
    images: [
      { image: CrossCut0, margin: getMargin(), y: getY(), width: 7 },
      {
        image: CrossCut1,
        margin: getMargin(),
        // y: getY(),
        width: 5,
        expanded: true,
      },
    ],
  },
  {
    title: 'Defense Defiance',
    firstColumn: 2,
    textOffset: 7,
    images: [
      { image: DefenseDefiance0, margin: getMargin(), y: getY(), width: 5 },
      { image: DefenseDefiance1, margin: getMargin(), y: getY(), width: 7 },
      {
        image: DefenseDefiance2,
        margin: getMargin(),
        // y: getY(),
        width: 7,
        expanded: true,
      },
    ],
  },
  {
    title: 'Lost Wood',
    textOffset: 6,
    firstColumn: 1,
    images: [
      { image: LostWood7, margin: getMargin(), y: getY(), width: 7 },
      { image: LostWood6, margin: getMargin(), y: getY(), width: 7 },
      { image: LostWood1, margin: getMargin(), y: getY(), width: 5 },
      { image: LostWood2, margin: getMargin(), y: getY(), width: 7 },

      { image: LostWood0, margin: getMargin(), y: getY(), width: 5 },
      { image: LostWood4, margin: getMargin(), y: getY(), width: 5 },
      {
        image: LostWood5,
        margin: getMargin(),
        // y: getY(),
        width: 5,
        expanded: true,
      },
      { image: LostWood8, margin: getMargin(), y: getY(), width: 5 },
      { image: LostWood3, margin: getMargin(), y: getY(), width: 5 },
      { image: LostWood9, margin: getMargin(), y: getY(), width: 5 },
    ],
  },
  {
    title: 'Memory Phantom',
    firstColumn: 2,
    textOffset: 0,
    images: [
      { image: MemoryPhantom1, margin: getMargin(), y: getY(), width: 7 },
      {
        image: MemoryPhantom0,
        margin: getMargin(),
        // y: getY(),
        width: 5,
        expanded: true,
      },
      { image: MemoryPhantom2, margin: getMargin(), y: getY(), width: 5 },
    ],
  },
  {
    title: 'Memory Vessel',
    firstColumn: 1,
    textOffset: 7,
    images: [
      {
        image: MemoryVessel1,
        margin: getMargin(),
        // y: getY(),
        width: 7,
        expanded: true,
      },
      { image: MemoryVessel0, margin: getMargin(), y: getY(), width: 5 },
      { image: MemoryVessel2, margin: getMargin(), y: getY(), width: 7 },
    ],
  },
  {
    title: 'Palendrome',
    firstColumn: 3,
    textOffset: 1,
    images: [
      { image: Palendrome1, margin: getMargin(), y: getY(), width: 7 },
      {
        image: Palendrome0,
        margin: getMargin(),
        // y: getY(),
        width: 5,
        expanded: true,
      },
    ],
  },
  {
    title: 'Remenicent',
    firstColumn: 2,
    textOffset: 3,
    images: [
      {
        image: Remenicent0,
        margin: getMargin(),
        // y: getY(),
        width: 7,
        expanded: true,
      },
      { image: Remenicent1, margin: getMargin(), y: getY(), width: 7 },
      { image: Remenicent2, margin: getMargin(), y: getY(), width: 7 },
    ],
  },
  {
    title: 'Viriditas',
    firstColumn: 1,
    textOffset: 7,
    images: [
      { image: Viriditas1, margin: getMargin(), y: getY(), width: 7 },
      { image: Viriditas2, margin: getMargin(), y: getY(), width: 7 },
      {
        image: Viriditas0,
        margin: getMargin(),
        // y: getY(),
        width: 7,
        expanded: true,
      },
    ],
  },
];

export default function Aferoj() {
  return (
    <>
      {projectDetails.map(({ images, textOffset }, i) => (
        <RellaxNoMaterialUI key={i} textOffset={textOffset} images={images} />
      ))}
    </>
  );
}
