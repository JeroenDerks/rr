import React from 'react';
import Aferoj from 'components/Aferoj';
import Artist from 'components/Artist';
import Bildoj from 'components/Bildoj';
import Header from 'components/Header';
import Lokoj from 'components/Lokoj';
import OpeningGraphic from 'components/OpeningGraphic';
import { Box } from '@material-ui/core/';
export const AppContext = React.createContext();

function App() {
  const handleResize = () =>
    window.innerWidth < 1200 ? (window.innerWidth / (12 / 5)) * 1.5 : 750;

  const [selectedCategory, setCategory] = React.useState(1);
  const [highlightedCategory, showCategory] = React.useState();
  const [minHeight, setMinHeight] = React.useState(handleResize);

  React.useEffect(() => {
    window.addEventListener('resize', () => setMinHeight(handleResize));
  });

  console.log(highlightedCategory);

  return (
    <AppContext.Provider
      value={{
        state: {
          minHeight,
        },
        actions: {},
      }}
    >
      <Box
        display="flex"
        width={1}
        style={{ backgroundColor: 'rgb(246, 238, 227)' }}
      >
        <Box m="auto">
          <Header
            setCategory={(id) => setCategory(id)}
            showCategory={(id) => showCategory(id)}
          />
          <Box py={75} />
          {selectedCategory === 0 && <Lokoj />}
          {selectedCategory === 1 && <Aferoj />}
          {selectedCategory === 2 && <Bildoj />}
          {selectedCategory === 3 && <Artist />}
          {selectedCategory === undefined && <OpeningGraphic />}
        </Box>
      </Box>
    </AppContext.Provider>
  );
}

export default App;
