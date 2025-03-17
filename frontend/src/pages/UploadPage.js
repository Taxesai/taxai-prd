import React, { useState } from "react";

function UploadPage() {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Upload Your Tax Documents</h1>
      <input type="file" onChange={handleFileChange} className="mb-4" />
      {file && <p>Selected file: {file.name}</p>}
      <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">Submit</button>
    </div>
  );
}

export default UploadPage;
