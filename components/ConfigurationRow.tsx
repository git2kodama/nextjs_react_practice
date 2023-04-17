import React from 'react';
import { Configuration,useConfigurationsContext } from './ConfigurationsComponent';

type ConfigurationRowProps = {
  configuration: Configuration;
};

const ConfigurationRow: React.FC<ConfigurationRowProps> = ({ configuration }) => {
  const {deleteConfiguration} = useConfigurationsContext();

  const handleDelConfiguration = () => {
    deleteConfiguration(configuration.id);
  }

  return (
      <tr>
        <td>{configuration.renameName}</td>
        <td>{configuration.moveFolder}</td>
        <td>
          <button className="btn btn-secondary btn-sm me-2">Edit</button>
          <button className="btn btn-danger btn-sm"onClick={handleDelConfiguration}>Delete</button>
        </td>
      </tr>
   );
};

export default ConfigurationRow;