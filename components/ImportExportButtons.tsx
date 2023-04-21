import React from 'react';
import { useConfigurationsContext } from './ConfigurationsComponent';

function saveJSONToFile(jsonString: string, filename: string): void {
  const blob = new Blob([jsonString], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  link.style.display = "none";
  document.body.appendChild(link);
  link.click();
  URL.revokeObjectURL(url);
  document.body.removeChild(link);
}

const ImportExportButtons = () => {
  const {bEditMode} = useConfigurationsContext(); 
  const { configurations } = useConfigurationsContext();

  const handleExportConfiguration = () => {
    const jsonString = JSON.stringify(configurations,null,2);
    saveJSONToFile(jsonString, "configurations.json");    
  }

  return (
    <>
      <div className="mb-3">
        <label htmlFor="import-json" className="form-label">Import JSON:</label>
        <input className="form-control" type="file" id="import-json" accept=".json" />
      </div>
      <button className="btn btn-success" onClick={handleExportConfiguration} disabled={bEditMode}>Export JSON</button>
    </>
  );
};

export default ImportExportButtons;