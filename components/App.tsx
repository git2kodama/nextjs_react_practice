import React , {useState} from 'react';
import ConfigurationForm from './ConfigurationForm';
import ConfigurationTable from './ConfigurationTable';
import ImportExportButtons from './ImportExportButtons';
import { ConfigurationsProvider} from './ConfigurationsComponent';

const App: React.FC = () => {
  
  return (
    <div className="container">
      <h1 className="my-4">JSON Configuration App</h1>
      <ConfigurationsProvider>
        <ConfigurationForm />
        <ConfigurationTable />
        <ImportExportButtons />
      </ConfigurationsProvider>
    </div>
  );
};

export default App;