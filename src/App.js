import React from 'react';

import Aferoj from 'components/Aferoj';
import Artist from 'components/Artist';
import Bildoj from 'components/Bildoj';
import Header from 'components/Header';
import Lokoj from 'components/Lokoj';
import OpeningGraphic from 'components/OpeningGraphic';
import OpeningTitle from 'components/OpeningGraphic/OpeningTitle';

import { gridStyle } from 'styles/global';
import { Box } from '@material-ui/core/';

export const AppContext = React.createContext();

// const defaultColors = [
//   { bg: '#c8d3b9', border: '#e2eadf' }, // Lokoj
//   { bg: '#dbccb0', border: '#e6ddd1' }, // Aferoj
//   { bg: '#d0d6db', border: '#ece2de' }, // Bildoj
//   { bg: '#edcbbd', border: '#fbdedc' }, // Artist
//   { bg: '#ffffff', border: '#eeeeee' }, // Landing page
// ];

// Colors Lorne's photos
// const defaultColors = [
//   { bg: '#e8eed4' }, // Lokoj
//   { bg: '#cfc1a4' }, // Aferoj
//   { bg: '#d0c1c6' }, // Bildoj
//   { bg: '#f5b596' }, // Artist
//   { bg: '#ffffff' }, // Landing page
// ];

// Colors Lorne brighter
const defaultColors = [
  { bg: '#f5ffd2' }, // Lokoj #f5ffd2
  { bg: '#feebc0' }, // Aferoj
  { bg: '#ffeff4' }, // Bildoj
  { bg: '#ffc0a2' }, // Artist
  { bg: '#ffffff' }, // Landing page
];

function App() {
  const handleResize = () =>
    window.innerWidth < 1200 ? (window.innerWidth / (12 / 5)) * 1.5 : 750;

  const DEFAULT_CATEGORY = 1;
  const [selectedCategory, setCategory] = React.useState(DEFAULT_CATEGORY);
  const [minHeight, setMinHeight] = React.useState(handleResize);
  const [backgroundColor, setBgColor] = React.useState();

  const columnWidth =
    window.innerWidth < 1200 ? window.innerWidth / 12 : 1200 / 16;

  const classes = gridStyle();

  React.useEffect(() => {
    setColor(DEFAULT_CATEGORY); // eslint-disable-next-line
  }, []);

  React.useEffect(() => {
    window.addEventListener('resize', () => setMinHeight(handleResize));
  });

  const selectCategory = (i) => {
    if (i || i === 0) {
      i !== selectedCategory && setCategory(i);
      // dont scroll when selecting landing page
      i < 4 && window.scrollTo({ top: 1000, behavior: 'smooth' });
    } else setCategory();
  };

  const highligtCategory = (i) => {
    setColor(i);
  };

  const resetHighlighting = () => {
    setColor(selectedCategory);
  };

  const setColor = (i) => {
    setBgColor(defaultColors[i].bg);
  };

  const pt = 36;

  return (
    <AppContext.Provider
      value={{
        state: { columnWidth, minHeight },
        actions: { highligtCategory, resetHighlighting, selectCategory },
      }}
    >
      <Box
        p={2}
        width={1}
        display="flex"
        className={classes.transition}
        style={{ boxSizing: 'border-box', backgroundColor: backgroundColor }}
      >
        <Box m="auto" pb={24}>
          <Header />
          <Box />
          <OpeningTitle />
          {selectedCategory === 0 && (
            <Box pt={pt}>
              <Lokoj />
            </Box>
          )}
          {selectedCategory === 1 && (
            <Box pt={pt}>
              <Aferoj />
            </Box>
          )}
          {selectedCategory === 2 && (
            <Box pt={pt}>
              <Bildoj />
            </Box>
          )}
          {selectedCategory === 3 && (
            <Box pt={pt}>
              <Artist />
            </Box>
          )}
          {selectedCategory === 4 && <OpeningGraphic />}
        </Box>
      </Box>
    </AppContext.Provider>
  );
}

export default App;
