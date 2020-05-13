import React from 'react';

import RellaxNoMaterialUI from 'components/Sections/RellaxNoMaterialUI';

import SecondFir0 from 'assets/images/compr_lokoj/2ndFir0.jpg';
import SecondFir1 from 'assets/images/compr_lokoj/2ndFir1.jpg';
import SecondFir2 from 'assets/images/compr_lokoj/2ndFir2.jpg';
import SecondFir3 from 'assets/images/compr_lokoj/2ndFir3.jpg';

import Despeck0 from 'assets/images/compr_lokoj/Despeck0.jpg';
import Despeck1 from 'assets/images/compr_lokoj/Despeck1.jpg';
import Despeck2 from 'assets/images/compr_lokoj/Despeck2.jpg';
import Despeck3 from 'assets/images/compr_lokoj/Despeck3.jpg';
import Despeck4 from 'assets/images/compr_lokoj/Despeck4.jpg';
import Despeck5 from 'assets/images/compr_lokoj/Despeck5.jpg';
import Despeck6 from 'assets/images/compr_lokoj/Despeck6.jpg';

import DisplacementInversion0 from 'assets/images/compr_lokoj/DisplacementInversion0.jpg';
import DisplacementInversion1 from 'assets/images/compr_lokoj/DisplacementInversion1.jpg';
import DisplacementInversion2 from 'assets/images/compr_lokoj/DisplacementInversion2.jpg';
import DisplacementInversion3 from 'assets/images/compr_lokoj/DisplacementInversion3.jpg';

import Fur0 from 'assets/images/compr_lokoj/Fur0.jpg';
import Fur1 from 'assets/images/compr_lokoj/Fur1.jpg';
import Fur2 from 'assets/images/compr_lokoj/Fur2.jpg';
import Fur3 from 'assets/images/compr_lokoj/Fur3.jpg';

import GhostWillow0 from 'assets/images/compr_lokoj/GhostWillow0.jpg';
import GhostWillow1 from 'assets/images/compr_lokoj/GhostWillow1.jpg';
import GhostWillow2 from 'assets/images/compr_lokoj/GhostWillow2.jpg';

import MemoryCell0 from 'assets/images/compr_lokoj/MemoryCell0.jpg';
import MemoryCell1 from 'assets/images/compr_lokoj/MemoryCell1.jpg';
import MemoryCell2 from 'assets/images/compr_lokoj/MemoryCell2.jpg';

import NoTitle0 from 'assets/images/compr_lokoj/NoTitle0.jpg';
import NoTitle1 from 'assets/images/compr_lokoj/NoTitle1.jpg';
import NoTitle2 from 'assets/images/compr_lokoj/NoTitle2.jpg';

import PlutosCave0 from 'assets/images/compr_lokoj/PlutosCave0.jpg';
import PlutosCave1 from 'assets/images/compr_lokoj/PlutosCave1.jpg';
import PlutosCave2 from 'assets/images/compr_lokoj/PlutosCave2.jpg';
import PlutosCave3 from 'assets/images/compr_lokoj/PlutosCave3.jpg';

import PutALittleOn0 from 'assets/images/compr_lokoj/PutALittleOn0.jpg';
import PutALittleOn1 from 'assets/images/compr_lokoj/PutALittleOn1.jpg';
import PutALittleOn2 from 'assets/images/compr_lokoj/PutALittleOn2.jpg';
import PutALittleOn3 from 'assets/images/compr_lokoj/PutALittleOn3.jpg';

import WaitingWatchingWaiting0 from 'assets/images/compr_lokoj/WaitingWatchingWaiting0.jpg';
import WaitingWatchingWaiting1 from 'assets/images/compr_lokoj/WaitingWatchingWaiting1.jpg';
import WaitingWatchingWaiting2 from 'assets/images/compr_lokoj/WaitingWatchingWaiting2.jpg';
import WaitingWatchingWaiting3 from 'assets/images/compr_lokoj/WaitingWatchingWaiting3.jpg';
import WaitingWatchingWaiting4 from 'assets/images/compr_lokoj/WaitingWatchingWaiting4.jpg';

const getMargin = () => {
  const size = 200;
  const margin =
    parseInt((Math.random() - 0.5) * size) +
    'px ' +
    parseInt((Math.random() - 0.5) * size * 2) +
    'px ' +
    parseInt((Math.random() - 0.5) * size) +
    'px ' +
    parseInt(Math.random() * size * 2) +
    'px ';
  console.log(margin);
  return margin;
};

const getY = () => {
  return [
    (Math.random() - 0.5) * 400 + 'px',
    (Math.random() - 0.5) * 400 + 'px',
  ];
};

const projectDetails = [
  {
    title: 'Second Fir',
    textOffset: 2,
    firstColumn: 1,
    images: [
      { image: SecondFir0, margin: getMargin(), y: getY(), width: 7 },
      { image: SecondFir1, margin: getMargin(), y: getY(), width: 7 },
      { image: SecondFir2, margin: getMargin(), y: getY(), width: 7 },
      {
        image: SecondFir3,
        margin: getMargin(),
        y: getY(),
        width: 7,
        expanded: true,
      },
    ],
  },
  {
    title: 'Despeck',
    textOffset: 0,
    rows: [
      {
        firstColumn: 1,
        images: [
          { image: Despeck3, margin: getMargin(), y: getY(), width: 7 },
          { image: Despeck1, margin: getMargin(), y: getY(), width: 7 },
          { image: Despeck5, margin: getMargin(), y: getY(), width: 7 },
        ],
      },
      {
        firstColumn: 3,
        images: [
          { image: Despeck6, margin: getMargin(), y: getY(), width: 5 },
          { image: Despeck0, margin: getMargin(), y: getY(), width: 5 },
          {
            image: Despeck2,
            margin: getMargin(),
            y: getY(),
            width: 5,
            expanded: true,
          },
          { image: Despeck4, margin: getMargin(), y: getY(), width: 5 },
        ],
      },
    ],
  },
  {
    title: 'Displacement Inversion',
    firstColumn: 0,
    textOffset: 8,
    images: [
      {
        image: DisplacementInversion0,
        margin: getMargin(),
        y: getY(),
        width: 5,
      },
      {
        image: DisplacementInversion2,
        margin: getMargin(),
        y: getY(),
        width: 5,
      },
      {
        image: DisplacementInversion3,
        margin: getMargin(),
        y: getY(),
        width: 5,
      },
      {
        image: DisplacementInversion1,
        margin: getMargin(),
        y: getY(),
        width: 5,
        expanded: true,
      },
    ],
  },
  {
    title: 'Fur',
    firstColumn: 1,
    textOffset: 6,
    images: [
      { image: Fur0, margin: getMargin(), y: getY(), width: 5 },
      { image: Fur2, margin: getMargin(), y: getY(), width: 7 },
      { image: Fur3, margin: getMargin(), y: getY(), width: 7 },
      { image: Fur1, margin: getMargin(), y: getY(), width: 7, expanded: true },
    ],
  },
  {
    title: 'Ghost Willow',
    firstColumn: 2,
    textOffset: 1,
    images: [
      {
        image: GhostWillow1,
        margin: getMargin(),
        y: getY(),
        width: 7,
        expanded: true,
      },
      { image: GhostWillow2, margin: getMargin(), y: getY(), width: 7 },
      { image: GhostWillow0, margin: getMargin(), y: getY(), width: 5 },
    ],
  },
  {
    title: 'Memory Cell',
    firstColumn: 0,
    textOffset: 6,
    images: [
      {
        image: MemoryCell1,
        margin: getMargin(),
        y: getY(),
        width: 7,
        expanded: true,
      },
      { image: MemoryCell2, margin: getMargin(), y: getY(), width: 5 },
      { image: MemoryCell0, margin: getMargin(), y: getY(), width: 7 },
    ],
  },
  {
    title: 'No Title',
    firstColumn: 2,
    textOffset: 3,
    images: [
      { image: NoTitle0, margin: getMargin(), y: getY(), width: 7 },
      { image: NoTitle2, margin: getMargin(), y: getY(), width: 7 },
      {
        image: NoTitle1,
        margin: getMargin(),
        y: getY(),
        width: 7,
        expanded: true,
      },
    ],
  },
  {
    title: "Pluto's Cave",
    firstColumn: 0,
    textOffset: 8,
    images: [
      { image: PlutosCave0, margin: getMargin(), y: getY(), width: 7 },
      { image: PlutosCave3, margin: getMargin(), y: getY(), width: 7 },
      {
        image: PlutosCave1,
        margin: getMargin(),
        y: getY(),
        width: 7,
        expanded: true,
      },
      { image: PlutosCave2, margin: getMargin(), y: getY(), width: 5 },
    ],
  },
  {
    title: 'Put A Little On',
    firstColumn: 0,
    textOffset: 1,
    images: [
      {
        image: PutALittleOn0,
        margin: getMargin(),
        y: getY(),
        width: 7,
        expanded: true,
      },
      { image: PutALittleOn1, margin: getMargin(), y: getY(), width: 7 },
      { image: PutALittleOn2, margin: getMargin(), y: getY(), width: 7 },
      { image: PutALittleOn3, margin: getMargin(), y: getY(), width: 7 },
    ],
  },
  {
    title: 'Waiting Watching Waiting',
    firstColumn: 0,
    textOffset: 6,
    images: [
      {
        image: WaitingWatchingWaiting0,
        margin: getMargin(),
        y: getY(),
        width: 7,
      },
      {
        image: WaitingWatchingWaiting1,
        margin: getMargin(),
        y: getY(),
        width: 7,
      },
      {
        image: WaitingWatchingWaiting2,
        margin: getMargin(),
        y: getY(),
        width: 7,
      },
      {
        image: WaitingWatchingWaiting3,
        margin: getMargin(),
        y: getY(),
        width: 7,
        expanded: true,
      },
      {
        image: WaitingWatchingWaiting4,
        margin: getMargin(),
        y: getY(),
        width: 7,
      },
    ],
  },
];

export default function Lokoj() {
  return (
    <>
      {projectDetails.map(
        ({ firstColumn, images, rows, textOffset, title }, i) => (
          <React.Fragment key={i}>
            <RellaxNoMaterialUI
              title={title}
              textOffset={textOffset}
              firstColumn={firstColumn}
              images={images}
              rows={rows}
            />
            {console.log(title, images)}
          </React.Fragment>
        )
      )}
    </>
  );
}
