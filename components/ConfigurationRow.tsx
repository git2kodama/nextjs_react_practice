import React from 'react';
type Configuration = {
  id: number;
  renameName: string;
  moveFolder: string;
};

type ConfigurationRowProps = {
  configuration: Configuration;
};

const ConfigurationRow: React.FC<ConfigurationRowProps> = ({ configuration }) => {
  return (
    <tr>
      <td>{configuration.id}</td>
      <td>{configuration.renameName}</td>
      <td>{configuration.moveFolder}</td>
      <td>
        <button className="btn btn-secondary btn-sm me-2">Edit</button>
        <button className="btn btn-danger btn-sm">Delete</buttn>
      </td>
    </tr>
  );
};

export default ConfigurationRow;