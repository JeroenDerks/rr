import React from 'react';
import { Box } from '@material-ui/core/';
import Header from 'components/Header';
import Aferoj from 'components/Aferoj';
import Lokoj from 'components/Lokoj';

function App() {
  const handleResize = () =>
    window.innerWidth < 1200 ? (window.innerWidth / (12 / 5)) * 1.5 : 750;

  const [selectedCategory, setCategory] = React.useState(0);
  const [highlightedCategory, showCategory] = React.useState();
  const [minHeight, setMinHeight] = React.useState(handleResize);

  React.useEffect(() => {
    window.addEventListener('resize', () => setMinHeight(handleResize));
  });

  console.log(highlightedCategory);

  return (
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
        {selectedCategory === 0 && <Lokoj minHeight={minHeight} />}
        {selectedCategory === 1 && <Aferoj minHeight={minHeight} />}
        {selectedCategory === 2 && <div>Bildoj</div>}
        {selectedCategory === 3 && <div>Artist</div>}
        {selectedCategory === undefined && <div>graphic</div>}
      </Box>
    </Box>
  );
}

export default App;
