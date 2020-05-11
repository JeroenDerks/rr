import React from 'react';
import RellaxSingle from 'components/Sections/RellaxSingle';
import SectionStroke from 'components/Sections/SectionStroke';
import SectionSquare from 'components/Sections/SectionSquare';
import RellaxNoMaterialUI from 'components/Sections/RellaxNoMaterialUI';
import circle_ice from 'assets/images/compr_bildoj/circle_ice.png';
import circle_mineral from 'assets/images/compr_bildoj/circle_mineral.png';
import circle_moss_mushroom from 'assets/images/compr_bildoj/circle_moss_mushroom.png';
import circle_moss_landscape from 'assets/images/compr_bildoj/circle_moss_landscape.png';
import circle_moss from 'assets/images/compr_bildoj/circle_moss.png';
import circle_orange_ichen from 'assets/images/compr_bildoj/circle_orange_ichen.png';

import drawing_memportreto0 from 'assets/images/compr_bildoj/drawing_memportreto0.jpg';
import drawing_memportreto1 from 'assets/images/compr_bildoj/drawing_memportreto1.jpg';
import drawing_memportreto2 from 'assets/images/compr_bildoj/drawing_memportreto2.jpg';
import drawing_memportreto3 from 'assets/images/compr_bildoj/drawing_memportreto3.jpg';

import drawing_nokte from 'assets/images/compr_bildoj/drawing_nokte.jpg';

import stroke_new_orchard from 'assets/images/compr_bildoj/stroke_new_orchard.jpg';
import stroke_old_orchard from 'assets/images/compr_bildoj/stroke_old_orchard.jpg';
import stroke_pink_tree from 'assets/images/compr_bildoj/stroke_pink_tree.jpg';
import stroke_snow_trees from 'assets/images/compr_bildoj/stroke_snow_trees.jpg';
import stroke_solitary_isle from 'assets/images/compr_bildoj/stroke_solitary_isle.jpg';
import stroke_splash from 'assets/images/compr_bildoj/stroke_splash.jpg';
import stroke_twin_pines from 'assets/images/compr_bildoj/stroke_twin_pines.jpg';

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
    title: 'Circles',
    component: RellaxNoMaterialUI,
    firstColumn: 1,
    images: [
      { image: circle_ice, margin: getMargin(), width: 6 },
      { image: circle_mineral, margin: getMargin(), width: 6 },
      { image: circle_moss_mushroom, margin: getMargin(), width: 6 },
      { image: circle_moss_landscape, margin: getMargin(), width: 6 },
      { image: circle_moss, margin: getMargin(), width: 6 },
      { image: circle_orange_ichen, margin: getMargin(), width: 6 },
    ],
  },
  {
    title: 'Memportreto',
    component: RellaxNoMaterialUI,
    firstColumn: 1,
    textOffset: 4,
    images: [
      {
        image: drawing_memportreto0,
        margin: getMargin(),
        width: 7,
        expanded: true,
      },
      { image: drawing_memportreto1, margin: getMargin(), width: 7 },
      { image: drawing_memportreto2, margin: getMargin(), width: 7 },
      { image: drawing_memportreto3, margin: getMargin(), width: 7 },
    ],
  },
  {
    title: 'Nokte',
    component: RellaxNoMaterialUI,
    textOffset: 6,
    firstColumn: 4,
    images: [
      { image: drawing_nokte, margin: getMargin(), width: 7, expanded: true },
    ],
  },
  {
    title: 'Photopgraphs',
    component: SectionStroke,
    firstColumn: 2,
    images: [
      { image: stroke_new_orchard, margin: getMargin(), width: 8 },
      { image: stroke_old_orchard, margin: getMargin(), width: 8 },
      { image: stroke_pink_tree, margin: getMargin(), width: 8 },
      { image: stroke_snow_trees, margin: getMargin(), width: 8 },
      { image: stroke_solitary_isle, margin: getMargin(), width: 8 },
      { image: stroke_splash, margin: getMargin(), width: 8 },
      { image: stroke_twin_pines, margin: getMargin(), width: 8 },
    ],
  },
];

export default function Bildoj() {
  return (
    <>
      {projectDetails.map(
        (
          { component: Component, firstColumn, images, textOffset, title },
          i
        ) => (
          <Component
            key={i}
            title={title}
            firstColumn={firstColumn}
            images={images}
            textOffset={textOffset}
          />
        )
      )}
    </>
  );
}
