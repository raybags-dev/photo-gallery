import React from "react";
import { useState, useRef } from "react";

import ProgressBar from "./ProgressBar";

const UploadForm = () => {
  // click input handler
  const inputRef = useRef(null);

  // set file
  const [file, setFile] = useState(null);
  //   set error
  const [error, setError] = useState(null);
  //   set valid image types
  const types = ["image/jpeg", "image/png"];

  // on file upload handler
  const changeHandler = (e) => {
    const selected = e.target.files[0];

    if (selected && types.includes(selected.type)) {
      setFile(selected);
      //   no error initially / reset error if selected is truthy
      setError("");
    } else {
      // reset file
      setFile(null);
      setError(`Failed. Allowed formats: '.jpeg' or '.png'`);
    }
  };

  //   handle select input when span is clicked
  const handleInputClick = () => {
    return inputRef.current.focus();
  };

  return (
    <form>
      <label>
        <input type="file" ref={inputRef} onChange={changeHandler} />

        <span onClick={handleInputClick}>+</span>
      </label>
      {/* output div */}
      <div className="output">
        {/* render error  */}
        {error && <p className="error">{error}</p>}
        {/* render image */}
        {file && (
          <div className="image" download>
            {file.name}
          </div>
        )}
        {/* progress bar */}
        {file && <ProgressBar file={file} setFile={setFile} />}
      </div>
    </form>
  );
};

export default UploadForm;
