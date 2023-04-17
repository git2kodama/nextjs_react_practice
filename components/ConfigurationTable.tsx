import React from 'react';
import ConfigurationRow from './ConfigurationRow';
import { useConfigurationsContext } from './ConfigurationsComponent';


const ConfigurationTable: React.FC = () => {
  const { configurations } = useConfigurationsContext();
  
  return (
    <table className="table table-striped table-bordered table-hover my-4">
      <thead>
        <tr>
          <th scope="col">RenameName</th>
          <th scope="col">MoveFolder</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        {configurations.map((configuration) => (
          <ConfigurationRow key={configuration.id} configuration={configuration} />
        ))}
      </tbody>
    </table>
  );
};

export default ConfigurationTable;