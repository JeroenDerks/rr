import React from "react";
import { Box } from "@material-ui/core/";
import Header from "components/Header";
import Aferoj from "components/Aferoj";

function App() {
  const [selectedCategory, setCategory] = React.useState();
  const [highlightedCategory, showCategory] = React.useState();

  return (
    <Box display="flex" width={1} style={{ border: "1px solid red" }}>
      <Box m="auto">
        <Header
          setCategory={(id) => setCategory(id)}
          showCategory={(id) => showCategory(id)}
        />
        {selectedCategory === 0 && <div>Lokoj</div>}
        {selectedCategory === 1 && <Aferoj />}
        {selectedCategory === 2 && <div>Bildoj</div>}
        {selectedCategory === 3 && <div>Artist</div>}
        {selectedCategory === undefined && <div>graphic</div>}
      </Box>
    </Box>
  );
}

export default App;
