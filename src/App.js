import React, { useState } from "react";
import ImageGrid from "./comps/ImageGrid";
import Title from "./comps/Title";
import UploadForm from "./comps/UploadForm";
import Model from "./comps/Model";

function App() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="App">
      <Title />
      <UploadForm />
      <ImageGrid setSelectedImg={setSelectedImg} />
      {selectedImg && (
        <Model selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
    </div>
  );
}

export default App;
