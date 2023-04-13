import React from 'react';
import { Configuration } from './ConfigurationsComponent';

type ConfigurationRowProps = {
  configuration: Configuration;
};

const ConfigurationRow: React.FC<ConfigurationRowProps> = ({ configuration }) => {
  return (
      <tr>
        <td>{configuration.renameName}</td>
        <td>{configuration.moveFolder}</td>
        <td>
          <button className="btn btn-secondary btn-sm me-2">Edit</button>
          <button className="btn btn-danger btn-sm">Delete</button>
        </td>
      </tr>
   );
};

export default ConfigurationRow;