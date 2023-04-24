import React from 'react';
import { Configuration,useConfigurationsContext } from './ConfigurationsComponent';

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
  const { setConfigurations } = useConfigurationsContext();
  const handleExportConfiguration = () => {
    const jsonString = JSON.stringify(configurations,null,2);
    saveJSONToFile(jsonString, "configurations.json");    
  }

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const fileReader = new FileReader();
      console.log("handleFileUpLoad");
      fileReader.onload = (e) => {
        if (e.target && e.target.result) {
          const jsonString = e.target.result as string;
          const parsedConfigurations = JSON.parse(jsonString) as Configuration[];
          console.log(parsedConfigurations);
          setConfigurations(parsedConfigurations);
        }
      };
      fileReader.readAsText(file);
    }
  }

  return (
    <>
      <div className="mb-3">
        <label htmlFor="import-json" className="form-label">Import JSON:</label>
        <input className="form-control" type="file" id="import-json" accept=".json" onChange={handleFileUpload} />
      </div>
      <button className="btn btn-success" onClick={handleExportConfiguration} disabled={bEditMode}>Export JSON</button>
    </>
  );
};

export default ImportExportButtons;