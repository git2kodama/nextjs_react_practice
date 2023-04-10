import React from 'react';
import ConfigurationForm from './ConfigurationForm';
import ConfigurationTable from './ConfigurationTable';
import ImportExportButtons from './ImportExportButtons';

const App = () => {
  return (
    <div className="container">
      <h1 className="my-4">JSON Configuration App</h1>
      <ConfigurationForm />
      <ConfigurationTable />
      <ImportExportButtons />
    </div>
  );
};

export default App;