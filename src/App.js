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

const defaultColors = [
  { bg: '#c8d3b9', border: '#e2eadf' }, // Lokoj
  { bg: '#dbccb0', border: '#e6ddd1' }, // Aferoj
  { bg: '#d0d6db', border: '#ece2de' }, // Bildoj
  { bg: '#edcbbd', border: '#fbdedc' }, // Artist
  { bg: '#ffffff', border: '#eeeeee' }, // Landing page
];

function App() {
  const handleResize = () =>
    window.innerWidth < 1200 ? (window.innerWidth / (12 / 5)) * 1.5 : 750;

  const [selectedCategory, setCategory] = React.useState(4);
  const [minHeight, setMinHeight] = React.useState(handleResize);
  const [backgroundColor, setBgColor] = React.useState();

  const columnWidth =
    (window.innerWidth < 1200 ? window.innerWidth : 1200) / 12;

  const classes = gridStyle();

  React.useEffect(() => {
    setColor(selectedCategory); // eslint-disable-next-line
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
          {selectedCategory === 0 && <Lokoj />}
          {selectedCategory === 1 && <Aferoj />}
          {selectedCategory === 2 && <Bildoj />}
          {selectedCategory === 3 && <Artist />}
          {selectedCategory === 4 && <OpeningGraphic />}
        </Box>
      </Box>
    </AppContext.Provider>
  );
}

export default App;
