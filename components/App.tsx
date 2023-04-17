import React , {useState} from 'react';
import ConfigurationForm from './ConfigurationForm';
import ConfigurationTable from './ConfigurationTable';
import ImportExportButtons from './ImportExportButtons';
import { ConfigurationsProvider} from './ConfigurationsComponent';

// 型定義
type Configuration = {
  id: number;
  renameName: string;
  moveFolder: string;
};

const initialConfigurations: Configuration[] = [
  { id: 1, renameName: 'CX000X-', moveFolder: '/d/Downloads' },
  { id: 2, renameName: 'JAV-TEST', moveFolder: '/d/Downloads' },
];

const App: React.FC = () => {
  
  const [configurations, setConfigurations] = useState<Configuration[]>(initialConfigurations);

  return (
    <div className="container">
      <h1 className="my-4">JSON Configuration App</h1>
      <ConfigurationsProvider>
        <ConfigurationForm configurations={configurations} />
        <ConfigurationTable configurations={configurations} />
        <ImportExportButtons />
      </ConfigurationsProvider>
    </div>
  );
};

export default App;