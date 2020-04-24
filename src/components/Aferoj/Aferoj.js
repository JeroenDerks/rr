import React from 'react';
import ProjectSection from 'components/ProjectSection';
import ProjectSectionDouble from 'components/ProjectSectionDouble';
import Transformer0 from 'assets/images/compr_aferoj/Transformer0.jpg';
import Transformer1 from 'assets/images/compr_aferoj/Transformer1.jpg';
import Transformer2 from 'assets/images/compr_aferoj/Transformer2.jpg';
import CroppedTree0 from 'assets/images/compr_aferoj/cropped_tree_0.jpg';
import CroppedTree1 from 'assets/images/compr_aferoj/cropped_tree_1.jpg';
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

const projectDetails = [
  {
    title: 'Transformer',
    firstColumn: 2,
    images: [
      { image: Transformer0, width: 5 },
      { image: Transformer1, width: 7, expanded: true },
      { image: Transformer2, width: 5 },
    ],
  },
  {
    title: 'Cropped Tree',
    firstColumn: 2,
    images: [
      { image: CroppedTree0, width: 7, expanded: true },
      { image: CroppedTree1, width: 7 },
    ],
  },
  {
    title: 'Crosscut',
    firstColumn: 3,
    images: [
      { image: CrossCut0, width: 7 },
      { image: CrossCut1, width: 5, expanded: true },
    ],
  },
  {
    title: 'Defense Defiance',
    firstColumn: 2,
    images: [
      { image: DefenseDefiance0, width: 5 },
      { image: DefenseDefiance1, width: 7, expanded: true },
      { image: DefenseDefiance2, width: 7 },
    ],
  },
  {
    title: 'Lost Wood',
    rows: [
      {
        firstColumn: 1,
        images: [
          { image: LostWood7, width: 7 },
          { image: LostWood6, width: 7 },
          { image: LostWood1, width: 5 },
          { image: LostWood2, width: 5 },
        ],
      },
      {
        firstColumn: 0,
        images: [
          { image: LostWood0, width: 5 },
          { image: LostWood4, width: 5 },
          { image: LostWood5, width: 5, expanded: true },
          { image: LostWood8, width: 5 },
          { image: LostWood3, width: 5 },
          { image: LostWood9, width: 5 },
        ],
      },
    ],
  },
  {
    title: 'Memory Phantom',
    firstColumn: 2,
    images: [
      { image: MemoryPhantom0, width: 5 },
      { image: MemoryPhantom1, width: 7 },
      { image: MemoryPhantom2, width: 5, expanded: true },
    ],
  },
  {
    title: 'Memory Vessel',
    firstColumn: 2,
    images: [
      { image: MemoryVessel0, width: 5, expanded: true },
      { image: MemoryVessel1, width: 7 },
      { image: MemoryVessel2, width: 5 },
    ],
  },
  {
    title: 'NRD Reitzenstein',
    firstColumn: 1,
    images: [
      { image: NRD_Reitzenstein0, width: 7 },
      { image: NRD_Reitzenstein1, width: 7 },
      { image: NRD_Reitzenstein2, width: 7 },
      { image: NRD_Reitzenstein3, width: 7, expanded: true },
      { image: NRD_Reitzenstein4, width: 7 },
    ],
  },
  {
    title: 'Palendrome',
    firstColumn: 3,
    images: [
      { image: Palendrome1, width: 7 },
      { image: Palendrome0, width: 5, expanded: true },
    ],
  },
  {
    title: 'Remenicent',
    firstColumn: 2,
    images: [
      { image: Remenicent0, width: 7, expanded: true },
      { image: Remenicent1, width: 7 },
      { image: Remenicent2, width: 7 },
    ],
  },
  {
    title: 'Viriditas',
    firstColumn: 1,
    images: [
      { image: Viriditas0, width: 7, expanded: true },
      { image: Viriditas1, width: 7 },
      { image: Viriditas2, width: 7 },
    ],
  },
];

export default function Aferoj({ minHeight }) {
  return (
    <>
      {projectDetails.map(({ firstColumn, images, rows, title }) =>
        rows ? (
          <ProjectSectionDouble key={title} rows={rows} minHeight={minHeight} />
        ) : (
          <ProjectSection
            key={title}
            firstColumn={firstColumn}
            images={images}
            minHeight={minHeight}
          />
        )
      )}
    </>
  );
}
