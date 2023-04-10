import React from 'react';

const ImportExportButtons = () => {
  return (
    <>
      <div className="mb-3">
        <label htmlFor="import-json" className="form-label">Import JSON:</label>
        <input className="form-control" type="file" id="import-json" accept=".json" />
      </div>
      <button className="btn btn-success">Export JSON</button>
    </>
  );
};

export default ImportExportButtons;